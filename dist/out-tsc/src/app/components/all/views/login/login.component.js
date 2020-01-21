import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
let LoginComponent = class LoginComponent {
    constructor(authService, toastr, userService) {
        this.authService = authService;
        this.toastr = toastr;
        this.userService = userService;
        this.userOption = 'none';
        this.loading = false;
    }
    ngOnInit() {
        this.loginForm = new FormGroup({
            'email': new FormControl(null, [Validators.required]),
            'password': new FormControl(null, [Validators.required]),
            'captcha': new FormControl('', [Validators.required])
        });
    }
    onSubmit() {
        this.loading = true;
        const usr = this.loginForm.get('email').value;
        const pass = this.loginForm.get('password').value;
        this.userService.GetUserByEmail(usr)
            .then(() => {
            console.log("esta en la base");
            this.authService.LoginWithEmail(usr, pass)
                .then(() => {
                this.toastr.success('¡Bienvenido!');
            })
                .catch(() => {
                console.log("no estaba auth asi que lo creo");
                this.authService.RegisterWithEmailAdmin(usr);
            });
        })
            .catch(() => this.toastr.error('Usuario y/o contraseña incorrecto.'));
    }
    BindUser(usuario) {
        this.userOption = usuario;
        this.LoadUser();
    }
    LoadUser() {
        let isNull = false;
        switch (this.userOption) {
            case 'juan':
                this.loginForm.get('email').setValue('juan@gmail.com');
                break;
            case 'mario':
                this.loginForm.get('email').setValue('mario@gmail.com');
                break;
            case 'chelo':
                this.loginForm.get('email').setValue('chelo@gmail.com');
                break;
            case 'jose':
                this.loginForm.get('email').setValue('jose@gmail.com');
                break;
            case 'camilo':
                this.loginForm.get('email').setValue('camilo@gmail.com');
                break;
            case 'pablo':
                this.loginForm.get('email').setValue('pablo@gmail.com');
                break;
            case 'martin':
                this.loginForm.get('email').setValue('martin@gmail.com');
                break;
            case 'roman':
                this.loginForm.get('email').setValue('roman@gmail.com');
                break;
            case 'ivan':
                this.loginForm.get('email').setValue('ivan@gmail.com');
                break;
            default:
                this.loginForm.get('email').setValue('');
                this.loginForm.get('password').setValue('');
                isNull = true;
                break;
        }
        if (!isNull)
            this.loginForm.get('password').setValue('password1');
    }
};
LoginComponent = tslib_1.__decorate([
    Component({
        selector: 'app-login',
        templateUrl: './login.component.html',
        styleUrls: ['./login.component.scss']
    })
], LoginComponent);
export { LoginComponent };
//# sourceMappingURL=login.component.js.map