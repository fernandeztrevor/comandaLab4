import { FoodState } from './product';
import { CommonHelper } from '../classes/helpers/common-helper';
export class Order {
    constructor() {
        this.codeID = Order.GenerateCodeID();
        this.items = [];
        this.totalPrice = 0;
        this.tableID = '';
        this.state = OrderState.pending;
        this.timeLeft = undefined;
        this.timestamp = Date.now();
        this.completed = false;
        this.delayed = null;
    }
    CompleteOrder() {
        this.completed = true;
        this.state = OrderState.served;
    }
    CalculateTimeInMinutes() {
        let minutes = 0;
        let difference = new Date(this.timeLeft).getTime() - (new Date()).getTime();
        minutes = Math.floor(difference / (1000 * 60));
        return minutes;
    }
    AddMinutes(minutes) {
        let theDate;
        if (!this.timeLeft)
            theDate = new Date();
        else
            theDate = new Date(this.timeLeft);
        let time = theDate.getTime() + Math.floor(minutes * (1000 * 60));
        let date = new Date(time);
        this.timeLeft = CommonHelper.ConvertDate(date);
    }
    CalculateTotal() {
        this.totalPrice = this.items.reduce((before, actual) => {
            return before + actual.price;
        }, 0);
    }
    UpdateOrderState() {
        if (this.IsFinished())
            this.state = OrderState.readyToServe;
        else if (this.IsBeingPrepared())
            this.state = OrderState.cooking;
        else
            this.state = OrderState.pending;
    }
    static Create(tableID) {
        let newOrder = new Order();
        newOrder.tableID = tableID;
        return newOrder;
    }
    CheckOrder() {
        let isValid = false;
        if ((this.codeID != '' && this.codeID != undefined) &&
            this.items.length > 0 &&
            this.totalPrice > 0 &&
            (this.tableID != '' && this.tableID != undefined) &&
            this.state != undefined &&
            (this.timestamp != undefined && this.timestamp != 0))
            isValid = true;
        return isValid;
    }
    static GenerateCodeID() {
        let code = '';
        let now = new Date();
        code += now.getDate();
        code += now.getHours();
        code += now.getMinutes();
        let number = Math.floor((Math.random() * 5) + 1);
        switch (number) {
            case 1:
                code += 'A';
                break;
            case 2:
                code += 'B';
                break;
            case 3:
                code += 'C';
                break;
            case 4:
                code += 'D';
                break;
            default:
                code += 'E';
                break;
        }
        return code;
    }
    IsBeingPrepared() {
        let isBeingPrepared = false;
        this.items.forEach(el => {
            if (el.state == FoodState.preparing)
                isBeingPrepared = true;
        });
        return isBeingPrepared;
    }
    IsFinished() {
        let finished = true;
        this.items.forEach(el => {
            if (el.state != FoodState.finished)
                finished = false;
        });
        return finished;
    }
}
export var OrderState;
(function (OrderState) {
    OrderState["pending"] = "Pendiente";
    OrderState["cooking"] = "Cocin\u00E1ndose";
    OrderState["readyToServe"] = "Listo para servir";
    OrderState["served"] = "Servido";
    OrderState["paidOut"] = "Pagado";
    OrderState["cancelled"] = "Cancelado";
})(OrderState || (OrderState = {}));
//# sourceMappingURL=order.js.map