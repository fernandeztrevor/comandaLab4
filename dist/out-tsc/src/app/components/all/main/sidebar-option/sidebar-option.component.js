import * as tslib_1 from "tslib";
import { Component, Input } from '@angular/core';
let SidebarOptionComponent = class SidebarOptionComponent {
    constructor(authService, router) {
        this.authService = authService;
        this.router = router;
    }
    ngOnInit() {
    }
    LogOut() {
        this.authService.LogoutEmail();
        this.router.navigate(['/app/login']);
    }
};
tslib_1.__decorate([
    Input()
], SidebarOptionComponent.prototype, "name", void 0);
tslib_1.__decorate([
    Input()
], SidebarOptionComponent.prototype, "link", void 0);
tslib_1.__decorate([
    Input()
], SidebarOptionComponent.prototype, "lastOne", void 0);
tslib_1.__decorate([
    Input()
], SidebarOptionComponent.prototype, "logOut", void 0);
SidebarOptionComponent = tslib_1.__decorate([
    Component({
        selector: 'app-sidebar-option',
        templateUrl: './sidebar-option.component.html',
        styleUrls: ['./sidebar-option.component.scss']
    })
], SidebarOptionComponent);
export { SidebarOptionComponent };
//# sourceMappingURL=sidebar-option.component.js.map