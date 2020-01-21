import * as tslib_1 from "tslib";
import { Directive, Input } from '@angular/core';
import { environment } from '../../environments/environment';
let IsProdDirective = class IsProdDirective {
    constructor(el) {
        this.el = el;
    }
    ngOnInit() {
        if (environment.production)
            this.el.nativeElement.style.display = 'none';
    }
};
tslib_1.__decorate([
    Input('isProd')
], IsProdDirective.prototype, "nothing", void 0);
IsProdDirective = tslib_1.__decorate([
    Directive({
        selector: '[isProd]'
    })
], IsProdDirective);
export { IsProdDirective };
//# sourceMappingURL=is-prod.directive.js.map