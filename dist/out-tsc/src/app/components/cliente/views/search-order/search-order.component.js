import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { OrderState } from 'src/app/models/order';
import { TableState } from 'src/app/models/table';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Survey } from 'src/app/models/survey';
let SearchOrderComponent = class SearchOrderComponent {
    //public misOrders: string[];
    constructor(authService, surveyService, toastr, orderService, tableService) {
        this.authService = authService;
        this.surveyService = surveyService;
        this.toastr = toastr;
        this.orderService = orderService;
        this.tableService = tableService;
        this.alreadyPaid = false;
        this.waitingOrder = false;
        this.surveyDone = false;
    }
    ngOnInit() {
        this.surveyForm = new FormGroup({
            'tableScore': new FormControl(null, [Validators.required, Validators.min(1), Validators.max(10)]),
            'restaurantScore': new FormControl(null, [Validators.required, Validators.min(1), Validators.max(10)]),
            'waiterScore': new FormControl(null, [Validators.required, Validators.min(1), Validators.max(10)]),
            'cookScore': new FormControl(null, [Validators.required, Validators.min(1), Validators.max(10)]),
            'comment': new FormControl(null, [Validators.required]),
            'commentType': new FormControl(null, [Validators.required]),
        });
        setInterval(() => {
            if (this.order) {
                let now = new Date();
                this.remainingTime = new Date(this.order.timeLeft).getTime() - now.getTime();
            }
        }, 10);
        this.authService.GetCurrentUser().then(x => this.user = x);
    }
    Pay() {
        this.order.state = OrderState.paidOut;
        this.orderService.ChangeStatus(OrderState.paidOut, this.order.codeID);
        this.tableService.UpdateStatus(this.order.tableID, TableState.paying)
            .then(() => {
            this.toastr.success('En unos instantes el mozo vendrá a buscar el pago.', 'Hecho!');
            this.alreadyPaid = true;
        })
            .catch(() => {
            this.toastr.error('Se ha producido un error.');
        });
    }
    Cancel() {
        this.order.state = OrderState.cancelled;
        this.orderService.ChangeStatus(OrderState.cancelled, this.order.codeID);
    }
    IsServed() {
        let served = false;
        if (this.order.state == OrderState.served || this.order.state == OrderState.paidOut)
            served = true;
        return served;
    }
    FindOrder() {
        this.waitingOrder = true;
        this.orderService.GetByCodeID(this.orderID)
            .then(ord => this.order = ord)
            .catch(error => this.toastr.error(error, 'Error'))
            .finally(() => this.waitingOrder = false);
    }
    FindPending() {
        this.waitingOrder = true;
        this.orderService.GetByCodeUser(this.user.email)
            .then(ord => this.order = ord)
            .catch(error => this.toastr.error(error, 'Error'))
            .finally(() => this.waitingOrder = false);
    }
    CanPayNow() {
        let can = false;
        if (this.order) {
            if (this.order.state == OrderState.served)
                can = true;
        }
        return can;
    }
    notCancelled() {
        let can = false;
        if (this.order) {
            if (this.order.state == OrderState.cancelled || this.order.state == OrderState.paidOut)
                can = true;
        }
        return can;
    }
    SendAnswers() {
        let survey = Survey.Create(this.order, this.surveyForm.get('tableScore').value, this.surveyForm.get('waiterScore').value, this.surveyForm.get('restaurantScore').value, this.surveyForm.get('cookScore').value, this.surveyForm.get('comment').value, this.surveyForm.get('commentType').value);
        this.surveyService.Add(survey)
            .then(() => this.toastr.success('Encuesta enviada correctamente!'))
            .catch(() => this.toastr.error('Se ha producido un error al enviar la encuesta.'))
            .finally(() => this.surveyDone = true);
    }
    ///////////////////////////
    //public currentOrder: Order;
    SelectOrder(order) {
        this.order = order;
    }
};
SearchOrderComponent = tslib_1.__decorate([
    Component({
        selector: 'app-search-order',
        templateUrl: './search-order.component.html',
        styleUrls: ['./search-order.component.scss']
    })
], SearchOrderComponent);
export { SearchOrderComponent };
//# sourceMappingURL=search-order.component.js.map