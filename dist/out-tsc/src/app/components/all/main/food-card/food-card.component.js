import * as tslib_1 from "tslib";
import { Component, Input, Output, EventEmitter } from '@angular/core';
let FoodCardComponent = class FoodCardComponent {
    constructor() {
        this.added = new EventEmitter();
        this.ordered = false;
        this.quantity = 0;
    }
    ngOnInit() {
        this.eventSubscriptions = this.resetEvent.subscribe(() => {
            this.ordered = false;
            this.quantity = 0;
        });
    }
    ngOnDestroy() {
        this.eventSubscriptions.unsubscribe();
    }
    AddToOrder(prod) {
        this.ordered = true;
        this.quantity++;
        this.added.emit(prod);
    }
};
tslib_1.__decorate([
    Input()
], FoodCardComponent.prototype, "product", void 0);
tslib_1.__decorate([
    Input()
], FoodCardComponent.prototype, "resetEvent", void 0);
tslib_1.__decorate([
    Output()
], FoodCardComponent.prototype, "added", void 0);
FoodCardComponent = tslib_1.__decorate([
    Component({
        selector: 'app-food-card',
        templateUrl: './food-card.component.html',
        styleUrls: ['./food-card.component.scss']
    })
], FoodCardComponent);
export { FoodCardComponent };
//# sourceMappingURL=food-card.component.js.map