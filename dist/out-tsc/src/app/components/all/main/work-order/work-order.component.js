import * as tslib_1 from "tslib";
import { Component, Input } from '@angular/core';
import { Order } from 'src/app/models/order';
import { FoodState } from 'src/app/models/product';
import { TargetMovimiento, TipoMovimiento } from 'src/app/models/log';
let WorkOrderComponent = class WorkOrderComponent {
    constructor(authService, orderService, toastr, logService) {
        this.authService = authService;
        this.orderService = orderService;
        this.toastr = toastr;
        this.logService = logService;
    }
    ngOnInit() {
        this.authService.GetCurrentUser().then(user => this.me = user);
        setInterval(() => {
            if (this.order) {
                let now = new Date();
                this.remainingTime = new Date(this.order.timeLeft).getTime() - now.getTime();
                if (this.remainingTime < 0) {
                    this.order.delayed = this.remainingTime;
                    this.orderService.Update(this.order);
                }
            }
        }, 10);
    }
    ngOnChanges() {
        this.selectedItem = null;
    }
    IsPending() {
        let is = false;
        if (this.selectedItem.state == FoodState.pending)
            is = true;
        return is;
    }
    IsCooking() {
        let is = false;
        if (this.selectedItem.state == FoodState.preparing)
            is = true;
        return is;
    }
    IsAvailableForMe() {
        let available = false;
        if (this.selectedItem) {
            let myRole = this.me.role;
            if (this.selectedItem.cook == myRole && this.selectedItem.state != FoodState.finished) {
                available = true;
            }
        }
        return available;
    }
    SelectItem(item) {
        this.selectedItem = item;
    }
    BeginCook(withTime) {
        if (withTime)
            this.AddMoreTime(); // Add more time
        else
            this.order = Object.assign(new Order(), this.order);
        this.AssignToMe();
        this.selectedItem.state = FoodState.preparing;
        this.order.UpdateOrderState();
        let mensaje = `El usuario ${this.me.email} (${this.me.role}) comenzó a preparar ${this.selectedItem.name} del pedido ${this.order.codeID}`;
        this.logService.persistirMovimiento(this.me, TargetMovimiento.pedido, TipoMovimiento.preparacion, mensaje);
        this.orderService.Update(this.order)
            .then(() => {
            this.toastr.success('El pedido se actualizó con éxito', 'Hecho!');
        })
            .catch(() => {
            this.toastr.error('Se ha producido un error.', 'Error');
        });
    }
    ReadyToServe() {
        this.selectedItem.state = FoodState.finished;
        this.order = Object.assign(new Order(), this.order);
        this.order.UpdateOrderState();
        let mensaje = `El usuario ${this.me.email} (${this.me.role})  terminó ${this.selectedItem.name} del pedido ${this.order.codeID}`;
        this.logService.persistirMovimiento(this.me, TargetMovimiento.pedido, TipoMovimiento.finalizacion, mensaje);
        this.orderService.Update(this.order)
            .then(() => {
            this.toastr.success('El pedido se actualizó con éxito', 'Hecho!');
        })
            .catch(() => {
            this.toastr.error('Se ha producido un error.', 'Error');
        });
    }
    AssignToMe() {
        this.selectedItem.worker = this.me;
    }
    AddMoreTime() {
        this.order = Object.assign(new Order(), this.order);
        this.order.AddMinutes(this.addedTime);
        this.addedTime = null;
    }
};
tslib_1.__decorate([
    Input()
], WorkOrderComponent.prototype, "order", void 0);
WorkOrderComponent = tslib_1.__decorate([
    Component({
        selector: 'app-work-order',
        templateUrl: './work-order.component.html',
        styleUrls: ['./work-order.component.scss']
    })
], WorkOrderComponent);
export { WorkOrderComponent };
//# sourceMappingURL=work-order.component.js.map