import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { Order } from 'src/app/models/order';
import { OrderService } from 'src/app/services/firebase/order.service';
import { User, Role } from 'src/app/models/user';
import { AuthService } from 'src/app/services/authentication/auth.service';
import { Cook } from 'src/app/models/product';

@Component({
	selector: 'app-order-list',
	templateUrl: './order-list.component.html',
	styleUrls: ['./order-list.component.scss']
})
export class OrderListComponent implements OnInit {

	@Input() role: Role;
	@Output() orderSelected = new EventEmitter<Order>();

	public orders: any;
	public me: User;

	constructor(private orderService: OrderService, private authService: AuthService) { }

	ngOnInit() {
		switch(this.role)
		{
			case Role.mozo:
				this.authService.GetCurrentUser().then(user => this.me = user).then(() => {
					this.orders = this.orderService.GetAllByWaiterOrderByTime(this.me.email).valueChanges();
				});
				break;
			case Role.cervecero:
			case Role.bartender:
			case Role.cocinero:
				const cook: string = this.role;
				this.orders = this.orderService.GetAllByCook(cook as Cook);
				break;
			case Role.socio:
				this.orders = this.orderService.GetAllOrderByTime().valueChanges();
				break;
		}
	}

	public SelectOrder(order: Order): void
	{
		this.orderSelected.emit(order);
	}

}
