import * as tslib_1 from "tslib";
import { Component, Output, EventEmitter, Input } from '@angular/core';
import { Order } from 'src/app/models/order';
import { Role } from 'src/app/models/user';
import { map } from 'rxjs/operators';
let OrderListComponent = class OrderListComponent {
    constructor(orderService, authService) {
        this.orderService = orderService;
        this.authService = authService;
        this.orderSelected = new EventEmitter();
    }
    ngOnInit() {
        switch (this.role) {
            case Role.mozo:
                this.authService.GetCurrentUser().then(user => this.me = user).then(() => {
                    this.orders = this.orderService.GetAllByWaiterOrderByTime(this.me.email).valueChanges();
                });
                break;
            case Role.cervecero:
            case Role.bartender:
            case Role.cocinero:
                const cook = this.role;
                this.orders = this.orderService.GetAllByCook(cook);
                break;
            case Role.socio:
                this.orders = this.orderService.GetAllOrderByTime().valueChanges();
                break;
            case Role.cliente:
                const terminado = 'Terminado';
                this.authService.GetCurrentUser().then(user => this.me = user).then(() => {
                    this.orders = this.orderService.GetAllByWaiterOrderByTime2(this.me.email).valueChanges().pipe(map(orders => {
                        return orders.filter(order => {
                            order = Object.assign(new Order(), order);
                            var hasRole = false;
                            order['items'].forEach(el => {
                                console.log(el.state);
                                if (el.state != terminado)
                                    hasRole = true;
                            });
                            if (hasRole)
                                return order;
                        });
                    }));
                });
        }
    }
    SelectOrder(order) {
        this.orderSelected.emit(order);
    }
};
tslib_1.__decorate([
    Input()
], OrderListComponent.prototype, "role", void 0);
tslib_1.__decorate([
    Output()
], OrderListComponent.prototype, "orderSelected", void 0);
OrderListComponent = tslib_1.__decorate([
    Component({
        selector: 'app-order-list',
        templateUrl: './order-list.component.html',
        styleUrls: ['./order-list.component.scss']
    })
], OrderListComponent);
export { OrderListComponent };
//# sourceMappingURL=order-list.component.js.map