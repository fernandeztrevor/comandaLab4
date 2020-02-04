import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { OrderService } from 'src/app/services/firebase/order.service';
import { TableService } from 'src/app/services/firebase/table.service';
import { Order, OrderState } from 'src/app/models/order';
import { TableState } from 'src/app/models/table';
import { SurveyService } from 'src/app/services/firebase/survey.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Survey } from 'src/app/models/survey';
import { AuthService } from 'src/app/services/authentication/auth.service';
import { User } from 'src/app/models/user';


@Component({
	selector: 'app-search-order',
	templateUrl: './search-order.component.html',
	styleUrls: ['./search-order.component.scss']
})
export class SearchOrderComponent implements OnInit {

	public order: Order;
	public orderID: string;
	public remainingTime: number;
	public alreadyPaid: boolean = false;
	public waitingOrder: boolean = false;

	public surveyForm: FormGroup;
	public surveyDone: boolean = false;

	public user: User;
	public orders: any;

	public file: File = null;

	//public misOrders: string[];

	constructor(private authService: AuthService, private surveyService: SurveyService, private toastr: ToastrService, private orderService: OrderService, private tableService: TableService) { }

	ngOnInit() {
		this.surveyForm = new FormGroup({
			'tableScore': new FormControl(null, [Validators.required, Validators.min(1), Validators.max(10)]),
			'restaurantScore': new FormControl(null, [Validators.required, Validators.min(1), Validators.max(10)]),
			'waiterScore': new FormControl(null, [Validators.required, Validators.min(1), Validators.max(10)]),
			'cookScore': new FormControl(null, [Validators.required, Validators.min(1), Validators.max(10)]),
			'comment': new FormControl(null, [Validators.required]),
			'commentType': new FormControl(null, [Validators.required]),
		})

		setInterval(() => {
			if (this.order) {
				let now = new Date();
				this.remainingTime = new Date(this.order.timeLeft).getTime() - now.getTime();
			}
		}, 10)

		this.authService.GetCurrentUser().then(x => this.user = x);
	}

	public Pay(): void {
		this.order.state = OrderState.paidOut;
		this.orderService.ChangeStatus(OrderState.paidOut, this.order.codeID);
		this.tableService.UpdateStatus(this.order.tableID, TableState.paying)
			.then(() => {
				this.toastr.success('En unos instantes el mozo vendrá a buscar el pago.', 'Hecho!');
				this.alreadyPaid = true;
			})
			.catch(() => {
				this.toastr.error('Se ha producido un error.');
			})
	}

	public Cancel(): void {
		this.order.state = OrderState.cancelled;
		this.order.completed = true;
		this.orderService.ChangeStatus(OrderState.cancelled, this.order.codeID);

	}

	public onFileChanged(event) {
		this.file = event.target.files[0];
	}


	public cambiarImagen() {
		this.orderService.setOrderImage(this.order.codeID, this.file);
	}

	public IsServed(): boolean {
		let served = false;
		if (this.order.state == OrderState.served || this.order.state == OrderState.paidOut)
			served = true;
		return served;
	}

	public FindOrder(): void {
		this.waitingOrder = true;
		this.orderService.GetByCodeID(this.orderID)
			.then(ord => this.order = ord)
			.catch(error => this.toastr.error(error, 'Error'))
			.finally(() => this.waitingOrder = false);
	}

	public FindPending(): void {
		this.waitingOrder = true;
		this.orderService.GetByCodeUser(this.user.email)
			.then(ord => this.order = ord)
			.catch(error => this.toastr.error(error, 'Error'))
			.finally(() => this.waitingOrder = false);
	}

	public CanPayNow(): boolean {
		let can = false;
		if (this.order) {
			if (this.order.state == OrderState.served)
				can = true;
		}
		return can;
	}

	public notCancelled(): boolean {
		let can = false;
		if (this.order) {
			if (this.order.state == OrderState.cancelled || this.order.state == OrderState.paidOut)
				can = true;
		}
		return can;
	}

	public SendAnswers(): void {
		let survey = Survey.Create(
			this.order,
			this.surveyForm.get('tableScore').value,
			this.surveyForm.get('waiterScore').value,
			this.surveyForm.get('restaurantScore').value,
			this.surveyForm.get('cookScore').value,
			this.surveyForm.get('comment').value,
			this.surveyForm.get('commentType').value,
		);

		this.surveyService.Add(survey)
			.then(() => this.toastr.success('Encuesta enviada correctamente!'))
			.catch(() => this.toastr.error('Se ha producido un error al enviar la encuesta.'))
			.finally(() => this.surveyDone = true);
	}



	///////////////////////////
	//public currentOrder: Order;



	public SelectOrder(order: Order): void {
		this.order = order;
	}


}
