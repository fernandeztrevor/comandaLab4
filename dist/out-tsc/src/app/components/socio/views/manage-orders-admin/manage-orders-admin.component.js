import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
let ManageOrdersAdminComponent = class ManageOrdersAdminComponent {
    constructor() { }
    ngOnInit() {
    }
    SelectOrder(order) {
        this.currentOrder = order;
    }
};
ManageOrdersAdminComponent = tslib_1.__decorate([
    Component({
        selector: 'app-manage-orders-admin',
        templateUrl: './manage-orders-admin.component.html',
        styleUrls: ['./manage-orders-admin.component.scss']
    })
], ManageOrdersAdminComponent);
export { ManageOrdersAdminComponent };
//# sourceMappingURL=manage-orders-admin.component.js.map