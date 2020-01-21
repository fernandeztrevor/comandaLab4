import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
let ManageTablesAdminComponent = class ManageTablesAdminComponent {
    constructor(tableService) {
        this.tableService = tableService;
    }
    ngOnInit() {
        this.tables = this.tableService.GetAll().valueChanges();
    }
};
ManageTablesAdminComponent = tslib_1.__decorate([
    Component({
        selector: 'app-manage-tables-admin',
        templateUrl: './manage-tables-admin.component.html',
        styleUrls: ['./manage-tables-admin.component.scss']
    })
], ManageTablesAdminComponent);
export { ManageTablesAdminComponent };
//# sourceMappingURL=manage-tables-admin.component.js.map