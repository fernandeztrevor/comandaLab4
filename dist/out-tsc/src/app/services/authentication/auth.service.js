import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { Role } from 'src/app/models/user';
import { take, map } from 'rxjs/operators';
import { reject } from 'q';
import { TargetMovimiento, TipoMovimiento } from 'src/app/models/log';
let AuthService = class AuthService {
    constructor(afsAuth, db, router, userService, logService) {
        this.afsAuth = afsAuth;
        this.db = db;
        this.router = router;
        this.userService = userService;
        this.logService = logService;
    }
    RegisterWithEmail(user) {
        return new Promise((resolve, reject) => {
            this.afsAuth.auth.createUserWithEmailAndPassword(user.email, user.password)
                .then(userData => {
                resolve(userData);
                this.userService.Add(user);
                console.log('Register successful');
            })
                .catch(error => console.log(reject(error)));
        });
    }
    // public RegisterWithEmailAdmin(user: User, file: File) {
    // 	var logueado:User;
    // 	this.GetCurrentUser().then(usr =>{
    // 		logueado=user;
    // 		this.afsAuth.auth.createUserWithEmailAndPassword(user.email, user.password)
    // 		 .then(userData => {				
    // 			 //this.userService.Add(user);
    // 			this.LoginWithEmail(logueado.email, logueado.password);
    // 		 	this.userService.persistirUsuario(user, file).then(value =>{
    // 		 		if(value){
    // 		 			//location.reload();
    // 		 		}
    // 		 	}).catch(error => console.log(reject(error)));					
    // 		 	console.log('Register successful');
    // 		 })
    // 		 .catch(error => console.log(reject(error)))
    // 	})
    // }
    RegisterWithEmailAdmin(mail) {
        this.userService.GetUserByEmail(mail).then(user => {
            const pass = user.password;
            this.RegisterWithEmail(user).then(() => {
                this.LoginWithEmail(mail, pass);
            });
        });
    }
    LoginWithEmail(email, pwd) {
        return new Promise((resolve, reject) => {
            this.afsAuth.auth.signInWithEmailAndPassword(email, pwd)
                .then(userData => {
                resolve(userData);
                console.log('Login success', userData);
                this.RedirectForRole(email);
                this.userService.GetUserByEmail(email).then(user => {
                    let mensaje = `El usuario ${user.email} inició sesión`;
                    this.logService.persistirMovimiento(user, TargetMovimiento.usuario, TipoMovimiento.ingreso, mensaje);
                });
            })
                .catch(error => reject(error));
        });
    }
    LogoutEmail() {
        this.GetCurrentUser()
            .then(user => {
            let mensaje = `El usuario ${user.email} cerró sesión`;
            this.logService.persistirMovimiento(user, TargetMovimiento.usuario, TipoMovimiento.egreso, mensaje)
                .then(() => {
                this.afsAuth.auth.signOut();
            });
        });
    }
    GetCurrentUser() {
        return this.GetCurrentEmail().then(email => {
            if (!email)
                reject('error');
            return this.userService.GetUserByEmail(email).then(user => {
                return this.RemoveUserPassword(user);
            });
        });
    }
    GetCurrentEmail() {
        return this.afsAuth.user.pipe(take(1), map(user => user.email))
            .toPromise();
    }
    RemoveUserPassword(user) {
        user.password = '';
        return user;
    }
    RedirectForRole(email) {
        this.userService.GetUserByEmail(email).then(user => {
            switch (user.role) {
                case Role.cliente:
                    this.router.navigate(['/cliente']);
                    break;
                case Role.mozo:
                    this.router.navigate(['/mozo']);
                    break;
                case Role.socio:
                    this.router.navigate(['/socio']);
                    break;
                case Role.cocinero:
                    this.router.navigate(['/cocinero']);
                    break;
                case Role.cervecero:
                    this.router.navigate(['/cervecero']);
                    break;
                case Role.bartender:
                    this.router.navigate(['/bartender']);
                    break;
                default:
                    alert('No tiene rol.');
                    break;
            }
        });
    }
};
AuthService = tslib_1.__decorate([
    Injectable({
        providedIn: 'root'
    })
], AuthService);
export { AuthService };
//# sourceMappingURL=auth.service.js.map