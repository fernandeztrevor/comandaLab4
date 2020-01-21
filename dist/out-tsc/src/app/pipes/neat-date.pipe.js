import * as tslib_1 from "tslib";
import { Pipe } from '@angular/core';
let NeatDatePipe = class NeatDatePipe {
    transform(value) {
        if (value == undefined || value == '')
            return 'No se registró la fecha.';
        let fullDate = value.split(" ")[0];
        let splittedDate = fullDate.split("-");
        let day = splittedDate[2];
        let month = splittedDate[1];
        let year = splittedDate[0];
        switch (day) {
            case '1':
            case '2':
            case '3':
            case '4':
            case '5':
            case '6':
            case '7':
            case '8':
            case '9':
                day = '0' + day;
                break;
            default:
                break;
        }
        let finalDate = day + '-' + month + '-' + year;
        return finalDate;
    }
};
NeatDatePipe = tslib_1.__decorate([
    Pipe({
        name: 'neatDate'
    })
], NeatDatePipe);
export { NeatDatePipe };
//# sourceMappingURL=neat-date.pipe.js.map