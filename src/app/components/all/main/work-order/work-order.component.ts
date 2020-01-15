import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { Order, OrderState } from 'src/app/models/order';
import { Product, FoodState, Cook } from 'src/app/models/product';
import { User } from 'src/app/models/user';
import { AuthService } from 'src/app/services/authentication/auth.service';
import { OrderService } from 'src/app/services/firebase/order.service';
import { ToastrService } from 'ngx-toastr';
import { LogService } from 'src/app/services/firebase/log.service';
import { TargetMovimiento, TipoMovimiento } from 'src/app/models/log';

@Component({
	selector: 'app-work-order',
	templateUrl: './work-order.component.html',
	styleUrls: ['./work-order.component.scss']
})
export class WorkOrderComponent implements OnInit, OnChanges {

	@Input() order: Order;

	public selectedItem: Product;
	public me: User;
	public addedTime: number;
	public remainingTime: number;

	constructor(private authService: AuthService, private orderService: OrderService, private toastr: ToastrService, private logService: LogService) { }

	ngOnInit() {
		this.authService.GetCurrentUser().then(user => this.me = user);

		setInterval(() => {
			if (this.order) {
				let now = new Date();
				this.remainingTime = new Date(this.order.timeLeft).getTime() - now.getTime();
				if (this.remainingTime < 0) {
					this.order.delayed = this.remainingTime;
					this.orderService.Update(this.order);
				}
			}
		}, 10)
	}

	ngOnChanges() {
		this.selectedItem = null;
	}

	public IsPending(): boolean {
		let is = false;
		if (this.selectedItem.state == FoodState.pending)
			is = true;
		return is;
	}

	public IsCooking(): boolean {
		let is = false;
		if (this.selectedItem.state == FoodState.preparing)
			is = true;
		return is;
	}

	public IsAvailableForMe(): boolean {
		let available = false;
		if (this.selectedItem) {
			let myRole: string = this.me.role;
			if (this.selectedItem.cook == myRole as Cook && this.selectedItem.state != FoodState.finished) {
				available = true;
			}
		}
		return available;
	}

	public SelectItem(item: Product): void {
		this.selectedItem = item;
	}

	public BeginCook(withTime: boolean): void {
		if (withTime)
			this.AddMoreTime(); // Add more time
		else
			this.order = Object.assign(new Order(), this.order);

		this.AssignToMe();
		this.selectedItem.state = FoodState.preparing;
		this.order.UpdateOrderState();
		let mensaje: string = `El usuario ${this.me.email} (${this.me.role}) comenzó a preparar ${this.selectedItem.name} del pedido ${this.order.codeID}`;
		this.logService.persistirMovimiento(this.me, TargetMovimiento.pedido, TipoMovimiento.preparacion, mensaje);
		this.orderService.Update(this.order)
			.then(() => {
				this.toastr.success('El pedido se actualizó con éxito', 'Hecho!');
			})
			.catch(() => {
				this.toastr.error('Se ha producido un error.', 'Error');
			});
	}

	public ReadyToServe(): void {
		this.selectedItem.state = FoodState.finished;
		this.order = Object.assign(new Order(), this.order);
		this.order.UpdateOrderState();
		let mensaje: string = `El usuario ${this.me.email} (${this.me.role})  terminó ${this.selectedItem.name} del pedido ${this.order.codeID}`;
		this.logService.persistirMovimiento(this.me, TargetMovimiento.pedido, TipoMovimiento.finalizacion, mensaje);
		this.orderService.Update(this.order)
			.then(() => {
				this.toastr.success('El pedido se actualizó con éxito', 'Hecho!');
			})
			.catch(() => {
				this.toastr.error('Se ha producido un error.', 'Error');
			});
	}

	private AssignToMe(): void {
		this.selectedItem.worker = this.me;
	}

	private AddMoreTime(): void {
		this.order = Object.assign(new Order(), this.order);
		this.order.AddMinutes(this.addedTime);
		this.addedTime = null;
	}

}
