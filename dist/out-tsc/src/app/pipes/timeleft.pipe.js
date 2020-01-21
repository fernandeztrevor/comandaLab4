import * as tslib_1 from "tslib";
import { Pipe } from '@angular/core';
let TimeleftPipe = class TimeleftPipe {
    transform(value) {
        if (value == undefined || isNaN(value) || value == 0)
            return 'No tiene un tiempo estimado asignado.';
        let diff = Math.floor(value / (1000 * 60));
        if (diff < 0)
            return 'Pasado por ' + (diff * -1) + ' minutos.';
        else
            return diff + ' minutos.';
    }
};
TimeleftPipe = tslib_1.__decorate([
    Pipe({
        name: 'timeleft'
    })
], TimeleftPipe);
export { TimeleftPipe };
//# sourceMappingURL=timeleft.pipe.js.map