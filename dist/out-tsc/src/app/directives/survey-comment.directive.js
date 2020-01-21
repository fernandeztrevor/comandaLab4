import * as tslib_1 from "tslib";
import { Directive, Input } from '@angular/core';
let SurveyCommentDirective = class SurveyCommentDirective {
    constructor(el) {
        this.el = el;
    }
    ngOnChanges() {
        if (this.isIcon) {
            if (this.isPositive)
                this.el.nativeElement.innerHTML = '<i class="fas fa-check-circle" style="color: green"></i>';
            else
                this.el.nativeElement.innerHTML = '<i class="fas fa-exclamation" style="color: red"></i>';
        }
        else {
            if (this.isPositive)
                this.el.nativeElement.innerHTML = 'El comentario dado por el cliente fue positivo.';
            else
                this.el.nativeElement.innerHTML = 'El comentario dado por el cliente fue negativo.';
        }
    }
};
tslib_1.__decorate([
    Input('surveyComment')
], SurveyCommentDirective.prototype, "isPositive", void 0);
tslib_1.__decorate([
    Input('isIcon')
], SurveyCommentDirective.prototype, "isIcon", void 0);
SurveyCommentDirective = tslib_1.__decorate([
    Directive({
        selector: '[surveyComment]'
    })
], SurveyCommentDirective);
export { SurveyCommentDirective };
//# sourceMappingURL=survey-comment.directive.js.map