import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import * as jsPDF from 'jspdf';
let HomeSocioComponent = class HomeSocioComponent {
    constructor(userService, orderService, toastr) {
        this.userService = userService;
        this.orderService = orderService;
        this.toastr = toastr;
        this.changeRoleNewRole = 'socio';
    }
    ngOnInit() {
    }
    ChangeRole() {
        this.userService.SetRole(this.changeRoleEmail, this.changeRoleNewRole);
        this.toastr.info('El rol se ha cambiado correctamente!');
    }
    GenerateCSV() {
        this.toastr.info('Generando la facturación...');
        this.orderService.GetAllCompletedOrders_InArray().then(orders => {
            let data = [];
            orders.forEach(ord => {
                data.push([ord.timeLeft,
                    ord.codeID,
                    ord.client.email,
                    ord.waiter.name + ' ' + ord.waiter.lastname,
                    '$' + ord.totalPrice]);
            });
            let csvData = 'Fecha,Pedido,Cliente,Mozo,Importe\n';
            data.forEach(row => {
                csvData += row.join(',');
                csvData += '\n';
            });
            let file = new Blob([csvData], { type: 'text/csv' });
            let fileUrl = URL.createObjectURL(file);
            let hiddenEl = document.createElement('a');
            hiddenEl.href = fileUrl;
            hiddenEl.target = '_blank';
            hiddenEl.download = 'Facturacion.csv';
            hiddenEl.click();
        });
    }
    GeneratePDF() {
        this.toastr.info('Generando el listado de usuarios...');
        this.userService.GetAll_InArray().then(users => {
            let start = '<div style="text-align: center"><h1>Listado de usuarios</h1><hr><ul>';
            let usersHtml = '';
            let end = '</ul></div>';
            users.forEach(el => {
                let liSt = '<li>';
                let liEnd = '</li>';
                let user = el.email + ' - ' + el.name + ' ' + el.lastname + ' - ' + el.role;
                let fullLine = liSt + user + liEnd;
                usersHtml += fullLine;
            });
            let html = start + usersHtml + end;
            let pdf = new jsPDF();
            pdf.fromHTML(html, 20, 20);
            pdf.save('Prueba.pdf');
        });
    }
};
HomeSocioComponent = tslib_1.__decorate([
    Component({
        selector: 'app-home-socio',
        templateUrl: './home-socio.component.html',
        styleUrls: ['./home-socio.component.scss']
    })
], HomeSocioComponent);
export { HomeSocioComponent };
//# sourceMappingURL=home-socio.component.js.map