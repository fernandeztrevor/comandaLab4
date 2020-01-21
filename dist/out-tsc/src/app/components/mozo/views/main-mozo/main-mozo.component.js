import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
let MainMozoComponent = class MainMozoComponent {
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
MainMozoComponent = tslib_1.__decorate([
    Component({
        selector: 'app-main-mozo',
        templateUrl: './main-mozo.component.html',
        styleUrls: ['./main-mozo.component.scss']
    })
], MainMozoComponent);
export { MainMozoComponent };
//# sourceMappingURL=main-mozo.component.js.map