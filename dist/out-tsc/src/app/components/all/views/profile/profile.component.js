import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { CommonHelper } from 'src/app/classes/helpers/common-helper';
let ProfileComponent = class ProfileComponent {
    constructor(userService, fileService, authService, toastr) {
        this.userService = userService;
        this.fileService = fileService;
        this.authService = authService;
        this.toastr = toastr;
        this.isLoaded = false;
        this.selectedFile = null;
    }
    ngOnInit() {
        this.authService.GetCurrentUser().then(usr => {
            this.user = usr;
        });
    }
    OnFileSelected(event) {
        this.selectedFile = event.target.files[0];
        this.isLoaded = true;
        this.toastr.success('Seleccionaste el archivo ' + this.selectedFile.name);
    }
    Upload() {
        let name = CommonHelper.GenerateProfileImageName(this.user);
        console.log(name);
        this.fileService.Upload(name, this.selectedFile)
            .then(() => {
            setTimeout(() => {
                this.ChangeProfilePic(name);
            }, 1000);
        })
            .catch(() => this.toastr.error('Se ha producido un error al cargar la imagen.'));
    }
    ChangeProfilePic(imgName) {
        this.fileService.GetImageURL(imgName).then(img => {
            this.userService.ModifyProfileImage(this.user.email, img).then(() => {
                this.toastr.success('Imagen cargada con éxito.');
                setTimeout(() => {
                    location.reload();
                    //location.assign('https://github.com/fernandeztrevor/comandaLab4');
                }, 1000);
            });
        });
    }
};
ProfileComponent = tslib_1.__decorate([
    Component({
        selector: 'app-profile',
        templateUrl: './profile.component.html',
        styleUrls: ['./profile.component.scss']
    })
], ProfileComponent);
export { ProfileComponent };
//# sourceMappingURL=profile.component.js.map