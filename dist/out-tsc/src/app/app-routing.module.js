import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MainSocioComponent } from './components/socio/views/main-socio/main-socio.component';
import { HomeSocioComponent } from './components/socio/views/home-socio/home-socio.component';
import { MainMozoComponent } from './components/mozo/views/main-mozo/main-mozo.component';
import { HomeMozoComponent } from './components/mozo/views/home-mozo/home-mozo.component';
import { LoginComponent } from './components/all/views/login/login.component';
import { RegisterComponent } from './components/all/views/register/register.component';
import { MainGeneralComponent } from './components/all/views/main-general/main-general.component';
import { ErrorComponent } from './components/all/views/error/error.component';
import { MainClienteComponent } from './components/cliente/views/main-cliente/main-cliente.component';
import { HomeClienteComponent } from './components/cliente/views/home-cliente/home-cliente.component';
import { AuthGuard } from './guards/auth.guard';
import { ManageTablesComponent } from './components/mozo/views/manage-tables/manage-tables.component';
import { MainCerveceroComponent } from './components/cervecero/views/main-cervecero/main-cervecero.component';
import { HomeCerveceroComponent } from './components/cervecero/views/home-cervecero/home-cervecero.component';
import { MainCocineroComponent } from './components/cocinero/views/main-cocinero/main-cocinero.component';
import { HomeCocineroComponent } from './components/cocinero/views/home-cocinero/home-cocinero.component';
import { MainBartenderComponent } from './components/bartender/views/main-bartender/main-bartender.component';
import { HomeBartenderComponent } from './components/bartender/views/home-bartender/home-bartender.component';
import { SearchOrderComponent } from './components/cliente/views/search-order/search-order.component';
import { RedirectComponent } from './components/all/views/redirect/redirect.component';
import { ManageOrdersAdminComponent } from './components/socio/views/manage-orders-admin/manage-orders-admin.component';
import { ManageTablesAdminComponent } from './components/socio/views/manage-tables-admin/manage-tables-admin.component';
import { ProfileComponent } from './components/all/views/profile/profile.component';
import { SurveyTableComponent } from './components/socio/views/survey-table/survey-table.component';
import { ManageProductsAdminComponent } from './components/socio/views/manage-products-admin/manage-products-admin.component';
import { ManageProductsCerveceroComponent } from './components/cervecero/views/manage-products-cervecero/manage-products-cervecero.component';
import { ManageProductsCocineroComponent } from './components/cocinero/views/manage-products-cocinero/manage-products-cocinero.component';
import { ManageProductsBartenderComponent } from './components/bartender/views/manage-products-bartender/manage-products-bartender.component';
import { ManageUsersComponent } from './components/socio/views/manage-users/manage-users.component';
import { ViewLogsComponent } from './components/socio/views/view-logs/view-logs.component';
import { ViewOrdersStatsComponent } from './components/socio/views/view-orders-stats/view-orders-stats.component';
import { ViewTablesStatsComponent } from './components/socio/views/view-tables-stats/view-tables-stats.component';
const routes = [
    { path: '', component: RedirectComponent },
    { path: 'app', component: MainGeneralComponent,
        children: [
            { path: 'login', component: LoginComponent },
            { path: 'register', component: RegisterComponent }
        ] },
    { path: 'socio', component: MainSocioComponent,
        children: [
            { path: '', component: HomeSocioComponent },
            { path: 'tables', component: ManageTablesAdminComponent },
            { path: 'orders', component: ManageOrdersAdminComponent },
            { path: 'profile', component: ProfileComponent },
            { path: 'surveys', component: SurveyTableComponent },
            { path: 'products', component: ManageProductsAdminComponent },
            { path: 'users', component: ManageUsersComponent },
            { path: 'logs', component: ViewLogsComponent },
            { path: 'orderStats', component: ViewOrdersStatsComponent },
            { path: 'tableStats', component: ViewTablesStatsComponent },
        ],
        canActivate: [AuthGuard] },
    { path: 'mozo', component: MainMozoComponent,
        children: [
            { path: '', component: HomeMozoComponent },
            { path: 'tables', component: ManageTablesComponent },
            { path: 'profile', component: ProfileComponent },
        ],
        canActivate: [AuthGuard] },
    { path: 'cervecero', component: MainCerveceroComponent,
        children: [
            { path: '', component: HomeCerveceroComponent },
            { path: 'profile', component: ProfileComponent },
            { path: 'products', component: ManageProductsCerveceroComponent }
        ],
        canActivate: [AuthGuard] },
    { path: 'cocinero', component: MainCocineroComponent,
        children: [
            { path: '', component: HomeCocineroComponent },
            { path: 'profile', component: ProfileComponent },
            { path: 'products', component: ManageProductsCocineroComponent }
        ],
        canActivate: [AuthGuard] },
    { path: 'bartender', component: MainBartenderComponent,
        children: [
            { path: '', component: HomeBartenderComponent },
            { path: 'profile', component: ProfileComponent },
            { path: 'products', component: ManageProductsBartenderComponent }
        ],
        canActivate: [AuthGuard] },
    { path: 'cliente', component: MainClienteComponent,
        children: [
            { path: '', component: HomeClienteComponent },
            { path: 'buscar', component: SearchOrderComponent },
            { path: 'profile', component: ProfileComponent },
        ],
        canActivate: [AuthGuard] },
    { path: '**', component: ErrorComponent }
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = tslib_1.__decorate([
    NgModule({
        imports: [RouterModule.forRoot(routes)],
        exports: [RouterModule]
    })
], AppRoutingModule);
export { AppRoutingModule };
//# sourceMappingURL=app-routing.module.js.map