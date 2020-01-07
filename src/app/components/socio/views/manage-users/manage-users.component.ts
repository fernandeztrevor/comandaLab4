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
        //this.authService.RegisterWithEmailAdmin(user);
        if (value) {
          this.Cancel();
        }
        this.authService.GetCurrentUser().then(user => {
          this.movimientoService.persistirMovimiento(user, TargetMovimiento.usuario, TipoMovimiento.alta);
        })
      });;
      
  }

  onFileChanged(event) {
    this.file = event.target.files[0];
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
