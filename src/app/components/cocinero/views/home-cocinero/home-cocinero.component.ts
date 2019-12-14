import { Component, OnInit } from '@angular/core';
import { Order } from 'src/app/models/order';

@Component({
	selector: 'app-home-cocinero',
	templateUrl: './home-cocinero.component.html',
	styleUrls: ['./home-cocinero.component.scss']
})
export class HomeCocineroComponent implements OnInit {

	public currentOrder: Order;

	constructor() { }

	ngOnInit() {
	}

	public SelectOrder(order: Order): void
	{
		this.currentOrder = order;
	}

}
