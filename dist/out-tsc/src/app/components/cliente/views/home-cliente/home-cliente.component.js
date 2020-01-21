import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { Product, FoodType, Cook } from 'src/app/models/product';
import { Order } from 'src/app/models/order';
import { Subject } from 'rxjs';
let HomeClienteComponent = class HomeClienteComponent {
    //public waitingOrder: boolean = false;
    constructor(orderService, userService, authService, tableService, toastr, productService) {
        this.orderService = orderService;
        this.userService = userService;
        this.authService = authService;
        this.tableService = tableService;
        this.toastr = toastr;
        this.productService = productService;
        this.order = null;
        this.onReset = new Subject();
        this.hasOrder = false;
    }
    ngOnInit() {
        this.InitializeOrder();
        //this.products = this.CreateTestProducts();
        //this.products = this.productService.listado;
        this.products = new Array();
        this.products = this.productService.listado;
        this.showingProducts = this.products;
        this.authService.GetCurrentUser().then(userLogged => this.currentUser = userLogged);
        this.SelectRandomWaiter().then(waiter => this.currentWorker = waiter);
    }
    // ##### CORE FUNCTIONS #####
    AddToOrder(prod) {
        this.order.items.push(prod);
        this.order.CalculateTotal();
        this.somethingOrdered = true;
        console.log('order:', this.order);
    }
    CancelOrder() {
        this.somethingOrdered = false;
        this.order.items = [];
        this.order.CalculateTotal();
        this.onReset.next();
    }
    MakeOrder() {
        //this.orderService.GetTopBest();
        // if(this.order.tableID == 'No hay')
        // 	this.toastr.error('No hay mesas disponibles. Vuelva más tarde.');
        // else
        // {
        // 	if(this.order.CheckOrder())
        // 	{
        // 		this.order.waiter = this.currentWorker;
        // 		this.order.client = this.currentUser;
        // 		this.tableService.UpdateStatus(this.order.tableID, TableState.waitingOrder);
        // 		//this.orderService.Add(this.order);
        // 		this.productService.sumarCantidades(this.order.items);
        // 		this.orderService.Update(this.order).then((value) => {
        // 			if(!value){
        // 				this.orderService.Add(this.order);
        // 			} 
        // 		});;
        // 		this.toastr.success("El pedido se ha realizado correctamente! Este es tu número de pedido: " + this.order.codeID);
        // 		this.hasOrder = true;
        // 	}
        // 	else
        // 		this.toastr.error('Hay algo erróneo con este pedido.');
        // }
    }
    // ##### FILTER FUNCTIONS #####
    Filter(type) {
        this.showingProducts = this.products.filter((element) => {
            if (element.IsFoodType(type))
                return element;
        });
    }
    ClearFilters() {
        this.showingProducts = this.products;
    }
    // ###### PRIVATE FUNCTIONS #####
    InitializeOrder() {
        this.tableService.FindAvailable()
            .then(table => {
            this.order = Order.Create(table.tableID);
            this.somethingOrdered = false;
        });
    }
    // private InitializeOrder(): void
    // {
    // 	this.authService.GetCurrentUser().then(userLogged => this.currentUser = userLogged).finally(()=>{
    // 		this.waitingOrder = true;
    // 		const email = this.currentUser.email;
    // 		this.orderService.GetByCodeUser(email)
    // 			.then(ord => this.order = ord)
    // 			.catch(error => this.toastr.error(error, 'Error'))
    // 			.finally(() => this.waitingOrder = false);		
    // 		if(this.waitingOrder){
    // 			this.tableService.FindAvailable()
    // 			.then(table => {
    // 				this.order = Order.Create(table.tableID);
    // 				this.somethingOrdered = false;
    // 			});	
    // 		}
    // 	})			
    // }
    SelectRandomWaiter() {
        return this.userService.GetAllWaiters().then(waiters => {
            let random = Math.floor(Math.random() * waiters.length);
            return waiters[random];
        });
    }
    CreateTestProducts() {
        return [
            Product.Create('B-CER-QUIL', 'Cerveza Quilmes', 'assets/img/B-CER-QUIL.jpg', 50, [FoodType.bebida, FoodType.alcohol], Cook.cervecero, "Bebida con alcohol, no recomendada si vas a conducir"),
            Product.Create('C-COM-MCFR', 'Milanesa con fritas', 'assets/img/C-COM-MCFR.jpg', 300, [FoodType.comida], Cook.cocinero, "Milanesa de ternera acompañada de papas fritas"),
            Product.Create('C-COM-MACF', 'Milanesa a caballo con fritas', 'assets/img/C-COM-MACF.jpg', 350, [FoodType.comida], Cook.cocinero, "Milanesa de ternera acompañada de huevo frito y papas fritas"),
            Product.Create('C-COM-MNAF', 'Milanesa napo con fritas', 'assets/img/C-COM-MNAF.jpg', 350, [FoodType.comida], Cook.cocinero, "Milanesa con salsa de tomate, jamón y muzzarella acompañada de papas fritas"),
            Product.Create('B-GAS-COCA', 'Coca-Cola', 'assets/img/B-GAS-COCA.jpg', 60, [FoodType.bebida, FoodType.vegano, FoodType.celiaco], Cook.bartender, "Bebida sin alcohol gasificada de extractos naturales"),
            Product.Create('B-AGU-BONA', 'Bon Aqua', 'assets/img/B-AGU-BONA.jpg', 45, [FoodType.bebida, FoodType.vegano, FoodType.celiaco], Cook.bartender, "Bebida sin alcohol y sin gas de origenes naturales"),
            Product.Create('B-TRA-DDFR', 'Daikiri de frutilla', 'assets/img/B-TRA-DDFR.jpg', 70, [FoodType.bebida, FoodType.alcohol, FoodType.postre], Cook.bartender, "Bebida con alcohol, no recomendada si vas a manejar"),
            Product.Create('C-COM-ENCE', 'Ensalada el Cesar', 'assets/img/C-COM-ENCE.jpg', 150, [FoodType.comida, FoodType.vegano], Cook.cocinero, " Ensalada de lechuga romana y croûtons con jugo de limón, aceite de oliva, huevo, salsa Worcestershire, anchoas, ajo, mostaza de Dijon, queso parmesano y pimienta negra"),
            Product.Create('C-COM-EMPA', 'Empanada', 'assets/img/C-COM-EMPA.jpg', 50, [FoodType.comida], Cook.cocinero, " Empanada de pollo"),
            Product.Create('B-VIN-VINO', 'Vino', 'assets/img/B-VIN-VINO.jpg', 550, [FoodType.bebida, FoodType.alcohol], Cook.bartender, "Bebida con alcohol, no recomendada si vas a conducir"),
        ];
    }
};
HomeClienteComponent = tslib_1.__decorate([
    Component({
        selector: 'app-home-cliente',
        templateUrl: './home-cliente.component.html',
        styleUrls: ['./home-cliente.component.scss']
    })
], HomeClienteComponent);
export { HomeClienteComponent };
//# sourceMappingURL=home-cliente.component.js.map