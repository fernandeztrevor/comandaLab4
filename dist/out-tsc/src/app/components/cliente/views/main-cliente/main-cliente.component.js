import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
let MainClienteComponent = class MainClienteComponent {
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
MainClienteComponent = tslib_1.__decorate([
    Component({
        selector: 'app-main-cliente',
        templateUrl: './main-cliente.component.html',
        styleUrls: ['./main-cliente.component.scss']
    })
], MainClienteComponent);
export { MainClienteComponent };
//# sourceMappingURL=main-cliente.component.js.map