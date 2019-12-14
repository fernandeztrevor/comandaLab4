import { Component, OnInit } from '@angular/core';
import { FileService } from 'src/app/services/firestorage/file.service';
import { AuthService } from 'src/app/services/authentication/auth.service';
import { User } from 'src/app/models/user';
import { CommonHelper } from 'src/app/classes/helpers/common-helper';
import { ToastrService } from 'ngx-toastr';
import { UserService } from 'src/app/services/firebase/user.service';

@Component({
	selector: 'app-profile',
	templateUrl: './profile.component.html',
	styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

	public user: User;
	public isLoaded: boolean = false;
	public selectedFile: File = null;

	constructor(private userService: UserService, private fileService: FileService, private authService: AuthService, private toastr: ToastrService) { }

	ngOnInit() {
		this.authService.GetCurrentUser().then(usr => {
			this.user = usr;
		});
	}

	public OnFileSelected(event: any): void
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
					//location.reload();
					location.assign('https://ivan-rojas.github.io/TP_Lab4_2c_2019/');
				},1000)
			})
		});
	}
}
