import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/firebase/user.service';
import { OrderService } from 'src/app/services/firebase/order.service';
import * as jsPDF from 'jspdf';
import { ToastrService } from 'ngx-toastr';

@Component({
	selector: 'app-home-socio',
	templateUrl: './home-socio.component.html',
	styleUrls: ['./home-socio.component.scss']
})
export class HomeSocioComponent implements OnInit {

	public changeRoleEmail: string;
	public changeRoleNewRole: string = 'socio';

	constructor(private userService: UserService, private orderService: OrderService, private toastr: ToastrService) {}

	ngOnInit() {
	}

	public ChangeRole(): void
	{
		this.userService.SetRole(this.changeRoleEmail, this.changeRoleNewRole);
		this.toastr.info('El rol se ha cambiado correctamente!');
	}    

	public GenerateCSV(): void
	{
		this.toastr.info('Generando la facturación...');

		this.orderService.GetAllCompletedOrders_InArray().then(orders => {
			let data: string[][] = [];
			orders.forEach(ord => {
				data.push(
					[ord.timeLeft, 
					ord.codeID,
					ord.client.email, 
					ord.waiter.name + ' ' + ord.waiter.lastname, 
					'$' + ord.totalPrice]);
			})

			let csvData = 'Fecha,Pedido,Cliente,Mozo,Importe\n';
			data.forEach(row => {
				csvData += row.join(',');
				csvData += '\n';
			});

			let file = new Blob([csvData], {type: 'text/csv'});
			let fileUrl = URL.createObjectURL(file);
			let hiddenEl = document.createElement('a');
			hiddenEl.href = fileUrl;
			hiddenEl.target = '_blank';
			hiddenEl.download = 'Facturacion.csv';
			hiddenEl.click();
		})
	}

	public GeneratePDF(): void
	{
		this.toastr.info('Generando el listado de usuarios...');

		this.userService.GetAll_InArray().then(users => {

			let start = '<div style="text-align: center"><h1>Listado de usuarios</h1><hr><ul>'
			let usersHtml = '';
			let end = '</ul></div>';

			users.forEach(el => {
				let liSt: string = '<li>';
				let liEnd: string = '</li>';
				let user: string = el.email + ' - ' + el.name + ' ' + el.lastname + ' - ' + el.role;
				let fullLine = liSt + user + liEnd;
				usersHtml += fullLine;
			});

			let html = start + usersHtml + end;

			let pdf = new jsPDF();
			pdf.fromHTML(html, 20, 20);

			pdf.save('Prueba.pdf');
		})
	}
}
