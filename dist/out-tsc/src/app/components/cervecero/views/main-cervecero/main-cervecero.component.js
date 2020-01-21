import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
let MainCerveceroComponent = class MainCerveceroComponent {
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
MainCerveceroComponent = tslib_1.__decorate([
    Component({
        selector: 'app-main-cervecero',
        templateUrl: './main-cervecero.component.html',
        styleUrls: ['./main-cervecero.component.scss']
    })
], MainCerveceroComponent);
export { MainCerveceroComponent };
//# sourceMappingURL=main-cervecero.component.js.map