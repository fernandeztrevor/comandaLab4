import { Product, FoodState } from './product';
import { User } from './user';
import { CommonHelper } from '../classes/helpers/common-helper';

export class Order 
{
    public id: string;
    public codeID: string;
    public items: Product[];
    public totalPrice: number;
    public tableID: string;
    public client: User;
    public waiter: User;
    public state: OrderState;
    public timeLeft: string;
    public timestamp: number;
    public completed: boolean;
    public delayed: number;

    constructor()
    {
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

    public CompleteOrder(): void
    {
        this.completed = true;
        this.state = OrderState.served;
    }

    public CalculateTimeInMinutes(): number
    {
        let minutes = 0;
        let difference = new Date(this.timeLeft).getTime() - (new Date()).getTime();
        minutes = Math.floor(difference/(1000*60));
        return minutes;
    }

    public AddMinutes(minutes: number): void
    {
        let theDate: Date;

        if(!this.timeLeft)
            theDate = new Date();
        else
            theDate = new Date(this.timeLeft);

        let time = theDate.getTime() + Math.floor(minutes*(1000*60));
        let date = new Date(time);
        this.timeLeft = CommonHelper.ConvertDate(date); 
    }

    public CalculateTotal(): void
    {
        this.totalPrice = this.items.reduce((before, actual) => {
            return before  + actual.price ;
        }, 0);
    }

    public UpdateOrderState(): void
    {
        if(this.IsFinished())
            this.state = OrderState.readyToServe;
        else if(this.IsBeingPrepared())
            this.state = OrderState.cooking;
        else
            this.state = OrderState.pending;
    }

    public static Create(tableID: string): Order
    {
        let newOrder = new Order();
        newOrder.tableID = tableID;
        return newOrder;
    }

    public CheckOrder(): boolean
    {
        let isValid = false;

        if((this.codeID != '' && this.codeID != undefined) &&
            this.items.length > 0 &&
            this.totalPrice > 0 &&
            (this.tableID != '' && this.tableID != undefined) &&
            this.state != undefined &&
            (this.timestamp != undefined && this.timestamp != 0))
            isValid = true;

        return isValid;
    }

    private static GenerateCodeID(): string
    {
        let code = '';
        let now = new Date();
        code += now.getDate();
        code += now.getHours();
        code += now.getMinutes();
        let number = Math.floor((Math.random() * 5) + 1)
        switch(number)
        {
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

    private IsBeingPrepared(): boolean
    {
        let isBeingPrepared = false;
        this.items.forEach(el => {
            if(el.state == FoodState.preparing)
                isBeingPrepared = true;
        });
        return isBeingPrepared;
    }

    private IsFinished(): boolean
    {
        let finished = true;
        this.items.forEach(el => {
            if(el.state != FoodState.finished)
                finished = false;
        });
        return finished;
    }
}

export enum OrderState
{
    pending = 'Pendiente',
    cooking = 'Cocinándose',
    readyToServe = 'Listo para servir',
    served = 'Servido',
    paidOut = 'Pagado',
    cancelled = 'Cancelado'
}