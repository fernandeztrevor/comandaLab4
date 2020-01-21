import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
let MainSocioComponent = class MainSocioComponent {
    constructor(authService) {
        this.authService = authService;
        this.open = false;
    }
    toggleSidebar() {
        this.open = !this.open;
    }
    ngOnInit() {
        this.authService.GetCurrentUser().then(x => this.user = x);
    }
};
MainSocioComponent = tslib_1.__decorate([
    Component({
        selector: 'app-main-socio',
        templateUrl: './main-socio.component.html',
        styleUrls: ['./main-socio.component.scss']
    })
], MainSocioComponent);
export { MainSocioComponent };
//# sourceMappingURL=main-socio.component.js.map