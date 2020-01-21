import * as tslib_1 from "tslib";
import { Component, Input } from '@angular/core';
import { Order } from 'src/app/models/order';
import { map } from 'rxjs/operators';
import { FormGroup, FormControl } from '@angular/forms';
import { Subject } from 'rxjs';
let ViewOrdersStatsComponent = class ViewOrdersStatsComponent {
    constructor(orderService) {
        this.orderService = orderService;
        this.cancelledOrders = null;
        this.delayedOrders = null;
        this.topBest = null;
        this.topWorst = null;
        this.mostrar = false;
        this.onReset = new Subject();
    }
    ngOnInit() {
        this.settingsForm = new FormGroup({
            fechaInicio: new FormControl(null),
            fechaFin: new FormControl(null),
        });
        this.orders = this.orderService.GetAll();
        this.ClearFilters();
    }
    ClearFilters() {
        this.search();
    }
    Cancel() {
        this.settingsForm.reset();
        this.onReset.next();
        this.settingsForm.controls['fechaInicio'].setValue(null);
        this.settingsForm.controls['fechaFin'].setValue(null);
        this.search();
    }
    search() {
        if (this.settingsForm.value.fechaInicio == null || this.settingsForm.value.fechaInicio == NaN) {
            this.fechaInicio = 0;
        }
        else {
            this.fechaInicio = Date.parse(this.settingsForm.value.fechaInicio.toString());
        }
        if (this.settingsForm.value.fechaFin == null || this.settingsForm.value.fechaFin == NaN) {
            this.fechaFin = Date.now();
        }
        else {
            this.fechaFin = Date.parse(this.settingsForm.value.fechaFin.toString());
        }
        this.showingOrders = this.orderService.GetAll().valueChanges().pipe(map(orders => {
            return orders.filter(order => {
                order = Object.assign(new Order(), order);
                if (order['timestamp'] > this.fechaInicio && order['timestamp'] < this.fechaFin) {
                    return order;
                }
            });
        }));
        this.getDelayed();
        this.getCancelled();
        this.getTop();
    }
    getCancelled() {
        this.cancelledOrders = this.showingOrders.pipe(map(orders => {
            return orders.filter(order => {
                order = Object.assign(new Order(), order);
                if (order['state'] == "Cancelado") {
                    return order;
                }
            });
        }));
    }
    getDelayed() {
        this.delayedOrders = this.showingOrders.pipe(map(orders => {
            return orders.filter(order => {
                order = Object.assign(new Order(), order);
                if (order['delayed'] < 0) {
                    console.log(order['delayed']);
                    return order;
                }
            });
        }));
    }
    setDate() {
        console.log(Date.parse(this.settingsForm.value.fechaInicio.toString()));
        if (this.settingsForm.value.fechaInicio != null) {
            this.fechaInicio = Date.parse(this.settingsForm.value.fechaInicio.toString());
        }
        else {
            this.fechaFin = Date.parse(this.settingsForm.value.fechaFin.toString());
        }
    }
    getTop() {
        this.lista = new Array();
        let cantidadNombres = new Array();
        let cantidad;
        let copia = this.showingOrders;
        copia.subscribe(orders => {
            orders.map(order => {
                order.items.map(uno => {
                    this.lista.push(uno['name']);
                }).map(() => {
                    cantidadNombres = this.lista.reduce((contadorNombre, nombre) => {
                        contadorNombre[nombre] = (contadorNombre[nombre] || 0) + 1;
                        return contadorNombre;
                    }, {});
                });
            });
            var result = Object.keys(cantidadNombres).map(function (key) {
                return [String(key), cantidadNombres[key]];
            });
            cantidad = result.length;
            console.log(result);
            this.topBest = new Array();
            this.topWorst = new Array();
            this.topBest.push(result[0], result[1], result[2]);
            this.topWorst.push(result[cantidad - 3], result[cantidad - 2], result[cantidad - 1]);
        });
    }
};
tslib_1.__decorate([
    Input()
], ViewOrdersStatsComponent.prototype, "fechaInicio", void 0);
tslib_1.__decorate([
    Input()
], ViewOrdersStatsComponent.prototype, "fechaFin", void 0);
ViewOrdersStatsComponent = tslib_1.__decorate([
    Component({
        selector: 'app-view-orders-stats',
        templateUrl: './view-orders-stats.component.html',
        styleUrls: ['./view-orders-stats.component.scss']
    })
], ViewOrdersStatsComponent);
export { ViewOrdersStatsComponent };
//# sourceMappingURL=view-orders-stats.component.js.map