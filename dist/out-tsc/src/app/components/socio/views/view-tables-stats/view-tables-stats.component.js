import * as tslib_1 from "tslib";
import { Component, Input } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Subject } from 'rxjs';
import { Order } from 'src/app/models/order';
import { map } from 'rxjs/operators';
let ViewTablesStatsComponent = class ViewTablesStatsComponent {
    constructor(orderService) {
        this.orderService = orderService;
        this.mesaMasUsada = null;
        this.mesaMenosUsada = null;
        this.mesaMayorFacturacion = null;
        this.mesaMenorFacturacion = null;
        this.facturaMayorImporte = null;
        this.facturaMenorImporte = null;
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
        this.getTops();
    }
    getTops() {
        this.lista = new Array();
        let cantidadNombres = new Array();
        let cantidad;
        let copia = this.showingOrders;
        this.facturaMayorImporte, this.facturaMenorImporte = new Order();
        this.arrayAcumulador = new Array();
        copia.subscribe(orders => {
            orders.map(order => {
                if (order) {
                    this.mayorMenorImporte(order);
                    this.sumarIngresos(order);
                    this.lista.push(order.tableID);
                }
            }).map(() => {
                cantidadNombres = this.lista.reduce((contadorNombre, nombre) => {
                    contadorNombre[nombre] = (contadorNombre[nombre] || 0) + 1;
                    return contadorNombre;
                }, {});
            });
            //console.log(cantidadNombres);
            var result = Object.keys(cantidadNombres).map(function (key) {
                return [String(key), cantidadNombres[key]];
            });
            cantidad = result.length;
            this.mesaMasUsada = result[0];
            this.mesaMenosUsada = result[cantidad - 1];
            console.log(this.mesaMenosUsada);
            console.log(this.mesaMasUsada);
            console.log(this.facturaMenorImporte);
            console.log(this.facturaMayorImporte);
            console.log(this.arrayAcumulador);
            console.log(this.lista);
        });
    }
    mayorMenorImporte(order) {
        if (this.facturaMayorImporte == null || this.facturaMenorImporte == null) {
            this.facturaMayorImporte = order;
            this.facturaMenorImporte = order;
        }
        else {
            if (order.totalPrice > this.facturaMayorImporte.totalPrice) {
                this.facturaMayorImporte = order;
            }
            if (order.totalPrice < this.facturaMayorImporte.totalPrice) {
                this.facturaMenorImporte = order;
            }
        }
    }
    sumarIngresos(order) {
        console.log(order.tableID);
        console.log(this.arrayAcumulador.length);
        if (this.arrayAcumulador[order.tableID] == null) {
            console.log(order.totalPrice);
            this.arrayAcumulador[order.tableID] = order.totalPrice;
            console.log("este es el length");
            console.log(this.arrayAcumulador.length);
        }
        else {
            //this.arrayAcumulador.push(order.tableID, (this.arrayAcumulador[order.tableID] + order.totalPrice));
            this.arrayAcumulador[order.tableID] = this.arrayAcumulador[order.tableID] + order.totalPrice;
        }
        console.log(this.arrayAcumulador);
        //let otroarray = this.arrayAcumulador.filter(Boolean);    
        // this.arrayAcumulador.sort(function(a, b) {
        //   return (b.value - a.value)
        // });
    }
};
tslib_1.__decorate([
    Input()
], ViewTablesStatsComponent.prototype, "fechaInicio", void 0);
tslib_1.__decorate([
    Input()
], ViewTablesStatsComponent.prototype, "fechaFin", void 0);
ViewTablesStatsComponent = tslib_1.__decorate([
    Component({
        selector: 'app-view-tables-stats',
        templateUrl: './view-tables-stats.component.html',
        styleUrls: ['./view-tables-stats.component.scss']
    })
], ViewTablesStatsComponent);
export { ViewTablesStatsComponent };
//# sourceMappingURL=view-tables-stats.component.js.map