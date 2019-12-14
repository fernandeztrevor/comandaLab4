import { Order } from './order';

export class Survey 
{
    public id: string;
    public order: Order;
    public tableScore: number;
    public waiterScore: number;
    public restaurantScore: number;
    public cookScore: number;
    public comment: string;
    public commentType: boolean;

    constructor()
    {
        this.tableScore = 0;
        this.waiterScore = 0;
        this.restaurantScore = 0;
        this.cookScore = 0;
    }

    public static Create(order: Order, table: number, waiter: number, restaurant: number, cook: number, comment: string, commentType: boolean): Survey
    {
        let newSurvey = new Survey();
        newSurvey.order = order;
        newSurvey.tableScore = table;
        newSurvey.waiterScore = waiter;
        newSurvey.restaurantScore = restaurant;
        newSurvey.cookScore = cook;
        newSurvey.comment = comment;
        newSurvey.commentType = commentType;
        return newSurvey;
    }
}