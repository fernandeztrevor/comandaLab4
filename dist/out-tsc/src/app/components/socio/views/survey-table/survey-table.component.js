import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
let SurveyTableComponent = class SurveyTableComponent {
    constructor(surveyService) {
        this.surveyService = surveyService;
    }
    ngOnInit() {
        this.surveys = this.surveyService.GetAll().valueChanges();
    }
    SelectSurvey(surv) {
        this.survey = surv;
    }
};
SurveyTableComponent = tslib_1.__decorate([
    Component({
        selector: 'app-survey-table',
        templateUrl: './survey-table.component.html',
        styleUrls: ['./survey-table.component.scss']
    })
], SurveyTableComponent);
export { SurveyTableComponent };
//# sourceMappingURL=survey-table.component.js.map