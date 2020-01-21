import * as tslib_1 from "tslib";
import { Component, ChangeDetectionStrategy, Input } from '@angular/core';
import { Order, OrderState } from 'src/app/models/order';
import { TableState } from 'src/app/models/table';
import { TargetMovimiento, TipoMovimiento } from 'src/app/models/log';
let SelectOrderComponent = class SelectOrderComponent {
    constructor(orderService, toastr, tableService, authService, movimientoService) {
        this.orderService = orderService;
        this.toastr = toastr;
        this.tableService = tableService;
        this.authService = authService;
        this.movimientoService = movimientoService;
    }
    ngOnInit() {
        setInterval(() => {
            if (this.order) {
                let now = new Date();
                this.remainingTime = new Date(this.order.timeLeft).getTime() - now.getTime();
            }
        }, 10);
    }
    CanBeServed() {
        let can = false;
        if (this.order.state == OrderState.readyToServe)
            can = true;
        return can;
    }
    SelectItem(item) {
        this.selectedItem = item;
    }
    CompleteOrder() {
        this.order = Object.assign(new Order(), this.order);
        this.tableService.UpdateStatus(this.order.tableID, TableState.eating);
        this.order.CompleteOrder();
        this.orderService.Update(this.order).then(() => {
            this.authService.GetCurrentUser().then(user => {
                let mensaje = `El usuario ${user.email} entregó un pedido ${this.order.codeID}`;
                this.movimientoService.persistirMovimiento(user, TargetMovimiento.pedido, TipoMovimiento.entrega, mensaje);
            });
        })
            .then(() => {
            this.toastr.success('Orden servida.');
        })
            .catch(() => {
            this.toastr.error('Hubo un error al servir la orden.', 'Error');
        });
    }
};
tslib_1.__decorate([
    Input()
], SelectOrderComponent.prototype, "order", void 0);
SelectOrderComponent = tslib_1.__decorate([
    Component({
        selector: 'app-select-order',
        templateUrl: './select-order.component.html',
        styleUrls: ['./select-order.component.scss'],
        changeDetection: ChangeDetectionStrategy.OnPush
    })
], SelectOrderComponent);
export { SelectOrderComponent };
//# sourceMappingURL=select-order.component.js.map