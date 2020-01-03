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

	public LoginWithEmail(email: string, pwd: string) {
		return new Promise((resolve, reject) => {
			this.afsAuth.auth.signInWithEmailAndPassword(email, pwd)
				.then(userData => {
					resolve(userData);
					console.log('Login success', userData);
					this.RedirectForRole(email);
					this.userService.GetUserByEmail(email).then(user => {
						this.logService.persistirMovimiento(user, TargetMovimiento.usuario, TipoMovimiento.ingreso);
					});
				})
				.catch(error => reject(error));
		});
	}

	public LogoutEmail(): void {

		this.GetCurrentUser()
			.then(user => {
				this.logService.persistirMovimiento(user, TargetMovimiento.usuario, TipoMovimiento.egreso)
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
