export class Survey {
    constructor() {
        this.tableScore = 0;
        this.waiterScore = 0;
        this.restaurantScore = 0;
        this.cookScore = 0;
    }
    static Create(order, table, waiter, restaurant, cook, comment, commentType) {
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
//# sourceMappingURL=survey.js.map