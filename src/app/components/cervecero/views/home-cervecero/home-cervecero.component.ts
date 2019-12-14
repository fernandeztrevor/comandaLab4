import { Component, OnInit } from '@angular/core';
import { Order } from 'src/app/models/order';

@Component({
	selector: 'app-home-cervecero',
	templateUrl: './home-cervecero.component.html',
	styleUrls: ['./home-cervecero.component.scss']
})
export class HomeCerveceroComponent implements OnInit {

	public currentOrder: Order;

	constructor() { }

	ngOnInit() {
	}

	public SelectOrder(order: Order): void
	{
		this.currentOrder = order;
	}

}
