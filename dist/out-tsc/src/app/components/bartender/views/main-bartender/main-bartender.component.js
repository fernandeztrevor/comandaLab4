import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
let MainBartenderComponent = class MainBartenderComponent {
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
MainBartenderComponent = tslib_1.__decorate([
    Component({
        selector: 'app-main-bartender',
        templateUrl: './main-bartender.component.html',
        styleUrls: ['./main-bartender.component.scss']
    })
], MainBartenderComponent);
export { MainBartenderComponent };
//# sourceMappingURL=main-bartender.component.js.map