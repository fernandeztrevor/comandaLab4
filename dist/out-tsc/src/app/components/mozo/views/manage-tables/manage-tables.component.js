import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
let ManageTablesComponent = class ManageTablesComponent {
    constructor(tableService) {
        this.tableService = tableService;
    }
    ngOnInit() {
        this.tables = this.tableService.GetAll().valueChanges();
    }
};
ManageTablesComponent = tslib_1.__decorate([
    Component({
        selector: 'app-manage-tables',
        templateUrl: './manage-tables.component.html',
        styleUrls: ['./manage-tables.component.scss']
    })
], ManageTablesComponent);
export { ManageTablesComponent };
//# sourceMappingURL=manage-tables.component.js.map