import { Component, OnInit, Input, Output, EventEmitter, OnDestroy } from '@angular/core';
import { Product } from 'src/app/models/product';
import { Subject } from 'rxjs';

@Component({
	selector: 'app-food-card',
	templateUrl: './food-card.component.html',
	styleUrls: ['./food-card.component.scss']
})
export class FoodCardComponent implements OnInit, OnDestroy {

	@Input() product: Product;
	@Input() resetEvent: Subject<void>;
	@Output() added = new EventEmitter<Product>();
	public ordered: boolean;
	public quantity: number;
	private eventSubscriptions: any;

	constructor() 
	{ 
		this.ordered = false;
		this.quantity = 0;
	}

	ngOnInit() 
	{	
		this.eventSubscriptions = this.resetEvent.subscribe(() => {
			this.ordered = false;
			this.quantity = 0;
		})
	}

	ngOnDestroy(): void 
	{
		this.eventSubscriptions.unsubscribe();
	}

	AddToOrder(prod: Product)
	{
		this.ordered = true;
		this.quantity++;
		this.added.emit(prod);
	}

}
