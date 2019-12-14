import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';
import { Order, OrderState } from 'src/app/models/order';
import { Product } from 'src/app/models/product';
import { OrderService } from 'src/app/services/firebase/order.service';
import { ToastrService } from 'ngx-toastr';
import { TableService } from 'src/app/services/firebase/table.service';
import { TableState } from 'src/app/models/table';

@Component({
	selector: 'app-select-order',
	templateUrl: './select-order.component.html',
	styleUrls: ['./select-order.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class SelectOrderComponent implements OnInit {

	@Input() order: Order;

	public selectedItem: Product;
	public remainingTime: number;

	constructor(private orderService: OrderService, private toastr: ToastrService, private tableService: TableService) { }

	ngOnInit() {
		setInterval(() => {
			if(this.order)
			{
				let now = new Date();
				this.remainingTime = new Date(this.order.timeLeft).getTime() - now.getTime();
			}
		}, 10)
	}

	public CanBeServed(): boolean
	{
		let can = false;
		if(this.order.state == OrderState.readyToServe)
			can = true;
		return can;
	}

	public SelectItem(item: Product): void
	{
		this.selectedItem = item;
	}

	public CompleteOrder(): void
	{
		this.order = Object.assign(new Order(), this.order);
		this.tableService.UpdateStatus(this.order.tableID, TableState.eating);
		this.order.CompleteOrder();
		this.orderService.Update(this.order)
			.then(() => {
				this.toastr.success('Orden servida.');
			})
			.catch(() => {
				this.toastr.error('Hubo un error al servir la orden.', 'Error');
			})
	}
}
