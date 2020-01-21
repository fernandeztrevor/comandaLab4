import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { User } from 'src/app/models/user';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Subject } from 'rxjs';
import { TargetMovimiento, TipoMovimiento } from 'src/app/models/log';
let ManageUsersComponent = class ManageUsersComponent {
    constructor(userService, fileService, authService, movimientoService) {
        this.userService = userService;
        this.fileService = fileService;
        this.authService = authService;
        this.movimientoService = movimientoService;
        this.onReset = new Subject();
    }
    ngOnInit() {
        this.userForm = new FormGroup({
            userName: new FormControl(null, [Validators.required]),
            userLastname: new FormControl(null, [Validators.required]),
            userMail: new FormControl(null, [Validators.required]),
            userRole: new FormControl(null),
            userImage: new FormControl('', [Validators.required])
        });
        this.users = new Array();
        this.users = this.userService.listado;
        this.showingUsers = this.users;
        this.haySeleccionado = false;
        this.usuarioSeleccionado = null;
    }
    addUser() {
        let user;
        user = User.CreateUserFromAdmin(this.userForm.value.userName, this.userForm.value.userLastname, this.userForm.value.userMail, this.userForm.value.userRole);
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
                let mensaje = `El usuario ${usr.email} dió de alta el usuario ${user.email}`;
                this.movimientoService.persistirMovimiento(usr, TargetMovimiento.usuario, TipoMovimiento.alta, mensaje);
            });
        });
        ;
    }
    onFileChanged(event) {
        this.file = event.target.files[0];
    }
    changeState(uid, state) {
        this.userService.GetUserByID(uid).then(usuarioMod => {
            if (state == "habilitado") {
                this.userService.updateState(uid, "deshabilitado");
                this.authService.GetCurrentUser().then(user => {
                    let mensaje = `El usuario ${user.email} cambio el estado a deshabilitado  del usuario ${usuarioMod.email}`;
                    this.movimientoService.persistirMovimiento(user, TargetMovimiento.usuario, TipoMovimiento.deshabilitacion, mensaje);
                });
            }
            if (state == "deshabilitado") {
                this.userService.updateState(uid, "habilitado");
                this.authService.GetCurrentUser().then(user => {
                    let mensaje = `El usuario ${user.email} cambio el estado a habilitado  del usuario ${usuarioMod.email}`;
                    this.movimientoService.persistirMovimiento(user, TargetMovimiento.usuario, TipoMovimiento.habilitacion, mensaje);
                });
            }
        });
    }
    deleteUser(uid) {
        this.userService.GetUserByID(uid).then(usuarioMod => {
            this.userService.delete(uid);
            this.authService.GetCurrentUser().then(user => {
                let mensaje = `El usuario ${user.email} dio de baja al usuario ${usuarioMod.email}`;
                this.movimientoService.persistirMovimiento(user, TargetMovimiento.usuario, TipoMovimiento.borrado, mensaje);
            });
        });
    }
    editarUsuario(usuario) {
        this.usuarioSeleccionado = usuario;
        this.haySeleccionado = true;
        this.userForm.controls['userName'].setValue(usuario.name);
        this.userForm.controls['userLastname'].setValue(usuario.lastname);
        this.userForm.controls['userMail'].setValue(usuario.email);
        this.userForm.controls['userRole'].setValue(usuario.role);
    }
    // ##### FILTER FUNCTIONS #####
    Filter(type) {
        this.showingUsers = this.users.filter((element) => {
            if (type == 'true' || type == 'false') {
                if (type == 'true') {
                    if (element.state == 'deshabilitado')
                        return element;
                }
                else {
                    if (element.state == 'habilitado')
                        return element;
                }
            }
            else {
                if (element.role == type)
                    return element;
            }
        });
    }
    search() {
        this.showingUsers = this.users.filter(res => {
            if (res.name.includes(this.busqueda) || res.lastname.includes(this.busqueda) || res.email.includes(this.busqueda)) {
                return res;
            }
            ;
        });
    }
    filtro(valor) {
        console.log(valor);
    }
    Cancel() {
        this.userForm.reset();
        this.onReset.next();
    }
    ClearFilters() {
        this.showingUsers = this.users.filter((element) => {
            return element;
        });
    }
};
ManageUsersComponent = tslib_1.__decorate([
    Component({
        selector: 'app-manage-users',
        templateUrl: './manage-users.component.html',
        styleUrls: ['./manage-users.component.scss']
    })
], ManageUsersComponent);
export { ManageUsersComponent };
//# sourceMappingURL=manage-users.component.js.map