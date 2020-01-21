import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { Role } from 'src/app/models/user';
let RedirectComponent = class RedirectComponent {
    constructor(authService, router) {
        this.authService = authService;
        this.router = router;
    }
    ngOnInit() {
        this.authService.GetCurrentUser().then(user => {
            switch (user.role) {
                case Role.cliente:
                    this.router.navigate(['/cliente']);
                    break;
                case Role.bartender:
                    this.router.navigate(['/bartender']);
                    break;
                case Role.cocinero:
                    this.router.navigate(['/cocinero']);
                    break;
                case Role.cervecero:
                    this.router.navigate(['/cervecero']);
                    break;
                case Role.mozo:
                    this.router.navigate(['/mozo']);
                    break;
                case Role.socio:
                    this.router.navigate(['/socio']);
                    break;
            }
        })
            .catch(() => {
            this.router.navigate(['/app/login']);
        });
    }
};
RedirectComponent = tslib_1.__decorate([
    Component({
        selector: 'app-redirect',
        templateUrl: './redirect.component.html',
        styleUrls: ['./redirect.component.scss']
    })
], RedirectComponent);
export { RedirectComponent };
//# sourceMappingURL=redirect.component.js.map