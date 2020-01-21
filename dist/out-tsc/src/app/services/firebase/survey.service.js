import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { CommonHelper } from 'src/app/classes/helpers/common-helper';
let SurveyService = class SurveyService {
    constructor(db) {
        this.db = db;
    }
    GetAll() {
        return this.db.collection('encuestas');
    }
    Add(surv) {
        return new Promise((resolve, reject) => {
            this.db.collection('encuestas').add(CommonHelper.ConvertToObject(surv))
                .then(() => resolve())
                .catch(() => reject());
        });
    }
};
SurveyService = tslib_1.__decorate([
    Injectable({
        providedIn: 'root'
    })
], SurveyService);
export { SurveyService };
//# sourceMappingURL=survey.service.js.map