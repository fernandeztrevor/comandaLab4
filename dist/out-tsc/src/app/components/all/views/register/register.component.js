import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { User, Role } from 'src/app/models/user';
import { TargetMovimiento, TipoMovimiento } from 'src/app/models/log';
let RegisterComponent = class RegisterComponent {
    constructor(authService, router, toastr, logService) {
        this.authService = authService;
        this.router = router;
        this.toastr = toastr;
        this.logService = logService;
        this.loading = false;
    }
    ngOnInit() {
        this.registerForm = new FormGroup({
            'name': new FormControl(null, [Validators.required]),
            'lastname': new FormControl(null, [Validators.required]),
            'email': new FormControl(null, [Validators.required]),
            'password': new FormControl(null, [Validators.required]),
            'repPassword': new FormControl(null, [Validators.required]),
            'captcha': new FormControl('', [Validators.required])
        });
    }
    onSubmit() {
        this.loading = true;
        let user = User.CreateUserWithParams(this.registerForm.get('name').value, this.registerForm.get('lastname').value, this.registerForm.get('email').value, this.registerForm.get('password').value, Role.cliente);
        this.authService.RegisterWithEmail(user)
            .then(() => {
            let mensaje = `El usuario ${user.email} se dió de alta`;
            this.logService.persistirMovimiento(user, TargetMovimiento.usuario, TipoMovimiento.alta, mensaje);
            this.toastr.success('Te has registrado con éxito.');
            this.router.navigate(['app/login']);
        })
            .catch(error => {
            this.toastr.error(error.message, 'Ha ocurrido un error.');
        });
    }
};
RegisterComponent = tslib_1.__decorate([
    Component({
        selector: 'app-register',
        templateUrl: './register.component.html',
        styleUrls: ['./register.component.scss']
    })
], RegisterComponent);
export { RegisterComponent };
//# sourceMappingURL=register.component.js.map