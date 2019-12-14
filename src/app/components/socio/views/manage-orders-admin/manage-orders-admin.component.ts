import { Component, OnInit } from '@angular/core';
import { Order } from 'src/app/models/order';

@Component({
	selector: 'app-manage-orders-admin',
	templateUrl: './manage-orders-admin.component.html',
	styleUrls: ['./manage-orders-admin.component.scss']
})
export class ManageOrdersAdminComponent implements OnInit {
	
	public currentOrder: Order;

	constructor() { }

	ngOnInit() {
	}

	public SelectOrder(order: Order): void
	{
		this.currentOrder = order;
	}
}
