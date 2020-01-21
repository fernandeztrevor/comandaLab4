import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { Role } from 'src/app/models/log';
import { FormGroup, FormControl } from '@angular/forms';
import { Subject } from 'rxjs';
let ViewLogsComponent = class ViewLogsComponent {
    constructor(logService) {
        this.logService = logService;
        this.todos = true;
        this.onReset = new Subject();
    }
    ngOnInit() {
        this.logForm = new FormGroup({
            typeSocio: new FormControl(null),
            typeCervecero: new FormControl(null),
            typeBartender: new FormControl(null),
            typeCliente: new FormControl(null),
            typeDelivery: new FormControl(null),
            typeCocinero: new FormControl(null),
            typeTodos: new FormControl(true),
            typeMozo: new FormControl(null),
            fechaInicio: new FormControl(null),
            fechaFin: new FormControl(null),
        });
        this.arrayCB = new Array();
        this.enableDisable();
        this.cargarArrayCB();
        this.logs = new Array();
        this.logs = this.logService.listado;
        this.showingLogs = this.logs;
    }
    search() {
        this.coincidencias = 0;
        if (this.logForm.value.fechaInicio == null) {
            this.fechaInicio = 0;
        }
        else {
            this.fechaInicio = Date.parse(this.logForm.value.fechaInicio.toString());
        }
        if (this.logForm.value.fechaFin == null) {
            this.fechaFin = Date.now();
        }
        else {
            this.fechaFin = Date.parse(this.logForm.value.fechaFin.toString());
        }
        this.showingLogs = this.logs.filter(res => {
            if (res.fecha > this.fechaInicio && res.fecha < this.fechaFin) {
                if (res.usuario.includes(this.busqueda) || this.busqueda == null) {
                    if (this.logForm.value.typeMozo && res.role == Role.mozo) {
                        this.coincidencias++;
                        return res;
                    }
                    if (this.logForm.value.typeBartender && res.role == Role.bartender) {
                        this.coincidencias++;
                        return res;
                    }
                    if (this.logForm.value.typeCervecero && res.role == Role.cervecero) {
                        this.coincidencias++;
                        return res;
                    }
                    if (this.logForm.value.typeCliente && res.role == Role.cliente) {
                        this.coincidencias++;
                        return res;
                    }
                    if (this.logForm.value.typeCocinero && res.role == Role.cocinero) {
                        this.coincidencias++;
                        return res;
                    }
                    if (this.logForm.value.typeDelivery && res.role == Role.delivery) {
                        this.coincidencias++;
                        return res;
                    }
                    if (this.logForm.value.typeSocio && res.role == Role.socio) {
                        this.coincidencias++;
                        return res;
                    }
                    if (this.logForm.value.typeTodos) {
                        this.coincidencias++;
                        return res;
                    }
                    ;
                }
                ;
            }
        });
        console.log(this.coincidencias);
    }
    Cancel() {
        this.logForm.reset();
        this.onReset.next();
        this.logForm.controls['typeTodos'].setValue(true);
        this.enableDisable();
        this.logForm.controls['fechaInicio'].setValue(null);
        this.logForm.controls['fechaFin'].setValue(null);
        this.search();
    }
    enableDisable() {
        if (this.todos) {
            this.logForm.controls['typeMozo'].disable();
            this.logForm.controls['typeCliente'].disable();
            this.logForm.controls['typeCocinero'].disable();
            this.logForm.controls['typeBartender'].disable();
            this.logForm.controls['typeCervecero'].disable();
            this.logForm.controls['typeDelivery'].disable();
            this.logForm.controls['typeSocio'].disable();
            this.logForm.controls['typeMozo'].setValue(false);
            this.logForm.controls['typeCliente'].setValue(false);
            this.logForm.controls['typeCocinero'].setValue(false);
            this.logForm.controls['typeBartender'].setValue(false);
            this.logForm.controls['typeCervecero'].setValue(false);
            this.logForm.controls['typeSocio'].setValue(false);
        }
        else {
            this.logForm.controls['typeMozo'].enable();
            this.logForm.controls['typeCliente'].enable();
            this.logForm.controls['typeCocinero'].enable();
            this.logForm.controls['typeBartender'].enable();
            this.logForm.controls['typeCervecero'].enable();
            this.logForm.controls['typeDelivery'].enable();
            this.logForm.controls['typeSocio'].enable();
        }
    }
    cargarArrayCB() {
        let typeMozo = this.logForm.value.typeMozo;
        let typeCliente = this.logForm.value.typeCliente;
        let typeCocinero = this.logForm.value.typeCocinero;
        let typeBartender = this.logForm.value.typeBartender;
        let typeCervecero = this.logForm.value.typeCervecero;
        let typeDelivery = this.logForm.value.typeDelivery;
        let typeSocio = this.logForm.value.typeSocio;
        let typeTodos = this.logForm.value.typeTodos;
        this.arrayCB.push(typeBartender, typeCervecero, typeCliente, typeCocinero, typeDelivery, typeMozo, typeSocio, typeTodos);
    }
    sendSettings() {
        this.showingLogs = this.logs.filter(res => {
            if (this.logForm.value.typeMozo && res.role == Role.mozo) {
                return res;
            }
            if (this.logForm.value.typeBartender && res.role == Role.bartender) {
                return res;
            }
            if (this.logForm.value.typeCervecero && res.role == Role.cervecero) {
                return res;
            }
            if (this.logForm.value.typeCliente && res.role == Role.cliente) {
                return res;
            }
            if (this.logForm.value.typeCocinero && res.role == Role.cocinero) {
                return res;
            }
            if (this.logForm.value.typeDelivery && res.role == Role.delivery) {
                return res;
            }
            if (this.logForm.value.typeSocio && res.role == Role.socio) {
                return res;
            }
            if (this.logForm.value.typeTodos) {
                return res;
            }
            ;
        });
    }
};
ViewLogsComponent = tslib_1.__decorate([
    Component({
        selector: 'app-view-logs',
        templateUrl: './view-logs.component.html',
        styleUrls: ['./view-logs.component.scss']
    })
], ViewLogsComponent);
export { ViewLogsComponent };
//# sourceMappingURL=view-logs.component.js.map