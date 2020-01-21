import * as tslib_1 from "tslib";
import { Pipe } from '@angular/core';
let SortPipePipe = class SortPipePipe {
    transform(array, args) {
        return array.sort((a, b) => {
            if (a[args] < b[args]) {
                return -1;
            }
            else if (a[args] > b[args]) {
                return 1;
            }
            else {
                return 0;
            }
        });
    }
};
SortPipePipe = tslib_1.__decorate([
    Pipe({
        name: 'sortPipe'
    })
], SortPipePipe);
export { SortPipePipe };
//# sourceMappingURL=sort-pipe.pipe.js.map