import { Component, OnInit } from '@angular/core';
import { Order } from 'src/app/models/order';

@Component({
	selector: 'app-home-mozo',
	templateUrl: './home-mozo.component.html',
	styleUrls: ['./home-mozo.component.scss']
})
export class HomeMozoComponent implements OnInit {

	public currentOrder: Order;

	constructor() { }

	ngOnInit() {
	}

	public SelectOrder(order: Order): void
	{
		this.currentOrder = order;
	}

}
