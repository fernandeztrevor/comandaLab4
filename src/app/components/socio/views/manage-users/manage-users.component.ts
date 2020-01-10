import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user';
import { UserService } from 'src/app/services/firebase/user.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Subject } from 'rxjs';
import { FileService } from 'src/app/services/firestorage/file.service';
import { AuthService } from 'src/app/services/authentication/auth.service';
import { LogService } from 'src/app/services/firebase/log.service';
import { TargetMovimiento, TipoMovimiento } from 'src/app/models/log';

@Component({
  selector: 'app-manage-users',
  templateUrl: './manage-users.component.html',
  styleUrls: ['./manage-users.component.scss']
})
export class ManageUsersComponent implements OnInit {

  public users: User[];
  public showingUsers: User[];
  public showingUsersRole: User[];
  public userForm: FormGroup;
  public onReset: Subject<void> = new Subject<void>();
  public file: File;
  public usuarioSeleccionado: User;
  public haySeleccionado: boolean;
  public role: string;
  public busqueda: string;

  constructor(private userService: UserService, private fileService: FileService, private authService: AuthService, private movimientoService: LogService) { }

  ngOnInit() {
    this.userForm = new FormGroup({
      userName: new FormControl(null, [Validators.required]),
      userLastname: new FormControl(null, [Validators.required]),
      userMail: new FormControl(null, [Validators.required]),
      userRole: new FormControl(null),
      userImage: new FormControl('', [Validators.required])
    })

    this.users = new Array<User>();
    this.users = this.userService.listado;

    this.showingUsers = this.users;

    this.haySeleccionado = false;
    this.usuarioSeleccionado = null;
  }

  public addUser(): void {

    let user: User;

    user = User.CreateUserFromAdmin(
      this.userForm.value.userName,
      this.userForm.value.userLastname,
      this.userForm.value.userMail,
      this.userForm.value.userRole
    );

    // this.authService.RegisterWithEmailAdmin(user).then(() => {
    //   this.userService.persistirUsuario(user, this.file).then((value) => {
    //     if (value) {
    //       this.Cancel();
    //     }
    //     this.authService.GetCurrentUser().then(user => {
    //       this.movimientoService.persistirMovimiento(user, TargetMovimiento.usuario, TipoMovimiento.alta);
    //     })
    //   });;
    // });


    this.userService.persistirUsuario(user, this.file).then((value) => {
      if (value) {
        this.Cancel();
      }
      this.authService.GetCurrentUser().then(usr => {
        let mensaje: string = `El usuario ${usr.email} dió de alta el usuario ${user.email}`;

        this.movimientoService.persistirMovimiento(usr, TargetMovimiento.usuario, TipoMovimiento.alta, mensaje);
      })
    });;

  }

  onFileChanged(event) {
    this.file = event.target.files[0];
  }



  public changeState(uid: string, state: string) {


    this.userService.GetUserByID(uid).then(usuarioMod => {
      if (state == "habilitado") {
        this.userService.updateState(uid, "deshabilitado");
        this.authService.GetCurrentUser().then(user => {

          let mensaje = `El usuario ${user.email} cambio el estado a deshabilitado  del usuario ${usuarioMod.email}`;
          this.movimientoService.persistirMovimiento(user, TargetMovimiento.usuario, TipoMovimiento.deshabilitacion, mensaje);
        })
      }
      if (state == "deshabilitado") {
        this.userService.updateState(uid, "habilitado");
        this.authService.GetCurrentUser().then(user => {
          let mensaje = `El usuario ${user.email} cambio el estado a habilitado  del usuario ${usuarioMod.email}`;
          this.movimientoService.persistirMovimiento(user, TargetMovimiento.usuario, TipoMovimiento.habilitacion, mensaje);
        })
      }
    });


  }

  public deleteUser(uid: string) {

    this.userService.GetUserByID(uid).then(usuarioMod => {
      this.userService.delete(uid);
      this.authService.GetCurrentUser().then(user => {
        let mensaje = `El usuario ${user.email} dio de baja al usuario ${usuarioMod.email}`;
        this.movimientoService.persistirMovimiento(user, TargetMovimiento.usuario, TipoMovimiento.borrado, mensaje);
      });
    });

  }

  public editarUsuario(usuario: User) {

    this.usuarioSeleccionado = usuario;
    this.haySeleccionado = true;

    this.userForm.controls['userName'].setValue(usuario.name);
    this.userForm.controls['userLastname'].setValue(usuario.lastname);
    this.userForm.controls['userMail'].setValue(usuario.email);
    this.userForm.controls['userRole'].setValue(usuario.role);

  }

  // ##### FILTER FUNCTIONS #####

  public Filter(type: string): void {
    this.showingUsers = this.users.filter((element) => {

      if (type == 'true' || type == 'false') {
        if (type == 'true') {
          if (element.state == 'deshabilitado')
            return element;
        } else {
          if (element.state == 'habilitado')
            return element;
        }
      } else {
        if (element.role == type)
          return element;
      }
    })
  }

  public search() {
    this.showingUsers = this.users.filter(res => {
      if (res.name.includes(this.busqueda) || res.lastname.includes(this.busqueda) || res.email.includes(this.busqueda)) {
        return res;
      };
    });
  }

  public filtro(valor: string) {
    console.log(valor);
  }



  public Cancel(): void {
    this.userForm.reset();
    this.onReset.next();
  }

  public ClearFilters(): void {

    this.showingUsers = this.users.filter((element) => {
      return element;
    });

  }

}
