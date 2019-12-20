import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
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


const routes: Routes = [

	{path: '', component: RedirectComponent},
  
  	{path: 'app', component: MainGeneralComponent,
		children:	
		[
      		{path: 'login', component: LoginComponent},
      		{path: 'register', component: RegisterComponent}
		]},
		
  	{path: 'socio', component: MainSocioComponent,
      	children:
		[
			{path: '', component: HomeSocioComponent},
			{path: 'tables', component: ManageTablesAdminComponent},
			{path: 'orders', component: ManageOrdersAdminComponent},
			{path: 'profile', component: ProfileComponent},
			{path: 'surveys', component: SurveyTableComponent},
			{path: 'products', component: ManageProductsAdminComponent}
		],
	canActivate: [AuthGuard]},

  	{path: 'mozo', component: MainMozoComponent,
      	children:
		[
			{path: '', component: HomeMozoComponent},
			{path: 'tables', component: ManageTablesComponent},
			{path: 'profile', component: ProfileComponent},
		],
	canActivate: [AuthGuard]},

	{path: 'cervecero', component: MainCerveceroComponent,
      	children:
		[
			{path: '', component: HomeCerveceroComponent},
			{path: 'profile', component: ProfileComponent},
		],
	canActivate: [AuthGuard]},

	{path: 'cocinero', component: MainCocineroComponent,
      	children:
		[
			{path: '', component: HomeCocineroComponent},
			{path: 'profile', component: ProfileComponent},
		],
	canActivate: [AuthGuard]},

	{path: 'bartender', component: MainBartenderComponent,
      	children:
		[
			{path: '', component: HomeBartenderComponent},
			{path: 'profile', component: ProfileComponent},
		],
	canActivate: [AuthGuard]},

	{path: 'cliente', component: MainClienteComponent,
      	children:
		[
			{path: '', component: HomeClienteComponent},
			{path: 'buscar', component: SearchOrderComponent},
			{path: 'profile', component: ProfileComponent},
		],
	canActivate: [AuthGuard]},
		
	{path: '**', component: ErrorComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
