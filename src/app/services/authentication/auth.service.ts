import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore } from 'angularfire2/firestore';
import { User, Role } from 'src/app/models/user';
import { Router } from '@angular/router';
import { UserService } from '../firebase/user.service';
import { take, map, tap } from 'rxjs/operators';
import { reject } from 'q';
import { LogService } from '../firebase/log.service';
import { TargetMovimiento, TipoMovimiento } from 'src/app/models/log';
import { Observable } from 'rxjs';
import { ToastrService } from 'ngx-toastr';

@Injectable({
	providedIn: 'root'
})
export class AuthService {


	constructor(private afsAuth: AngularFireAuth, private db: AngularFirestore, private router: Router, private userService: UserService, private logService: LogService) { }

	public RegisterWithEmail(user: User) {
		return new Promise((resolve, reject) => {
			this.afsAuth.auth.createUserWithEmailAndPassword(user.email, user.password)
				.then(userData => {
					resolve(userData);
					this.userService.Add(user);
					console.log('Register successful');
				})
				.catch(error => console.log(reject(error)))
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

	public RegisterWithEmailAdmin(mail: string) {
		this.userService.GetUserByEmail(mail).then(user => {
			const pass = user.password;
			this.RegisterWithEmail(user).then(() => {
				this.LoginWithEmail(mail, pass);
			});
		})
	}



	public LoginWithEmail(email: string, pwd: string) {
		return new Promise((resolve, reject) => {
			this.afsAuth.auth.signInWithEmailAndPassword(email, pwd)
				.then(userData => {
					this.userService.GetUserByEmail(userData.user.email).then(user => {
						resolve(userData);
						console.log('Login success', userData);
						this.RedirectForRole(email);
						this.userService.GetUserByEmail(email).then(user => {
							let mensaje: string = `El usuario ${user.email} inició sesión`;
							this.logService.persistirMovimiento(user, TargetMovimiento.usuario, TipoMovimiento.ingreso, mensaje);
						});

					})
				})
				.catch(error => reject(error));
		});
	}

	public LogoutEmail(): void {

		this.GetCurrentUser()
			.then(user => {
				let mensaje: string = `El usuario ${user.email} cerró sesión`;
				this.logService.persistirMovimiento(user, TargetMovimiento.usuario, TipoMovimiento.egreso, mensaje)
					.then(() => {
						this.afsAuth.auth.signOut();
					});
			});
	}

	public GetCurrentUser(): Promise<User> {
		return this.GetCurrentEmail().then(email => {
			if (!email)
				reject('error');

			return this.userService.GetUserByEmail(email).then(user => {
				return this.RemoveUserPassword(user);
			})
		})
	}

	private GetCurrentEmail(): Promise<string> {
		return this.afsAuth.user.pipe(
			take(1),
			map(user => user.email)
		)
			.toPromise();
	}

	private RemoveUserPassword(user: User): User {
		user.password = '';
		return user;
	}

	private RedirectForRole(email: string): void {
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

}