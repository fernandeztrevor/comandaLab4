import { Component, OnInit } from '@angular/core';
import { Order } from 'src/app/models/order';

@Component({
  	selector: 'app-home-bartender',
	templateUrl: './home-bartender.component.html',
	styleUrls: ['./home-bartender.component.scss']
})
export class HomeBartenderComponent implements OnInit {

	public currentOrder: Order;

	constructor() { }

	ngOnInit() {
	}

	public SelectOrder(order: Order): void
	{
		this.currentOrder = order;
	}

}
