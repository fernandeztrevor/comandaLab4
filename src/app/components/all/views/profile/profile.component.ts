import { Component, OnInit, Input } from '@angular/core';
import { FileService } from 'src/app/services/firestorage/file.service';
import { AuthService } from 'src/app/services/authentication/auth.service';
import { User } from 'src/app/models/user';
import { CommonHelper } from 'src/app/classes/helpers/common-helper';
import { ToastrService } from 'ngx-toastr';
import { UserService } from 'src/app/services/firebase/user.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { LogService } from 'src/app/services/firebase/log.service';
import { TargetMovimiento, TipoMovimiento } from 'src/app/models/log';
import { observable, Observable } from 'rxjs';

@Component({
	selector: 'app-profile',
	templateUrl: './profile.component.html',
	styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

	public user: User;
	public isLoaded: boolean = false;
	public selectedFile: File = null;
	public userForm: FormGroup;
	public file: File;
	public habilitado: boolean = false;

	constructor(private userService: UserService, private fileService: FileService, private authService: AuthService, private movimientoService: LogService, private toastr: ToastrService) { }

	ngOnInit() {
		this.userForm = new FormGroup({
			userName: new FormControl(null, [Validators.required]),
			userLastname: new FormControl(null, [Validators.required]),
			userMail: new FormControl(null, [Validators.required]),
			userRole: new FormControl(null),
			userImage: new FormControl('', [Validators.required])
		})
		this.authService.GetCurrentUser().then(usr => {
			this.user = usr;
			this.userForm.controls['userName'].setValue(this.user.name);
			this.userForm.controls['userLastname'].setValue(this.user.lastname);
			this.userForm.controls['userMail'].setValue(this.user.email);
		});


	}

	onFileChanged(event) {
		this.file = event.target.files[0];
		this.habilitado = true;
	}

	public cambio(){
		// if(this.user.name != this.userForm.value.userName || this.user.lastname != this.userForm.value.userLastname){
		// 	this.habilitado = true;
		// }else{
		// 	this.habilitado = false;
		// }
		// console.log(this.habilitado);
		// console.log(this.user.name);
		// console.log(this.user.lastname);
		console.log(this.userForm.controls['userName'].untouched);
		console.log(this.userForm.controls['userName'].value);
		console.log(this.user.name);

		console.log(this.userForm.controls['userLastname'].untouched);
		console.log(this.userForm.controls['userLastname'].value);
		console.log(this.user.lastname);

	}

	public updateUser() {

		if((this.user.name != this.userForm.value.userName) || (this.user.lastname != this.userForm.value.userLastname) || (this.file != null)){

	
			this.userService.updateUser(this.user, this.file).then((value) => {
				this.user.name = this.userForm.value.userName;
				this.user.lastname = this.userForm.value.userLastname;
				//console.log(value);
				//if (value) {
					this.toastr.success(`El usuario ${this.user.email} fue modificado con exito`);
				//}
				this.authService.GetCurrentUser().then(usr => {
					let mensaje: string = `El usuario ${this.user.email} dió de modificó el usuario ${this.user.email}`;
					this.movimientoService.persistirMovimiento(usr, TargetMovimiento.usuario, TipoMovimiento.alta, mensaje);
				});
				this.resetForm();
			}).catch(() => {
				this.toastr.error(`Ha ocurrido un error`);
				this.resetForm();
			}
			);
		}else{
			this.toastr.show("No hay nada para modificar");
		}
		
	}

	public resetForm() {
		this.authService.GetCurrentUser().then(usr => {
			this.user = usr;
			this.userForm.controls['userName'].setValue(this.user.name);
			this.userForm.controls['userLastname'].setValue(this.user.lastname);
			this.userForm.controls['userMail'].setValue(this.user.email);
			this.userForm.controls['userImage'].setValue(null);
			this.habilitado = false;
		});

	}


	/*public OnFileSelected(event: any): void
	{
		this.selectedFile = event.target.files[0];
		this.isLoaded = true;
		this.toastr.success('Seleccionaste el archivo ' + this.selectedFile.name);
	}
	
	public Upload(): void
	{
		let name = CommonHelper.GenerateProfileImageName(this.user);
		console.log(name);
		this.fileService.Upload(name, this.selectedFile)
			.then(() => {
				setTimeout(() => {
					this.ChangeProfilePic(name);
				},1000)
			})
			.catch(() => this.toastr.error('Se ha producido un error al cargar la imagen.'));
	}

	private ChangeProfilePic(imgName: string): void
	{
		this.fileService.GetImageURL(imgName).then(img => {
			this.userService.ModifyProfileImage(this.user.email, img).then(() => {
				this.toastr.success('Imagen cargada con éxito.');
				setTimeout(() => {
					location.reload();
					//location.assign('https://github.com/fernandeztrevor/comandaLab4');
				},1000)
			})
		});
	}*/


}
