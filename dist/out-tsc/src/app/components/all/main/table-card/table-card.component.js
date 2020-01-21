import * as tslib_1 from "tslib";
import { Component, Input } from '@angular/core';
import { TableState } from 'src/app/models/table';
import { TargetMovimiento, TipoMovimiento } from 'src/app/models/log';
let TableCardComponent = class TableCardComponent {
    constructor(tableService, toastr, authService, movimientoService) {
        this.tableService = tableService;
        this.toastr = toastr;
        this.authService = authService;
        this.movimientoService = movimientoService;
    }
    ngOnInit() {
    }
    ChangeStatus(option) {
        let status;
        switch (option) {
            case 1:
                status = TableState.available;
                break;
            case 2:
                status = TableState.waitingOrder;
                break;
            case 3:
                status = TableState.eating;
                break;
            case 4:
                status = TableState.paying;
                break;
            case 5:
                status = TableState.closed;
                break;
            default:
                status = TableState.available;
                break;
        }
        this.tableService.UpdateStatus(this.table.tableID, status).then(() => {
            this.authService.GetCurrentUser().then(user => {
                let mensaje = `El usuario ${user.email} cambió el estado de la mesa ${this.table.tableID} a ${status}`;
                this.movimientoService.persistirMovimiento(user, TargetMovimiento.mesa, TipoMovimiento.modificacion, mensaje);
            });
        })
            .then(() => {
            this.toastr.success('Se cambió el estado de la mesa.');
        })
            .catch(() => {
            this.toastr.error('Ha ocurrido un error al actualizar.');
        });
    }
};
tslib_1.__decorate([
    Input()
], TableCardComponent.prototype, "table", void 0);
tslib_1.__decorate([
    Input()
], TableCardComponent.prototype, "isAdmin", void 0);
TableCardComponent = tslib_1.__decorate([
    Component({
        selector: 'app-table-card',
        templateUrl: './table-card.component.html',
        styleUrls: ['./table-card.component.scss']
    })
], TableCardComponent);
export { TableCardComponent };
//# sourceMappingURL=table-card.component.js.map