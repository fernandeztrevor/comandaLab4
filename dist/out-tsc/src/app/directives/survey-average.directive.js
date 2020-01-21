import * as tslib_1 from "tslib";
import { Directive, Input } from '@angular/core';
let SurveyAverageDirective = class SurveyAverageDirective {
    constructor(el) {
        this.el = el;
    }
    ngOnInit() {
        if (!this.returnAvg)
            this.Paint();
    }
    ngOnChanges() {
        if (this.returnAvg)
            this.el.nativeElement.innerHTML = this.CalculateAverage().toFixed(2);
    }
    CalculateAverage() {
        return (this.survey.tableScore +
            this.survey.restaurantScore +
            this.survey.waiterScore +
            this.survey.cookScore) / 4;
    }
    Paint() {
        let avg = this.CalculateAverage();
        if (avg < 4)
            this.el.nativeElement.style.color = 'red';
        else if (avg >= 4 && avg < 7)
            this.el.nativeElement.style.color = 'yellow';
        else
            this.el.nativeElement.style.color = 'green';
    }
};
tslib_1.__decorate([
    Input('surveyAverage')
], SurveyAverageDirective.prototype, "survey", void 0);
tslib_1.__decorate([
    Input('returnAverage')
], SurveyAverageDirective.prototype, "returnAvg", void 0);
SurveyAverageDirective = tslib_1.__decorate([
    Directive({
        selector: '[surveyAverage]'
    })
], SurveyAverageDirective);
export { SurveyAverageDirective };
//# sourceMappingURL=survey-average.directive.js.map