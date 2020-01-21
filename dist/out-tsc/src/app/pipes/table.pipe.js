import * as tslib_1 from "tslib";
import { Pipe } from '@angular/core';
let TablePipe = class TablePipe {
    transform(value) {
        switch (value) {
            case 'AW':
            case 'AM':
            case 'BW':
            case 'BM':
            case 'CW':
            case 'CM':
            case 'DW':
            case 'DM':
                return 'Mesa ' + value;
            default:
                return 'No hay mesa';
        }
    }
};
TablePipe = tslib_1.__decorate([
    Pipe({
        name: 'table'
    })
], TablePipe);
export { TablePipe };
//# sourceMappingURL=table.pipe.js.map