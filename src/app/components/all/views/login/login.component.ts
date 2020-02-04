import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AuthService } from 'src/app/services/authentication/auth.service';
import { ToastrService } from 'ngx-toastr';
import { UserService } from 'src/app/services/firebase/user.service';

@Component({
	selector: 'app-login',
	templateUrl: './login.component.html',
	styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

	public loginForm: FormGroup;
	public userOption: string = 'none';
	public loading: boolean = false;

	constructor(private authService: AuthService, private toastr: ToastrService, private userService: UserService) { }

	ngOnInit() {
		this.loginForm = new FormGroup({
			'email': new FormControl(null, [Validators.required]),
			'password': new FormControl(null, [Validators.required]),
			'captcha': new FormControl('', [Validators.required])
		});
	}

	public onSubmit() {
		this.loading = true;
		const usr = this.loginForm.get('email').value;
		const pass = this.loginForm.get('password').value;

		this.userService.GetUserByEmail(usr)
		.then(usuario=>{
			console.log("esta en la base");
			if(!usuario.deleted && usuario.state == 'habilitado'){
				this.authService.LoginWithEmail(usr, pass)
		 	.then(() => {
		 		this.toastr.success('¡Bienvenido!');
		 	})
		 	.catch(() => {				
				 console.log("no estaba auth asi que lo creo");
		 		this.authService.RegisterWithEmailAdmin(usr);
			 });
			}else{
				this.toastr.error('Usuario deshabilitado o inexistente');
			}	
		})		 
		.catch(()=>
			this.toastr.error('Usuario y/o contraseña incorrecto.')
			
		).finally(()=>{
			//this.loading = false;
			//console.log("lo corto");
			this.userOption = 'none';
			this.loginForm.get('email').disable();
			this.loginForm.get('password').disable();
			//this.loginForm.get('email').setValue('');
			// this.loginForm.get('password').setValue('');			
		});
	}

	private BindUser(usuario: string) {
		this.userOption = usuario;
		this.LoadUser();
	}

	private LoadUser() {
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

}