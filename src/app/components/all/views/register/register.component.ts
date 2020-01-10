import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators} from '@angular/forms';
import { User, Role } from 'src/app/models/user';
import { AuthService } from 'src/app/services/authentication/auth.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { LogService } from 'src/app/services/firebase/log.service';
import { TargetMovimiento, TipoMovimiento } from 'src/app/models/log';

@Component({
	selector: 'app-register',
	templateUrl: './register.component.html',
	styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

	public registerForm: FormGroup;
	public loading: boolean = false;

	constructor(private authService: AuthService, private router: Router, private toastr: ToastrService, private logService: LogService	) {}

	ngOnInit() 
	{
		this.registerForm = new FormGroup({
		'name': new FormControl(null, [Validators.required]),
		'lastname': new FormControl(null, [Validators.required]),
		'email': new FormControl(null, [Validators.required]),
		'password': new FormControl(null, [Validators.required]),
		'repPassword': new FormControl(null, [Validators.required]),
		'captcha': new FormControl('', [Validators.required])
    	});
  	}

	onSubmit()
	{
		this.loading = true;
    	let user: User = User.CreateUserWithParams(
			this.registerForm.get('name').value,
			this.registerForm.get('lastname').value,
			this.registerForm.get('email').value,
			this.registerForm.get('password').value,
			Role.cliente
		);
    
	this.authService.RegisterWithEmail(user)
		.then(() => {	
			let mensaje: string = `El usuario ${user.email} se dió de alta`;
			this.logService.persistirMovimiento(user, TargetMovimiento.usuario, TipoMovimiento.alta, mensaje);			
			this.toastr.success('Te has registrado con éxito.');
			this.router.navigate(['app/login']);
		})
		.catch(error => {
			this.toastr.error(error.message, 'Ha ocurrido un error.')
		});
  	}

}
