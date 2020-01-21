import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
let MainCocineroComponent = class MainCocineroComponent {
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
MainCocineroComponent = tslib_1.__decorate([
    Component({
        selector: 'app-main-cocinero',
        templateUrl: './main-cocinero.component.html',
        styleUrls: ['./main-cocinero.component.scss']
    })
], MainCocineroComponent);
export { MainCocineroComponent };
//# sourceMappingURL=main-cocinero.component.js.map