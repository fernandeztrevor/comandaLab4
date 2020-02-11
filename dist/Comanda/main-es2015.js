(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<router-outlet></router-outlet>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/all/main/food-card/food-card.component.html":
/*!**************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/all/main/food-card/food-card.component.html ***!
  \**************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!-- <div *ngIf=\"product\" class=\"card outside-shadow\">\r\n    <div class=\"card-body align-center\">\r\n        <div class=\"card-title\">{{product.name}}</div>\r\n        <img src=\"{{product.pathImg}}\" class=\"img-shadow\" (click)=\"AddToOrder(product)\">\r\n        <div class=\"price\">\r\n            <div class=\"row\">\r\n                <div class=\"col-3\">\r\n                    <span class=\"ordered\" *ngIf=\"ordered\"><i class=\"fas fa-clipboard-check\"></i></span>\r\n                </div>\r\n                <div class=\"col-6\">\r\n                    ${{product.price}}.00\r\n                </div>\r\n                <div class=\"col-3\">\r\n                    <span class=\"quant\" *ngIf=\"quantity > 1\">x{{quantity}}</span>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div> -->\r\n\r\n\r\n<div *ngIf=\"product.state != 'Deshabilitado'\" class=\"card outside-shadow\">\r\n<div class=\"card align-center\">\r\n    <div class=\"align-center\">\r\n        <img src=\"{{product.image}}\">\r\n    </div>\r\n    <div class=\"card-body\">\r\n      <h5 class=\"card-title\">{{product.name}}</h5>\r\n      <p class=\"card-text\">{{product.description}}</p>\r\n      <div class=\"price\">\r\n        <div class=\"row\">\r\n            <div class=\"col-3\">\r\n                <span class=\"ordered\" *ngIf=\"ordered\"><i class=\"fas fa-clipboard-check\"></i></span>\r\n            </div>\r\n            <div class=\"col-6\">\r\n                ${{product.price}}.00\r\n            </div>\r\n            <div class=\"col-3\">\r\n                <span class=\"quant\" *ngIf=\"quantity > 1\">x{{quantity}}</span>\r\n            </div>\r\n        </div>\r\n    </div>\r\n        <button class=\"btn btn-primary\" (click)=\"AddToOrder(product)\">Añadir a pedido</button>\r\n      <!-- <a href=\"#\" class=\"btn btn-primary\" (click)=\"AddToOrder(product)\"></a> -->\r\n    </div>\r\n  </div>\r\n</div>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/all/main/footer/footer.component.html":
/*!********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/all/main/footer/footer.component.html ***!
  \********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!-- <div class=\"footer footer-shadow mar-top-3\">\r\n    <div class=\"row no-side-margin\">\r\n        <div class=\"col-6 no-side-margin align-left\">\r\n            Trabajo práctico - Laboratorio IV\r\n        </div>\r\n        <div class=\"col-6 no-side-margin align-right\">\r\n            \r\n        </div>\r\n    </div>\r\n</div> -->");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/all/main/order-list/order-list.component.html":
/*!****************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/all/main/order-list/order-list.component.html ***!
  \****************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"table-responsive\" >\r\n    <table class=\"table table-hover\">\r\n        <thead>\r\n            <tr>\r\n                <th scope=\"col\">ID</th>\r\n                <th scope=\"col\">Cliente</th>\r\n                <th scope=\"col\">Estado</th>\r\n                <th scope=\"col\">Mozo</th>\r\n                <th scope=\"col\">Imagen</th>\r\n            </tr>\r\n        </thead>\r\n        <tbody *ngIf=\"orders\">\r\n            <tr class=\"order\" *ngFor=\"let or of orders | async\" (click)=\"SelectOrder(or)\">\r\n                <td class=\"arial\">{{or.codeID}}</td>\r\n                <td>{{or.client.name}}</td>\r\n                <td>{{or.state}}</td>\r\n                <td>{{or.waiter.name}}</td>\r\n                <td><img src=\"{{or.image}}\" width=\"30px\" height=\"30px\"></td>\r\n            </tr>\r\n        </tbody>\r\n    </table>\r\n    <div class=\"align-center mar-top-1\" *ngIf=\"showingOrders\">\r\n        <label><h2>No hay ordenes para mostrar</h2></label>\r\n    </div>\r\n    <div *ngIf=\"!orders\" class=\"align-center mar-top-1\">\r\n        <app-spinner></app-spinner>\r\n    </div>\r\n    \r\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/all/main/product-management/product-management.component.html":
/*!********************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/all/main/product-management/product-management.component.html ***!
  \********************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container\">\n    <div class=\"row top-row page-title\">\n        <div class=\"col-3\"></div>\n        <div class=\"col-6\"></div>\n        <div class=\"col-3\"></div>\n    </div>\n    <hr>\n    <div class=\"row\">\n        <div class=\"col-3 align-center\">\n\n        </div>\n        <div class=\"col-6\">\n            <button class=\"btn btn-success full-width\" data-toggle=\"modal\" data-target=\"#productModal\">Agregar\n                Producto</button>\n        </div>\n        <div class=\"col-3\">\n            <div class=\"btn-group full-width\">\n                <button title=\"Todo\" class=\"btn btn-outline-success\" (click)=\"ClearFilters()\"><i\n                        class=\"fas fa-asterisk\"></i></button>\n                <button title=\"Comida\" class=\"btn btn-outline-success\" (click)=\"Filter('comida')\"><i\n                        class=\"fas fa-utensils\"></i></button>\n                <button title=\"Bebidas\" class=\"btn btn-outline-success\" (click)=\"Filter('bebida')\"><i\n                        class=\"fas fa-wine-glass-alt\"></i></button>\n                <button title=\"Postres\" class=\"btn btn-outline-success\" (click)=\"Filter('postre')\"><i\n                        class=\"fas fa-ice-cream\"></i></button>\n                <button title=\"Alcohol\" class=\"btn btn-outline-success\" (click)=\"Filter('alcohol')\"><i\n                        class=\"fas fa-beer\"></i></button>\n                <button title=\"Sin TACC\" class=\"btn btn-outline-success\" (click)=\"Filter('celiaco')\"><i\n                        class=\"fas fa-seedling\"></i></button>\n                <button title=\"Vegana\" class=\"btn btn-outline-success\" (click)=\"Filter('vegano')\"><i\n                        class=\"fas fa-carrot\"></i></button>\n            </div>\n        </div>\n    </div>\n\n    <hr>\n    <div class=\"table-responsive\">\n        <table class=\"table table-hover\">\n            <thead>\n                <tr>\n                    <th scope=\"col\">Producto</th>\n                    <th scope=\"col\">Precio</th>\n                    <th scope=\"col\">Imagen</th>\n                    <th scope=\"col\">Habilitar/Desabilitar</th>\n                    <th scope=\"col\">Editar</th>\n                </tr>\n            </thead>\n            <tbody *ngIf=\"products\">\n                <tr class=\"product\" *ngFor=\"let prod of showingProducts | async\">\n                    <td><label>{{prod.name}}</label></td>\n                    <td>${{prod.price}}</td>\n                    <td><img [src]=\"prod.image\" width=\"30px\" height=\"30px\">\n                    </td>\n\n                    <td><button class=\"btn btn-outline-danger\" *ngIf=\"prod.state != 'Deshabilitado'\"\n                            (click)=\"changeState(prod.codeID, prod.state)\">Deshabilitar</button>\n                        <button class=\"btn btn-outline-success\" *ngIf=\"prod.state == 'Deshabilitado'\"\n                            (click)=\"changeState(prod.codeID, prod.state)\">Habilitar</button>\n                    </td>\n                    <td>\n                        <button class=\"btn btn-outline-primary\" data-toggle=\"modal\" data-target=\"#productModal\"\n                            (click)=\"editarProducto(prod)\">Editar</button>\n                    </td>\n                </tr>\n            </tbody>\n        </table>\n    </div>\n    <hr>\n\n</div>\n\n<!-- Product modal -->\n<div class=\"modal fade\" id=\"productModal\">\n    <div class=\"modal-dialog\">\n        <div class=\"modal-content\">\n            <div class=\"modal-body\">\n                <div class=\"container-fluid\">\n                    <div class=\"row\">\n                        <div class=\"col-2\"></div>\n                        <div class=\"col-8\" *ngIf=\"!this.haySeleccionado\">\n                            <h3 class=\"align-center\">Agregar Producto</h3>\n                        </div>\n                        <div class=\"col-8\" *ngIf=\"this.haySeleccionado\">\n                            <h3 class=\"align-center\">Editar Producto</h3>\n                        </div>\n                        <div class=\"col-2\"></div>\n                    </div>\n\n                    <hr class=\"mar-top-1\">\n                    <form [formGroup]=\"productForm\" (ngSubmit)=\"SendProduct()\">\n\n\n                        <div class=\"row\" *ngIf=\"this.haySeleccionado\">\n                            <div class=\"col-5\"></div>\n                            <div class=\"col-2\">\n                                <img [src]=\"this.productoSeleccionado.image\" width=\"60px\" height=\"60px\">\n                            </div>\n                            <div class=\"col-5\"></div>\n                        </div>\n\n\n                        <div class=\"row\">\n                            <div class=\"col-1\"></div>\n                            <div class=\"col-10\">\n\n                                <div class=\"row middle-row\">\n                                    <div class=\"col-12\">\n                                        <label>Nombre:</label>\n                                    </div>\n                                    <div class=\"col-12\">\n                                        <input formControlName=\"productName\"\n                                            class=\"form-control full-width align-center\" type=\"text\"\n                                            placeholder=\"Nombre del producto\" required>\n                                    </div>\n                                </div>\n\n                                <div class=\"row middle-row\">\n                                    <div class=\"col-12\">\n                                        <label>Precio:</label>\n                                    </div>\n                                    <div class=\"col-12\">\n                                        <input formControlName=\"productPrice\"\n                                            class=\"form-control full-width align-center\" type=\"text\"\n                                            placeholder=\"Precio del producto\" required>\n                                    </div>\n                                </div>\n\n\n                                <div class=\"row middle-row\">\n                                    <div class=\"col-12\">\n                                        <label>Descripción:</label>\n                                    </div>\n                                    <div class=\"col-12\">\n                                        <input formControlName=\"productDescription\"\n                                            class=\"form-control full-width align-center\" type=\"text\"\n                                            placeholder=\"Descripción del producto\" required>\n                                    </div>\n                                </div>\n\n\n                                <div class=\"row middle-row\">\n                                    <!-- <fieldset class=\"scheduler-border\">\n                                        <legend class=\"scheduler-border\">Tipo de producto</legend> -->\n                                    <label class=\"mr-sm-2\">Tipo de producto</label>\n\n                                    <div class=\"input-group mb-3 col-12\">\n\n                                        <div class=\"custom-control custom-checkbox col-4\">\n                                            <input type=\"checkbox\" class=\"custom-control-input\" id=\"typeComida\"\n                                                formControlName=\"typeComida\" value=\"comida\">\n                                            <label class=\"custom-control-label\" for=\"typeComida\">Comida</label>\n                                        </div>\n                                        <div class=\"custom-control custom-checkbox col-4\">\n                                            <input type=\"checkbox\" class=\"custom-control-input\" id=\"typeBebida\"\n                                                formControlName=\"typeBebida\">\n                                            <label class=\"custom-control-label\" for=\"typeBebida\">Bebida</label>\n                                        </div>\n                                        <div class=\"custom-control custom-checkbox col-4\">\n                                            <input type=\"checkbox\" class=\"custom-control-input\" id=\"typeAlcohol\"\n                                                formControlName=\"typeAlcohol\">\n                                            <label class=\"custom-control-label\" for=\"typeAlcohol\">Alcohol</label>\n                                        </div>\n                                        <div class=\"custom-control custom-checkbox col-4\">\n                                            <input type=\"checkbox\" class=\"custom-control-input\" id=\"typePostre\"\n                                                formControlName=\"typePostre\">\n                                            <label class=\"custom-control-label\" for=\"typePostre\">Postre</label>\n                                        </div>\n                                        <div class=\"custom-control custom-checkbox col-4\">\n                                            <input type=\"checkbox\" class=\"custom-control-input\" id=\"typeCeliaco\"\n                                                formControlName=\"typeCeliaco\">\n                                            <label class=\"custom-control-label\" for=\"typeCeliaco\">Celiaco</label>\n                                        </div>\n                                        <div class=\"custom-control custom-checkbox col-4\">\n                                            <input type=\"checkbox\" class=\"custom-control-input\" id=\"typeVegano\"\n                                                formControlName=\"typeVegano\">\n                                            <label class=\"custom-control-label\" for=\"typeVegano\">Vegano</label>\n                                        </div>\n\n                                    </div>\n                                    <!-- </fieldset> -->\n                                    <!-- <input type=\"button\" (click)=\"traerFoodTypes()\"> -->\n                                </div>\n\n                                <div class=\"row middle-row\">\n                                    <select class=\"custom-select mr-sm-2\" id=\"inlineFormCustomSelect\"\n                                        formControlName=\"productCook\" *ngIf=\"this.role == 'socio'\">\n                                        <!-- <option selected>Encargado</option> -->\n                                        <option value=\"cocinero\">Cocinero</option>\n                                        <option value=\"cervecero\">Cervecero</option>\n                                        <option value=\"bartender\">Bartender</option>\n                                    </select>\n                                </div>\n\n                                <div class=\"row middle-row\">\n                                    <h4 *ngIf=\"this.role != 'socio'\" >El producto será para un {{ this.role }}</h4>\n                                </div>\n\n                                <div class=\"row middle-row\">\n\n                                    <div class=\"btn btn-primary btn-sm float-left\">\n                                        <input type=\"file\" (change)=\"onFileChanged($event)\"\n                                            formControlName=\"productImage\" name=\"productImage\">\n                                    </div>\n                                </div>\n\n                            </div>\n                            <div class=\"col-1\"></div>\n                        </div>\n\n\n\n                    </form>\n\n                    <hr class=\"mar-top-1\">\n                    <div class=\"row\">\n                        <div class=\"col-2\"></div>\n                        <div class=\"col-8\">\n                            <div class=\"btn-group full-width\">\n                                <button class=\"btn btn-outline-danger\" title=\"Cancelar\" (click)=\"Cancel()\"\n                                    data-dismiss=\"modal\"><i class=\"fas fa-times\"></i></button>\n\n                                <button class=\"btn btn-outline-success\" *ngIf=\"!this.haySeleccionado\"\n                                    title=\"Agregar producto\" (click)=\"addProduct()\" data-dismiss=\"modal\"><i\n                                        class=\"fas fa-check\"></i></button>\n\n                                <button class=\"btn btn-outline-success\" *ngIf=\"this.haySeleccionado\"\n                                    title=\"Actualizar producto\" (click)=\"updateProduct()\" data-dismiss=\"modal\"><i\n                                        class=\"fas fa-check\"></i></button>\n                            </div>\n                        </div>\n                        <div class=\"col-2\"></div>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/all/main/sidebar-option/sidebar-option.component.html":
/*!************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/all/main/sidebar-option/sidebar-option.component.html ***!
  \************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<button *ngIf=\"!logOut\" class=\"btn btn-outline-secondary full-width option\" [ngClass]=\"lastOne ? 'last' : ''\" routerLink=\"{{link}}\">{{name}}</button>\r\n<button *ngIf=\"logOut\" class=\"btn btn-outline-primary full-width option last\" (click)=\"LogOut()\">Salir</button>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/all/main/spinner/spinner.component.html":
/*!**********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/all/main/spinner/spinner.component.html ***!
  \**********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!-- <img src=\"assets/img/load.svg\"> -->\r\n<img src=\"assets/img/load.gif\">");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/all/main/table-card/table-card.component.html":
/*!****************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/all/main/table-card/table-card.component.html ***!
  \****************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"card outside-shadow\">\r\n    <div class=\"card-body align-center\">\r\n        <div class=\"card-title\">Mesa {{table.tableID}}</div>\r\n        <div class=\"row\">\r\n            <div class=\"col-2\"></div>\r\n            <div class=\"col-8 icon\" [ngSwitch]=\"table.state\">\r\n                <i class=\"fas fa-user-check green\" *ngSwitchCase=\"'Disponible'\"></i>\r\n                <i class=\"fas fa-user-clock orange\" *ngSwitchCase=\"'Cliente esperando pedido'\"></i>\r\n                <i class=\"fas fa-utensils orange\" *ngSwitchCase=\"'Cliente comiendo'\"></i>\r\n                <i class=\"fas fa-money-bill-wave orange\" *ngSwitchCase=\"'Cliente pagando'\"></i>\r\n                <i class=\"fas fa-window-close red\" *ngSwitchCase=\"'Cerrada'\"></i>\r\n            </div>\r\n            <div class=\"col-2\"></div>\r\n        </div>\r\n        <div class=\"row mar-top-half\">\r\n            <div class=\"col-12\">\r\n                {{table.state}}\r\n            </div>\r\n        </div>\r\n        <hr>\r\n        <div class=\"row\">\r\n            <div class=\"col-12\">\r\n                <b>Cambiar estado</b>\r\n            </div>\r\n        </div>\r\n        <div class=\"row mar-top-1\">\r\n            <div class=\"col-12\">\r\n                <div class=\"btn-group\">\r\n                    <button class=\"btn btn-primary\" (click)=\"ChangeStatus(1)\"><i class=\"fas fa-user-check\"></i></button>\r\n                    <button class=\"btn btn-primary\" (click)=\"ChangeStatus(2)\"><i class=\"fas fa-user-clock\"></i></button>\r\n                    <button class=\"btn btn-primary\" (click)=\"ChangeStatus(3)\"><i class=\"fas fa-utensils\"></i></button>\r\n                    <button class=\"btn btn-primary\" (click)=\"ChangeStatus(4)\"><i class=\"fas fa-money-bill-wave\"></i></button>\r\n                    <button *ngIf=\"isAdmin\" class=\"btn btn-danger\" (click)=\"ChangeStatus(5)\"><i class=\"fas fa-window-close\"></i></button>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/all/main/work-order/work-order.component.html":
/*!****************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/all/main/work-order/work-order.component.html ***!
  \****************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"card outside-shadow\">\r\n    <div class=\"card-body align-center\">\r\n        <h5 class=\"card-title\">Pedido</h5>\r\n        <hr>\r\n        <div *ngIf=\"order\" class=\"order-body align-center\">\r\n\r\n            <div class=\"row\">\r\n                <div class=\"col-12\">\r\n                    <b>Código:</b> {{order.codeID}}\r\n                </div>\r\n            </div>\r\n            <div class=\"row\">\r\n                <div class=\"col-12\">\r\n                    <b>Cliente:</b> {{order.client.name}} {{order.client.lastname}}\r\n                </div>\r\n            </div>\r\n            <div class=\"row\">\r\n                <div class=\"col-12\">\r\n                    <b>Mozo:</b> {{order.waiter.name}} {{order.waiter.lastname}}\r\n                </div>\r\n            </div>\r\n            <div class=\"row\">\r\n                <div class=\"col-12\">\r\n                    <b>Está:</b> {{order.state}}\r\n                </div>\r\n            </div>\r\n            <div class=\"row\">\r\n                <div class=\"col-12\">\r\n                    <b>Tiempo restante: </b> \r\n                    <span *ngIf=\"remainingTime\">{{remainingTime | timeleft}}</span>\r\n                    <span *ngIf=\"!remainingTime\">No tiene un tiempo asignado.</span>\r\n                </div>\r\n            </div>\r\n            <div class=\"row\">\r\n                <div class=\"col-12\">\r\n                    <b>Mesa:</b> {{order.tableID}}\r\n                </div>\r\n            </div>\r\n            <hr>\r\n            <div class=\"row\">\r\n                <div class=\"col-12\">\r\n                    <select class=\"form-control\" [ngModel]=\"selectedItem\" (ngModelChange)=\"SelectItem($event)\">\r\n                        <option [ngValue]=\"it\" *ngFor=\"let it of order.items\">{{it.name}}</option>\r\n                    </select>\r\n                </div>\r\n            </div>\r\n            <div class=\"row mar-top-1\" *ngIf=\"!selectedItem\">\r\n                <div class=\"col-12\">\r\n                    <label>No se seleccionó nada.</label>\r\n                </div>\r\n            </div>\r\n            <div class=\"item mar-top-1\" *ngIf=\"selectedItem\">\r\n                <div class=\"row\">\r\n                    <div class=\"col-12\">\r\n                        <b>Es para un {{selectedItem.cook}}.</b>\r\n                    </div>\r\n                </div>\r\n                <hr>\r\n                <div class=\"row\">\r\n                    <div class=\"col-12\">\r\n                        <b>Estado:</b> {{selectedItem.state}}\r\n                    </div>\r\n                </div>\r\n                <div class=\"row\">\r\n                    <div class=\"col-12\">\r\n                        <b>Lo tiene:</b> \r\n                        <span *ngIf=\"selectedItem.worker\">\r\n                        {{selectedItem.worker.name}} {{selectedItem.worker.lastname}} \r\n                        </span>\r\n                        <span *ngIf=\"!selectedItem.worker\">\r\n                            Nadie por ahora.\r\n                        </span>\r\n                    </div>\r\n                </div>\r\n                <hr>\r\n                <div class=\"row mar-top-1\" *ngIf=\"IsAvailableForMe()\">\r\n                    <div class=\"col-12\">\r\n                        <div class=\"btn-group\">\r\n                            <button [disabled]=\"!IsPending()\" class=\"btn btn-sm btn-info full-width\" data-toggle=\"modal\" data-target=\"#prodModal\">Comenzar a preparar</button>\r\n                            <button [disabled]=\"!IsCooking()\" (click)=\"ReadyToServe()\" class=\"btn btn-sm btn-success full-width\">Listo para servir</button>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <div class=\"row\" *ngIf=\"!order\">\r\n            <div class=\"col-12\">\r\n                <label>Seleccione un pedido.</label>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n\r\n<div class=\"modal fade\" id=\"prodModal\">\r\n    <div class=\"modal-dialog\">\r\n        <div class=\"modal-content\">\r\n            <div class=\"modal-body\">\r\n                <div class=\"container\">\r\n                    <div class=\"row\">\r\n                        <div class=\"col-3\"></div>\r\n                        <div class=\"col-6\">\r\n                            <h5>Empezar a preparar</h5>\r\n                        </div>\r\n                        <div class=\"col-3\"></div>\r\n                    </div>\r\n                    <hr>\r\n                    <div class=\"row\">\r\n                        <div class=\"col-2\"></div>\r\n                        <div class=\"col-8\" *ngIf=\"order\">\r\n                            <b>Tiempo restante actual:</b> {{remainingTime | timeleft}}\r\n                        </div>\r\n                        <div class=\"col-2\"></div>\r\n                    </div>\r\n                    <div class=\"row middle-row\">\r\n                        <div class=\"col-1\"></div>\r\n                        <div class=\"col-10\">\r\n                            ¿Llegás a completarlo en este tiempo o necesitás agregar más?\r\n                        </div>\r\n                        <div class=\"col-1\"></div>\r\n                    </div>\r\n                    <div class=\"row middle-row\">\r\n                        <div class=\"col-6\">\r\n                            <input type=\"number\" class=\"form-control full-width form-control-sm\" [(ngModel)]=\"addedTime\" placeholder=\"Minutos\">\r\n                        </div>\r\n                        <div class=\"col-6\">\r\n                            <button class=\"btn btn-success full-width btn-sm\" (click)=\"BeginCook(true)\" data-dismiss=\"modal\">Agregar tiempo</button>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"or\">\r\n                        o\r\n                    </div>\r\n                    <div class=\"row\">\r\n                        <div class=\"col-12\">\r\n                            <button class=\"btn btn-primary full-width btn-sm\" (click)=\"BeginCook(false)\" data-dismiss=\"modal\">El tiempo actual es suficiente</button>\r\n                        </div>\r\n                    </div>\r\n\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/all/views/error/error.component.html":
/*!*******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/all/views/error/error.component.html ***!
  \*******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<h2>Error</h2>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/all/views/login/login.component.html":
/*!*******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/all/views/login/login.component.html ***!
  \*******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container\">\r\n\t<div class=\"row top-row\">\r\n\t\t<div class=\"col-6\"></div>\r\n\t\t<div class=\"col-6\">\r\n\t\t\t<div class=\"card\">\r\n\t\t\t\t<div class=\"card-body align-center\">\r\n\t\t\t\t\t<h4 class=\"form-title\">Bienvenido al Restaurant</h4>\r\n\t\t\t\t\t<hr>\r\n\t\t\t\t\t<form [formGroup]=\"loginForm\" (ngSubmit)=\"onSubmit()\">\r\n\t\t\t\t\t\t<input type=\"text\" formControlName=\"email\" class=\"form-control separate-top-input align-center\"\r\n\t\t\t\t\t\t\tplaceholder=\"Ingrese su email\" autofocus>\r\n\t\t\t\t\t\t<input type=\"password\" formControlName=\"password\"\r\n\t\t\t\t\t\t\tclass=\"form-control separate-top-input align-center\" placeholder=\"Ingrese su contraseña\">\r\n\t\t\t\t\t\t<div class=\"row mar-top-2\">\r\n\t\t\t\t\t\t\t<div class=\"col-2\"></div>\r\n\t\t\t\t\t\t\t<div class=\"col-8 align-center\">\r\n\t\t\t\t\t\t\t\t<ngx-recaptcha2 formControlName=\"captcha\" #captchaElem\r\n\t\t\t\t\t\t\t\t\t[siteKey]=\"'6LdyPcgUAAAAABC2X0t5JiKItsjuBIXC8_rQAy7r'\" [useGlobalDomain]=\"false\">\r\n\t\t\t\t\t\t\t\t\t<!-- <ngx-recaptcha2 formControlName=\"captcha\" #captchaElem \r\n\t\t\t\t\t\t\t\t\t[siteKey]=\"'6Lef0cgUAAAAAO0_mOu5t8UWgk1jVhJQjkgCSmG_'\" [useGlobalDomain]=\"false\">-->\r\n\t\t\t\t\t\t\t\t</ngx-recaptcha2>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t<div class=\"col-2\"></div>\r\n\t\t\t\t\t\t</div>\r\n\r\n\t\t\t\t\t\t<div class=\"row mar-top-2\">\r\n\t\t\t\t\t\t\t<div class=\"col-2\"></div>\r\n\t\t\t\t\t\t\t<div class=\"col-8 align-center\">\r\n\t\t\t\t\t\t\t\t<div class=\"custom-control custom-checkbox\">\r\n\t\t\t\t\t\t\t\t\t<input type=\"checkbox\" class=\"custom-control-input\" id=\"chkHorario\"\r\n\t\t\t\t\t\t\t\t\t\tformControlName=\"chkHorario\">\r\n\t\t\t\t\t\t\t\t\t<label class=\"custom-control-label\" for=\"chkHorario\">Ignorar restricción\r\n\t\t\t\t\t\t\t\t\thoraria</label>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t<div class=\"col-2\"></div>\r\n\t\t\t\t\t\t</div>\r\n\r\n\t\t\t\t\t\t<div class=\"row mar-top-2\">\r\n\t\t\t\t\t\t\t<div class=\"col-2\"></div>\r\n\t\t\t\t\t\t\t<div class=\"col-8 align-center\">\r\n\t\t\t\t\t\t\t\t<div class=\"custom-control custom-checkbox\">\r\n\t\t\t\t\t\t\t\t\t<input type=\"checkbox\" class=\"custom-control-input\" id=\"chkLunes\"\r\n\t\t\t\t\t\t\t\t\t\tformControlName=\"chkLunes\">\r\n\t\t\t\t\t\t\t\t\t<label class=\"custom-control-label\" for=\"chkLunes\">Que sea lunes!\r\n\t\t\t\t\t\t\t\t\t</label>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t<div class=\"col-2\"></div>\r\n\t\t\t\t\t\t</div>\r\n\r\n\r\n\t\t\t\t\t\t<button *ngIf=\"!loading\" [disabled]=\"!loginForm.valid\" type=\"submit\"\r\n\t\t\t\t\t\t\tclass=\"btn btn-success full-width separate-top-input\">Entrar</button>\r\n\t\t\t\t\t\t<div class=\"mar-top-1\">\r\n\t\t\t\t\t\t\t<app-spinner *ngIf=\"loading\"></app-spinner>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</form>\r\n\t\t\t\t\t<hr>\r\n\t\t\t\t\t<button routerLink=\"/app/register\" class=\"btn btn-primary full-width\">Registrarse</button>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t\t<!-- <div class=\"col-3\"></div> -->\r\n\t</div>\r\n\t<div class=\"row middle-row\" [isProd]>\r\n\t\t<div class=\"col-6\"></div>\r\n\t\t<div class=\"col-6\">\r\n\t\t\t<div class=\"btn-group btn-group-toggle\" data-toggle=\"buttons\">\r\n\t\t\t\t<label class=\"btn btn-secondary\">\r\n\t\t\t\t\t<input type=\"radio\" name=\"opJuan\" value=\"juan\" (click)=\"BindUser('juan')\">Juan -\r\n\t\t\t\t\tCliente\r\n\t\t\t\t</label>\r\n\t\t\t\t<label class=\"btn btn-secondary\">\r\n\t\t\t\t\t<input type=\"radio\" name=\"opJose\" value=\"jose\" (click)=\"BindUser('jose')\">Jose -\r\n\t\t\t\t\tMozo\r\n\t\t\t\t</label>\r\n\t\t\t\t<label class=\"btn btn-secondary\">\r\n\t\t\t\t\t<input type=\"radio\" name=\"opPablo\" value=\"pablo\" (click)=\"BindUser('pablo')\">Pablo\r\n\t\t\t\t\t- Cocinero\r\n\t\t\t\t</label>\r\n\t\t\t\t<label class=\"btn btn-secondary\">\r\n\t\t\t\t\t<input type=\"radio\" name=\"opMartin\" value=\"martin\" (click)=\"BindUser('martin')\">Martin - Bartender\r\n\t\t\t\t</label>\r\n\t\t\t\t<label class=\"btn btn-secondary\">\r\n\t\t\t\t\t<input type=\"radio\" name=\"opRoman\" value=\"roman\" (click)=\"BindUser('roman')\">Roman\r\n\t\t\t\t\t- Cervecero\r\n\t\t\t\t</label>\r\n\t\t\t\t<label class=\"btn btn-secondary\">\r\n\t\t\t\t\t<input type=\"radio\" name=\"opIvan\" value=\"ivan\" (click)=\"BindUser('ivan')\">Ivan -\r\n\t\t\t\t\tSocio\r\n\t\t\t\t</label>\r\n\t\t\t</div>\r\n\r\n\r\n\r\n\t\t\t<!-- <div class=\"radio\">\r\n\t\t\t\t<label><input type=\"radio\" name=\"opJuan\" value=\"juan\" [(ngModel)]=\"userOption\" (click)=\"LoadUser()\">Juan\r\n\t\t\t\t\t- Cliente</label>\r\n\t\t\t</div>\r\n\t\t\t<div class=\"radio\">\r\n\t\t\t\t<label><input type=\"radio\" name=\"opMario\" value=\"mario\" [(ngModel)]=\"userOption\"\r\n\t\t\t\t\t\t(click)=\"LoadUser()\">Mario - Cliente</label>\r\n\t\t\t</div>\r\n\t\t\t<div class=\"radio\">\r\n\t\t\t\t<label><input type=\"radio\" name=\"opJose\" value=\"jose\" [(ngModel)]=\"userOption\" (click)=\"LoadUser()\">Jose\r\n\t\t\t\t\t- Mozo</label>\r\n\t\t\t</div>\r\n\t\t\t<div class=\"radio\">\r\n\t\t\t\t<label><input type=\"radio\" name=\"opPablo\" value=\"pablo\" [(ngModel)]=\"userOption\"\r\n\t\t\t\t\t\t(click)=\"LoadUser()\">Pablo - Cocinero</label>\r\n\t\t\t</div>\r\n\t\t\t<div class=\"radio\">\r\n\t\t\t\t<label><input type=\"radio\" name=\"opMartin\" value=\"martin\" [(ngModel)]=\"userOption\"\r\n\t\t\t\t\t\t(click)=\"LoadUser()\">Martin - Bartender</label>\r\n\t\t\t</div>\r\n\t\t\t<div class=\"radio\">\r\n\t\t\t\t<label><input type=\"radio\" name=\"opRoman\" value=\"roman\" [(ngModel)]=\"userOption\"\r\n\t\t\t\t\t\t(click)=\"LoadUser()\">Roman - Cervecero</label>\r\n\t\t\t</div>\r\n\t\t\t<div class=\"radio\">\r\n\t\t\t\t<label><input type=\"radio\" name=\"opIvan\" value=\"ivan\" [(ngModel)]=\"userOption\" (click)=\"LoadUser()\">ivan\r\n\t\t\t\t\t- Socio</label>\r\n\t\t\t</div> -->\r\n\r\n\r\n\r\n\t\t</div>\r\n\t\t<div class=\"col-3\"></div>\r\n\t</div>\r\n</div>\r\n\r\n<app-footer></app-footer>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/all/views/main-general/main-general.component.html":
/*!*********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/all/views/main-general/main-general.component.html ***!
  \*********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!-- <nav class=\"bottom-shadow\">\r\n    <div class=\"row main-bar general-color\">\r\n        <div class=\"col-12 align-center no-padding\">\r\n            <h1 class=\"main-title no-side-margin\">La Comanda</h1>\r\n        </div>\r\n    </div>\r\n</nav> -->\r\n\r\n<router-outlet></router-outlet>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/all/views/profile/profile.component.html":
/*!***********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/all/views/profile/profile.component.html ***!
  \***********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<br><br>\r\n<div class=\"container\" *ngIf=\"user\">\r\n    <div class=\"row top-row\">\r\n        <div class=\"col-4 align-center\">\r\n            <!-- <img src=\"{{user.image}}\"> -->\r\n        </div>\r\n        <div class=\"col-6\">\r\n            <!-- <h1 class=\"page-title\">\r\n                {{user.name}} {{user.lastname}}\r\n            </h1> -->\r\n        </div>\r\n        <div class=\"col-2\"></div>\r\n    </div>\r\n    <div class=\"row middle-row\">\r\n        <!-- <p>Tu privacidad está segura en este sitio. La información detallada anteriormente no se expone ni es visible\r\n            para nadie público. Solamente un administrador del sistema tiene acceso a estos datos.</p> -->\r\n    </div>\r\n    <!-- <div class=\"row middle-row\">\r\n        <div class=\"col-2\"></div>\r\n        <div class=\"col-8\">\r\n            <div class=\"card outside-shadow\">\r\n                <div class=\"card-header align-center\">\r\n                    <b>Editar perfil</b>\r\n                </div>\r\n                <div class=\"card-body\">\r\n                    <div class=\"row\">\r\n                        <div class=\"col-6 align-center\">\r\n                            <h5 class=\"card-title\">Foto</h5>\r\n                            <p class=\"card-text\">Cambia la foto de tu perfil en solo dos pasos: elegir y cargar.</p>\r\n                            <div class=\"btn-group\">\r\n                                <button class=\"btn btn-primary\" (click)=\"fileInput.click()\">Elegir imagen</button>\r\n                                <button [disabled]=\"!isLoaded\" class=\"btn btn-success\" (click)=\"Upload()\">Cargar imagen</button>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"col-6 align-center\">\r\n                            <h5 class=\"card-title\">Nombre</h5>\r\n                            <p class=\"card-text\">Modificá tu nombre, apellido y/o email de una forma simple.</p>\r\n                            <button class=\"btn btn-primary\" disabled>Cambiar mis datos</button>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <div class=\"col-2\"></div>\r\n    </div>\r\n    <input accept=\".png,.jpg\" type=\"file\" #fileInput style=\"display: none;\" (change)=\"OnFileSelected($event)\"> -->\r\n    <div class=\"row middle-row\">\r\n        <!-- <div class=\"row\"> -->\r\n        <div class=\"col-2\"></div>\r\n        <div class=\"col-8\">\r\n            <form [formGroup]=\"userForm\" (ngSubmit)=\"updateUser()\">\r\n\r\n                <!-- <div class=\"row\">\r\n                    <div class=\"col-5\"></div>\r\n                    <div class=\"col-2\">\r\n                        <img [src]=\"this.user.image\" width=\"60px\" height=\"60px\">\r\n                    </div>\r\n                    <div class=\"col-5\"></div>\r\n                </div> -->\r\n\r\n                <div class=\"row\">\r\n                    <div class=\"col-1\"></div>\r\n                    <div class=\"col-10\">\r\n                        <div class=\"row middle-row\">\r\n                            <div class=\"col-5\"></div>\r\n                            <div class=\"col-2\">\r\n                                <img [src]=\"this.user.image\" width=\"60px\" height=\"60px\">\r\n                            </div>\r\n                            <div class=\"col-5\"></div>\r\n                        </div>\r\n\r\n                        <div class=\"row middle-row\">\r\n                            <div class=\"col-12\">\r\n                                <label>Nombre:</label>\r\n                            </div>\r\n                            <div class=\"col-12\">\r\n                                <input formControlName=\"userName\" class=\"form-control full-width align-center\"\r\n                                    type=\"text\" placeholder=\"Nombre del usuario\" (change)=\"cambio()\" required>\r\n                            </div>\r\n                        </div>\r\n\r\n                        <div class=\"row middle-row\">\r\n                            <div class=\"col-12\">\r\n                                <label>Apellido:</label>\r\n                            </div>\r\n                            <div class=\"col-12\">\r\n                                <input formControlName=\"userLastname\" class=\"form-control full-width align-center\"\r\n                                    type=\"text\" placeholder=\"Apellido del usuario\" (change)=\"cambio()\" required>\r\n                            </div>\r\n                        </div>\r\n\r\n                        <div class=\"row middle-row\">\r\n                            <div class=\"col-12\">\r\n                                <label>Email:</label>\r\n                            </div>\r\n                            <div class=\"col-12\">\r\n                                <input formControlName=\"userMail\" class=\"form-control full-width align-center\"\r\n                                    type=\"email\" placeholder=\"Email del usuario\" [readonly]=\"true\" required>\r\n                            </div>\r\n                        </div>\r\n\r\n\r\n                        <div class=\"row middle-row\">\r\n                            <div class=\"col-12\">\r\n                                <label>Foto de perfil:</label>\r\n                            </div>\r\n\r\n                            <div class=\"col-12\">\r\n                                <div class=\"btn btn-primary btn-sm float-left col-12\">\r\n                                    <input type=\"file\" (change)=\"onFileChanged($event)\" formControlName=\"userImage\"\r\n                                        name=\"userImage\">\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n\r\n\r\n                        <div class=\"row middle-row\">\r\n                            <div class=\"col-1\"></div>\r\n                            <div class=\"col-10\">\r\n                                <div class=\"btn-group full-width\">\r\n                                    <button type=\"button\" class=\"btn btn-outline-danger\" title=\"Cancelar\" (click)=\"resetForm()\"\r\n                                    ><i class=\"fas fa-times\"></i></button>\r\n\r\n                                    <button class=\"btn btn-outline-success\" title=\"Actualizar usuario\"\r\n                                        (click)=\"updateUser()\"><i\r\n                                            class=\"fas fa-check\"></i></button>\r\n                                </div>\r\n                            </div>\r\n                            <div class=\"col-1\"></div>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"col-1\"></div>\r\n                </div> \r\n            </form>\r\n        </div>\r\n        <div class=\"col-2\"></div>\r\n        <!-- </div> -->\r\n\r\n        <!-- <hr class=\"mar-top-1\"> -->\r\n        <!-- <form [formGroup]=\"userForm\" (ngSubmit)=\"SendUser()\">\r\n\r\n            <div class=\"row\">\r\n                <div class=\"col-5\"></div>\r\n                <div class=\"col-2\">\r\n                    <img [src]=\"this.user.image\" width=\"60px\" height=\"60px\">\r\n                </div>\r\n                <div class=\"col-5\"></div>\r\n            </div>\r\n\r\n            <div class=\"row\">\r\n                <div class=\"col-1\"></div>\r\n                <div class=\"col-10\">\r\n\r\n                    <div class=\"row middle-row\">\r\n                        <div class=\"col-12\">\r\n                            <label>Nombre:</label>\r\n                        </div>\r\n                        <div class=\"col-12\">\r\n                            <input formControlName=\"userName\" class=\"form-control full-width align-center\" type=\"text\"\r\n                                placeholder=\"Nombre del usuario\" required>\r\n                        </div>\r\n                    </div>\r\n\r\n                    <div class=\"row middle-row\">\r\n                        <div class=\"col-12\">\r\n                            <label>Apellido:</label>\r\n                        </div>\r\n                        <div class=\"col-12\">\r\n                            <input formControlName=\"userLastname\" class=\"form-control full-width align-center\"\r\n                                type=\"text\" placeholder=\"Apellido del usuario\" required>\r\n                        </div>\r\n                    </div>\r\n\r\n                    <div class=\"row middle-row\">\r\n                        <div class=\"col-12\">\r\n                            <label>Email:</label>\r\n                        </div>\r\n                        <div class=\"col-12\">\r\n                            <input formControlName=\"userMail\" class=\"form-control full-width align-center\" type=\"email\"\r\n                                placeholder=\"Email del usuario\" [readonly]=\"true\" required>\r\n                        </div>\r\n                    </div>\r\n\r\n\r\n                    <div class=\"row middle-row\">\r\n                        <div class=\"col-12\">\r\n                            <label>Foto de perfil:</label>\r\n                        </div>\r\n\r\n                        <div class=\"col-12\">\r\n                            <div class=\"btn btn-primary btn-sm float-left\">\r\n                                <input type=\"file\" (change)=\"onFileChanged($event)\" formControlName=\"userImage\"\r\n                                    name=\"userImage\">\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n                <div class=\"col-1\"></div>\r\n            </div>\r\n        </form> -->\r\n\r\n        <hr class=\"mar-top-1\">\r\n        \r\n    </div>\r\n\r\n</div>\r\n\r\n<app-footer></app-footer>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/all/views/redirect/redirect.component.html":
/*!*************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/all/views/redirect/redirect.component.html ***!
  \*************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container\">\r\n    <div class=\"row top-row\">\r\n        <div class=\"col-4\"></div>\r\n        <div class=\"col-4 align-center\">\r\n            <app-spinner></app-spinner>\r\n        </div>\r\n        <div class=\"col-4\"></div>\r\n    </div>\r\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/all/views/register/register.component.html":
/*!*************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/all/views/register/register.component.html ***!
  \*************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container\">\r\n\t<div class=\"row top-row\">\r\n\t\t<div class=\"col-3\"></div>\r\n\t\t<div class=\"col-6\">\r\n\t\t\t<div class=\"card\">\r\n\t\t\t\t<div class=\"card-body align-center\">\r\n\t\t\t\t\t<h4 class=\"form-title\">Registrarse</h4>\r\n\t\t\t\t\t<hr>\r\n\t\t\t\t\t<form [formGroup]=\"registerForm\" (ngSubmit)=\"onSubmit()\">\r\n                        <input type=\"text\" formControlName=\"name\" class=\"form-control separate-top-input align-center\" placeholder=\"Nombre\" autofocus>\r\n                        <input type=\"text\" formControlName=\"lastname\" class=\"form-control separate-top-input align-center\" placeholder=\"Apellido\">\r\n\t\t\t\t\t\t<input type=\"email\" formControlName=\"email\" class=\"form-control separate-top-input align-center\" placeholder=\"Email\">\r\n                        <input type=\"password\" formControlName=\"password\" class=\"form-control separate-top-input align-center\" placeholder=\"Contraseña\">\r\n\t\t\t\t\t\t<input type=\"password\" formControlName=\"repPassword\" class=\"form-control separate-top-input align-center\" placeholder=\"Repita la contraseña\">\r\n\t\t\t\t\t\t<div class=\"row mar-top-2\">\r\n\t\t\t\t\t\t\t<div class=\"col-2\"></div>\r\n\t\t\t\t\t\t\t<div class=\"col-8 align-center\">\r\n\t\t\t\t\t\t\t\t<ngx-recaptcha2  formControlName=\"captcha\" #captchaElem [siteKey]=\"'6LdyPcgUAAAAABC2X0t5JiKItsjuBIXC8_rQAy7r'\" [useGlobalDomain]=\"false\"></ngx-recaptcha2>\r\n\t\t\t\t\t\t\t\t<!-- <ngx-recaptcha2 formControlName=\"captcha\" #captchaElem [siteKey]=\"'6Lef0cgUAAAAAO0_mOu5t8UWgk1jVhJQjkgCSmG_'\" [useGlobalDomain]=\"false\"></ngx-recaptcha2> -->\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t<div class=\"col-2\"></div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<div class=\"row mar-top-2\">\r\n\t\t\t\t\t\t\t<div class=\"col-2\"></div>\r\n\t\t\t\t\t\t\t<div class=\"col-8 align-center\">\t\t\t\t\t\t\r\n\t\t\t\t\t\t\t\t<div class=\"col-12\">\r\n\t\t\t\t\t\t\t\t\t<label class=\"mr-sm-2\">Seleccione el numero {{ this.random }}</label>\r\n\t\t\t\t\t\t\t\t</div>\t\r\n\r\n\t\t\t\t\t\t\t\t<select class=\"browser-default custom-select\" formControlName=\"customCaptcha\">\r\n\t\t\t\t\t\t\t\t\t<option value=\"1\">1</option>\r\n\t\t\t\t\t\t\t\t\t<option value=\"2\">2</option>\r\n\t\t\t\t\t\t\t\t\t<option value=\"3\">3</option>\r\n\t\t\t\t\t\t\t\t\t<option value=\"4\">4</option>\r\n\t\t\t\t\t\t\t\t\t<option value=\"5\">5</option>\r\n\t\t\t\t\t\t\t\t\t<option value=\"6\">6</option>\r\n\t\t\t\t\t\t\t\t </select>\t\t\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t<div class=\"col-2\"></div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\r\n\t\t\t\t\t\t<button *ngIf=\"!loading\" [disabled]=\"!registerForm.valid\" type=\"submit\" class=\"btn btn-success full-width separate-top-input\">Registrarse</button>\r\n\t\t\t\t\t\t<div class=\"mar-top-2\" *ngIf=\"loading\">\r\n\t\t\t\t\t\t\t<app-spinner></app-spinner>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</form>\r\n\t\t\t\t\t<hr>\r\n\t\t\t\t\t<button routerLink=\"/app/login\" class=\"btn btn-secondary full-width\">¿Ya tenés una cuenta?</button>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t\t<div class=\"col-3\"></div>\r\n\t</div>\r\n</div>\r\n\r\n<app-footer></app-footer>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/bartender/views/home-bartender/home-bartender.component.html":
/*!*******************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/bartender/views/home-bartender/home-bartender.component.html ***!
  \*******************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container\">\r\n    <div class=\"row top-row\">\r\n        <div class=\"col-3\"></div>\r\n        <div class=\"col-6\">\r\n        </div>\r\n        <div class=\"col-3\"></div>\r\n    </div>\r\n    <hr>\r\n    <div class=\"row middle-row\">\r\n        <div class=\"col-6\">\r\n            <app-order-list role=\"bartender\" (orderSelected)=\"SelectOrder($event)\"></app-order-list>\r\n        </div>\r\n        <div class=\"col-2\"></div>\r\n        <div class=\"col-4\">\r\n            <app-work-order [order]=\"currentOrder\"></app-work-order>\r\n        </div>\r\n    </div>\r\n    <div class=\"row blank-row\"></div>\r\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/bartender/views/main-bartender/main-bartender.component.html":
/*!*******************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/bartender/views/main-bartender/main-bartender.component.html ***!
  \*******************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<nav class=\"bottom-shadow\">\r\n    <div class=\"row main-bar\">\r\n        <div class=\"col-6\">\r\n        </div>\r\n        <div class=\"col-6 profile\">\r\n            <img *ngIf=\"user\" src=\"{{user.image}}\" class=\"profile-pic\" [ngClass]=\"open ? 'active': ''\" (click)=\"toggleSidebar()\">\r\n        </div>\r\n    </div>\r\n</nav>\r\n\r\n<div class=\"sidebar\" [ngClass]=\"open ? '' : 'collapsed'\">\r\n    <div class=\"top-row\"><br><br>\r\n        <app-sidebar-option name=\"Perfil\" link=\"/bartender/profile\"></app-sidebar-option>\r\n        <app-sidebar-option name=\"Gestión de pedidos\" link=\"/bartender\"></app-sidebar-option>\r\n        <app-sidebar-option logOut=true></app-sidebar-option>\r\n    </div>\r\n</div>\r\n<div class=\"content\">\r\n    <router-outlet></router-outlet>\r\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/bartender/views/manage-products-bartender/manage-products-bartender.component.html":
/*!*****************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/bartender/views/manage-products-bartender/manage-products-bartender.component.html ***!
  \*****************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container\">\n    <div class=\"row top-row\">\n        <div class=\"col-3\"></div>\n        <div class=\"col-6\">\n            \n        </div>\n        <div class=\"col-3\"></div>\n    </div>\n    <hr>\n        <app-product-management></app-product-management>\n    <hr>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/cervecero/views/home-cervecero/home-cervecero.component.html":
/*!*******************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/cervecero/views/home-cervecero/home-cervecero.component.html ***!
  \*******************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container\">\r\n    <div class=\"row top-row\">\r\n        <div class=\"col-3\"></div>\r\n        <div class=\"col-6\">\r\n        </div>\r\n        <div class=\"col-3\"></div>\r\n    </div>\r\n    <hr>\r\n    <div class=\"row middle-row\">\r\n        <div class=\"col-6\">\r\n            <app-order-list role=\"cervecero\" (orderSelected)=\"SelectOrder($event)\"></app-order-list>\r\n        </div>\r\n        <div class=\"col-2\"></div>\r\n        <div class=\"col-4\">\r\n            <app-work-order [order]=\"currentOrder\"></app-work-order>\r\n        </div>\r\n    </div>\r\n    <div class=\"row blank-row\"></div>\r\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/cervecero/views/main-cervecero/main-cervecero.component.html":
/*!*******************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/cervecero/views/main-cervecero/main-cervecero.component.html ***!
  \*******************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<nav class=\"bottom-shadow\">\r\n    <div class=\"row main-bar\">\r\n        <div class=\"col-6\">\r\n        </div>\r\n        <div class=\"col-6 profile\">\r\n            <img *ngIf=\"user\" src=\"{{user.image}}\" class=\"profile-pic\" [ngClass]=\"open ? 'active': ''\" (click)=\"toggleSidebar()\">\r\n        </div>\r\n    </div>\r\n</nav>\r\n\r\n<div class=\"sidebar\" [ngClass]=\"open ? '' : 'collapsed'\">\r\n    <div class=\"top-row\">\r\n        <br><br>\r\n        <app-sidebar-option name=\"Perfil\" link=\"/cervecero/profile\"></app-sidebar-option>\r\n        <app-sidebar-option name=\"Gestión de pedidos\" link=\"/cervecero\"></app-sidebar-option>\r\n        <app-sidebar-option logOut=true></app-sidebar-option>\r\n    </div>\r\n</div>\r\n<div class=\"content\">\r\n    <router-outlet></router-outlet>\r\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/cervecero/views/manage-products-cervecero/manage-products-cervecero.component.html":
/*!*****************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/cervecero/views/manage-products-cervecero/manage-products-cervecero.component.html ***!
  \*****************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container\">\n    <div class=\"row top-row\">\n        <div class=\"col-3\"></div>\n        <div class=\"col-6\">\n            \n        </div>\n        <div class=\"col-3\"></div>\n    </div>\n    <hr>\n        <app-product-management></app-product-management>\n    <hr>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/cliente/views/home-cliente/home-cliente.component.html":
/*!*************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/cliente/views/home-cliente/home-cliente.component.html ***!
  \*************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container\">\r\n    <div class=\"row top-row page-title\">\r\n        <div class=\"col-3\"></div>\r\n        <div class=\"col-6\"></div>\r\n        <div class=\"col-3\"></div>\r\n    </div>\r\n    <hr>\r\n    <div class=\"row\">\r\n        <div class=\"col-3 align-center\">\r\n            <div class=\"btn-group full-width\" *ngIf=\"order\">\r\n                <button class=\"btn btn-info\" disabled>${{order.totalPrice}}</button>\r\n                <!-- <button class=\"btn btn-info\" disabled>{{order.tableID | table}}</button> -->\r\n            </div>\r\n            <app-spinner *ngIf=\"!order\"></app-spinner>\r\n        </div>\r\n        <div class=\"col-6\">\r\n            <button class=\"btn btn-success full-width\" data-toggle=\"modal\" data-target=\"#orderModal\">Ver pedido</button>\r\n        </div>\r\n        <div class=\"col-3\">\r\n            <div class=\"btn-group full-width\">\r\n                <button title=\"Todo\" class=\"btn btn-outline-success\" (click)=\"ClearFilters()\"><i class=\"fas fa-asterisk\"></i></button>\r\n                <button title=\"Comida\" class=\"btn btn-outline-success\" (click)=\"Filter('comida')\"><i class=\"fas fa-utensils\"></i></button>\r\n                <button title=\"Bebidas\" class=\"btn btn-outline-success\" (click)=\"Filter('bebida')\"><i class=\"fas fa-wine-glass-alt\"></i></button>\r\n                <button title=\"Postres\" class=\"btn btn-outline-success\" (click)=\"Filter('postre')\"><i class=\"fas fa-ice-cream\"></i></button>\r\n                <button title=\"Alcohol\" class=\"btn btn-outline-success\" (click)=\"Filter('alcohol')\"><i class=\"fas fa-beer\"></i></button>\r\n                <button title=\"Sin TACC\" class=\"btn btn-outline-success\" (click)=\"Filter('celiaco')\"><i class=\"fas fa-seedling\"></i></button>\r\n                <button title=\"Vegana\" class=\"btn btn-outline-success\" (click)=\"Filter('vegano')\"><i class=\"fas fa-carrot\"></i></button>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <div class=\"ordered align-center\" *ngIf=\"hasOrder\" style=\"color:#FFFFFF\">\r\n        <hr>\r\n        Tu código de pedido es <b>{{order.codeID}}</b> y tu mozo es <b>{{order.waiter.name}} {{order.waiter.lastname}}</b>.\r\n    </div>\r\n    <div>\r\n        \r\n    </div>\r\n    <hr>\r\n    <div class=\"row card-group\">\r\n        <div class=\"col-3 mar-top-2\"  *ngFor=\"let prod of showingProducts | async\">\r\n            <app-food-card (added)=\"AddToOrder($event)\" [resetEvent]=\"onReset\" [product]=\"prod\"></app-food-card>\r\n        </div>\r\n    </div>\r\n    <hr>\r\n\r\n    \r\n</div>\r\n\r\n<!-- Order modal -->\r\n<div class=\"modal fade\" id=\"orderModal\">\r\n  <div class=\"modal-dialog\">\r\n    <div class=\"modal-content\">\r\n        <div class=\"modal-body\">\r\n            <div class=\"container-fluid\">\r\n                <div class=\"row\">\r\n                    <div class=\"col-2\"></div>\r\n                    <div class=\"col-8\">\r\n                        <h3 class=\"align-center\">Pedido</h3>\r\n                    </div>\r\n                    <div class=\"col-2\"></div>\r\n                </div>\r\n                <hr class=\"mar-top-1\">\r\n                <div class=\"row\">\r\n                    <div class=\"col-1\"></div>\r\n                    <div class=\"col-10\">\r\n                        <div *ngIf=\"somethingOrdered\" class=\"resume\">\r\n                            <ul>\r\n                                <li *ngFor=\"let item of order.items\">\r\n                                        {{item.name}} - \r\n                                    <span class=\"price\">\r\n                                        ${{item.price}}\r\n                                    </span>\r\n                                </li>\r\n                            </ul>\r\n                            <div class=\"align-center\">\r\n                                <span style=\"font-weight: bold;\">Precio total: </span>\r\n                                <span class=\"price\" style=\"font-weight: bold;\">${{order.totalPrice}}</span>\r\n                            </div>\r\n                        </div>\r\n                        <div *ngIf=\"!somethingOrdered\" class=\"align-center\">\r\n                            <span>Todavía no hay nada pedido</span>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"col-1\"></div>\r\n                </div>\r\n                <hr class=\"mar-top-1\">\r\n                <div class=\"row\">\r\n                    <div class=\"col-2\"></div>\r\n                    <div class=\"col-8\">\r\n                        <div class=\"btn-group full-width\">\r\n                            <button class=\"btn btn-outline-danger\" title=\"Borrar pedido\" (click)=\"CancelOrder()\" data-dismiss=\"modal\"><i class=\"fas fa-times\"></i></button>\r\n                            <button class=\"btn btn-outline-success\" title=\"Confirmar pedido\" (click)=\"MakeOrder()\" data-dismiss=\"modal\"><i class=\"fas fa-check\"></i></button>\r\n                            <button class=\"btn btn-outline-secondary\" title=\"Seguir pidiendo\" data-dismiss=\"modal\"><i class=\"fas fa-long-arrow-alt-left\"></i></button>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"col-2\"></div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n  </div>\r\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/cliente/views/main-cliente/main-cliente.component.html":
/*!*************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/cliente/views/main-cliente/main-cliente.component.html ***!
  \*************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<nav>\r\n    <div class=\"row main-bar\">\r\n        <div class=\"col-6\"></div>\r\n        <div class=\"col-6 profile\">\r\n            <img *ngIf=\"user\" src=\"{{user.image}}\" class=\"profile-pic\" [ngClass]=\"open ? 'active': ''\" (click)=\"toggleSidebar()\">\r\n        </div>\r\n    </div>\r\n</nav>\r\n\r\n\r\n<div class=\"sidebar\" [ngClass]=\"open ? '' : 'collapsed'\">\r\n    <div class=\"top-row\">\r\n        <br><br>\r\n        <app-sidebar-option name=\"Perfil\" link=\"/cliente/profile\"></app-sidebar-option>\r\n        <app-sidebar-option name=\"Pedir algo\" link=\"/cliente\"></app-sidebar-option>\r\n        <app-sidebar-option name=\"Buscar pedido\" link=\"buscar\"></app-sidebar-option>\r\n        <app-sidebar-option logOut=true></app-sidebar-option>\r\n    </div>\r\n</div>\r\n<div class=\"content\">\r\n    <router-outlet></router-outlet>\r\n</div>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/cliente/views/search-order/search-order.component.html":
/*!*************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/cliente/views/search-order/search-order.component.html ***!
  \*************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container\">\r\n    <div class=\"row middle-row\">\r\n        <div class=\"col-3\"></div>\r\n        <div class=\"col-6\">\r\n            <!-- <h1 class=\"page-title\">- Buscar un pedido -</h1> -->\r\n        </div>\r\n        <div class=\"col-3\"></div>\r\n    </div>\r\n    <hr>\r\n    <div class=\"row middle-row\">\r\n        <div class=\"col-3\"></div>\r\n        <div class=\"col-6\">\r\n            <!-- <input [(ngModel)]=\"orderID\" class=\"form-control full-width\" type=\"text\"\r\n                placeholder=\"Ingrese el código de su pedido\"> -->\r\n        </div>\r\n        <div class=\"col-3\"></div>\r\n    </div>\r\n    <div class=\"row mar-top-1\">\r\n        <div class=\"col-3\"></div>\r\n        <!-- <div class=\"col-6\">\r\n            <button [disabled]=\"!orderID\" class=\"btn btn-outline-primary full-width\"\r\n                (click)=\"FindOrder()\">Buscar</button>\r\n        </div> -->\r\n        <!-- <div class=\"col-3\">\r\n            <button class=\"btn btn-outline-primary full-width\"\r\n                (click)=\"FindPending()\">Buscar</button>\r\n            <select class=\"form-control\" [ngModel]=\"selectedItem\" (ngModelChange)=\"SelectItem($event)\">\r\n                <option *ngFor=\"let order of orders\">{{order.orderID}}</option>\r\n            </select>\r\n        </div> -->\r\n        <div class=\"col-6\">\r\n            <app-order-list role=\"cliente\" (orderSelected)=\"SelectOrder($event)\"></app-order-list>\r\n        </div>\r\n        \r\n    </div>\r\n    <div class=\"row mar-top-1\" *ngIf=\"alreadyPaid\">\r\n    <!-- <div class=\"row mar-top-1\"> -->\r\n        <div class=\"col-3\"></div>\r\n        <div class=\"col-6\">\r\n            <button [disabled]=\"surveyDone\" class=\"btn btn-info full-width\" data-toggle=\"modal\"\r\n                data-target=\"#questionsModal\">Hacer encuesta</button>\r\n        </div>\r\n        <div class=\"col-3\"></div>\r\n    </div>\r\n\r\n    <div class=\"row middle-row\" *ngIf=\"waitingOrder\">\r\n        <div class=\"col-4\"></div>\r\n        <div class=\"col-4 align-center\">\r\n            <app-spinner></app-spinner>\r\n        </div>\r\n        <div class=\"col-4\"></div>\r\n    </div>\r\n\r\n    <div class=\"row middle-row\" *ngIf=\"order\">\r\n        <div class=\"col-3\"></div>\r\n        <div class=\"col-6\">\r\n            <div class=\"card outside-shadow\">\r\n                <div class=\"card-body align-center\">\r\n                    <h5 class=\"card-title\">Pedido</h5>\r\n                    <hr>\r\n                    <div class=\"row\">\r\n                        <div class=\"col-2\"></div>\r\n                        <div class=\"col-8\">\r\n                            <b>Código: </b>{{order.codeID}}\r\n                        </div>\r\n                        <div class=\"col-2\"></div>\r\n                    </div>\r\n                    <div class=\"row\">\r\n                        <div class=\"col-2\"></div>\r\n                        <div class=\"col-8\">\r\n                            <b>Mozo: </b>{{order.waiter.name}} {{order.waiter.lastname}}\r\n                        </div>\r\n                        <div class=\"col-2\"></div>\r\n                    </div>\r\n                    <div class=\"row\" *ngIf=\"!IsServed()\">\r\n                        <div class=\"col-2\"></div>\r\n                        <div class=\"col-8\">\r\n                            <b>Tiempo estimado: </b>{{remainingTime | timeleft}}\r\n                        </div>\r\n                        <div class=\"col-2\"></div>\r\n                    </div>\r\n                    <hr>\r\n                    <div class=\"row\">\r\n                        <div class=\"col-2\"></div>\r\n                        <div class=\"col-8\">\r\n                            <b>Comida</b>\r\n                        </div>\r\n                        <div class=\"col-2\"></div>\r\n                    </div>\r\n                    <div class=\"row\">\r\n                        <div class=\"col-2\"></div>\r\n                        <div class=\"col-8\">\r\n                            <ul>\r\n                                <li *ngFor=\"let i of order.items\">{{i.name}} - ${{i.price}}</li>\r\n                            </ul>\r\n                        </div>\r\n                        <div class=\"col-2\"></div>\r\n                    </div>\r\n                    <hr>\r\n                    <div class=\"row\">\r\n                        <div class=\"col-2\"></div>\r\n                        <div class=\"col-8\">\r\n                            <b>Precio total: </b> <span class=\"price\">${{order.totalPrice}}</span>\r\n                        </div>\r\n                        <div class=\"col-2\"></div>\r\n                    </div>\r\n                    <hr>\r\n                    <div class=\"row align-center\">\r\n                        <div class=\"btn btn-primary btn-sm align-center\">\r\n                            <input type=\"file\" (change)=\"onFileChanged($event)\" [(ngModel)]=\"imagen\"\r\n                                >\r\n                        </div>\r\n                        <div class=\"col-12\">\r\n                            <button [disabled]=\"this.file == null\" (click)=\"cambiarImagen()\" *ngIf=\"!notCancelled()\"\r\n                                class=\"btn btn-info full-width\">Cambiar Foto</button>\r\n                        </div>\r\n                    </div>\r\n                    <hr>\r\n                    <div class=\"row\">\r\n                        <div class=\"col-12\">\r\n                            <button [disabled]=\"CanPayNow()\" (click)=\"Cancel()\" *ngIf=\"!notCancelled()\"\r\n                                class=\"btn btn-danger full-width\">Cancelar Pedido</button>\r\n                        </div>\r\n                    </div>\r\n                    <hr>\r\n                    <div class=\"row\">\r\n                        <div class=\"col-12\">\r\n                            <button [disabled]=\"!CanPayNow()\" (click)=\"ticketPDF()\"\r\n                                class=\"btn btn-warning full-width\">Descargar Ticket</button>\r\n                        </div>\r\n                    </div>\r\n                    <hr>\r\n                    <div class=\"row\">\r\n                        <div class=\"col-12\">\r\n                            <button [disabled]=\"!CanPayNow()\" (click)=\"Pay()\"\r\n                                class=\"btn btn-success full-width\">Pagar</button>\r\n                        </div>\r\n                    </div>\r\n                    \r\n                </div>\r\n            </div>\r\n        </div>\r\n        <div class=\"col-3\"></div>\r\n    </div>\r\n</div>\r\n\r\n<div class=\"modal fade\" id=\"questionsModal\">\r\n    <div class=\"modal-dialog\">\r\n        <div class=\"modal-content\">\r\n            <div class=\"modal-body\">\r\n                <div class=\"container-fluid\">\r\n                    <div class=\"row\">\r\n                        <div class=\"col-2\"></div>\r\n                        <div class=\"col-8\">\r\n                            <h3 class=\"align-center\">Encuesta</h3>\r\n                        </div>\r\n                        <div class=\"col-2\"></div>\r\n                    </div>\r\n                    <hr class=\"mar-top-1\">\r\n                    <form [formGroup]=\"surveyForm\" (ngSubmit)=\"SendAnswers()\">\r\n                        <div class=\"row\">\r\n                            <div class=\"col-2\"></div>\r\n                            <div class=\"col-8\">\r\n                                <input formControlName=\"tableScore\" class=\"form-control full-width align-center\"\r\n                                    type=\"number\" placeholder=\"Puntée del 1 al 10 a la mesa.\">\r\n                            </div>\r\n                            <div class=\"col-2\"></div>\r\n                        </div>\r\n                        <div class=\"row middle-row\">\r\n                            <div class=\"col-2\"></div>\r\n                            <div class=\"col-8\">\r\n                                <input formControlName=\"waiterScore\" class=\"form-control full-width align-center\"\r\n                                    type=\"number\" placeholder=\"Puntée del 1 al 10 al mozo.\">\r\n                            </div>\r\n                            <div class=\"col-2\"></div>\r\n                        </div>\r\n                        <div class=\"row middle-row\">\r\n                            <div class=\"col-2\"></div>\r\n                            <div class=\"col-8\">\r\n                                <input formControlName=\"restaurantScore\" class=\"form-control full-width align-center\"\r\n                                    type=\"number\" placeholder=\"Puntée del 1 al 10 al restaurante.\">\r\n                            </div>\r\n                            <div class=\"col-2\"></div>\r\n                        </div>\r\n                        <div class=\"row middle-row\">\r\n                            <div class=\"col-2\"></div>\r\n                            <div class=\"col-8\">\r\n                                <input formControlName=\"cookScore\" class=\"form-control full-width align-center\"\r\n                                    type=\"number\" placeholder=\"Puntée del 1 al 10 al cocinero.\">\r\n                            </div>\r\n                            <div class=\"col-2\"></div>\r\n                        </div>\r\n                        <div class=\"row middle-row\">\r\n                            <div class=\"col-2\"></div>\r\n                            <div class=\"col-8\">\r\n                                <textarea class=\"form-control\" cols=\"30\" rows=\"3\" maxlength=\"66\" formControlName=\"comment\"\r\n                                    placeholder=\"Escribe un breve comentario (máximo de 66 caracteres).\"></textarea>\r\n                            </div>\r\n                            <div class=\"col-2\"></div>\r\n                        </div>\r\n                        <div class=\"row mar-top-1\">\r\n                            <div class=\"col-2\"></div>\r\n                            <div class=\"col-4 align-center\">\r\n                                <div class=\"form-check form-check-inline\">\r\n                                    <input class=\"form-check-input\" type=\"radio\" formControlName=\"commentType\" name=\"commentType\"\r\n                                        id=\"negative\" value=\"false\">\r\n                                    <label class=\"form-check-label negative\" for=\"negative\">Malo</label>\r\n                                </div>\r\n                            </div>\r\n                            <div class=\"col-4 align-center\">\r\n                                <div class=\"form-check form-check-inline\">\r\n                                    <input class=\"form-check-input\" type=\"radio\" formControlName=\"commentType\" name=\"commentType\"\r\n                                        id=\"positive\" value=\"true\">\r\n                                    <label class=\"form-check-label positive\" for=\"positive\">Bueno</label>\r\n                                </div>\r\n                            </div>\r\n                            <div class=\"col-2\"></div>\r\n                        </div>\r\n                        <div class=\"row middle-row\">\r\n                            <div class=\"col-2\"></div>\r\n                            <div class=\"col-8\">\r\n                                <button [disabled]=\"!surveyForm.valid\" class=\"btn btn-success full-width\"\r\n                                    data-dismiss=\"modal\" (click)=\"SendAnswers()\">Enviar encuesta</button>\r\n                            </div>\r\n                            <div class=\"col-2\"></div>\r\n                        </div>\r\n                    </form>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/cocinero/views/home-cocinero/home-cocinero.component.html":
/*!****************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/cocinero/views/home-cocinero/home-cocinero.component.html ***!
  \****************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container\">\r\n    <div class=\"row top-row\">\r\n        <div class=\"col-3\"></div>\r\n        <div class=\"col-6\">\r\n        </div>\r\n        <div class=\"col-3\"></div>\r\n    </div>\r\n    <hr>\r\n    <div class=\"row middle-row\">\r\n        <div class=\"col-6\">\r\n            <app-order-list role=\"cocinero\" (orderSelected)=\"SelectOrder($event)\"></app-order-list>\r\n        </div>\r\n        <div class=\"col-2\"></div>\r\n        <div class=\"col-4\">\r\n            <app-work-order [order]=\"currentOrder\"></app-work-order>\r\n        </div>\r\n    </div>\r\n    <div class=\"row blank-row\"></div>\r\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/cocinero/views/main-cocinero/main-cocinero.component.html":
/*!****************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/cocinero/views/main-cocinero/main-cocinero.component.html ***!
  \****************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<nav class=\"bottom-shadow\">\r\n    <div class=\"row main-bar \">\r\n        <div class=\"col-6\">\r\n        </div>\r\n        <div class=\"col-6 profile\">\r\n            <img *ngIf=\"user\" src=\"{{user.image}}\" class=\"profile-pic\" [ngClass]=\"open ? 'active': ''\" (click)=\"toggleSidebar()\">\r\n        </div>\r\n    </div>\r\n</nav>\r\n\r\n<div class=\"sidebar\" [ngClass]=\"open ? '' : 'collapsed'\">\r\n    <div class=\"top-row\"><br><br>\r\n        <app-sidebar-option name=\"Perfil\" link=\"/cocinero/profile\"></app-sidebar-option>\r\n        <app-sidebar-option name=\"Gestión de pedidos\" link=\"/cocinero\"></app-sidebar-option>\r\n        <app-sidebar-option name=\"Gestión de productos\" link=\"/cocinero/products\"></app-sidebar-option>\r\n        <app-sidebar-option logOut=true></app-sidebar-option>\r\n    </div>\r\n</div>\r\n<div class=\"content\">\r\n    <router-outlet></router-outlet>\r\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/cocinero/views/manage-products-cocinero/manage-products-cocinero.component.html":
/*!**************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/cocinero/views/manage-products-cocinero/manage-products-cocinero.component.html ***!
  \**************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container\">\n    <div class=\"row top-row\">\n        <div class=\"col-3\"></div>\n        <div class=\"col-6\">\n            \n        </div>\n        <div class=\"col-3\"></div>\n    </div>\n    <hr>\n        <app-product-management></app-product-management>\n    <hr>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/mozo/main/select-order/select-order.component.html":
/*!*********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/mozo/main/select-order/select-order.component.html ***!
  \*********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"card outside-shadow\">\r\n    <div class=\"card-body align-center\">\r\n        <h5 class=\"card-title\">Pedido</h5>\r\n        <hr>\r\n        <div *ngIf=\"order\" class=\"order-body align-center\">\r\n\r\n            <div class=\"row\">\r\n                <div class=\"col-12\">\r\n                    <b>Código:</b> {{order.codeID}}\r\n                </div>\r\n            </div>\r\n            <div class=\"row\">\r\n                <div class=\"col-12\">\r\n                    <b>Cliente:</b> {{order.client.name}} {{order.client.lastname}}\r\n                </div>\r\n            </div>\r\n            <div class=\"row\">\r\n                <div class=\"col-12\">\r\n                    <b>Mesa:</b> {{order.tableID}}\r\n                </div>\r\n            </div>\r\n            <div class=\"row\">\r\n                <div class=\"col-12\">\r\n                    <b>Precio total:</b> ${{order.totalPrice}}\r\n                </div>\r\n            </div>\r\n            <hr>\r\n\r\n            <div class=\"row\">\r\n                <div class=\"col-12\">\r\n                    <b>Está:</b> {{order.state}}\r\n                </div>\r\n            </div>\r\n            <div class=\"row\">\r\n                <div class=\"col-12\">\r\n                    <b>Mozo:</b> {{order.waiter.name}} {{order.waiter.lastname}}\r\n                </div>\r\n            </div>\r\n            <div class=\"row\">\r\n                <div class=\"col-12\">\r\n                    <b>Tiempo restante:</b> {{remainingTime | timeleft}}\r\n                </div>\r\n            </div>\r\n            <hr>\r\n            <div class=\"row\">\r\n                <div class=\"col-12\">\r\n                    <button (click)=\"comandaPDF()\" class=\"btn btn-info full-width\">Descargar comanda</button>\r\n                </div>\r\n            </div>\r\n            <hr>\r\n            <div class=\"row\">\r\n                <div class=\"col-12\">\r\n                    <select class=\"form-control\" [ngModel]=\"selectedItem\" (ngModelChange)=\"SelectItem($event)\">\r\n                        <option [ngValue]=\"it\" *ngFor=\"let it of order.items\">{{it.name}}</option>\r\n                    </select>\r\n                </div>\r\n            </div>\r\n            <div class=\"row mar-top-1\" *ngIf=\"!selectedItem\">\r\n                <div class=\"col-12\">\r\n                    <label>No se seleccionó nada.</label>\r\n                </div>\r\n            </div>\r\n            <div class=\"item mar-top-1\" *ngIf=\"selectedItem\">\r\n                <div class=\"row\">\r\n                    <div class=\"col-12\">\r\n                        <b>Estado:</b> {{selectedItem.state}}\r\n                    </div>\r\n                </div>\r\n                <div class=\"row\">\r\n                    <div class=\"col-12\">\r\n                        <b>Lo tiene:</b> \r\n                        <span *ngIf=\"selectedItem.worker\">\r\n                        {{selectedItem.worker.name}} {{selectedItem.worker.lastname}} \r\n                        </span>\r\n                        <span *ngIf=\"!selectedItem.worker\">\r\n                            Nadie por ahora.\r\n                        </span>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <hr>\r\n            <div class=\"row\">\r\n                <div class=\"col-12\">\r\n                    <button [disabled]=\"!CanBeServed()\" (click)=\"CompleteOrder()\" class=\"btn btn-success full-width\">Pasar a servido</button>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <div class=\"row\" *ngIf=\"!order\">\r\n            <div class=\"col-12\">\r\n                <label>Seleccione un pedido.</label>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/mozo/views/home-mozo/home-mozo.component.html":
/*!****************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/mozo/views/home-mozo/home-mozo.component.html ***!
  \****************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container\">\r\n    <div class=\"row top-row\">\r\n        <div class=\"col-3\"></div>\r\n        <div class=\"col-6\">\r\n            \r\n        </div>\r\n        <div class=\"col-3\"></div>\r\n    </div>\r\n    <hr>\r\n    <div class=\"row middle-row\">\r\n        <div class=\"col-6\">\r\n            <app-order-list role=\"mozo\" (orderSelected)=\"SelectOrder($event)\"></app-order-list>\r\n        </div>\r\n        <div class=\"col-2\"></div>\r\n        <div class=\"col-4\">\r\n            <app-select-order [order]=\"currentOrder\"></app-select-order>\r\n        </div>\r\n    </div>\r\n    <div class=\"row blank-row\"></div>\r\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/mozo/views/main-mozo/main-mozo.component.html":
/*!****************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/mozo/views/main-mozo/main-mozo.component.html ***!
  \****************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<nav class=\"bottom-shadow\">\r\n    <div class=\"row main-bar\">\r\n        <div class=\"col-6\">\r\n            <!-- <h1 class=\"main-title\">La Comanda</h1> -->\r\n        </div>\r\n        <div class=\"col-6 profile\">\r\n            <img *ngIf=\"user\" src=\"{{user.image}}\" class=\"profile-pic\" [ngClass]=\"open ? 'active': ''\" (click)=\"toggleSidebar()\">\r\n        </div>\r\n    </div>\r\n</nav>\r\n\r\n<div class=\"sidebar\" [ngClass]=\"open ? '' : 'collapsed'\">\r\n    <div class=\"top-row align-center\">\r\n        <br><br>\r\n        <app-sidebar-option name=\"Perfil\" link=\"/mozo/profile\"></app-sidebar-option>\r\n        <app-sidebar-option name=\"Gestión de pedidos\" link=\"/mozo\"></app-sidebar-option>\r\n        <app-sidebar-option name=\"Gestión de mesas\" link=\"/mozo/tables\"></app-sidebar-option>\r\n        <app-sidebar-option logOut=true></app-sidebar-option>\r\n    </div>\r\n</div>\r\n<div class=\"content\">\r\n    <router-outlet></router-outlet>\r\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/mozo/views/manage-tables/manage-tables.component.html":
/*!************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/mozo/views/manage-tables/manage-tables.component.html ***!
  \************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container\">\r\n    <div class=\"row top-row\">\r\n        <div class=\"col-3\"></div>\r\n        <div class=\"col-6\">\r\n            \r\n        </div>\r\n        <div class=\"col-3\"></div>\r\n    </div>\r\n    <hr>\r\n    <div class=\"row middle-row card-group\">\r\n        <div class=\"col-3 mar-top-2\" *ngFor=\"let tab of tables | async\">\r\n            <app-table-card [table]=\"tab\"></app-table-card>\r\n        </div>\r\n    </div>\r\n    <hr>\r\n</div>\r\n\r\n<app-footer></app-footer>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/socio/views/home-socio/home-socio.component.html":
/*!*******************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/socio/views/home-socio/home-socio.component.html ***!
  \*******************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<br><br>\r\n<div class=\"container\">\r\n    <div class=\"row align-center\">\r\n        <!-- <div class=\"card align-center col-3\">\r\n            <div class=\"card-body\">\r\n                <h5 class=\"card-title\">Control de roles</h5>\r\n                <p class=\"card-text\">Desde esta opción podés administrar los roles de los usuarios registrados en la\r\n                    aplicación.</p>\r\n                <hr>\r\n                <div class=\"role-panel\">\r\n                    <div class=\"row\">\r\n                        <div class=\"col-12\">\r\n                            <input [(ngModel)]=\"changeRoleEmail\" type=\"text\"\r\n                                class=\"form-control input-titanic role-input\" placeholder=\"Email del usuario\">\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"row middle-row\">\r\n                        <div class=\"col-12\">\r\n                            <select [(ngModel)]=\"changeRoleNewRole\" class=\"form-control input-titanic role-input\">\r\n                                <option value=\"socio\">Socio</option>\r\n                                <option value=\"mozo\">Mozo</option>\r\n                                <option value=\"cocinero\">Cocinero</option>\r\n                                <option value=\"cervecero\">Cervecero</option>\r\n                                <option value=\"bartender\">Bartender</option>\r\n                                <option value=\"cliente\">Cliente</option>\r\n                            </select>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"row middle-row\">\r\n                        <div class=\"col-12\">\r\n                            <button class=\"btn btn-primary full-width\" (click)=\"ChangeRole()\">Cambiar rol</button>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n\r\n            </div>\r\n        </div> -->\r\n        <div class=\"card align-center col-3\">\r\n            <div class=\"card-body\">\r\n                <h5 class=\"card-title\">Lista de usuarios</h5>\r\n                <p class=\"card-text\">Desde acá podés ver un listado completo de los usuarios registrados en la aplicación</p>\r\n                \r\n                \r\n                <hr>\r\n                <div class=\"btn-group full-width\">\r\n                    <button class=\"btn btn-danger full-width\" (click)=\"GeneratePDF()\">Generar PDF</button>\r\n                </div>\r\n\r\n            </div>\r\n        </div>\r\n        <div class=\"card align-center col-3\">\r\n            <div class=\"card-body\">\r\n                <h5 class=\"card-title\">Facturación</h5>\r\n                <p>Desde acá podés ver todo lo que se facturó en detalle.</p>\r\n            <hr>\r\n            <div class=\"btn-group full-width\">\r\n                <button class=\"btn btn-success full-width\" (click)=\"GenerateCSV()\">Generar CSV</button>\r\n            </div>\r\n\r\n            </div>\r\n        </div>        \r\n    </div>\r\n\r\n    \r\n    \r\n\r\n\r\n\r\n\r\n\r\n\r\n        <!-- <div class=\"col-4 align-center\">\r\n            <h3>Control de roles</h3>\r\n            <hr>\r\n            <p>Desde esta opción podés administrar los roles de los usuarios registrados en la aplicación.</p>\r\n            <hr>\r\n            <div class=\"role-panel\">\r\n                <div class=\"row\">\r\n                    <div class=\"col-12\">\r\n                        <input [(ngModel)]=\"changeRoleEmail\" type=\"text\" class=\"form-control input-titanic role-input\"\r\n                            placeholder=\"Email del usuario\">\r\n                    </div>\r\n                </div>\r\n                <div class=\"row middle-row\">\r\n                    <div class=\"col-12\">\r\n                        <select [(ngModel)]=\"changeRoleNewRole\" class=\"form-control input-titanic role-input\">\r\n                            <option value=\"socio\">Socio</option>\r\n                            <option value=\"mozo\">Mozo</option>\r\n                            <option value=\"cocinero\">Cocinero</option>\r\n                            <option value=\"cervecero\">Cervecero</option>\r\n                            <option value=\"bartender\">Bartender</option>\r\n                            <option value=\"cliente\">Cliente</option>\r\n                        </select>\r\n                    </div>\r\n                </div>\r\n                <div class=\"row middle-row\">\r\n                    <div class=\"col-12\">\r\n                        <button class=\"btn btn-primary full-width\" (click)=\"ChangeRole()\">Cambiar rol</button>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n\r\n        </div> -->\r\n        <!-- <div class=\"col-4 align-center\">\r\n            <h3>Lista de usuarios</h3>\r\n            <hr>\r\n            <p>Desde acá podés ver un listado completo de los usuarios registrados en la aplicación</p>\r\n            <hr>\r\n            <div class=\"btn-group full-width\">\r\n                <button class=\"btn btn-danger full-width\" (click)=\"GeneratePDF()\">Generar PDF</button>\r\n            </div>\r\n        </div> -->\r\n        <!-- <div class=\"col-4 align-center\">\r\n            <h3>Facturación</h3>\r\n            <hr>\r\n            <p>Desde acá podés ver todo lo que se facturó en detalle.</p>\r\n            <hr>\r\n            <div class=\"btn-group full-width\">\r\n                <button class=\"btn btn-success full-width\" (click)=\"GenerateCSV()\">Generar CSV</button>\r\n            </div>\r\n        </div> -->\r\n    </div>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/socio/views/main-socio/main-socio.component.html":
/*!*******************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/socio/views/main-socio/main-socio.component.html ***!
  \*******************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<nav class=\"bottom-shadow\">\r\n    <div class=\"row main-bar\">\r\n        <div class=\"col-6\">\r\n        </div>\r\n        <div class=\"col-6 profile\">\r\n            <img *ngIf=\"user\" src=\"{{user.image}}\" class=\"profile-pic\" [ngClass]=\"open ? 'active': ''\" (click)=\"toggleSidebar()\">\r\n            \r\n        </div>\r\n    </div>\r\n</nav>\r\n\r\n<div class=\"sidebar\" [ngClass]=\"open ? '' : 'collapsed'\">\r\n    <div class=\"top-row\">\r\n        <br><br>\r\n        <app-sidebar-option name=\"Perfil\" link=\"/socio/profile\"></app-sidebar-option>\r\n        <app-sidebar-option name=\"Panel de control\" link=\"/socio\"></app-sidebar-option>\r\n        <app-sidebar-option name=\"Gestión de mesas\" link=\"/socio/tables\"></app-sidebar-option>\r\n        <app-sidebar-option name=\"Gestión de pedidos\" link=\"/socio/orders\"></app-sidebar-option>\r\n        <app-sidebar-option name=\"Gestión de productos\" link=\"/socio/products\"></app-sidebar-option>\r\n        <app-sidebar-option name=\"Gestión de usuarios\" link=\"/socio/users\"></app-sidebar-option>\r\n        <app-sidebar-option name=\"Ver logs\" link=\"/socio/logs\"></app-sidebar-option>\r\n        <app-sidebar-option name=\"Ver encuestas\" link=\"/socio/surveys\"></app-sidebar-option>\r\n        <app-sidebar-option name=\"Estadisticas de pedidos\" link=\"/socio/orderStats\"></app-sidebar-option>\r\n        <app-sidebar-option name=\"Estadisticas de mesas\" link=\"/socio/tableStats\"></app-sidebar-option>\r\n        <app-sidebar-option logOut=true></app-sidebar-option>\r\n    </div>\r\n</div>\r\n<div class=\"content\">\r\n    <router-outlet></router-outlet>\r\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/socio/views/manage-orders-admin/manage-orders-admin.component.html":
/*!*************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/socio/views/manage-orders-admin/manage-orders-admin.component.html ***!
  \*************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container\">\r\n    <div class=\"row top-row\">\r\n        <div class=\"col-3\"></div>\r\n        <div class=\"col-6\">\r\n            <h1 class=\"page-title\"></h1>\r\n        </div>\r\n        <div class=\"col-3\"></div>\r\n    </div>\r\n    <hr>\r\n    <div class=\"row middle-row\">\r\n        <div class=\"col-6\">\r\n            <app-order-list role=\"socio\" (orderSelected)=\"SelectOrder($event)\"></app-order-list>\r\n        </div>\r\n        <div class=\"col-2\"></div>\r\n        <div class=\"col-4\">\r\n            <app-select-order [order]=\"currentOrder\"></app-select-order>\r\n        </div>\r\n    </div>\r\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/socio/views/manage-products-admin/manage-products-admin.component.html":
/*!*****************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/socio/views/manage-products-admin/manage-products-admin.component.html ***!
  \*****************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container\">\n    <div class=\"row top-row\">\n        <div class=\"col-3\"></div>\n        <div class=\"col-6\">\n            \n        </div>\n        <div class=\"col-3\"></div>\n    </div>\n    <hr>\n        <app-product-management></app-product-management>\n    <hr>\n</div>\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/socio/views/manage-tables-admin/manage-tables-admin.component.html":
/*!*************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/socio/views/manage-tables-admin/manage-tables-admin.component.html ***!
  \*************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container\">\r\n    <div class=\"row top-row\">\r\n        <div class=\"col-3\"></div>\r\n        <div class=\"col-6\">\r\n            \r\n        </div>\r\n        <div class=\"col-3\"></div>\r\n    </div>\r\n    <hr>\r\n    <div class=\"row middle-row card-group\">\r\n        <div class=\"col-3 mar-top-2\" *ngFor=\"let tab of tables | async\">\r\n            <app-table-card [table]=\"tab\" [isAdmin]=\"true\"></app-table-card>\r\n        </div>\r\n    </div>\r\n    <hr>\r\n</div>\r\n\r\n<app-footer></app-footer>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/socio/views/manage-users/manage-users.component.html":
/*!***********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/socio/views/manage-users/manage-users.component.html ***!
  \***********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container\">\n    <div class=\"row top-row page-title\">\n        <div class=\"col-3\"></div>\n        <div class=\"col-6\"></div>\n        <div class=\"col-3\"></div>\n    </div>\n    <hr>\n    <div class=\"row\">\n        <div class=\"col-3 align-center\">\n\n        </div>\n        <div class=\"col-6\">\n            <button class=\"btn btn-success full-width\" data-toggle=\"modal\" data-target=\"#userModal\">Agregar\n                Usuario</button>\n        </div>\n        <div class=\"col-3\">\n            <div class=\"btn-group full-width\">\n\n                <button title=\"Todos\" class=\"btn btn-outline-success\" (click)=\"ClearFilters()\"><i\n                        class=\"fas fa-asterisk\"></i></button>\n                <button title=\"Socios\" class=\"btn btn-outline-success\" (click)=\"Filter('socio')\"><i\n                        class=\"fas fa-user-secret\"></i></button>\n                <button title=\"Bartenders\" class=\"btn btn-outline-success\" (click)=\"Filter('bartender')\"><i\n                        class=\"fas fa-wine-glass-alt\"></i></button>\n                <button title=\"Cerveceros\" class=\"btn btn-outline-success\" (click)=\"Filter('cervecero')\"><i\n                        class=\"fas fa-beer\"></i></button>\n                <button title=\"Cocineros\" class=\"btn btn-outline-success\" (click)=\"Filter('cocinero')\"><i\n                        class=\"fas fa-fire\"></i></button>\n                        <button title=\"Mozos\" class=\"btn btn-outline-success\" (click)=\"Filter('mozo')\"><i\n                            class=\"fas fa-book\"></i></button>\n                <button title=\"Suspendidos\" class=\"btn btn-outline-success\" (click)=\"Filter('suspendidos')\"><i\n                        class=\"fas fa-ban\"></i></button>\n                <button title=\"Habilitados\" class=\"btn btn-outline-success\" (click)=\"Filter('habilitados')\"><i\n                        class=\"fas fa-check\"></i></button>\n\n            </div>\n        </div>\n    </div>\n\n    <hr>\n\n    <div class=\"row\">\n        <div class=\"col-3 align-center\">\n\n        </div>\n        <div class=\"form-group col-6 align-center full-width\">\n            <input class=\"form-control\" type=\"text\" [(ngModel)]=\"busqueda\" (input)=\"search()\" placeholder=\"Ingrese aqui su busqueda...\">\n        </div>\n        <div class=\"col-3 align-center\">\n\n        </div>\n        \n        \n    </div>\n\n    <hr>\n    <div class=\"table-responsive\">\n        <table class=\"table table-hover\">\n            <thead>\n                <tr>\n                    <th scope=\"col\">Foto</th>\n                    <th scope=\"col\">Nombre</th>\n                    <th scope=\"col\">Apellido</th>\n                    <th scope=\"col\">Usuario</th>\n                    <th scope=\"col\">Rol</th>\n                    <th scope=\"col\">Suspender</th>\n                    <th scope=\"col\">Borrar</th>\n                    <th scope=\"col\">Editar</th>\n                </tr>\n            </thead>\n            <tbody *ngIf=\"users\">\n                <tr class=\"user\" *ngFor=\"let user of showingUsers | async | sortPipe:'email'\">\n                    <td><img [src]=\"user.image\" width=\"30px\" height=\"30px\">\n                    </td>\n                    <td>{{user.name}}</td>\n                    <td>{{user.lastname}}</td>\n                    <td>{{user.email}}</td>\n                    <td>{{user.role}}</td>\n                    <td><button class=\"btn btn-outline-danger\" *ngIf=\"user.state != 'deshabilitado'\"\n                            (click)=\"changeState(user.id, user.state)\">Suspender</button>\n                        <button class=\"btn btn-outline-success\" *ngIf=\"user.state == 'deshabilitado'\"\n                            (click)=\"changeState(user.id, user.state)\">Reincorporar</button>\n                    </td>\n                    <td><button class=\"btn btn-outline-danger\" (click)=\"deleteUser(user.id)\">Borrar</button>\n                    </td>\n                    <td>\n                        <button class=\"btn btn-outline-primary\" data-toggle=\"modal\" data-target=\"#userModal\"\n                            (click)=\"editarUsuario(user)\">Editar</button>\n                    </td>\n                </tr>\n            </tbody>\n        </table>\n    </div>\n    <hr>\n</div>\n\n<!-- Product modal -->\n<div class=\"modal fade\" id=\"userModal\">\n    <div class=\"modal-dialog\">\n        <div class=\"modal-content\">\n            <div class=\"modal-body\">\n                <div class=\"container-fluid\">\n                    <div class=\"row\">\n                        <div class=\"col-2\"></div>\n                        <div class=\"col-8\" *ngIf=\"!this.haySeleccionado\">\n                            <h3 class=\"align-center\">Agregar Usuario</h3>\n                        </div>\n                        <div class=\"col-8\" *ngIf=\"this.haySeleccionado\">\n                            <h3 class=\"align-center\">Editar Usuario</h3>\n                        </div>\n                        <div class=\"col-2\"></div>\n                    </div>\n\n                    <hr class=\"mar-top-1\">\n                    <form [formGroup]=\"userForm\" (ngSubmit)=\"SendUser()\">\n\n                        <div class=\"row\" *ngIf=\"this.haySeleccionado\">\n                            <div class=\"col-5\"></div>\n                            <div class=\"col-2\">\n                                <img [src]=\"this.usuarioSeleccionado.image\" width=\"60px\" height=\"60px\">\n                            </div>\n                            <div class=\"col-5\"></div>\n                        </div>\n\n                        <div class=\"row\">\n                            <div class=\"col-1\"></div>\n                            <div class=\"col-10\">\n\n                                <div class=\"row middle-row\">\n                                    <div class=\"col-12\">\n                                        <label>Nombre:</label>\n                                    </div>\n                                    <div class=\"col-12\">\n                                        <input formControlName=\"userName\" class=\"form-control full-width align-center\"\n                                            type=\"text\" placeholder=\"Nombre del usuario\" required>\n                                    </div>\n                                </div>\n\n                                <div class=\"row middle-row\">\n                                    <div class=\"col-12\">\n                                        <label>Apellido:</label>\n                                    </div>\n                                    <div class=\"col-12\">\n                                        <input formControlName=\"userLastname\"\n                                            class=\"form-control full-width align-center\" type=\"text\"\n                                            placeholder=\"Apellido del usuario\" required>\n                                    </div>\n                                </div>\n\n                                <div class=\"row middle-row\">\n                                    <div class=\"col-12\">\n                                        <label>Email:</label>\n                                    </div>\n                                    <div class=\"col-12\">\n                                        <input formControlName=\"userMail\" class=\"form-control full-width align-center\"\n                                            type=\"email\" placeholder=\"Email del usuario\" required [readonly]=\"this.haySeleccionado\">\n                                    </div>\n                                </div>\n\n                                <div class=\"row middle-row\">\n\n                                    <div class=\"col-12\">\n                                        <label>Rol:</label>\n                                    </div>\n\n                                    <div class=\"col-12\">\n                                        <select class=\"custom-select mr-sm-2\" id=\"inlineFormCustomSelect\"\n                                            formControlName=\"userRole\">\n                                            <option value=\"bartender\">Bartender</option>\n                                            <option value=\"cocinero\">Cocinero</option>\n                                            <option value=\"cervecero\">Cervecero</option>\n                                            <option value=\"mozo\">Mozo</option>\n                                            <option value=\"socio\">Socio</option>\n                                            <option value=\"mozo\">Mozo</option>\n                                            <option value=\"cliente\">Cliente</option>\n                                        </select>\n                                    </div>\n\n                                </div>\n\n                                <div class=\"row middle-row\">\n                                    <div class=\"col-12\">\n                                        <label>Foto de perfil:</label>\n                                    </div>\n\n                                    <div class=\"col-12\">\n                                        <div class=\"btn btn-primary btn-sm float-left\">\n                                            <input type=\"file\" (change)=\"onFileChanged($event)\"\n                                                formControlName=\"userImage\" name=\"userImage\">\n                                        </div>\n                                    </div>\n                                </div>\n                            </div>\n                            <div class=\"col-1\"></div>\n                        </div>\n                    </form>\n\n                    <hr class=\"mar-top-1\">\n                    <div class=\"row\">\n                        <div class=\"col-2\"></div>\n                        <div class=\"col-8\">\n                            <div class=\"btn-group full-width\">\n                                <button type=\"reset\" class=\"btn btn-outline-danger\" title=\"Cancelar\" (click)=\"Cancel()\"\n                                    data-dismiss=\"modal\"><i class=\"fas fa-times\"></i></button>\n\n                                <button class=\"btn btn-outline-success\" *ngIf=\"!this.haySeleccionado\"\n                                    title=\"Agregar usuario\" (click)=\"addUser()\" data-dismiss=\"modal\"><i\n                                        class=\"fas fa-check\"></i></button>\n\n                                <button class=\"btn btn-outline-success\" *ngIf=\"this.haySeleccionado\"\n                                    title=\"Actualizar usuario\" (click)=\"updateUser()\" data-dismiss=\"modal\"><i\n                                        class=\"fas fa-check\"></i></button>\n                            </div>\n                        </div>\n                        <div class=\"col-2\"></div>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/socio/views/survey-table/survey-table.component.html":
/*!***********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/socio/views/survey-table/survey-table.component.html ***!
  \***********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container\">\r\n    <div class=\"row top-row\">\r\n        <div class=\"col-3\"></div>\r\n        <div class=\"col-6\">\r\n\r\n        </div>\r\n        <div class=\"col-3\"></div>\r\n    </div>\r\n    <div class=\"row middle-row\">\r\n        <div class=\"col-1\"></div>\r\n        <div class=\"col-10\">\r\n            <label>\r\n                <p>Cada encuesta está coloreada según el promedio de puntaje realizado sobre las cuatro categorías: el\r\n                    color es <span class=\"red\">rojo</span> si el promedio está por debajo del 4, el color es <span\r\n                        class=\"yellow\">amarillo</span> si es mayor o igual que 4 pero menor a 7 y por último <span\r\n                        class=\"green\">verde</span>, si el promedio es mayor a 7. Haga click en una encuesta para ver más\r\n                    detalles.</p>\r\n            </label>\r\n        </div>\r\n        <div class=\"col-1\"></div>\r\n    </div>\r\n    <div class=\"row middle-row\">\r\n        <div class=\"col-12\">\r\n\r\n            <div class=\"table-responsive\">\r\n                <table class=\"table table-hover\">\r\n                    <thead class=\"align-center\">\r\n                        <tr>\r\n                            <th scope=\"col\">Pedido</th>\r\n                            <th scope=\"col\">Cliente</th>\r\n                            <th scope=\"col\">Mesa</th>\r\n                            <th scope=\"col\">Mozo</th>\r\n                            <th scope=\"col\">Punt. mesa</th>\r\n                            <th scope=\"col\">Punt. mozo</th>\r\n                            <th scope=\"col\">Punt. restaurante</th>\r\n                            <th scope=\"col\">Punt. cocinero</th>\r\n                            <th scope=\"col\">Fecha</th>\r\n                        </tr>\r\n                    </thead>\r\n                    <tbody>\r\n                        <tr [surveyAverage]=\"sur\" *ngFor=\"let sur of surveys | async\" class=\"survey align-center\"\r\n                            data-toggle=\"modal\" data-target=\"#surveyModal\" (click)=\"SelectSurvey(sur)\">\r\n                            <td>{{sur.order.codeID}}</td>\r\n                            <td>{{sur.order.client.name}} {{sur.order.client.lastname}}</td>\r\n                            <td>{{sur.order.tableID}}</td>\r\n                            <td>{{sur.order.waiter.name}} {{sur.order.waiter.lastname}}</td>\r\n                            <td>{{sur.tableScore}}</td>\r\n                            <td>{{sur.waiterScore}}</td>\r\n                            <td>{{sur.restaurantScore}}</td>\r\n                            <td>{{sur.cookScore}}</td>\r\n                            <td>{{sur.order.timeLeft | neatDate}}</td>\r\n                        </tr>\r\n                    </tbody>\r\n                </table>\r\n            </div>\r\n\r\n        </div>\r\n    </div>\r\n</div>\r\n\r\n\r\n<div class=\"modal fade\" id=\"surveyModal\">\r\n    <div class=\"modal-dialog\">\r\n        <div class=\"modal-content\">\r\n            <div class=\"modal-body\">\r\n                <div class=\"container-fluid\" *ngIf=\"survey\">\r\n                    <div class=\"row\">\r\n                        <div class=\"col-2\"></div>\r\n                        <div class=\"col-8\">\r\n                            <h3 class=\"align-center\">Pedido {{survey.order.codeID}}</h3>\r\n                        </div>\r\n                        <div class=\"col-2\"></div>\r\n                    </div>\r\n                    <hr class=\"mar-top-1\">\r\n                    <div class=\"row\">\r\n                        <div class=\"col-12 align-center\">\r\n                            <b>Promedio de los puntajes: </b> <span [surveyAverage]=\"survey\"\r\n                                returnAverage=\"true\"></span>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"row middle-row\">\r\n                        <div class=\"col-12 align-center\" [surveyComment]='survey.commentType'></div>\r\n                    </div>\r\n                    <hr>\r\n                    <div class=\"row\">\r\n                        <div class=\"col-12\">\r\n                            <span [surveyComment]=\"survey.commentType\" isIcon=\"true\"></span> - {{survey.comment}}\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"row mar-top-1\">\r\n                        <div class=\"col-1\"></div>\r\n                        <div class=\"col-10 align-right\">\r\n                            {{survey.order.client.name}} {{survey.order.client.lastname}}\r\n                        </div>\r\n                        <div class=\"col-1\"></div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/socio/views/view-logs/view-logs.component.html":
/*!*****************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/socio/views/view-logs/view-logs.component.html ***!
  \*****************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n<div class=\"align-center mar-top-1\" *ngIf=\"showingLogs == null\">\n    <div class=\"row top-row page-title\">\n        <div class=\"col-3\"></div>\n        <div class=\"col-6\"></div>\n        <div class=\"col-3\"></div>\n    </div>\n    <hr>\n    <div class=\"row\">\n        <div class=\"col-3 align-center\">\n\n        </div>\n        <div class=\"col-6\">\n\n        </div>\n        <div class=\"col-3\">\n\n        </div>\n    </div>\n\n    <hr>\n    <app-spinner></app-spinner>\n</div>\n<div class=\"container\">\n    <div class=\"row top-row page-title\">\n        <div class=\"col-3\"></div>\n        <div class=\"col-6\"></div>\n        <div class=\"col-3\"></div>\n    </div>\n    <hr>\n    <div class=\"row\">\n        <div class=\"col-3 align-center\">\n\n        </div>\n        <div class=\"col-6\">\n            <button class=\"btn btn-success full-width\" data-toggle=\"modal\" data-target=\"#logModal\">Personalizar <i\n                    class=\"fas fa-cogs\"></i></button>\n        </div>\n        <div class=\"col-3\">\n            <button type=\"button\" class=\"btn btn-info full-width\" (click)=\"exportCSV()\">Exportar a CSV<i\n                class=\"fas fa-angle-double-down\" ></i></button>\n        </div>\n    </div>\n\n    <hr>\n\n    <div class=\"row\">\n        <div class=\"col-3 align-center\">\n\n        </div>\n        <div class=\"form-group col-6 align-center full-width\">\n            <input class=\"form-control\" type=\"text\" [(ngModel)]=\"busqueda\" (input)=\"search()\"\n                placeholder=\"Ingrese aqui su busqueda...\">\n            <label *ngIf=\"busqueda || !this.todos\">\n                <h4>Cantidad de coincidencias: {{this.coincidencias}}</h4>\n            </label>\n        </div>\n        <div class=\"col-3 align-center\">\n\n\n\n        </div>\n\n\n    </div>\n\n    <hr>\n    <div class=\"table-responsive\">\n        <!-- <table class=\"table table-hover\"> -->\n        <table class=\"table table-hover\">\n            <thead>\n                <tr>\n                    <th scope=\"col\">Usuario</th>\n                    <th scope=\"col\">Fecha</th>\n                    <th scope=\"col\">Detalle</th>\n                </tr>\n            </thead>\n            <tbody *ngIf=\"logs\">\n                <tr class=\"log\" *ngFor=\"let log of showingLogs | async | sortPipe:'fecha'\">\n                    <td>{{log.usuario}}</td>\n                    <td>{{log.fecha | date: 'hh:mm dd-MM-yyyy'}}</td>\n                    <td>{{log.observacion}}</td>\n                </tr>\n            </tbody>\n        </table>\n    </div>\n    <hr>\n</div>\n\n<!-- Logs modal -->\n<div class=\"modal fade\" id=\"logModal\">\n    <div class=\"modal-dialog\">\n        <div class=\"modal-content\">\n            <div class=\"modal-body\">\n                <div class=\"container-fluid\">\n                    <div class=\"row\">\n                        <div class=\"col-2\"></div>\n                        <div class=\"col-8\">\n                            <h3 class=\"align-center\">Personalizar Busqueda</h3>\n                        </div>\n                        <div class=\"col-2\"></div>\n                    </div>\n\n                    <hr class=\"mar-top-1\">\n                    <form [formGroup]=\"logForm\" (ngSubmit)=\"SendSettings()\">\n\n                        <div class=\"row\">\n                            <div class=\"col-1\"></div>\n                            <div class=\"col-10\">\n\n                                <div class=\"row middle-row\">\n                                    <div class=\"col-12\">\n                                        <label>Seleccione los sectores de los cuales desea ver el log:</label>\n                                    </div>\n                                </div>\n\n                                <div class=\"row middle-row\">\n                                    <div class=\"input-group mb-3 col-12\">\n                                        <div class=\"custom-control custom-checkbox col-4\">\n                                            <input type=\"checkbox\" class=\"custom-control-input\" id=\"typeTodos\"\n                                                formControlName=\"typeTodos\" [(ngModel)]=\"todos\"\n                                                (change)=\"enableDisable()\">\n                                            <label class=\"custom-control-label\" for=\"typeTodos\">Todos</label>\n                                        </div>\n                                        <div class=\"custom-control custom-checkbox col-4\">\n                                            <input type=\"checkbox\" class=\"custom-control-input\" id=\"typeCocinero\"\n                                                formControlName=\"typeCocinero\">\n                                            <label class=\"custom-control-label\" for=\"typeCocinero\">Cocinero</label>\n                                        </div>\n                                        <div class=\"custom-control custom-checkbox col-4\">\n                                            <input type=\"checkbox\" class=\"custom-control-input\" id=\"typeMozo\"\n                                                formControlName=\"typeMozo\">\n                                            <label class=\"custom-control-label\" for=\"typeMozo\">Mozo</label>\n                                        </div>\n                                        <div class=\"custom-control custom-checkbox col-4\">\n                                            <input type=\"checkbox\" class=\"custom-control-input\" id=\"typeSocio\"\n                                                formControlName=\"typeSocio\">\n                                            <label class=\"custom-control-label\" for=\"typeSocio\">Socio</label>\n                                        </div>\n                                        <div class=\"custom-control custom-checkbox col-4\">\n                                            <input type=\"checkbox\" class=\"custom-control-input\" id=\"typeCervecero\"\n                                                formControlName=\"typeCervecero\">\n                                            <label class=\"custom-control-label\" for=\"typeCervecero\">Cervecero</label>\n                                        </div>\n                                        <div class=\"custom-control custom-checkbox col-4\">\n                                            <input type=\"checkbox\" class=\"custom-control-input\" id=\"typeBartender\"\n                                                formControlName=\"typeBartender\">\n                                            <label class=\"custom-control-label\" for=\"typeBartender\">Bartender</label>\n                                        </div>\n                                        <div class=\"custom-control custom-checkbox col-4\">\n                                            <input type=\"checkbox\" class=\"custom-control-input\" id=\"typeDelivery\"\n                                                formControlName=\"typeDelivery\">\n                                            <label class=\"custom-control-label\" for=\"typeDelivery\">Delivery</label>\n                                        </div>\n                                        <div class=\"custom-control custom-checkbox col-4\">\n                                            <input type=\"checkbox\" class=\"custom-control-input\" id=\"typeCliente\"\n                                                formControlName=\"typeCliente\">\n                                            <label class=\"custom-control-label\" for=\"typeCliente\">Cliente</label>\n                                        </div>\n                                    </div>\n                                </div>\n\n                                <div class=\"row middle-row\">\n                                    <div class=\"col-6\">\n                                        <div class=\"col-12\">\n                                            <label>Desde fecha:</label>\n                                        </div>\n                                        <div>\n                                            <input type=\"date\" name=\"fechaInicio\" formControlName=\"fechaInicio\">\n                                        </div>\n                                    </div>\n                                    <div class=\"col-6\">\n                                        <div class=\"col-12\">\n                                            <label>Hasta fecha:</label>\n                                        </div>\n                                        <div>\n                                            <input type=\"date\" name=\"fechaFin\" formControlName=\"fechaFin\">\n                                        </div>\n                                    </div>\n                                </div>\n                            </div>\n                            <div class=\"col-1\"></div>\n                        </div>\n                    </form>\n\n                    <hr class=\"mar-top-1\">\n                    <div class=\"row\">\n                        <div class=\"col-2\"></div>\n                        <div class=\"col-8\">\n                            <div class=\"btn-group full-width\">\n                                <button class=\"btn btn-outline-danger\" title=\"Cancelar\" (click)=\"Cancel()\"\n                                    data-dismiss=\"modal\"><i class=\"fas fa-times\"></i></button>\n\n                                <button class=\"btn btn-outline-success\" title=\"Filtrar tabla\" (click)=\"search()\"\n                                    data-dismiss=\"modal\"><i class=\"fas fa-check\"></i></button>\n\n                            </div>\n                        </div>\n                        <div class=\"col-2\"></div>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/socio/views/view-orders-stats/view-orders-stats.component.html":
/*!*********************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/socio/views/view-orders-stats/view-orders-stats.component.html ***!
  \*********************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"align-center mar-top-1\" *ngIf=\"this.topBest == null && this.topWorst == null\">\r\n    <div class=\"row top-row page-title\">\r\n        <div class=\"col-3\"></div>\r\n        <div class=\"col-6\"></div>\r\n        <div class=\"col-3\"></div>\r\n    </div>\r\n    <hr>\r\n    <div class=\"row\">\r\n        <div class=\"col-3 align-center\">\r\n\r\n        </div>\r\n        <div class=\"col-6\">\r\n\r\n        </div>\r\n        <div class=\"col-3\">\r\n\r\n        </div>\r\n    </div>\r\n\r\n    <hr>\r\n    <app-spinner></app-spinner>\r\n</div>\r\n<div class=\"container\" *ngIf=\"this.cancelledOrders != null\">\r\n    <div class=\"row\" *ngIf=\"this.topBest != null && this.topWorst != null\">\r\n        <div class=\"col-3\"></div>\r\n        <div class=\"col-6\"></div>\r\n        <div class=\"col-3\"></div>\r\n        <hr>\r\n        <div class=\"col-3\"></div>\r\n        <div class=\"col-6\"></div>\r\n        <div class=\"col-3\"></div>\r\n        <hr>\r\n        <div class=\"col-3\">\r\n        </div>\r\n        <div class=\"col-6\">\r\n            <button class=\"btn btn-success full-width\" data-toggle=\"modal\" data-target=\"#settingsModal\">Personalizar<i\r\n                    class=\"fas fa-cogs\"></i></button>\r\n        </div>\r\n        <div class=\"col-3\">\r\n            <button type=\"button\" class=\"btn btn-info full-width\" (click)=\"exportCSV()\">Exportar a CSV<i\r\n                class=\"fas fa-angle-double-down\" ></i></button>\r\n        </div>\r\n\r\n        <div class=\"row\">\r\n            <div class=\"col-3 align-center\">\r\n            </div>\r\n            <div class=\"col-6 align-center\">\r\n            </div>\r\n            <div class=\"col-3 align-center\">\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <hr>\r\n    <div class=\"row\" *ngIf=\"this.topBest\">\r\n        <div class=\"col-3 align-center\">\r\n        </div>\r\n        <div class=\"col-6 align-center\">\r\n            <h2>Top 3 mas vendidos</h2>\r\n        </div>\r\n        <div class=\"col-3 align-center\">\r\n        </div>\r\n\r\n        <div class=\"card col-3 align-center\" *ngIf=\"this.topBest[0] != null\">\r\n            <img src=\"../../../../../assets/img/primero-trofeo.png\" class=\"card-img-top\">\r\n            <div class=\"card-body\">\r\n                <h5 class=\"card-title\">{{this.topBest[0][0]}}</h5>\r\n                <p class=\"card-text\">El articulo {{this.topBest[0][0]}} fue el mas solicitado con {{this.topBest[0][1]}}\r\n                    ventas </p>\r\n            </div>\r\n        </div>\r\n\r\n        <div class=\"card col-3 align-center\" *ngIf=\"this.topBest[1] != null\">\r\n            <img src=\"../../../../../assets/img/segundo-trofeo.png\" class=\"card-img-top\">\r\n            <div class=\"card-body\">\r\n                <h5 class=\"card-title\">{{this.topBest[1][0]}}</h5>\r\n                <p class=\"card-text\">En segundo lugar se encuentra {{this.topBest[1][0]}} con {{this.topBest[1][1]}}\r\n                    ventas</p>\r\n            </div>\r\n        </div>\r\n\r\n        <div class=\"card col-3 align-center\" *ngIf=\"this.topBest[2] != null\">\r\n            <img src=\"../../../../../assets/img/tercero-trofeo.png\" class=\"card-img-top\">\r\n            <div class=\"card-body\">\r\n                <h5 class=\"card-title\">{{this.topBest[2][0]}}</h5>\r\n                <p class=\"card-text\">El tercer puesto es para {{this.topBest[2][0]}} con {{this.topBest[2][1]}} ventas\r\n                </p>\r\n            </div>\r\n        </div>\r\n\r\n    </div>\r\n\r\n    <div class=\"row\" *ngIf=\"this.topWorst\">\r\n        <div class=\"col-3 align-center\">\r\n        </div>\r\n        <div class=\"col-6 align-center\">\r\n            <h2>Top 3 menos vendidos</h2>\r\n        </div>\r\n        <div class=\"col-3 align-center\">\r\n        </div>\r\n        <div class=\"card col-3 align-center\" *ngIf=\"this.topWorst[0] != null\">\r\n            <img src=\"../../../../../assets/img/mal amarillo.png\" class=\"card-img-top\">\r\n            <div class=\"card-body\">\r\n                <div class=\"card-body\">\r\n                    <h5 class=\"card-title\">{{this.topWorst[0][0]}}</h5>\r\n                    <p class=\"card-text\">El articulo {{this.topWorst[0][0]}} no se vendió tanto, tuvo\r\n                        {{this.topWorst[0][1]}} ventas </p>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <div class=\"card col-3 align-center\" *ngIf=\"this.topWorst[1] != null\">\r\n            <img src=\"../../../../../assets/img/mal naranja.png\" class=\"card-img-top\">\r\n            <div class=\"card-body\">\r\n                <h5 class=\"card-title\">{{this.topWorst[1][0]}}</h5>\r\n                <p class=\"card-text\">El articulo {{this.topWorst[1][0]}} fue un poco menos solicitado que el anterior\r\n                    con\r\n                    {{this.topWorst[1][1]}} ventas </p>\r\n            </div>\r\n        </div>\r\n        <div class=\"card col-3 align-center\" *ngIf=\"this.topWorst[2] != null\">\r\n            <img src=\"../../../../../assets/img/mal rojo.png\" class=\"card-img-top\">\r\n            <div class=\"card-body\">\r\n                <h5 class=\"card-title\">{{this.topWorst[2][0]}}</h5>\r\n                <p class=\"card-text\">El articulo {{this.topWorst[2][0]}} fue lo menos solicitado con\r\n                    {{this.topWorst[2][1]}} ventas </p>\r\n            </div>\r\n        </div>\r\n    </div>\r\n\r\n    <div class=\"row\">\r\n        <div class=\"col-3 align-center\">\r\n\r\n        </div>\r\n        <div class=\"col-6 align-center\">\r\n            <h2>Pedidos Cancelados</h2>\r\n        </div>\r\n        <div class=\"col-3 align-center\">\r\n\r\n        </div>\r\n\r\n\r\n        <div class=\"table-responsive\">\r\n            <table class=\"table table-hover\">\r\n                <thead>\r\n                    <tr>\r\n                        <th scope=\"col\">Codigo de pedido</th>\r\n                        <th scope=\"col\">Fecha</th>\r\n                        <th scope=\"col\">Estado</th>\r\n                    </tr>\r\n                </thead>\r\n                <tbody>\r\n                    <tr class=\"order\" *ngFor=\"let order of cancelledOrders | async\">\r\n                        <td><label>{{order.codeID}}</label></td>\r\n                        <td>{{order.timestamp | date:'hh:mm dd/MM/yyyy'}}</td>\r\n                        <td>{{order.state}}</td>\r\n                    </tr>\r\n                </tbody>\r\n            </table>\r\n        </div>\r\n    </div>\r\n    <hr>\r\n\r\n    <div class=\"row\">\r\n        <div class=\"col-3 align-center\">\r\n        </div>\r\n        <div class=\"col-6 align-center\">\r\n            <h2>Pedidos no entregados en tiempo estipulado</h2>\r\n        </div>\r\n        <div class=\"col-3 align-center\">\r\n        </div>\r\n\r\n\r\n        <div class=\"table-responsive\">\r\n            <table class=\"table table-hover\">\r\n                <thead>\r\n                    <tr>\r\n                        <th scope=\"col\">Codigo de pedido</th>\r\n                        <th scope=\"col\">Fecha</th>\r\n                        <th scope=\"col\">Demora</th>\r\n                    </tr>\r\n                </thead>\r\n                <tbody>\r\n                    <tr class=\"order\" *ngFor=\"let order of delayedOrders | async\">\r\n                        <td><label>{{order.codeID}}</label></td>\r\n                        <td>{{order.timestamp | date:'hh:mm dd/MM/yyyy'}}</td>\r\n                        <td>{{order.delayed | timeleft}}</td>\r\n                    </tr>\r\n                </tbody>\r\n            </table>\r\n        </div>\r\n    </div>\r\n    <hr>\r\n</div>\r\n\r\n\r\n<!-- Settings modal -->\r\n<div class=\"modal fade\" id=\"settingsModal\">\r\n    <div class=\"modal-dialog\">\r\n        <div class=\"modal-content\">\r\n            <div class=\"modal-body\">\r\n                <div class=\"container-fluid\">\r\n                    <div class=\"row\">\r\n                        <div class=\"col-2\"></div>\r\n                        <div class=\"col-8\">\r\n                            <h3 class=\"align-center\">Personalizar Busqueda</h3>\r\n                        </div>\r\n                        <div class=\"col-2\"></div>\r\n                    </div>\r\n\r\n                    <hr class=\"mar-top-1\">\r\n                    <form [formGroup]=\"settingsForm\" (ngSubmit)=\"SendSettings()\">\r\n\r\n                        <div class=\"row\">\r\n                            <div class=\"col-1\"></div>\r\n                            <div class=\"col-10\">\r\n                                <div class=\"row middle-row\">\r\n                                    <div class=\"col-6\">\r\n                                        <div class=\"col-12\">\r\n                                            <label>Desde fecha:</label>\r\n                                        </div>\r\n                                        <div>\r\n                                            <input type=\"date\" name=\"fechaInicio\" formControlName=\"fechaInicio\"\r\n                                                (change)=\"setDate()\">\r\n                                        </div>\r\n                                    </div>\r\n                                    <div class=\"col-6\">\r\n                                        <div class=\"col-12\">\r\n                                            <label>Hasta fecha:</label>\r\n                                        </div>\r\n                                        <div>\r\n                                            <input type=\"date\" name=\"fechaFin\" formControlName=\"fechaFin\"\r\n                                                (change)=\"setDate(false)\">\r\n                                        </div>\r\n                                    </div>\r\n\r\n                                </div>\r\n                            </div>\r\n                            <div class=\"col-1\"></div>\r\n                        </div>\r\n                    </form>\r\n\r\n                    <hr class=\"mar-top-1\">\r\n                    <div class=\"row\">\r\n                        <div class=\"col-2\"></div>\r\n                        <div class=\"col-8\">\r\n                            <div class=\"btn-group full-width\">\r\n                                <button class=\"btn btn-outline-danger\" title=\"Cancelar\" (click)=\"Cancel()\"\r\n                                    data-dismiss=\"modal\"><i class=\"fas fa-times\"></i></button>\r\n\r\n                                <button class=\"btn btn-outline-success\" title=\"Filtrar tabla\" (click)=\"search()\"\r\n                                    data-dismiss=\"modal\"><i class=\"fas fa-check\"></i></button>\r\n\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"col-2\"></div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/socio/views/view-tables-stats/view-tables-stats.component.html":
/*!*********************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/socio/views/view-tables-stats/view-tables-stats.component.html ***!
  \*********************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"align-center mar-top-1\" *ngIf=\"this.mesaMasUsada == null && this.mesaMenosUsada == null\">\n    <div class=\"row top-row page-title\">\n        <div class=\"col-3\"></div>\n        <div class=\"col-6\"></div>\n        <div class=\"col-3\"></div>\n    </div>\n    <hr>\n    <div class=\"row\">\n        <div class=\"col-3 align-center\">\n\n        </div>\n        <div class=\"col-6\">\n\n        </div>\n        <div class=\"col-3\">\n\n        </div>\n    </div>\n\n    <hr>\n    <app-spinner></app-spinner>\n</div>\n<div class=\"container\">\n    <div class=\"row\">\n        <div class=\"col-3\"></div>\n        <div class=\"col-6\"></div>\n        <div class=\"col-3\"></div>\n        <hr>\n        <div class=\"col-3\"></div>\n        <div class=\"col-6\"></div>\n        <div class=\"col-3\"></div>\n        <hr>\n        <div class=\"col-3\">\n        </div>\n        <div class=\"col-6\" *ngIf=\"this.mesaMasUsada\">\n            <button class=\"btn btn-success full-width\" data-toggle=\"modal\" data-target=\"#settingsModal\">Personalizar<i\n                    class=\"fas fa-cogs\"></i></button>\n        </div>\n        <div class=\"col-3\" *ngIf=\"this.mesaMasUsada\">\n            <button type=\"button\" class=\"btn btn-info full-width\" (click)=\"exportCSV()\">Exportar a CSV<i\n                class=\"fas fa-angle-double-down\" ></i></button>\n        </div>\n\n        <div class=\"row\">\n            <div class=\"col-3 align-center\">\n            </div>\n            <div class=\"col-6 align-center\">\n            </div>\n            <div class=\"col-3 align-center\">\n            </div>\n        </div>\n    </div>\n    <hr>\n    <div class=\"row\">\n        <div class=\"card col-5 align-center\" *ngIf=\"mesaMasUsada\">\n            <img src=\"../../../../../assets/img/mesaConGente.png\" class=\"card-img-top\">\n            <div class=\"card-body\">\n                <h5 class=\"card-title\">Mesa más usada</h5>\n                <p class=\"card-text\">La mesa {{ this.mesaMasUsada[0] }} fue utilizada {{ this.mesaMasUsada[1] }} veces\n                </p>\n            </div>\n        </div>\n        <div class=\"card col-5 align-center\" *ngIf=\"mesaMenosUsada\">\n            <img src=\"../../../../../assets/img/mesaSinGente.png\" class=\"card-img-top\">\n            <div class=\"card-body\">\n                <h5 class=\"card-title\">Mesa menos usada</h5>\n                <p class=\"card-text\">La mesa {{ this.mesaMenosUsada[0] }} fue utilizada {{ this.mesaMenosUsada[1] }}\n                    veces </p>\n            </div>\n        </div>\n\n        <div class=\"card col-5 align-center\" *ngIf=\"mesaMayorFacturacion\">\n            <img src=\"../../../../../assets/img/mayorFacturacion.png\" class=\"card-img-top\">\n            <div class=\"card-body\">\n                <h5 class=\"card-title\">Mesa con mayor recaudación</h5>\n                <p class=\"card-text\">La mesa {{ this.arrayAcumulador.indexOf(this.mesaMayorFacturacion) }} recaudó\n                    {{ this.mesaMayorFacturacion }} pesos </p>\n            </div>\n        </div>\n        <div class=\"card col-5 align-center\" *ngIf=\"mesaMenorFacturacion\">\n            <img src=\"../../../../../assets/img/menorFacturacion.png\" class=\"card-img-top\">\n            <div class=\"card-body\">\n                <h5 class=\"card-title\">Mesa con menor recaudación</h5>\n                <p class=\"card-text\">La mesa {{ this.arrayAcumulador.indexOf(this.mesaMenorFacturacion) }} recaudó\n                    {{ this.mesaMenorFacturacion }} pesos </p>\n            </div>\n        </div>\n\n        <div class=\"card col-5 align-center\" *ngIf=\"mesaMenorFacturacion\">\n            <img src=\"../../../../../assets/img/facturaLarga.png\" class=\"card-img-top\">\n            <div class=\"card-body\">\n                <h5 class=\"card-title\">Mesa con mayor importe de factura</h5>\n                <p class=\"card-text\">La mesa {{ facturaMayorImporte.tableID }} tuvo una factura por\n                    {{ facturaMayorImporte.totalPrice }} pesos </p>\n            </div>\n        </div>\n        <div class=\"card col-5 align-center\" *ngIf=\"mesaMenorFacturacion\">\n            <img src=\"../../../../../assets/img/facturaCorta.png\" class=\"card-img-top\">\n            <div class=\"card-body\">\n                <h5 class=\"card-title\">Mesa con menor importe de factura</h5>\n                <p class=\"card-text\">La mesa {{ facturaMenorImporte.tableID }} tuvo una factura por\n                    {{ facturaMenorImporte.totalPrice }} pesos </p>\n            </div>\n        </div>\n    </div>\n\n    <div class=\"row middle-row\" *ngIf=\"mesaMenorFacturacion\">\n        <div class=\"col-1\"></div>\n        <div class=\"col-10\">\n            <h3 class=\"align-center\">Mejores Comentarios</h3>\n\n        </div>\n        <div class=\"col-1\"></div>\n    </div>\n    <div class=\"row middle-row\" *ngIf=\"mesaMenorFacturacion\">\n        <div class=\"col-12\">\n\n            <div class=\"table-responsive\">\n                <table class=\"table table-hover\">\n                    <thead class=\"align-center\">\n                        <tr>\n                            <th scope=\"col\">Pedido</th>\n                            <th scope=\"col\">Cliente</th>\n                            <th scope=\"col\">Mesa</th>\n                            <th scope=\"col\">Mozo</th>\n                            <th scope=\"col\">Comentario</th>\n\n                            <!-- <th scope=\"col\">Punt. mesa</th>\n                            <th scope=\"col\">Punt. mozo</th>\n                            <th scope=\"col\">Punt. restaurante</th>\n                            <th scope=\"col\">Punt. cocinero</th> -->\n                            <!-- <th scope=\"col\">Fecha</th> -->\n                        </tr>\n                    </thead>\n                    <tbody>\n                        <tr [surveyAverage]=\"sur\" *ngFor=\"let sur of surveysGood | async\" class=\"survey align-center\"\n                            data-toggle=\"modal\" data-target=\"#surveyModal\" (click)=\"SelectSurvey(sur)\">\n                            \n                            <td>{{sur.order.codeID}}</td>\n                            <td>{{sur.order.client.name}} {{sur.order.client.lastname}}</td>\n                            <td>{{sur.order.tableID}}</td>\n                            <td>{{sur.order.waiter.name}} {{sur.order.waiter.lastname}}</td>\n                            <td>{{sur.comment}}</td>\n\n                            <!-- <td>{{sur.tableScore}}</td>\n                            <td>{{sur.waiterScore}}</td>\n                            <td>{{sur.restaurantScore}}</td>\n                            <td>{{sur.cookScore}}</td> -->\n                            <!-- <td>{{sur.order.timeLeft | neatDate}}</td> -->\n                        </tr>\n                    </tbody>\n                </table>\n            </div>\n\n        </div>\n    </div>\n\n    <div class=\"row middle-row\" *ngIf=\"mesaMenorFacturacion\">\n        <div class=\"col-1\"></div>\n        <div class=\"col-10\">\n            <h3 class=\"align-center\">Peores Comentarios</h3>\n\n        </div>\n        <div class=\"col-1\"></div>\n    </div>\n    <div class=\"row middle-row\" *ngIf=\"mesaMenorFacturacion\">\n        <div class=\"col-12\">\n\n            <div class=\"table-responsive\">\n                <table class=\"table table-hover\">\n                    <thead class=\"align-center\">\n                        <tr>\n                            <th scope=\"col\">Pedido</th>\n                            <th scope=\"col\">Cliente</th>\n                            <th scope=\"col\">Mesa</th>\n                            <th scope=\"col\">Mozo</th>\n                            <th scope=\"col\">Comentario</th>\n\n                            <!-- <th scope=\"col\">Punt. mesa</th>\n                            <th scope=\"col\">Punt. mozo</th>\n                            <th scope=\"col\">Punt. restaurante</th>\n                            <th scope=\"col\">Punt. cocinero</th> -->\n                            <!-- <th scope=\"col\">Fecha</th> -->\n                        </tr>\n                    </thead>\n                    <tbody>\n                        <tr [surveyAverage]=\"sur\" *ngFor=\"let sur of surveysBad | async\" class=\"survey align-center\"\n                            data-toggle=\"modal\" data-target=\"#surveyModal\" (click)=\"SelectSurvey(sur)\">\n                            \n                            <td>{{sur.order.codeID}}</td>\n                            <td>{{sur.order.client.name}} {{sur.order.client.lastname}}</td>\n                            <td>{{sur.order.tableID}}</td>\n                            <td>{{sur.order.waiter.name}} {{sur.order.waiter.lastname}}</td>\n                            <td>{{sur.comment}}</td>\n\n                            <!-- <td>{{sur.tableScore}}</td>\n                            <td>{{sur.waiterScore}}</td>\n                            <td>{{sur.restaurantScore}}</td>\n                            <td>{{sur.cookScore}}</td> -->\n                            <!-- <td>{{sur.order.timeLeft | neatDate}}</td> -->\n                        </tr>\n                    </tbody>\n                </table>\n            </div>\n\n        </div>\n    </div>\n</div>\n\n<!-- Settings modal -->\n<div class=\"modal fade\" id=\"settingsModal\">\n    <div class=\"modal-dialog\">\n        <div class=\"modal-content\">\n            <div class=\"modal-body\">\n                <div class=\"container-fluid\">\n                    <div class=\"row\">\n                        <div class=\"col-2\"></div>\n                        <div class=\"col-8\">\n                            <h3 class=\"align-center\">Personalizar Busqueda</h3>\n                        </div>\n                        <div class=\"col-2\"></div>\n                    </div>\n\n                    <hr class=\"mar-top-1\">\n                    <form [formGroup]=\"settingsForm\" (ngSubmit)=\"SendSettings()\">\n\n                        <div class=\"row\">\n                            <div class=\"col-1\"></div>\n                            <div class=\"col-10\">\n                                <div class=\"row middle-row\">\n                                    <div class=\"col-6\">\n                                        <div class=\"col-12\">\n                                            <label>Desde fecha:</label>\n                                        </div>\n                                        <div>\n                                            <input type=\"date\" name=\"fechaInicio\" formControlName=\"fechaInicio\"\n                                                (change)=\"setDate()\">\n                                        </div>\n                                    </div>\n                                    <div class=\"col-6\">\n                                        <div class=\"col-12\">\n                                            <label>Hasta fecha:</label>\n                                        </div>\n                                        <div>\n                                            <input type=\"date\" name=\"fechaFin\" formControlName=\"fechaFin\"\n                                                (change)=\"setDate(false)\">\n                                        </div>\n                                    </div>\n\n                                </div>\n                            </div>\n                            <div class=\"col-1\"></div>\n                        </div>\n                    </form>\n\n                    <hr class=\"mar-top-1\">\n                    <div class=\"row\">\n                        <div class=\"col-2\"></div>\n                        <div class=\"col-8\">\n                            <div class=\"btn-group full-width\">\n                                <button class=\"btn btn-outline-danger\" title=\"Cancelar\" (click)=\"Cancel()\"\n                                    data-dismiss=\"modal\"><i class=\"fas fa-times\"></i></button>\n\n                                <button class=\"btn btn-outline-success\" title=\"Filtrar tabla\" (click)=\"search()\"\n                                    data-dismiss=\"modal\"><i class=\"fas fa-check\"></i></button>\n\n                            </div>\n                        </div>\n                        <div class=\"col-2\"></div>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>\n<!-- Survey modal -->\n<div class=\"modal fade\" id=\"surveyModal\">\n    <div class=\"modal-dialog\">\n        <div class=\"modal-content\">\n            <div class=\"modal-body\">\n                <div class=\"container-fluid\" *ngIf=\"survey\">\n                    <div class=\"row\">\n                        <div class=\"col-2\"></div>\n                        <div class=\"col-8\">\n                            <h3 class=\"align-center\">Pedido {{survey.order.codeID}}</h3>\n                        </div>\n                        <div class=\"col-2\"></div>\n                    </div>\n                    <hr class=\"mar-top-1\">\n                    <div class=\"row\">\n                        <div class=\"col-12 align-center\">\n                            <b>Promedio de los puntajes: </b> <span [surveyAverage]=\"survey\"\n                                returnAverage=\"true\"></span>\n                        </div>\n                    </div>\n                    <div class=\"row middle-row\">\n                        <div class=\"col-12 align-center\" [surveyComment]='survey.commentType'></div>\n                    </div>\n                    <hr>\n                    <div class=\"row\">\n                        <div class=\"col-12\">\n                            <span [surveyComment]=\"survey.commentType\" isIcon=\"true\"></span> - {{survey.comment}}\n                        </div>\n                    </div>\n                    <div class=\"row mar-top-1\">\n                        <div class=\"col-1\"></div>\n                        <div class=\"col-10 align-right\">\n                            {{survey.order.client.name}} {{survey.order.client.lastname}}\n                        </div>\n                        <div class=\"col-1\"></div>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>");

/***/ }),

/***/ "./node_modules/tslib/tslib.es6.js":
/*!*****************************************!*\
  !*** ./node_modules/tslib/tslib.es6.js ***!
  \*****************************************/
/*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__extends", function() { return __extends; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__assign", function() { return __assign; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__rest", function() { return __rest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__decorate", function() { return __decorate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__param", function() { return __param; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__metadata", function() { return __metadata; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__awaiter", function() { return __awaiter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__generator", function() { return __generator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__exportStar", function() { return __exportStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__values", function() { return __values; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__read", function() { return __read; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spread", function() { return __spread; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spreadArrays", function() { return __spreadArrays; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__await", function() { return __await; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function() { return __asyncGenerator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function() { return __asyncDelegator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncValues", function() { return __asyncValues; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function() { return __makeTemplateObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importStar", function() { return __importStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importDefault", function() { return __importDefault; });
/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    }
    return __assign.apply(this, arguments);
}

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __param(paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
}

function __metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}

function __awaiter(thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

function __exportStar(m, exports) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}

function __values(o) {
    var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
    if (m) return m.call(o);
    return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
}

function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
}

function __spread() {
    for (var ar = [], i = 0; i < arguments.length; i++)
        ar = ar.concat(__read(arguments[i]));
    return ar;
}

function __spreadArrays() {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};

function __await(v) {
    return this instanceof __await ? (this.v = v, this) : new __await(v);
}

function __asyncGenerator(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
    function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
    function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
    function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
    function fulfill(value) { resume("next", value); }
    function reject(value) { resume("throw", value); }
    function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
}

function __asyncDelegator(o) {
    var i, p;
    return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
    function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
}

function __asyncValues(o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
}

function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};

function __importStar(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result.default = mod;
    return result;
}

function __importDefault(mod) {
    return (mod && mod.__esModule) ? mod : { default: mod };
}


/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _components_socio_views_main_socio_main_socio_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/socio/views/main-socio/main-socio.component */ "./src/app/components/socio/views/main-socio/main-socio.component.ts");
/* harmony import */ var _components_socio_views_home_socio_home_socio_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/socio/views/home-socio/home-socio.component */ "./src/app/components/socio/views/home-socio/home-socio.component.ts");
/* harmony import */ var _components_mozo_views_main_mozo_main_mozo_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/mozo/views/main-mozo/main-mozo.component */ "./src/app/components/mozo/views/main-mozo/main-mozo.component.ts");
/* harmony import */ var _components_mozo_views_home_mozo_home_mozo_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/mozo/views/home-mozo/home-mozo.component */ "./src/app/components/mozo/views/home-mozo/home-mozo.component.ts");
/* harmony import */ var _components_all_views_login_login_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/all/views/login/login.component */ "./src/app/components/all/views/login/login.component.ts");
/* harmony import */ var _components_all_views_register_register_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/all/views/register/register.component */ "./src/app/components/all/views/register/register.component.ts");
/* harmony import */ var _components_all_views_main_general_main_general_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/all/views/main-general/main-general.component */ "./src/app/components/all/views/main-general/main-general.component.ts");
/* harmony import */ var _components_all_views_error_error_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/all/views/error/error.component */ "./src/app/components/all/views/error/error.component.ts");
/* harmony import */ var _components_cliente_views_main_cliente_main_cliente_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/cliente/views/main-cliente/main-cliente.component */ "./src/app/components/cliente/views/main-cliente/main-cliente.component.ts");
/* harmony import */ var _components_cliente_views_home_cliente_home_cliente_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/cliente/views/home-cliente/home-cliente.component */ "./src/app/components/cliente/views/home-cliente/home-cliente.component.ts");
/* harmony import */ var _guards_auth_guard__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./guards/auth.guard */ "./src/app/guards/auth.guard.ts");
/* harmony import */ var _components_mozo_views_manage_tables_manage_tables_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./components/mozo/views/manage-tables/manage-tables.component */ "./src/app/components/mozo/views/manage-tables/manage-tables.component.ts");
/* harmony import */ var _components_cervecero_views_main_cervecero_main_cervecero_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./components/cervecero/views/main-cervecero/main-cervecero.component */ "./src/app/components/cervecero/views/main-cervecero/main-cervecero.component.ts");
/* harmony import */ var _components_cervecero_views_home_cervecero_home_cervecero_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./components/cervecero/views/home-cervecero/home-cervecero.component */ "./src/app/components/cervecero/views/home-cervecero/home-cervecero.component.ts");
/* harmony import */ var _components_cocinero_views_main_cocinero_main_cocinero_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./components/cocinero/views/main-cocinero/main-cocinero.component */ "./src/app/components/cocinero/views/main-cocinero/main-cocinero.component.ts");
/* harmony import */ var _components_cocinero_views_home_cocinero_home_cocinero_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./components/cocinero/views/home-cocinero/home-cocinero.component */ "./src/app/components/cocinero/views/home-cocinero/home-cocinero.component.ts");
/* harmony import */ var _components_bartender_views_main_bartender_main_bartender_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./components/bartender/views/main-bartender/main-bartender.component */ "./src/app/components/bartender/views/main-bartender/main-bartender.component.ts");
/* harmony import */ var _components_bartender_views_home_bartender_home_bartender_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./components/bartender/views/home-bartender/home-bartender.component */ "./src/app/components/bartender/views/home-bartender/home-bartender.component.ts");
/* harmony import */ var _components_cliente_views_search_order_search_order_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./components/cliente/views/search-order/search-order.component */ "./src/app/components/cliente/views/search-order/search-order.component.ts");
/* harmony import */ var _components_all_views_redirect_redirect_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./components/all/views/redirect/redirect.component */ "./src/app/components/all/views/redirect/redirect.component.ts");
/* harmony import */ var _components_socio_views_manage_orders_admin_manage_orders_admin_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./components/socio/views/manage-orders-admin/manage-orders-admin.component */ "./src/app/components/socio/views/manage-orders-admin/manage-orders-admin.component.ts");
/* harmony import */ var _components_socio_views_manage_tables_admin_manage_tables_admin_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./components/socio/views/manage-tables-admin/manage-tables-admin.component */ "./src/app/components/socio/views/manage-tables-admin/manage-tables-admin.component.ts");
/* harmony import */ var _components_all_views_profile_profile_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./components/all/views/profile/profile.component */ "./src/app/components/all/views/profile/profile.component.ts");
/* harmony import */ var _components_socio_views_survey_table_survey_table_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./components/socio/views/survey-table/survey-table.component */ "./src/app/components/socio/views/survey-table/survey-table.component.ts");
/* harmony import */ var _components_socio_views_manage_products_admin_manage_products_admin_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./components/socio/views/manage-products-admin/manage-products-admin.component */ "./src/app/components/socio/views/manage-products-admin/manage-products-admin.component.ts");
/* harmony import */ var _components_cervecero_views_manage_products_cervecero_manage_products_cervecero_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./components/cervecero/views/manage-products-cervecero/manage-products-cervecero.component */ "./src/app/components/cervecero/views/manage-products-cervecero/manage-products-cervecero.component.ts");
/* harmony import */ var _components_cocinero_views_manage_products_cocinero_manage_products_cocinero_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./components/cocinero/views/manage-products-cocinero/manage-products-cocinero.component */ "./src/app/components/cocinero/views/manage-products-cocinero/manage-products-cocinero.component.ts");
/* harmony import */ var _components_bartender_views_manage_products_bartender_manage_products_bartender_component__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./components/bartender/views/manage-products-bartender/manage-products-bartender.component */ "./src/app/components/bartender/views/manage-products-bartender/manage-products-bartender.component.ts");
/* harmony import */ var _components_socio_views_manage_users_manage_users_component__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./components/socio/views/manage-users/manage-users.component */ "./src/app/components/socio/views/manage-users/manage-users.component.ts");
/* harmony import */ var _components_socio_views_view_logs_view_logs_component__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ./components/socio/views/view-logs/view-logs.component */ "./src/app/components/socio/views/view-logs/view-logs.component.ts");
/* harmony import */ var _components_socio_views_view_orders_stats_view_orders_stats_component__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ./components/socio/views/view-orders-stats/view-orders-stats.component */ "./src/app/components/socio/views/view-orders-stats/view-orders-stats.component.ts");
/* harmony import */ var _components_socio_views_view_tables_stats_view_tables_stats_component__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ./components/socio/views/view-tables-stats/view-tables-stats.component */ "./src/app/components/socio/views/view-tables-stats/view-tables-stats.component.ts");



































const routes = [
    { path: '', component: _components_all_views_redirect_redirect_component__WEBPACK_IMPORTED_MODULE_22__["RedirectComponent"] },
    { path: 'app', component: _components_all_views_main_general_main_general_component__WEBPACK_IMPORTED_MODULE_9__["MainGeneralComponent"],
        children: [
            { path: 'login', component: _components_all_views_login_login_component__WEBPACK_IMPORTED_MODULE_7__["LoginComponent"] },
            { path: 'register', component: _components_all_views_register_register_component__WEBPACK_IMPORTED_MODULE_8__["RegisterComponent"] }
        ] },
    { path: 'socio', component: _components_socio_views_main_socio_main_socio_component__WEBPACK_IMPORTED_MODULE_3__["MainSocioComponent"],
        children: [
            { path: '', component: _components_socio_views_home_socio_home_socio_component__WEBPACK_IMPORTED_MODULE_4__["HomeSocioComponent"] },
            { path: 'tables', component: _components_socio_views_manage_tables_admin_manage_tables_admin_component__WEBPACK_IMPORTED_MODULE_24__["ManageTablesAdminComponent"] },
            { path: 'orders', component: _components_socio_views_manage_orders_admin_manage_orders_admin_component__WEBPACK_IMPORTED_MODULE_23__["ManageOrdersAdminComponent"] },
            { path: 'profile', component: _components_all_views_profile_profile_component__WEBPACK_IMPORTED_MODULE_25__["ProfileComponent"] },
            { path: 'surveys', component: _components_socio_views_survey_table_survey_table_component__WEBPACK_IMPORTED_MODULE_26__["SurveyTableComponent"] },
            { path: 'products', component: _components_socio_views_manage_products_admin_manage_products_admin_component__WEBPACK_IMPORTED_MODULE_27__["ManageProductsAdminComponent"] },
            { path: 'users', component: _components_socio_views_manage_users_manage_users_component__WEBPACK_IMPORTED_MODULE_31__["ManageUsersComponent"] },
            { path: 'logs', component: _components_socio_views_view_logs_view_logs_component__WEBPACK_IMPORTED_MODULE_32__["ViewLogsComponent"] },
            { path: 'orderStats', component: _components_socio_views_view_orders_stats_view_orders_stats_component__WEBPACK_IMPORTED_MODULE_33__["ViewOrdersStatsComponent"] },
            { path: 'tableStats', component: _components_socio_views_view_tables_stats_view_tables_stats_component__WEBPACK_IMPORTED_MODULE_34__["ViewTablesStatsComponent"] },
        ],
        canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_13__["AuthGuard"]] },
    { path: 'mozo', component: _components_mozo_views_main_mozo_main_mozo_component__WEBPACK_IMPORTED_MODULE_5__["MainMozoComponent"],
        children: [
            { path: '', component: _components_mozo_views_home_mozo_home_mozo_component__WEBPACK_IMPORTED_MODULE_6__["HomeMozoComponent"] },
            { path: 'tables', component: _components_mozo_views_manage_tables_manage_tables_component__WEBPACK_IMPORTED_MODULE_14__["ManageTablesComponent"] },
            { path: 'profile', component: _components_all_views_profile_profile_component__WEBPACK_IMPORTED_MODULE_25__["ProfileComponent"] },
        ],
        canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_13__["AuthGuard"]] },
    { path: 'cervecero', component: _components_cervecero_views_main_cervecero_main_cervecero_component__WEBPACK_IMPORTED_MODULE_15__["MainCerveceroComponent"],
        children: [
            { path: '', component: _components_cervecero_views_home_cervecero_home_cervecero_component__WEBPACK_IMPORTED_MODULE_16__["HomeCerveceroComponent"] },
            { path: 'profile', component: _components_all_views_profile_profile_component__WEBPACK_IMPORTED_MODULE_25__["ProfileComponent"] },
            { path: 'products', component: _components_cervecero_views_manage_products_cervecero_manage_products_cervecero_component__WEBPACK_IMPORTED_MODULE_28__["ManageProductsCerveceroComponent"] }
        ],
        canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_13__["AuthGuard"]] },
    { path: 'cocinero', component: _components_cocinero_views_main_cocinero_main_cocinero_component__WEBPACK_IMPORTED_MODULE_17__["MainCocineroComponent"],
        children: [
            { path: '', component: _components_cocinero_views_home_cocinero_home_cocinero_component__WEBPACK_IMPORTED_MODULE_18__["HomeCocineroComponent"] },
            { path: 'profile', component: _components_all_views_profile_profile_component__WEBPACK_IMPORTED_MODULE_25__["ProfileComponent"] },
            { path: 'products', component: _components_cocinero_views_manage_products_cocinero_manage_products_cocinero_component__WEBPACK_IMPORTED_MODULE_29__["ManageProductsCocineroComponent"] }
        ],
        canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_13__["AuthGuard"]] },
    { path: 'bartender', component: _components_bartender_views_main_bartender_main_bartender_component__WEBPACK_IMPORTED_MODULE_19__["MainBartenderComponent"],
        children: [
            { path: '', component: _components_bartender_views_home_bartender_home_bartender_component__WEBPACK_IMPORTED_MODULE_20__["HomeBartenderComponent"] },
            { path: 'profile', component: _components_all_views_profile_profile_component__WEBPACK_IMPORTED_MODULE_25__["ProfileComponent"] },
            { path: 'products', component: _components_bartender_views_manage_products_bartender_manage_products_bartender_component__WEBPACK_IMPORTED_MODULE_30__["ManageProductsBartenderComponent"] }
        ],
        canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_13__["AuthGuard"]] },
    { path: 'cliente', component: _components_cliente_views_main_cliente_main_cliente_component__WEBPACK_IMPORTED_MODULE_11__["MainClienteComponent"],
        children: [
            { path: '', component: _components_cliente_views_home_cliente_home_cliente_component__WEBPACK_IMPORTED_MODULE_12__["HomeClienteComponent"] },
            { path: 'buscar', component: _components_cliente_views_search_order_search_order_component__WEBPACK_IMPORTED_MODULE_21__["SearchOrderComponent"] },
            { path: 'profile', component: _components_all_views_profile_profile_component__WEBPACK_IMPORTED_MODULE_25__["ProfileComponent"] },
        ],
        canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_13__["AuthGuard"]] },
    { path: '**', component: _components_all_views_error_error_component__WEBPACK_IMPORTED_MODULE_10__["ErrorComponent"] }
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], AppRoutingModule);



/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let AppComponent = class AppComponent {
    constructor() {
        this.title = 'Comanda';
    }
};
AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-root',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")).default]
    })
], AppComponent);



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var angularfire2__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! angularfire2 */ "./node_modules/angularfire2/index.js");
/* harmony import */ var angularfire2__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(angularfire2__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var angularfire2_firestore__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! angularfire2/firestore */ "./node_modules/angularfire2/firestore/index.js");
/* harmony import */ var angularfire2_firestore__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(angularfire2_firestore__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _angular_fire_functions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/fire/functions */ "./node_modules/@angular/fire/functions/es2015/index.js");
/* harmony import */ var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/fire/auth */ "./node_modules/@angular/fire/auth/es2015/index.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm2015/animations.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm2015/ngx-toastr.js");
/* harmony import */ var _angular_fire_storage__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/fire/storage */ "./node_modules/@angular/fire/storage/es2015/index.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _components_socio_views_main_socio_main_socio_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/socio/views/main-socio/main-socio.component */ "./src/app/components/socio/views/main-socio/main-socio.component.ts");
/* harmony import */ var _components_socio_views_home_socio_home_socio_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/socio/views/home-socio/home-socio.component */ "./src/app/components/socio/views/home-socio/home-socio.component.ts");
/* harmony import */ var _components_mozo_views_main_mozo_main_mozo_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./components/mozo/views/main-mozo/main-mozo.component */ "./src/app/components/mozo/views/main-mozo/main-mozo.component.ts");
/* harmony import */ var _components_mozo_views_home_mozo_home_mozo_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./components/mozo/views/home-mozo/home-mozo.component */ "./src/app/components/mozo/views/home-mozo/home-mozo.component.ts");
/* harmony import */ var _components_all_views_login_login_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./components/all/views/login/login.component */ "./src/app/components/all/views/login/login.component.ts");
/* harmony import */ var _components_all_views_register_register_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./components/all/views/register/register.component */ "./src/app/components/all/views/register/register.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _components_all_views_main_general_main_general_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./components/all/views/main-general/main-general.component */ "./src/app/components/all/views/main-general/main-general.component.ts");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _components_all_views_error_error_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./components/all/views/error/error.component */ "./src/app/components/all/views/error/error.component.ts");
/* harmony import */ var _components_cliente_views_home_cliente_home_cliente_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./components/cliente/views/home-cliente/home-cliente.component */ "./src/app/components/cliente/views/home-cliente/home-cliente.component.ts");
/* harmony import */ var _components_cliente_views_main_cliente_main_cliente_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./components/cliente/views/main-cliente/main-cliente.component */ "./src/app/components/cliente/views/main-cliente/main-cliente.component.ts");
/* harmony import */ var _components_all_main_food_card_food_card_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./components/all/main/food-card/food-card.component */ "./src/app/components/all/main/food-card/food-card.component.ts");
/* harmony import */ var _components_all_main_sidebar_option_sidebar_option_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./components/all/main/sidebar-option/sidebar-option.component */ "./src/app/components/all/main/sidebar-option/sidebar-option.component.ts");
/* harmony import */ var _components_all_main_order_list_order_list_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./components/all/main/order-list/order-list.component */ "./src/app/components/all/main/order-list/order-list.component.ts");
/* harmony import */ var _components_mozo_main_select_order_select_order_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./components/mozo/main/select-order/select-order.component */ "./src/app/components/mozo/main/select-order/select-order.component.ts");
/* harmony import */ var _components_mozo_views_manage_tables_manage_tables_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./components/mozo/views/manage-tables/manage-tables.component */ "./src/app/components/mozo/views/manage-tables/manage-tables.component.ts");
/* harmony import */ var _components_all_main_table_card_table_card_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./components/all/main/table-card/table-card.component */ "./src/app/components/all/main/table-card/table-card.component.ts");
/* harmony import */ var _components_cocinero_views_main_cocinero_main_cocinero_component__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./components/cocinero/views/main-cocinero/main-cocinero.component */ "./src/app/components/cocinero/views/main-cocinero/main-cocinero.component.ts");
/* harmony import */ var _components_cocinero_views_home_cocinero_home_cocinero_component__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./components/cocinero/views/home-cocinero/home-cocinero.component */ "./src/app/components/cocinero/views/home-cocinero/home-cocinero.component.ts");
/* harmony import */ var _components_bartender_views_home_bartender_home_bartender_component__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ./components/bartender/views/home-bartender/home-bartender.component */ "./src/app/components/bartender/views/home-bartender/home-bartender.component.ts");
/* harmony import */ var _components_bartender_views_main_bartender_main_bartender_component__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ./components/bartender/views/main-bartender/main-bartender.component */ "./src/app/components/bartender/views/main-bartender/main-bartender.component.ts");
/* harmony import */ var _components_cervecero_views_main_cervecero_main_cervecero_component__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ./components/cervecero/views/main-cervecero/main-cervecero.component */ "./src/app/components/cervecero/views/main-cervecero/main-cervecero.component.ts");
/* harmony import */ var _components_cervecero_views_home_cervecero_home_cervecero_component__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! ./components/cervecero/views/home-cervecero/home-cervecero.component */ "./src/app/components/cervecero/views/home-cervecero/home-cervecero.component.ts");
/* harmony import */ var _components_all_main_work_order_work_order_component__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! ./components/all/main/work-order/work-order.component */ "./src/app/components/all/main/work-order/work-order.component.ts");
/* harmony import */ var _pipes_timeleft_pipe__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! ./pipes/timeleft.pipe */ "./src/app/pipes/timeleft.pipe.ts");
/* harmony import */ var _pipes_table_pipe__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! ./pipes/table.pipe */ "./src/app/pipes/table.pipe.ts");
/* harmony import */ var _components_cliente_views_search_order_search_order_component__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! ./components/cliente/views/search-order/search-order.component */ "./src/app/components/cliente/views/search-order/search-order.component.ts");
/* harmony import */ var _components_all_main_spinner_spinner_component__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! ./components/all/main/spinner/spinner.component */ "./src/app/components/all/main/spinner/spinner.component.ts");
/* harmony import */ var _components_all_views_redirect_redirect_component__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(/*! ./components/all/views/redirect/redirect.component */ "./src/app/components/all/views/redirect/redirect.component.ts");
/* harmony import */ var _components_socio_views_manage_tables_admin_manage_tables_admin_component__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(/*! ./components/socio/views/manage-tables-admin/manage-tables-admin.component */ "./src/app/components/socio/views/manage-tables-admin/manage-tables-admin.component.ts");
/* harmony import */ var _components_socio_views_manage_orders_admin_manage_orders_admin_component__WEBPACK_IMPORTED_MODULE_43__ = __webpack_require__(/*! ./components/socio/views/manage-orders-admin/manage-orders-admin.component */ "./src/app/components/socio/views/manage-orders-admin/manage-orders-admin.component.ts");
/* harmony import */ var _components_all_views_profile_profile_component__WEBPACK_IMPORTED_MODULE_44__ = __webpack_require__(/*! ./components/all/views/profile/profile.component */ "./src/app/components/all/views/profile/profile.component.ts");
/* harmony import */ var _components_all_main_footer_footer_component__WEBPACK_IMPORTED_MODULE_45__ = __webpack_require__(/*! ./components/all/main/footer/footer.component */ "./src/app/components/all/main/footer/footer.component.ts");
/* harmony import */ var _components_socio_views_survey_table_survey_table_component__WEBPACK_IMPORTED_MODULE_46__ = __webpack_require__(/*! ./components/socio/views/survey-table/survey-table.component */ "./src/app/components/socio/views/survey-table/survey-table.component.ts");
/* harmony import */ var _directives_survey_average_directive__WEBPACK_IMPORTED_MODULE_47__ = __webpack_require__(/*! ./directives/survey-average.directive */ "./src/app/directives/survey-average.directive.ts");
/* harmony import */ var _directives_survey_comment_directive__WEBPACK_IMPORTED_MODULE_48__ = __webpack_require__(/*! ./directives/survey-comment.directive */ "./src/app/directives/survey-comment.directive.ts");
/* harmony import */ var _pipes_neat_date_pipe__WEBPACK_IMPORTED_MODULE_49__ = __webpack_require__(/*! ./pipes/neat-date.pipe */ "./src/app/pipes/neat-date.pipe.ts");
/* harmony import */ var _directives_is_prod_directive__WEBPACK_IMPORTED_MODULE_50__ = __webpack_require__(/*! ./directives/is-prod.directive */ "./src/app/directives/is-prod.directive.ts");
/* harmony import */ var ngx_captcha__WEBPACK_IMPORTED_MODULE_51__ = __webpack_require__(/*! ngx-captcha */ "./node_modules/ngx-captcha/fesm2015/ngx-captcha.js");
/* harmony import */ var _components_socio_views_manage_products_admin_manage_products_admin_component__WEBPACK_IMPORTED_MODULE_52__ = __webpack_require__(/*! ./components/socio/views/manage-products-admin/manage-products-admin.component */ "./src/app/components/socio/views/manage-products-admin/manage-products-admin.component.ts");
/* harmony import */ var _components_all_main_product_management_product_management_component__WEBPACK_IMPORTED_MODULE_53__ = __webpack_require__(/*! ./components/all/main/product-management/product-management.component */ "./src/app/components/all/main/product-management/product-management.component.ts");
/* harmony import */ var _components_cocinero_views_manage_products_cocinero_manage_products_cocinero_component__WEBPACK_IMPORTED_MODULE_54__ = __webpack_require__(/*! ./components/cocinero/views/manage-products-cocinero/manage-products-cocinero.component */ "./src/app/components/cocinero/views/manage-products-cocinero/manage-products-cocinero.component.ts");
/* harmony import */ var _components_bartender_views_manage_products_bartender_manage_products_bartender_component__WEBPACK_IMPORTED_MODULE_55__ = __webpack_require__(/*! ./components/bartender/views/manage-products-bartender/manage-products-bartender.component */ "./src/app/components/bartender/views/manage-products-bartender/manage-products-bartender.component.ts");
/* harmony import */ var _components_cervecero_views_manage_products_cervecero_manage_products_cervecero_component__WEBPACK_IMPORTED_MODULE_56__ = __webpack_require__(/*! ./components/cervecero/views/manage-products-cervecero/manage-products-cervecero.component */ "./src/app/components/cervecero/views/manage-products-cervecero/manage-products-cervecero.component.ts");
/* harmony import */ var _components_socio_views_manage_users_manage_users_component__WEBPACK_IMPORTED_MODULE_57__ = __webpack_require__(/*! ./components/socio/views/manage-users/manage-users.component */ "./src/app/components/socio/views/manage-users/manage-users.component.ts");
/* harmony import */ var _components_socio_views_view_logs_view_logs_component__WEBPACK_IMPORTED_MODULE_58__ = __webpack_require__(/*! ./components/socio/views/view-logs/view-logs.component */ "./src/app/components/socio/views/view-logs/view-logs.component.ts");
/* harmony import */ var _pipes_sort_pipe_pipe__WEBPACK_IMPORTED_MODULE_59__ = __webpack_require__(/*! ./pipes/sort-pipe.pipe */ "./src/app/pipes/sort-pipe.pipe.ts");
/* harmony import */ var _components_socio_views_view_orders_stats_view_orders_stats_component__WEBPACK_IMPORTED_MODULE_60__ = __webpack_require__(/*! ./components/socio/views/view-orders-stats/view-orders-stats.component */ "./src/app/components/socio/views/view-orders-stats/view-orders-stats.component.ts");
/* harmony import */ var _components_socio_views_view_tables_stats_view_tables_stats_component__WEBPACK_IMPORTED_MODULE_61__ = __webpack_require__(/*! ./components/socio/views/view-tables-stats/view-tables-stats.component */ "./src/app/components/socio/views/view-tables-stats/view-tables-stats.component.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_62__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");































































let AppModule = class AppModule {
};
AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_11__["AppComponent"],
            _components_socio_views_main_socio_main_socio_component__WEBPACK_IMPORTED_MODULE_12__["MainSocioComponent"],
            _components_socio_views_home_socio_home_socio_component__WEBPACK_IMPORTED_MODULE_13__["HomeSocioComponent"],
            _components_mozo_views_main_mozo_main_mozo_component__WEBPACK_IMPORTED_MODULE_14__["MainMozoComponent"],
            _components_mozo_views_home_mozo_home_mozo_component__WEBPACK_IMPORTED_MODULE_15__["HomeMozoComponent"],
            _components_all_views_login_login_component__WEBPACK_IMPORTED_MODULE_16__["LoginComponent"],
            _components_all_views_register_register_component__WEBPACK_IMPORTED_MODULE_17__["RegisterComponent"],
            _components_all_views_main_general_main_general_component__WEBPACK_IMPORTED_MODULE_19__["MainGeneralComponent"],
            _components_all_views_error_error_component__WEBPACK_IMPORTED_MODULE_21__["ErrorComponent"],
            _components_cliente_views_home_cliente_home_cliente_component__WEBPACK_IMPORTED_MODULE_22__["HomeClienteComponent"],
            _components_cliente_views_main_cliente_main_cliente_component__WEBPACK_IMPORTED_MODULE_23__["MainClienteComponent"],
            _components_all_main_food_card_food_card_component__WEBPACK_IMPORTED_MODULE_24__["FoodCardComponent"],
            _components_all_main_sidebar_option_sidebar_option_component__WEBPACK_IMPORTED_MODULE_25__["SidebarOptionComponent"],
            _components_all_main_order_list_order_list_component__WEBPACK_IMPORTED_MODULE_26__["OrderListComponent"],
            _components_mozo_main_select_order_select_order_component__WEBPACK_IMPORTED_MODULE_27__["SelectOrderComponent"],
            _components_mozo_views_manage_tables_manage_tables_component__WEBPACK_IMPORTED_MODULE_28__["ManageTablesComponent"],
            _components_all_main_table_card_table_card_component__WEBPACK_IMPORTED_MODULE_29__["TableCardComponent"],
            _components_cocinero_views_main_cocinero_main_cocinero_component__WEBPACK_IMPORTED_MODULE_30__["MainCocineroComponent"],
            _components_cocinero_views_home_cocinero_home_cocinero_component__WEBPACK_IMPORTED_MODULE_31__["HomeCocineroComponent"],
            _components_bartender_views_home_bartender_home_bartender_component__WEBPACK_IMPORTED_MODULE_32__["HomeBartenderComponent"],
            _components_bartender_views_main_bartender_main_bartender_component__WEBPACK_IMPORTED_MODULE_33__["MainBartenderComponent"],
            _components_cervecero_views_main_cervecero_main_cervecero_component__WEBPACK_IMPORTED_MODULE_34__["MainCerveceroComponent"],
            _components_cervecero_views_home_cervecero_home_cervecero_component__WEBPACK_IMPORTED_MODULE_35__["HomeCerveceroComponent"],
            _components_all_main_work_order_work_order_component__WEBPACK_IMPORTED_MODULE_36__["WorkOrderComponent"],
            _pipes_timeleft_pipe__WEBPACK_IMPORTED_MODULE_37__["TimeleftPipe"],
            _pipes_table_pipe__WEBPACK_IMPORTED_MODULE_38__["TablePipe"],
            _components_cliente_views_search_order_search_order_component__WEBPACK_IMPORTED_MODULE_39__["SearchOrderComponent"],
            _components_all_main_spinner_spinner_component__WEBPACK_IMPORTED_MODULE_40__["SpinnerComponent"],
            _components_all_views_redirect_redirect_component__WEBPACK_IMPORTED_MODULE_41__["RedirectComponent"],
            _components_socio_views_manage_tables_admin_manage_tables_admin_component__WEBPACK_IMPORTED_MODULE_42__["ManageTablesAdminComponent"],
            _components_socio_views_manage_orders_admin_manage_orders_admin_component__WEBPACK_IMPORTED_MODULE_43__["ManageOrdersAdminComponent"],
            _components_all_views_profile_profile_component__WEBPACK_IMPORTED_MODULE_44__["ProfileComponent"],
            _components_all_main_footer_footer_component__WEBPACK_IMPORTED_MODULE_45__["FooterComponent"],
            _components_socio_views_survey_table_survey_table_component__WEBPACK_IMPORTED_MODULE_46__["SurveyTableComponent"],
            _directives_survey_average_directive__WEBPACK_IMPORTED_MODULE_47__["SurveyAverageDirective"],
            _directives_survey_comment_directive__WEBPACK_IMPORTED_MODULE_48__["SurveyCommentDirective"],
            _pipes_neat_date_pipe__WEBPACK_IMPORTED_MODULE_49__["NeatDatePipe"],
            _directives_is_prod_directive__WEBPACK_IMPORTED_MODULE_50__["IsProdDirective"],
            _components_socio_views_manage_products_admin_manage_products_admin_component__WEBPACK_IMPORTED_MODULE_52__["ManageProductsAdminComponent"],
            _components_all_main_product_management_product_management_component__WEBPACK_IMPORTED_MODULE_53__["ProductManagementComponent"],
            _components_cocinero_views_manage_products_cocinero_manage_products_cocinero_component__WEBPACK_IMPORTED_MODULE_54__["ManageProductsCocineroComponent"],
            _components_bartender_views_manage_products_bartender_manage_products_bartender_component__WEBPACK_IMPORTED_MODULE_55__["ManageProductsBartenderComponent"],
            _components_cervecero_views_manage_products_cervecero_manage_products_cervecero_component__WEBPACK_IMPORTED_MODULE_56__["ManageProductsCerveceroComponent"],
            _components_socio_views_manage_users_manage_users_component__WEBPACK_IMPORTED_MODULE_57__["ManageUsersComponent"],
            _components_socio_views_view_logs_view_logs_component__WEBPACK_IMPORTED_MODULE_58__["ViewLogsComponent"],
            _pipes_sort_pipe_pipe__WEBPACK_IMPORTED_MODULE_59__["SortPipePipe"],
            _components_socio_views_view_orders_stats_view_orders_stats_component__WEBPACK_IMPORTED_MODULE_60__["ViewOrdersStatsComponent"],
            _components_socio_views_view_tables_stats_view_tables_stats_component__WEBPACK_IMPORTED_MODULE_61__["ViewTablesStatsComponent"]
        ],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
            _angular_common__WEBPACK_IMPORTED_MODULE_62__["CommonModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_10__["AppRoutingModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_18__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_18__["ReactiveFormsModule"],
            angularfire2__WEBPACK_IMPORTED_MODULE_3__["AngularFireModule"].initializeApp(src_environments_environment__WEBPACK_IMPORTED_MODULE_20__["FirebaseConfig"]),
            angularfire2_firestore__WEBPACK_IMPORTED_MODULE_4__["AngularFirestoreModule"],
            _angular_fire_functions__WEBPACK_IMPORTED_MODULE_5__["AngularFireFunctionsModule"],
            _angular_fire_storage__WEBPACK_IMPORTED_MODULE_9__["AngularFireStorageModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_7__["BrowserAnimationsModule"],
            ngx_captcha__WEBPACK_IMPORTED_MODULE_51__["NgxCaptchaModule"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_8__["ToastrModule"].forRoot({
                timeOut: 2300,
                positionClass: 'toast-bottom-left',
                preventDuplicates: true
            })
        ],
        providers: [_angular_fire_auth__WEBPACK_IMPORTED_MODULE_6__["AngularFireAuth"], angularfire2_firestore__WEBPACK_IMPORTED_MODULE_4__["AngularFirestore"]],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_11__["AppComponent"]],
        exports: [_directives_is_prod_directive__WEBPACK_IMPORTED_MODULE_50__["IsProdDirective"]]
    })
], AppModule);



/***/ }),

/***/ "./src/app/classes/helpers/common-helper.ts":
/*!**************************************************!*\
  !*** ./src/app/classes/helpers/common-helper.ts ***!
  \**************************************************/
/*! exports provided: CommonHelper */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CommonHelper", function() { return CommonHelper; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

class CommonHelper {
    static ConvertToObject(obj) {
        return JSON.parse(JSON.stringify(obj));
    }
    static ConvertDate(date) {
        let firstPart = date.getFullYear() + '-' + (date.getMonth() + 1) + '-' + date.getDate();
        let secondPart = date.getHours() + ':' + date.getMinutes() + ':' + date.getSeconds();
        return firstPart + ' ' + secondPart;
    }
    static GenerateProfileImageName(user) {
        return user.name.trim().toUpperCase()
            + user.lastname.trim().toUpperCase()
            + user.role.charAt(0).toUpperCase()
            + Math.floor((Math.random() * 10000) + 1);
    }
}


/***/ }),

/***/ "./src/app/components/all/main/food-card/food-card.component.scss":
/*!************************************************************************!*\
  !*** ./src/app/components/all/main/food-card/food-card.component.scss ***!
  \************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".img-shadow:hover {\n  box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);\n}\n\n.price {\n  margin-top: 0.5rem;\n  font-family: Arial, Helvetica, sans-serif;\n}\n\nimg {\n  height: 240px;\n  width: 240px;\n}\n\n.card-title {\n  font-weight: bold;\n}\n\n.ordered {\n  color: green;\n}\n\n.quant {\n  font-weight: bold;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9hbGwvbWFpbi9mb29kLWNhcmQvQzpcXFVzZXJzXFx0ZmVybmFuZGV6X21lY29uXFxEZXNrdG9wXFxHaXRIdWJcXGNvbWFuZGFMYWI0L3NyY1xcYXBwXFxjb21wb25lbnRzXFxhbGxcXG1haW5cXGZvb2QtY2FyZFxcZm9vZC1jYXJkLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9jb21wb25lbnRzL2FsbC9tYWluL2Zvb2QtY2FyZC9mb29kLWNhcmQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBS0E7RUFDSSw0RUFBQTtBQ0pKOztBRE9BO0VBQ0ksa0JBQUE7RUFDQSx5Q0FBQTtBQ0pKOztBRE9BO0VBQ0ssYUFBQTtFQUNBLFlBQUE7QUNKTDs7QURVQTtFQUNJLGlCQUFBO0FDUEo7O0FEVUE7RUFDSSxZQUFBO0FDUEo7O0FEVUE7RUFDSSxpQkFBQTtBQ1BKIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9hbGwvbWFpbi9mb29kLWNhcmQvZm9vZC1jYXJkLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmltZy1zaGFkb3cge1xyXG4vLyAgICAgYm94LXNoYWRvdzogMCAxcHggM3B4IHJnYmEoMCwwLDAsMC4xMiksIDAgMXB4IDJweCByZ2JhKDAsMCwwLDAuMjQpO1xyXG4vLyAgIHRyYW5zaXRpb246IGFsbCAwLjNzIGN1YmljLWJlemllciguMjUsLjgsLjI1LDEpO1xyXG59XHJcblxyXG4uaW1nLXNoYWRvdzpob3ZlciB7XHJcbiAgICBib3gtc2hhZG93OiAwIDE0cHggMjhweCByZ2JhKDAsMCwwLDAuMjUpLCAwIDEwcHggMTBweCByZ2JhKDAsMCwwLDAuMjIpO1xyXG59XHJcblxyXG4ucHJpY2Uge1xyXG4gICAgbWFyZ2luLXRvcDogMC41cmVtO1xyXG4gICAgZm9udC1mYW1pbHk6IEFyaWFsLCBIZWx2ZXRpY2EsIHNhbnMtc2VyaWY7XHJcbn1cclxuXHJcbmltZyB7XHJcbiAgICAgaGVpZ2h0OiAyNDBweDtcclxuICAgICB3aWR0aDogMjQwcHg7XHJcbiAgICAvLyBib3JkZXItcmFkaXVzOiAxMDAlO1xyXG4gICAgLy8gYm9yZGVyOiBzb2xpZCAxcHggIzMzMztcclxuICAgIC8vY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcblxyXG4uY2FyZC10aXRsZSB7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxufVxyXG5cclxuLm9yZGVyZWQge1xyXG4gICAgY29sb3I6IGdyZWVuO1xyXG59XHJcblxyXG4ucXVhbnQge1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbn1cclxuXHJcbi5jYXJkIHtcclxuICAgIC8vaGVpZ2h0OiA1MDBweDtcclxufSIsIi5pbWctc2hhZG93OmhvdmVyIHtcbiAgYm94LXNoYWRvdzogMCAxNHB4IDI4cHggcmdiYSgwLCAwLCAwLCAwLjI1KSwgMCAxMHB4IDEwcHggcmdiYSgwLCAwLCAwLCAwLjIyKTtcbn1cblxuLnByaWNlIHtcbiAgbWFyZ2luLXRvcDogMC41cmVtO1xuICBmb250LWZhbWlseTogQXJpYWwsIEhlbHZldGljYSwgc2Fucy1zZXJpZjtcbn1cblxuaW1nIHtcbiAgaGVpZ2h0OiAyNDBweDtcbiAgd2lkdGg6IDI0MHB4O1xufVxuXG4uY2FyZC10aXRsZSB7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuXG4ub3JkZXJlZCB7XG4gIGNvbG9yOiBncmVlbjtcbn1cblxuLnF1YW50IHtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59Il19 */");

/***/ }),

/***/ "./src/app/components/all/main/food-card/food-card.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/components/all/main/food-card/food-card.component.ts ***!
  \**********************************************************************/
/*! exports provided: FoodCardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FoodCardComponent", function() { return FoodCardComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let FoodCardComponent = class FoodCardComponent {
    constructor() {
        this.added = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.ordered = false;
        this.quantity = 0;
    }
    ngOnInit() {
        this.eventSubscriptions = this.resetEvent.subscribe(() => {
            this.ordered = false;
            this.quantity = 0;
        });
    }
    ngOnDestroy() {
        this.eventSubscriptions.unsubscribe();
    }
    AddToOrder(prod) {
        this.ordered = true;
        this.quantity++;
        this.added.emit(prod);
    }
};
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], FoodCardComponent.prototype, "product", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], FoodCardComponent.prototype, "resetEvent", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
], FoodCardComponent.prototype, "added", void 0);
FoodCardComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-food-card',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./food-card.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/all/main/food-card/food-card.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./food-card.component.scss */ "./src/app/components/all/main/food-card/food-card.component.scss")).default]
    })
], FoodCardComponent);



/***/ }),

/***/ "./src/app/components/all/main/footer/footer.component.scss":
/*!******************************************************************!*\
  !*** ./src/app/components/all/main/footer/footer.component.scss ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".footer {\n  width: 100%;\n  background: #333;\n  color: white;\n  font-size: 0.9rem;\n  padding: 0.3rem 0 0.3rem 0;\n}\n\n.footer-shadow {\n  box-shadow: 2px 2px 31px 0px rgba(0, 0, 0, 0.96);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9hbGwvbWFpbi9mb290ZXIvQzpcXFVzZXJzXFx0ZmVybmFuZGV6X21lY29uXFxEZXNrdG9wXFxHaXRIdWJcXGNvbWFuZGFMYWI0L3NyY1xcYXBwXFxjb21wb25lbnRzXFxhbGxcXG1haW5cXGZvb3RlclxcZm9vdGVyLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9jb21wb25lbnRzL2FsbC9tYWluL2Zvb3Rlci9mb290ZXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxXQUFBO0VBQ0EsZ0JBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7RUFDQSwwQkFBQTtBQ0NKOztBREVBO0VBR0ksZ0RBQUE7QUNDSiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvYWxsL21haW4vZm9vdGVyL2Zvb3Rlci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5mb290ZXIge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBiYWNrZ3JvdW5kOiAjMzMzO1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgZm9udC1zaXplOiAwLjlyZW07XHJcbiAgICBwYWRkaW5nOiAuM3JlbSAwIC4zcmVtIDA7XHJcbn1cclxuXHJcbi5mb290ZXItc2hhZG93IHtcclxuICAgIC13ZWJraXQtYm94LXNoYWRvdzogMnB4IDJweCAzMXB4IDBweCByZ2JhKDAsMCwwLDAuOTYpO1xyXG4gICAgLW1vei1ib3gtc2hhZG93OiAycHggMnB4IDMxcHggMHB4IHJnYmEoMCwwLDAsMC45Nik7XHJcbiAgICBib3gtc2hhZG93OiAycHggMnB4IDMxcHggMHB4IHJnYmEoMCwwLDAsMC45Nik7XHJcbn0iLCIuZm9vdGVyIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGJhY2tncm91bmQ6ICMzMzM7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgZm9udC1zaXplOiAwLjlyZW07XG4gIHBhZGRpbmc6IDAuM3JlbSAwIDAuM3JlbSAwO1xufVxuXG4uZm9vdGVyLXNoYWRvdyB7XG4gIC13ZWJraXQtYm94LXNoYWRvdzogMnB4IDJweCAzMXB4IDBweCByZ2JhKDAsIDAsIDAsIDAuOTYpO1xuICAtbW96LWJveC1zaGFkb3c6IDJweCAycHggMzFweCAwcHggcmdiYSgwLCAwLCAwLCAwLjk2KTtcbiAgYm94LXNoYWRvdzogMnB4IDJweCAzMXB4IDBweCByZ2JhKDAsIDAsIDAsIDAuOTYpO1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/components/all/main/footer/footer.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/components/all/main/footer/footer.component.ts ***!
  \****************************************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let FooterComponent = class FooterComponent {
    constructor() { }
    ngOnInit() {
    }
};
FooterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-footer',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./footer.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/all/main/footer/footer.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./footer.component.scss */ "./src/app/components/all/main/footer/footer.component.scss")).default]
    })
], FooterComponent);



/***/ }),

/***/ "./src/app/components/all/main/order-list/order-list.component.scss":
/*!**************************************************************************!*\
  !*** ./src/app/components/all/main/order-list/order-list.component.scss ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".order {\n  cursor: pointer;\n}\n\ntable {\n  background-color: rgba(255, 254, 254, 0.877);\n  border-radius: 20px;\n}\n\ntable th {\n  border: none;\n  text-align: center;\n}\n\ntable tr {\n  text-align: center;\n}\n\n.arial {\n  font-family: Arial, Helvetica, sans-serif;\n  font-size: 0.9em;\n  font-weight: bold;\n}\n\nlabel {\n  color: rgba(255, 254, 254, 0.877);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9hbGwvbWFpbi9vcmRlci1saXN0L0M6XFxVc2Vyc1xcdGZlcm5hbmRlel9tZWNvblxcRGVza3RvcFxcR2l0SHViXFxjb21hbmRhTGFiNC9zcmNcXGFwcFxcY29tcG9uZW50c1xcYWxsXFxtYWluXFxvcmRlci1saXN0XFxvcmRlci1saXN0LmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9jb21wb25lbnRzL2FsbC9tYWluL29yZGVyLWxpc3Qvb3JkZXItbGlzdC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGVBQUE7QUNDSjs7QURFQTtFQUNJLDRDQUFBO0VBQ0EsbUJBQUE7QUNDSjs7QURDSTtFQUNJLFlBQUE7RUFDQSxrQkFBQTtBQ0NSOztBRENJO0VBQ0ksa0JBQUE7QUNDUjs7QURHQTtFQUNJLHlDQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtBQ0FKOztBREdBO0VBQ0ksaUNBQUE7QUNBSiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvYWxsL21haW4vb3JkZXItbGlzdC9vcmRlci1saXN0LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm9yZGVyIHtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG5cclxudGFibGUge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDI1NCwgMjU0LCAwLjg3Nyk7XHJcbiAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xyXG5cclxuICAgIHRoIHtcclxuICAgICAgICBib3JkZXI6IG5vbmU7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgfVxyXG4gICAgdHIge1xyXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIH1cclxufVxyXG5cclxuLmFyaWFsIHtcclxuICAgIGZvbnQtZmFtaWx5OiBBcmlhbCwgSGVsdmV0aWNhLCBzYW5zLXNlcmlmO1xyXG4gICAgZm9udC1zaXplOiAuOWVtO1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbn1cclxuXHJcbmxhYmVse1xyXG4gICAgY29sb3I6IHJnYmEoMjU1LCAyNTQsIDI1NCwgMC44NzcpOyAgICBcclxufSIsIi5vcmRlciB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxudGFibGUge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMjU0LCAyNTQsIDAuODc3KTtcbiAgYm9yZGVyLXJhZGl1czogMjBweDtcbn1cbnRhYmxlIHRoIHtcbiAgYm9yZGVyOiBub25lO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG50YWJsZSB0ciB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLmFyaWFsIHtcbiAgZm9udC1mYW1pbHk6IEFyaWFsLCBIZWx2ZXRpY2EsIHNhbnMtc2VyaWY7XG4gIGZvbnQtc2l6ZTogMC45ZW07XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuXG5sYWJlbCB7XG4gIGNvbG9yOiByZ2JhKDI1NSwgMjU0LCAyNTQsIDAuODc3KTtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/components/all/main/order-list/order-list.component.ts":
/*!************************************************************************!*\
  !*** ./src/app/components/all/main/order-list/order-list.component.ts ***!
  \************************************************************************/
/*! exports provided: OrderListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrderListComponent", function() { return OrderListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_models_order__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/models/order */ "./src/app/models/order.ts");
/* harmony import */ var src_app_services_firebase_order_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/firebase/order.service */ "./src/app/services/firebase/order.service.ts");
/* harmony import */ var src_app_models_user__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/models/user */ "./src/app/models/user.ts");
/* harmony import */ var src_app_services_authentication_auth_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/authentication/auth.service */ "./src/app/services/authentication/auth.service.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");







let OrderListComponent = class OrderListComponent {
    constructor(orderService, authService) {
        this.orderService = orderService;
        this.authService = authService;
        this.orderSelected = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.showingOrders = true;
    }
    ngOnInit() {
        const cancelado = 'Cancelado';
        const pagado = 'Pagado';
        switch (this.role) {
            case src_app_models_user__WEBPACK_IMPORTED_MODULE_4__["Role"].mozo:
                this.authService.GetCurrentUser().then(user => this.me = user).then(() => {
                    this.orders = this.orderService.GetAllByWaiterOrderByTime(this.me.email).valueChanges().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["map"])(orders => {
                        return orders.filter(order => {
                            order = Object.assign(new src_app_models_order__WEBPACK_IMPORTED_MODULE_2__["Order"](), order);
                            if (order['state'] != cancelado) {
                                this.showingOrders = false;
                                return order;
                            }
                        });
                    }));
                    ;
                });
                break;
            case src_app_models_user__WEBPACK_IMPORTED_MODULE_4__["Role"].cervecero:
            case src_app_models_user__WEBPACK_IMPORTED_MODULE_4__["Role"].bartender:
            case src_app_models_user__WEBPACK_IMPORTED_MODULE_4__["Role"].cocinero:
                const cook = this.role;
                console.log(cook);
                this.orders = this.orderService.GetAllByCook(cook).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["map"])(orders => {
                    return orders.filter(order => {
                        order = Object.assign(new src_app_models_order__WEBPACK_IMPORTED_MODULE_2__["Order"](), order);
                        console.log(order['state']);
                        if (order['state'] != cancelado) {
                            this.showingOrders = false;
                            return order;
                        }
                    });
                }));
                break;
            case src_app_models_user__WEBPACK_IMPORTED_MODULE_4__["Role"].socio:
                this.orders = this.orderService.GetAllOrderByTime().valueChanges();
                break;
            case src_app_models_user__WEBPACK_IMPORTED_MODULE_4__["Role"].cliente:
                this.authService.GetCurrentUser().then(user => this.me = user).then(() => {
                    this.orders = this.orderService.GetAllByWaiterOrderByTime2(this.me.email).valueChanges().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["map"])(orders => {
                        return orders.filter(order => {
                            order = Object.assign(new src_app_models_order__WEBPACK_IMPORTED_MODULE_2__["Order"](), order);
                            var hasRole = false;
                            if (order['state'] != pagado && order['state'] != cancelado) {
                                hasRole = true;
                                this.showingOrders = false;
                            }
                            if (hasRole)
                                return order;
                        });
                    }));
                });
        }
    }
    SelectOrder(order) {
        this.orderSelected.emit(order);
    }
};
OrderListComponent.ctorParameters = () => [
    { type: src_app_services_firebase_order_service__WEBPACK_IMPORTED_MODULE_3__["OrderService"] },
    { type: src_app_services_authentication_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], OrderListComponent.prototype, "role", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
], OrderListComponent.prototype, "orderSelected", void 0);
OrderListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-order-list',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./order-list.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/all/main/order-list/order-list.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./order-list.component.scss */ "./src/app/components/all/main/order-list/order-list.component.scss")).default]
    })
], OrderListComponent);



/***/ }),

/***/ "./src/app/components/all/main/product-management/product-management.component.scss":
/*!******************************************************************************************!*\
  !*** ./src/app/components/all/main/product-management/product-management.component.scss ***!
  \******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("table {\n  background-color: rgba(255, 254, 254, 0.877);\n  border-radius: 20px;\n}\ntable th {\n  border: none;\n  text-align: center;\n}\ntable tr {\n  text-align: center;\n}\n.arial {\n  font-family: Arial, Helvetica, sans-serif;\n  font-size: 0.9em;\n  font-weight: bold;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9hbGwvbWFpbi9wcm9kdWN0LW1hbmFnZW1lbnQvQzpcXFVzZXJzXFx0ZmVybmFuZGV6X21lY29uXFxEZXNrdG9wXFxHaXRIdWJcXGNvbWFuZGFMYWI0L3NyY1xcYXBwXFxjb21wb25lbnRzXFxhbGxcXG1haW5cXHByb2R1Y3QtbWFuYWdlbWVudFxccHJvZHVjdC1tYW5hZ2VtZW50LmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9jb21wb25lbnRzL2FsbC9tYWluL3Byb2R1Y3QtbWFuYWdlbWVudC9wcm9kdWN0LW1hbmFnZW1lbnQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBSUE7RUFDSSw0Q0FBQTtFQUNBLG1CQUFBO0FDSEo7QURLSTtFQUNJLFlBQUE7RUFDQSxrQkFBQTtBQ0hSO0FES0k7RUFDSSxrQkFBQTtBQ0hSO0FET0E7RUFDSSx5Q0FBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7QUNKSiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvYWxsL21haW4vcHJvZHVjdC1tYW5hZ2VtZW50L3Byb2R1Y3QtbWFuYWdlbWVudC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5wcm9kdWN0IHtcclxuICAgIC8vY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcblxyXG50YWJsZSB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMjU0LCAyNTQsIDAuODc3KTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XHJcblxyXG4gICAgdGgge1xyXG4gICAgICAgIGJvcmRlcjogbm9uZTtcclxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICB9XHJcbiAgICB0ciB7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgfVxyXG59XHJcblxyXG4uYXJpYWwge1xyXG4gICAgZm9udC1mYW1pbHk6IEFyaWFsLCBIZWx2ZXRpY2EsIHNhbnMtc2VyaWY7XHJcbiAgICBmb250LXNpemU6IC45ZW07XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxufSIsInRhYmxlIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDI1NCwgMjU0LCAwLjg3Nyk7XG4gIGJvcmRlci1yYWRpdXM6IDIwcHg7XG59XG50YWJsZSB0aCB7XG4gIGJvcmRlcjogbm9uZTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxudGFibGUgdHIge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5hcmlhbCB7XG4gIGZvbnQtZmFtaWx5OiBBcmlhbCwgSGVsdmV0aWNhLCBzYW5zLXNlcmlmO1xuICBmb250LXNpemU6IDAuOWVtO1xuICBmb250LXdlaWdodDogYm9sZDtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/components/all/main/product-management/product-management.component.ts":
/*!****************************************************************************************!*\
  !*** ./src/app/components/all/main/product-management/product-management.component.ts ***!
  \****************************************************************************************/
/*! exports provided: ProductManagementComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductManagementComponent", function() { return ProductManagementComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_models_product__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/models/product */ "./src/app/models/product.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var src_app_services_firebase_product_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/firebase/product.service */ "./src/app/services/firebase/product.service.ts");
/* harmony import */ var src_app_services_firestorage_file_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/firestorage/file.service */ "./src/app/services/firestorage/file.service.ts");
/* harmony import */ var src_app_services_authentication_auth_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/services/authentication/auth.service */ "./src/app/services/authentication/auth.service.ts");
/* harmony import */ var src_app_services_firebase_log_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/services/firebase/log.service */ "./src/app/services/firebase/log.service.ts");
/* harmony import */ var src_app_models_log__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/models/log */ "./src/app/models/log.ts");
/* harmony import */ var src_app_models_user__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/models/user */ "./src/app/models/user.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");












let ProductManagementComponent = class ProductManagementComponent {
    constructor(productService, fileService, authService, movimientoService) {
        this.productService = productService;
        this.fileService = fileService;
        this.authService = authService;
        this.movimientoService = movimientoService;
        this.onReset = new rxjs__WEBPACK_IMPORTED_MODULE_4__["Subject"]();
    }
    ngOnInit() {
        this.productForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormGroup"]({
            productName: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]),
            productPrice: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]),
            productDescription: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]),
            productImage: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]),
            typeComida: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](null),
            typeBebida: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](null),
            typeAlcohol: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](null),
            typePostre: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](null),
            typeCeliaco: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](null),
            typeVegano: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](null),
            productCook: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](null)
        });
        this.products = new Array();
        this.products = this.productService.listado;
        //this.showingProducts = this.products;
        this.ClearFilters();
        this.haySeleccionado = false;
        this.productoSeleccionado = null;
    }
    laFuncion() {
        this.products = new Array();
        this.products = this.productService.listado;
        this.ClearFilters();
    }
    showProd() {
        if (this.role == "socio") {
            this.showingProducts = this.products;
            console.log("showingProducts");
        }
    }
    // private CreateTestProducts(): Product[] {
    //   return [
    //     Product.Create('B-CER-QUIL', 'Cerveza Quilmes', 'assets/img/B-CER-QUIL.jpg', 50, [FoodType.bebida, FoodType.alcohol], Cook.cervecero, "Bebida con alcohol, no recomendada si vas a conducir"),
    //     Product.Create('C-COM-MCFR', 'Milanesa con fritas', 'assets/img/C-COM-MCFR.jpg', 300, [FoodType.comida], Cook.cocinero, "Milanesa de ternera acompañada de papas fritas"),
    //     Product.Create('C-COM-MACF', 'Milanesa a caballo con fritas', 'assets/img/C-COM-MACF.jpg', 350, [FoodType.comida], Cook.cocinero, "Milanesa de ternera acompañada de huevo frito y papas fritas"),
    //     Product.Create('C-COM-MNAF', 'Milanesa napo con fritas', 'assets/img/C-COM-MNAF.jpg', 350, [FoodType.comida], Cook.cocinero, "Milanesa con salsa de tomate, jamón y muzzarella acompañada de papas fritas"),
    //     Product.Create('B-GAS-COCA', 'Coca-Cola', 'assets/img/B-GAS-COCA.jpg', 60, [FoodType.bebida, FoodType.vegano, FoodType.celiaco], Cook.bartender, "Bebida sin alcohol gasificada de extractos naturales"),
    //     Product.Create('B-AGU-BONA', 'Bon Aqua', 'assets/img/B-AGU-BONA.jpg', 45, [FoodType.bebida, FoodType.vegano, FoodType.celiaco], Cook.bartender, "Bebida sin alcohol y sin gas de origenes naturales"),
    //     Product.Create('B-TRA-DDFR', 'Daikiri de frutilla', 'assets/img/B-TRA-DDFR.jpg', 70, [FoodType.bebida, FoodType.alcohol, FoodType.postre], Cook.bartender, "Bebida con alcohol, no recomendada si vas a manejar"),
    //     Product.Create('C-COM-ENCE', 'Ensalada el Cesar', 'assets/img/C-COM-ENCE.jpg', 150, [FoodType.comida, FoodType.vegano], Cook.cocinero, " Ensalada de lechuga romana y croûtons con jugo de limón, aceite de oliva, huevo, salsa Worcestershire, anchoas, ajo, mostaza de Dijon, queso parmesano y pimienta negra"),
    //     Product.Create('C-COM-EMPA', 'Empanada', 'assets/img/C-COM-EMPA.jpg', 50, [FoodType.comida], Cook.cocinero, " Empanada de pollo"),
    //     Product.Create('B-VIN-VINO', 'Vino', 'assets/img/B-VIN-VINO.jpg', 550, [FoodType.bebida, FoodType.alcohol], Cook.bartender, "Bebida con alcohol, no recomendada si vas a conducir"),
    //   ];
    // }
    addProduct() {
        let product;
        let array;
        array = this.traerFoodTypes();
        this.traerCook();
        product = src_app_models_product__WEBPACK_IMPORTED_MODULE_2__["Product"].Create('', this.productForm.value.productName, '', Number.parseFloat(this.productForm.value.productPrice), array, this.productForm.value.productCook, this.productForm.value.productDescription);
        this.productService.persistirProducto(product, this.file).then((value) => {
            if (value) {
                this.Cancel();
            }
            this.authService.GetCurrentUser().then(user => {
                let mensaje = `El usuario ${user.email} dió de alta el producto ${product.name}`;
                this.movimientoService.persistirMovimiento(user, src_app_models_log__WEBPACK_IMPORTED_MODULE_9__["TargetMovimiento"].producto, src_app_models_log__WEBPACK_IMPORTED_MODULE_9__["TipoMovimiento"].alta, mensaje);
            });
        });
        ;
    }
    onFileChanged(event) {
        this.file = event.target.files[0];
    }
    traerFoodTypes() {
        let retorno = new Array();
        if (this.productForm.value.typeComida) {
            retorno.push(src_app_models_product__WEBPACK_IMPORTED_MODULE_2__["FoodType"].comida);
        }
        if (this.productForm.value.typeBebida) {
            retorno.push(src_app_models_product__WEBPACK_IMPORTED_MODULE_2__["FoodType"].bebida);
        }
        if (this.productForm.value.typePostre) {
            retorno.push(src_app_models_product__WEBPACK_IMPORTED_MODULE_2__["FoodType"].postre);
        }
        if (this.productForm.value.typeAlcohol) {
            retorno.push(src_app_models_product__WEBPACK_IMPORTED_MODULE_2__["FoodType"].alcohol);
        }
        if (this.productForm.value.typeCeliaco) {
            retorno.push(src_app_models_product__WEBPACK_IMPORTED_MODULE_2__["FoodType"].celiaco);
        }
        if (this.productForm.value.typeVegano) {
            retorno.push(src_app_models_product__WEBPACK_IMPORTED_MODULE_2__["FoodType"].vegano);
        }
        return retorno;
    }
    traerCook() {
        if (this.role == null) {
            this.authService.GetCurrentUser().then(user => {
                this.role = user.role;
                if (this.role != 'socio') {
                    this.productForm.controls['productCook'].setValue(this.role);
                }
            });
        }
        else {
            if (this.role != 'socio') {
                this.productForm.controls['productCook'].setValue(this.role);
            }
        }
    }
    changeState(uid, state) {
        this.productService.GetProductByID(uid).then(prod => {
            if (state == "Pendiente") {
                this.productService.updateState(uid, "Deshabilitado");
                this.authService.GetCurrentUser().then(user => {
                    let mensaje = `El usuario ${user.email} deshabilitó el producto ${prod.name}`;
                    this.movimientoService.persistirMovimiento(user, src_app_models_log__WEBPACK_IMPORTED_MODULE_9__["TargetMovimiento"].producto, src_app_models_log__WEBPACK_IMPORTED_MODULE_9__["TipoMovimiento"].deshabilitacion, mensaje);
                });
                this.laFuncion();
            }
            if (state == "Deshabilitado") {
                this.productService.updateState(uid, "Pendiente");
                this.authService.GetCurrentUser().then(user => {
                    let mensaje = `El usuario ${user.email} habilitó el producto ${prod.name}`;
                    this.movimientoService.persistirMovimiento(user, src_app_models_log__WEBPACK_IMPORTED_MODULE_9__["TargetMovimiento"].producto, src_app_models_log__WEBPACK_IMPORTED_MODULE_9__["TipoMovimiento"].habilitacion, mensaje);
                });
            }
        });
    }
    editarProducto(producto) {
        this.productoSeleccionado = producto;
        this.haySeleccionado = true;
        this.productForm.controls['productName'].setValue(producto.name);
        this.productForm.controls['productPrice'].setValue(producto.price);
        this.productForm.controls['productCook'].setValue(producto.cook);
        this.productForm.controls['productDescription'].setValue(producto.description);
        this.traerTipos(producto.foodTypes);
    }
    updateProduct() {
        let producto;
        let array;
        array = this.traerFoodTypes();
        this.productoSeleccionado.name = this.productForm.value.productName;
        this.productoSeleccionado.price = this.productForm.value.productPrice;
        this.productoSeleccionado.foodTypes = array;
        this.productoSeleccionado.cook = this.productForm.value.productCook;
        this.productoSeleccionado.description = this.productForm.value.productDescription;
        this.productService.updateProd(this.productoSeleccionado, this.file).then(() => {
            this.productoSeleccionado = null;
            this.haySeleccionado = false;
            this.file = null;
            this.authService.GetCurrentUser().then(user => {
                let mensaje = `El usuario ${user.email} modificó el producto ${this.productoSeleccionado.name}`;
                this.movimientoService.persistirMovimiento(user, src_app_models_log__WEBPACK_IMPORTED_MODULE_9__["TargetMovimiento"].producto, src_app_models_log__WEBPACK_IMPORTED_MODULE_9__["TipoMovimiento"].modificacion, mensaje);
            });
        });
    }
    traerTipos(tipos) {
        tipos.forEach(tipo => {
            switch (tipo) {
                case 'comida':
                    this.productForm.controls['typeComida'].setValue(true);
                    break;
                case 'bebida':
                    this.productForm.controls['typeBebida'].setValue(true);
                    break;
                case 'alcohol':
                    this.productForm.controls['typeAlcohol'].setValue(true);
                    break;
                case 'postre':
                    this.productForm.controls['typePostre'].setValue(true);
                    break;
                case 'celiaco':
                    this.productForm.controls['typeCeliaco'].setValue(true);
                    break;
                case 'vegano':
                    this.productForm.controls['typeVegano'].setValue(true);
                    break;
            }
        });
    }
    // public getRole(){
    //   this.authService.GetCurrentUser().then(user =>{
    //     this.role = user.role;
    //   });
    //}
    // ##### FILTER FUNCTIONS #####
    Filter(type) {
        this.showingProducts = this.products.filter((element) => {
            if (element.cook == this.role || this.role == src_app_models_user__WEBPACK_IMPORTED_MODULE_10__["Role"].socio)
                if (element.IsFoodType(type))
                    return element;
        });
    }
    ClearFilters() {
        //this.showingProducts = this.products;
        this.authService.GetCurrentUser().then(user => {
            this.role = user.role;
            this.showingProducts = this.productService.GetAll2().valueChanges().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_11__["map"])(products => {
                return products.filter(product => {
                    product = Object.assign(new src_app_models_product__WEBPACK_IMPORTED_MODULE_2__["Product"](), product);
                    //if (product['timestamp'] > this.fechaInicio && order['timestamp'] < this.fechaFin) {
                    if (product['cook'] == this.role || this.role == src_app_models_user__WEBPACK_IMPORTED_MODULE_10__["Role"].socio)
                        return product;
                    //}
                });
            }));
            this.productoSeleccionado = null;
            this.haySeleccionado = false;
            this.file = null;
        });
    }
    Cancel() {
        this.productForm.reset();
        this.onReset.next();
        this.laFuncion();
    }
};
ProductManagementComponent.ctorParameters = () => [
    { type: src_app_services_firebase_product_service__WEBPACK_IMPORTED_MODULE_5__["ProductService"] },
    { type: src_app_services_firestorage_file_service__WEBPACK_IMPORTED_MODULE_6__["FileService"] },
    { type: src_app_services_authentication_auth_service__WEBPACK_IMPORTED_MODULE_7__["AuthService"] },
    { type: src_app_services_firebase_log_service__WEBPACK_IMPORTED_MODULE_8__["LogService"] }
];
ProductManagementComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-product-management',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./product-management.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/all/main/product-management/product-management.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./product-management.component.scss */ "./src/app/components/all/main/product-management/product-management.component.scss")).default]
    })
], ProductManagementComponent);



/***/ }),

/***/ "./src/app/components/all/main/sidebar-option/sidebar-option.component.scss":
/*!**********************************************************************************!*\
  !*** ./src/app/components/all/main/sidebar-option/sidebar-option.component.scss ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".option {\n  border-color: silver;\n  border-right: none;\n  border-left: none;\n  border-bottom: none;\n  border-radius: 0;\n  font-size: 1.2rem;\n}\n\n.last {\n  border-bottom: 1px solid silver;\n}\n\n.label {\n  border-color: silver;\n  border-right: none;\n  border-left: none;\n  border-bottom: none;\n  border-radius: 0;\n  font-size: 1.2rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9hbGwvbWFpbi9zaWRlYmFyLW9wdGlvbi9DOlxcVXNlcnNcXHRmZXJuYW5kZXpfbWVjb25cXERlc2t0b3BcXEdpdEh1YlxcY29tYW5kYUxhYjQvc3JjXFxhcHBcXGNvbXBvbmVudHNcXGFsbFxcbWFpblxcc2lkZWJhci1vcHRpb25cXHNpZGViYXItb3B0aW9uLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9jb21wb25lbnRzL2FsbC9tYWluL3NpZGViYXItb3B0aW9uL3NpZGViYXItb3B0aW9uLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksb0JBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0FDQ0o7O0FERUE7RUFDSSwrQkFBQTtBQ0NKOztBREVBO0VBRVEsb0JBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0FDQVIiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2FsbC9tYWluL3NpZGViYXItb3B0aW9uL3NpZGViYXItb3B0aW9uLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm9wdGlvbiB7XHJcbiAgICBib3JkZXItY29sb3I6IHNpbHZlcjtcclxuICAgIGJvcmRlci1yaWdodDogbm9uZTtcclxuICAgIGJvcmRlci1sZWZ0OiBub25lO1xyXG4gICAgYm9yZGVyLWJvdHRvbTogbm9uZTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDA7XHJcbiAgICBmb250LXNpemU6IDEuMnJlbTtcclxufVxyXG5cclxuLmxhc3Qge1xyXG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHNpbHZlcjtcclxufVxyXG5cclxuLmxhYmVse1xyXG4gICAgXHJcbiAgICAgICAgYm9yZGVyLWNvbG9yOiBzaWx2ZXI7XHJcbiAgICAgICAgYm9yZGVyLXJpZ2h0OiBub25lO1xyXG4gICAgICAgIGJvcmRlci1sZWZ0OiBub25lO1xyXG4gICAgICAgIGJvcmRlci1ib3R0b206IG5vbmU7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMDtcclxuICAgICAgICBmb250LXNpemU6IDEuMnJlbTtcclxuICAgIFxyXG59IiwiLm9wdGlvbiB7XG4gIGJvcmRlci1jb2xvcjogc2lsdmVyO1xuICBib3JkZXItcmlnaHQ6IG5vbmU7XG4gIGJvcmRlci1sZWZ0OiBub25lO1xuICBib3JkZXItYm90dG9tOiBub25lO1xuICBib3JkZXItcmFkaXVzOiAwO1xuICBmb250LXNpemU6IDEuMnJlbTtcbn1cblxuLmxhc3Qge1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgc2lsdmVyO1xufVxuXG4ubGFiZWwge1xuICBib3JkZXItY29sb3I6IHNpbHZlcjtcbiAgYm9yZGVyLXJpZ2h0OiBub25lO1xuICBib3JkZXItbGVmdDogbm9uZTtcbiAgYm9yZGVyLWJvdHRvbTogbm9uZTtcbiAgYm9yZGVyLXJhZGl1czogMDtcbiAgZm9udC1zaXplOiAxLjJyZW07XG59Il19 */");

/***/ }),

/***/ "./src/app/components/all/main/sidebar-option/sidebar-option.component.ts":
/*!********************************************************************************!*\
  !*** ./src/app/components/all/main/sidebar-option/sidebar-option.component.ts ***!
  \********************************************************************************/
/*! exports provided: SidebarOptionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SidebarOptionComponent", function() { return SidebarOptionComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_services_authentication_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/authentication/auth.service */ "./src/app/services/authentication/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");




let SidebarOptionComponent = class SidebarOptionComponent {
    constructor(authService, router) {
        this.authService = authService;
        this.router = router;
    }
    ngOnInit() {
    }
    LogOut() {
        this.authService.LogoutEmail();
        this.router.navigate(['/app/login']);
    }
};
SidebarOptionComponent.ctorParameters = () => [
    { type: src_app_services_authentication_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], SidebarOptionComponent.prototype, "name", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], SidebarOptionComponent.prototype, "link", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], SidebarOptionComponent.prototype, "lastOne", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], SidebarOptionComponent.prototype, "logOut", void 0);
SidebarOptionComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-sidebar-option',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./sidebar-option.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/all/main/sidebar-option/sidebar-option.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./sidebar-option.component.scss */ "./src/app/components/all/main/sidebar-option/sidebar-option.component.scss")).default]
    })
], SidebarOptionComponent);



/***/ }),

/***/ "./src/app/components/all/main/spinner/spinner.component.scss":
/*!********************************************************************!*\
  !*** ./src/app/components/all/main/spinner/spinner.component.scss ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("img {\n  height: 50px;\n  width: 50px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9hbGwvbWFpbi9zcGlubmVyL0M6XFxVc2Vyc1xcdGZlcm5hbmRlel9tZWNvblxcRGVza3RvcFxcR2l0SHViXFxjb21hbmRhTGFiNC9zcmNcXGFwcFxcY29tcG9uZW50c1xcYWxsXFxtYWluXFxzcGlubmVyXFxzcGlubmVyLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9jb21wb25lbnRzL2FsbC9tYWluL3NwaW5uZXIvc3Bpbm5lci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFlBQUE7RUFDQSxXQUFBO0FDQ0oiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2FsbC9tYWluL3NwaW5uZXIvc3Bpbm5lci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImltZyB7XHJcbiAgICBoZWlnaHQ6IDUwcHg7XHJcbiAgICB3aWR0aDogNTBweDtcclxufSIsImltZyB7XG4gIGhlaWdodDogNTBweDtcbiAgd2lkdGg6IDUwcHg7XG59Il19 */");

/***/ }),

/***/ "./src/app/components/all/main/spinner/spinner.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/components/all/main/spinner/spinner.component.ts ***!
  \******************************************************************/
/*! exports provided: SpinnerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SpinnerComponent", function() { return SpinnerComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let SpinnerComponent = class SpinnerComponent {
    constructor() { }
    ngOnInit() {
    }
};
SpinnerComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-spinner',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./spinner.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/all/main/spinner/spinner.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./spinner.component.scss */ "./src/app/components/all/main/spinner/spinner.component.scss")).default]
    })
], SpinnerComponent);



/***/ }),

/***/ "./src/app/components/all/main/table-card/table-card.component.scss":
/*!**************************************************************************!*\
  !*** ./src/app/components/all/main/table-card/table-card.component.scss ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".icon {\n  font-size: 2rem;\n}\n\n.card-title {\n  font-size: 1.5rem;\n}\n\n.green {\n  color: green;\n}\n\n.red {\n  color: red;\n}\n\n.orange {\n  color: orange;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9hbGwvbWFpbi90YWJsZS1jYXJkL0M6XFxVc2Vyc1xcdGZlcm5hbmRlel9tZWNvblxcRGVza3RvcFxcR2l0SHViXFxjb21hbmRhTGFiNC9zcmNcXGFwcFxcY29tcG9uZW50c1xcYWxsXFxtYWluXFx0YWJsZS1jYXJkXFx0YWJsZS1jYXJkLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9jb21wb25lbnRzL2FsbC9tYWluL3RhYmxlLWNhcmQvdGFibGUtY2FyZC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGVBQUE7QUNDSjs7QURFQTtFQUNJLGlCQUFBO0FDQ0o7O0FERUE7RUFDSSxZQUFBO0FDQ0o7O0FERUE7RUFDSSxVQUFBO0FDQ0o7O0FERUE7RUFDSSxhQUFBO0FDQ0oiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2FsbC9tYWluL3RhYmxlLWNhcmQvdGFibGUtY2FyZC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5pY29uIHtcclxuICAgIGZvbnQtc2l6ZTogMnJlbTtcclxufVxyXG5cclxuLmNhcmQtdGl0bGUge1xyXG4gICAgZm9udC1zaXplOiAxLjVyZW07XHJcbn1cclxuXHJcbi5ncmVlbiB7XHJcbiAgICBjb2xvcjogZ3JlZW47XHJcbn1cclxuXHJcbi5yZWQge1xyXG4gICAgY29sb3I6IHJlZDtcclxufVxyXG5cclxuLm9yYW5nZSB7XHJcbiAgICBjb2xvcjogb3JhbmdlO1xyXG59IiwiLmljb24ge1xuICBmb250LXNpemU6IDJyZW07XG59XG5cbi5jYXJkLXRpdGxlIHtcbiAgZm9udC1zaXplOiAxLjVyZW07XG59XG5cbi5ncmVlbiB7XG4gIGNvbG9yOiBncmVlbjtcbn1cblxuLnJlZCB7XG4gIGNvbG9yOiByZWQ7XG59XG5cbi5vcmFuZ2Uge1xuICBjb2xvcjogb3JhbmdlO1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/components/all/main/table-card/table-card.component.ts":
/*!************************************************************************!*\
  !*** ./src/app/components/all/main/table-card/table-card.component.ts ***!
  \************************************************************************/
/*! exports provided: TableCardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TableCardComponent", function() { return TableCardComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_models_table__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/models/table */ "./src/app/models/table.ts");
/* harmony import */ var src_app_services_firebase_table_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/firebase/table.service */ "./src/app/services/firebase/table.service.ts");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm2015/ngx-toastr.js");
/* harmony import */ var src_app_services_authentication_auth_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/authentication/auth.service */ "./src/app/services/authentication/auth.service.ts");
/* harmony import */ var src_app_services_firebase_log_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/firebase/log.service */ "./src/app/services/firebase/log.service.ts");
/* harmony import */ var src_app_models_log__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/models/log */ "./src/app/models/log.ts");








let TableCardComponent = class TableCardComponent {
    constructor(tableService, toastr, authService, movimientoService) {
        this.tableService = tableService;
        this.toastr = toastr;
        this.authService = authService;
        this.movimientoService = movimientoService;
    }
    ngOnInit() {
    }
    ChangeStatus(option) {
        let status;
        switch (option) {
            case 1:
                status = src_app_models_table__WEBPACK_IMPORTED_MODULE_2__["TableState"].available;
                break;
            case 2:
                status = src_app_models_table__WEBPACK_IMPORTED_MODULE_2__["TableState"].waitingOrder;
                break;
            case 3:
                status = src_app_models_table__WEBPACK_IMPORTED_MODULE_2__["TableState"].eating;
                break;
            case 4:
                status = src_app_models_table__WEBPACK_IMPORTED_MODULE_2__["TableState"].paying;
                break;
            case 5:
                status = src_app_models_table__WEBPACK_IMPORTED_MODULE_2__["TableState"].closed;
                break;
            default:
                status = src_app_models_table__WEBPACK_IMPORTED_MODULE_2__["TableState"].available;
                break;
        }
        this.tableService.UpdateStatus(this.table.tableID, status).then(() => {
            this.authService.GetCurrentUser().then(user => {
                let mensaje = `El usuario ${user.email} cambió el estado de la mesa ${this.table.tableID} a ${status}`;
                this.movimientoService.persistirMovimiento(user, src_app_models_log__WEBPACK_IMPORTED_MODULE_7__["TargetMovimiento"].mesa, src_app_models_log__WEBPACK_IMPORTED_MODULE_7__["TipoMovimiento"].modificacion, mensaje);
            });
        })
            .then(() => {
            this.toastr.success('Se cambió el estado de la mesa.');
        })
            .catch(() => {
            this.toastr.error('Ha ocurrido un error al actualizar.');
        });
    }
};
TableCardComponent.ctorParameters = () => [
    { type: src_app_services_firebase_table_service__WEBPACK_IMPORTED_MODULE_3__["TableService"] },
    { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_4__["ToastrService"] },
    { type: src_app_services_authentication_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"] },
    { type: src_app_services_firebase_log_service__WEBPACK_IMPORTED_MODULE_6__["LogService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], TableCardComponent.prototype, "table", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], TableCardComponent.prototype, "isAdmin", void 0);
TableCardComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-table-card',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./table-card.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/all/main/table-card/table-card.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./table-card.component.scss */ "./src/app/components/all/main/table-card/table-card.component.scss")).default]
    })
], TableCardComponent);



/***/ }),

/***/ "./src/app/components/all/main/work-order/work-order.component.scss":
/*!**************************************************************************!*\
  !*** ./src/app/components/all/main/work-order/work-order.component.scss ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("select {\n  -moz-text-align-last: center;\n       text-align-last: center;\n}\n\ninput {\n  text-align: center;\n}\n\ninput::-webkit-input-placeholder {\n  text-align: center;\n}\n\ninput::-moz-placeholder {\n  text-align: center;\n}\n\ninput::-ms-input-placeholder {\n  text-align: center;\n}\n\ninput::placeholder {\n  text-align: center;\n}\n\nh5 {\n  margin-top: 1rem;\n  font-weight: bold;\n}\n\n.or {\n  text-align: center;\n  margin: 0.5rem 0 0.5rem 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9hbGwvbWFpbi93b3JrLW9yZGVyL0M6XFxVc2Vyc1xcdGZlcm5hbmRlel9tZWNvblxcRGVza3RvcFxcR2l0SHViXFxjb21hbmRhTGFiNC9zcmNcXGFwcFxcY29tcG9uZW50c1xcYWxsXFxtYWluXFx3b3JrLW9yZGVyXFx3b3JrLW9yZGVyLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9jb21wb25lbnRzL2FsbC9tYWluL3dvcmstb3JkZXIvd29yay1vcmRlci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLDRCQUFBO09BQUEsdUJBQUE7QUNDSjs7QURFQTtFQUNJLGtCQUFBO0FDQ0o7O0FERUE7RUFDSSxrQkFBQTtBQ0NKOztBREZBO0VBQ0ksa0JBQUE7QUNDSjs7QURGQTtFQUNJLGtCQUFBO0FDQ0o7O0FERkE7RUFDSSxrQkFBQTtBQ0NKOztBREVBO0VBQ0ksZ0JBQUE7RUFDQSxpQkFBQTtBQ0NKOztBREVBO0VBQ0ksa0JBQUE7RUFDQSx5QkFBQTtBQ0NKIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9hbGwvbWFpbi93b3JrLW9yZGVyL3dvcmstb3JkZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJzZWxlY3Qge1xyXG4gICAgdGV4dC1hbGlnbi1sYXN0OiBjZW50ZXI7XHJcbn1cclxuXHJcbmlucHV0IHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuaW5wdXQ6OnBsYWNlaG9sZGVyIHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuaDUge1xyXG4gICAgbWFyZ2luLXRvcDogMXJlbTtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG59XHJcblxyXG4ub3Ige1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgbWFyZ2luOiAwLjVyZW0gMCAwLjVyZW0gMDtcclxufSIsInNlbGVjdCB7XG4gIHRleHQtYWxpZ24tbGFzdDogY2VudGVyO1xufVxuXG5pbnB1dCB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuaW5wdXQ6OnBsYWNlaG9sZGVyIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG5oNSB7XG4gIG1hcmdpbi10b3A6IDFyZW07XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuXG4ub3Ige1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIG1hcmdpbjogMC41cmVtIDAgMC41cmVtIDA7XG59Il19 */");

/***/ }),

/***/ "./src/app/components/all/main/work-order/work-order.component.ts":
/*!************************************************************************!*\
  !*** ./src/app/components/all/main/work-order/work-order.component.ts ***!
  \************************************************************************/
/*! exports provided: WorkOrderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WorkOrderComponent", function() { return WorkOrderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_models_order__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/models/order */ "./src/app/models/order.ts");
/* harmony import */ var src_app_models_product__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/models/product */ "./src/app/models/product.ts");
/* harmony import */ var src_app_services_authentication_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/authentication/auth.service */ "./src/app/services/authentication/auth.service.ts");
/* harmony import */ var src_app_services_firebase_order_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/firebase/order.service */ "./src/app/services/firebase/order.service.ts");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm2015/ngx-toastr.js");
/* harmony import */ var src_app_services_firebase_log_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/services/firebase/log.service */ "./src/app/services/firebase/log.service.ts");
/* harmony import */ var src_app_models_log__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/models/log */ "./src/app/models/log.ts");









let WorkOrderComponent = class WorkOrderComponent {
    constructor(authService, orderService, toastr, logService) {
        this.authService = authService;
        this.orderService = orderService;
        this.toastr = toastr;
        this.logService = logService;
    }
    ngOnInit() {
        this.authService.GetCurrentUser().then(user => this.me = user);
        setInterval(() => {
            if (this.order) {
                let now = new Date();
                this.remainingTime = new Date(this.order.timeLeft).getTime() - now.getTime();
                // if (this.remainingTime < 0) {
                // 	this.order.delayed = now.getTime() - new Date(this.order.timeLeft).getTime();
                // 	this.orderService.Update(this.order);
                // }
            }
        }, 10);
    }
    ngOnChanges() {
        this.selectedItem = null;
    }
    IsPending() {
        let is = false;
        if (this.selectedItem.state == src_app_models_product__WEBPACK_IMPORTED_MODULE_3__["FoodState"].pending)
            is = true;
        return is;
    }
    IsCooking() {
        let is = false;
        if (this.selectedItem.state == src_app_models_product__WEBPACK_IMPORTED_MODULE_3__["FoodState"].preparing)
            is = true;
        return is;
    }
    IsAvailableForMe() {
        let available = false;
        if (this.selectedItem) {
            let myRole = this.me.role;
            if (this.selectedItem.cook == myRole && this.selectedItem.state != src_app_models_product__WEBPACK_IMPORTED_MODULE_3__["FoodState"].finished) {
                available = true;
            }
        }
        return available;
    }
    SelectItem(item) {
        this.selectedItem = item;
    }
    BeginCook(withTime) {
        if (withTime)
            this.AddMoreTime(); // Add more time
        else
            this.order = Object.assign(new src_app_models_order__WEBPACK_IMPORTED_MODULE_2__["Order"](), this.order);
        this.AssignToMe();
        this.selectedItem.state = src_app_models_product__WEBPACK_IMPORTED_MODULE_3__["FoodState"].preparing;
        this.order.UpdateOrderState();
        let mensaje = `El usuario ${this.me.email} (${this.me.role}) comenzó a preparar ${this.selectedItem.name} del pedido ${this.order.codeID}`;
        this.logService.persistirMovimiento(this.me, src_app_models_log__WEBPACK_IMPORTED_MODULE_8__["TargetMovimiento"].pedido, src_app_models_log__WEBPACK_IMPORTED_MODULE_8__["TipoMovimiento"].preparacion, mensaje);
        this.orderService.Update(this.order)
            .then(() => {
            this.toastr.success('El pedido se actualizó con éxito', 'Hecho!');
        })
            .catch(() => {
            this.toastr.error('Se ha producido un error.', 'Error');
        });
    }
    ReadyToServe() {
        this.selectedItem.state = src_app_models_product__WEBPACK_IMPORTED_MODULE_3__["FoodState"].finished;
        this.order = Object.assign(new src_app_models_order__WEBPACK_IMPORTED_MODULE_2__["Order"](), this.order);
        this.order.UpdateOrderState();
        let mensaje = `El usuario ${this.me.email} (${this.me.role})  terminó ${this.selectedItem.name} del pedido ${this.order.codeID}`;
        this.logService.persistirMovimiento(this.me, src_app_models_log__WEBPACK_IMPORTED_MODULE_8__["TargetMovimiento"].pedido, src_app_models_log__WEBPACK_IMPORTED_MODULE_8__["TipoMovimiento"].finalizacion, mensaje);
        this.orderService.Update(this.order)
            .then(() => {
            this.toastr.success('El pedido se actualizó con éxito', 'Hecho!');
        })
            .catch(() => {
            this.toastr.error('Se ha producido un error.', 'Error');
        });
    }
    AssignToMe() {
        this.selectedItem.worker = this.me;
    }
    AddMoreTime() {
        this.order = Object.assign(new src_app_models_order__WEBPACK_IMPORTED_MODULE_2__["Order"](), this.order);
        this.order.AddMinutes(this.addedTime);
        this.addedTime = null;
    }
};
WorkOrderComponent.ctorParameters = () => [
    { type: src_app_services_authentication_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"] },
    { type: src_app_services_firebase_order_service__WEBPACK_IMPORTED_MODULE_5__["OrderService"] },
    { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_6__["ToastrService"] },
    { type: src_app_services_firebase_log_service__WEBPACK_IMPORTED_MODULE_7__["LogService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], WorkOrderComponent.prototype, "order", void 0);
WorkOrderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-work-order',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./work-order.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/all/main/work-order/work-order.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./work-order.component.scss */ "./src/app/components/all/main/work-order/work-order.component.scss")).default]
    })
], WorkOrderComponent);



/***/ }),

/***/ "./src/app/components/all/views/error/error.component.scss":
/*!*****************************************************************!*\
  !*** ./src/app/components/all/views/error/error.component.scss ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvYWxsL3ZpZXdzL2Vycm9yL2Vycm9yLmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/components/all/views/error/error.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/components/all/views/error/error.component.ts ***!
  \***************************************************************/
/*! exports provided: ErrorComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ErrorComponent", function() { return ErrorComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");



let ErrorComponent = class ErrorComponent {
    constructor(router) {
        this.router = router;
    }
    ngOnInit() {
    }
};
ErrorComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
];
ErrorComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-error',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./error.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/all/views/error/error.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./error.component.scss */ "./src/app/components/all/views/error/error.component.scss")).default]
    })
], ErrorComponent);



/***/ }),

/***/ "./src/app/components/all/views/login/login.component.scss":
/*!*****************************************************************!*\
  !*** ./src/app/components/all/views/login/login.component.scss ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("select {\n  -moz-text-align-last: center;\n       text-align-last: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9hbGwvdmlld3MvbG9naW4vQzpcXFVzZXJzXFx0ZmVybmFuZGV6X21lY29uXFxEZXNrdG9wXFxHaXRIdWJcXGNvbWFuZGFMYWI0L3NyY1xcYXBwXFxjb21wb25lbnRzXFxhbGxcXHZpZXdzXFxsb2dpblxcbG9naW4uY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2NvbXBvbmVudHMvYWxsL3ZpZXdzL2xvZ2luL2xvZ2luLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksNEJBQUE7T0FBQSx1QkFBQTtBQ0NKIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9hbGwvdmlld3MvbG9naW4vbG9naW4uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJzZWxlY3Qge1xyXG4gICAgdGV4dC1hbGlnbi1sYXN0OiBjZW50ZXI7XHJcbn1cclxuXHJcbiIsInNlbGVjdCB7XG4gIHRleHQtYWxpZ24tbGFzdDogY2VudGVyO1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/components/all/views/login/login.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/components/all/views/login/login.component.ts ***!
  \***************************************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var src_app_services_authentication_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/authentication/auth.service */ "./src/app/services/authentication/auth.service.ts");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm2015/ngx-toastr.js");
/* harmony import */ var src_app_services_firebase_user_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/firebase/user.service */ "./src/app/services/firebase/user.service.ts");






let LoginComponent = class LoginComponent {
    constructor(authService, toastr, userService) {
        this.authService = authService;
        this.toastr = toastr;
        this.userService = userService;
        this.userOption = 'none';
        this.loading = false;
    }
    ngOnInit() {
        this.loginForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            'email': new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]),
            'password': new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]),
            'chkHorario': new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](false, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]),
            'chkLunes': new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](false, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]),
            'captcha': new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required])
        });
    }
    onSubmit() {
        this.loading = true;
        const usr = this.loginForm.get('email').value;
        const pass = this.loginForm.get('password').value;
        let restriccion = this.restriccionHoraria(this.loginForm.get('chkHorario').value);
        this.userService.GetUserByEmail(usr)
            .then(usuario => {
            console.log("esta en la base");
            if (!usuario.deleted && usuario.state == 'habilitado') {
                if (usuario.role == "cliente" && !restriccion) {
                    this.toastr.info('El horario de atencion es de Miercoles a Domingo de 18:00 a 2:00');
                    setTimeout(() => {
                        this.loading = false;
                        this.loginForm.get('email').setValue('');
                        this.loginForm.get('password').setValue('');
                        this.loginForm.get('email').enable();
                        this.loginForm.get('password').enable();
                    }, 2000);
                }
                else {
                    this.authService.LoginWithEmail(usr, pass)
                        .then(() => {
                        this.toastr.success('¡Bienvenido!');
                    })
                        .catch(() => {
                        console.log("no estaba auth asi que lo creo");
                        this.authService.RegisterWithEmailAdmin(usr);
                    });
                }
            }
            else {
                this.toastr.error('Usuario deshabilitado o inexistente');
            }
        })
            .catch(() => this.toastr.error('Usuario y/o contraseña incorrecto.')).finally(() => {
            //this.loading = false;
            //console.log("lo corto");
            this.userOption = 'none';
            this.loginForm.get('email').disable();
            this.loginForm.get('password').disable();
            //this.loginForm.get('email').setValue('');
            // this.loginForm.get('password').setValue('');			
        });
    }
    restriccionHoraria(chk) {
        let retorno = true;
        const date = new Date();
        let day = date.getDay();
        const hour = date.getHours();
        const min = date.getMinutes();
        if (this.loginForm.get('chkLunes').value) {
            day = 1;
        }
        console.log("dia: " + day);
        console.log("hora: " + hour);
        console.log("minuto: " + min);
        if (!chk || chk == null || this.loginForm.get('chkLunes').value) {
            if (day == 1 || day == 2) {
                retorno = false;
            }
            else if (hour >= 2 && hour <= 17) {
                retorno = false;
            }
        }
        console.log(this.loginForm.get('chkLunes').value);
        console.log(retorno);
        return retorno;
    }
    BindUser(usuario) {
        this.userOption = usuario;
        this.LoadUser();
    }
    LoadUser() {
        let isNull = false;
        switch (this.userOption) {
            case 'juan':
                this.loginForm.get('email').setValue('juan@gmail.com');
                break;
            case 'mario':
                this.loginForm.get('email').setValue('mario@gmail.com');
                break;
            case 'chelo':
                this.loginForm.get('email').setValue('chelo@gmail.com');
                break;
            case 'jose':
                this.loginForm.get('email').setValue('jose@gmail.com');
                break;
            case 'camilo':
                this.loginForm.get('email').setValue('camilo@gmail.com');
                break;
            case 'pablo':
                this.loginForm.get('email').setValue('pablo@gmail.com');
                break;
            case 'martin':
                this.loginForm.get('email').setValue('martin@gmail.com');
                break;
            case 'roman':
                this.loginForm.get('email').setValue('roman@gmail.com');
                break;
            case 'ivan':
                this.loginForm.get('email').setValue('ivan@gmail.com');
                break;
            default:
                this.loginForm.get('email').setValue('');
                this.loginForm.get('password').setValue('');
                isNull = true;
                break;
        }
        if (!isNull)
            this.loginForm.get('password').setValue('password1');
    }
};
LoginComponent.ctorParameters = () => [
    { type: src_app_services_authentication_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"] },
    { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_4__["ToastrService"] },
    { type: src_app_services_firebase_user_service__WEBPACK_IMPORTED_MODULE_5__["UserService"] }
];
LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-login',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./login.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/all/views/login/login.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./login.component.scss */ "./src/app/components/all/views/login/login.component.scss")).default]
    })
], LoginComponent);



/***/ }),

/***/ "./src/app/components/all/views/main-general/main-general.component.scss":
/*!*******************************************************************************!*\
  !*** ./src/app/components/all/views/main-general/main-general.component.scss ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".general-color {\n  background-color: #83f174;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9hbGwvdmlld3MvbWFpbi1nZW5lcmFsL0M6XFxVc2Vyc1xcdGZlcm5hbmRlel9tZWNvblxcRGVza3RvcFxcR2l0SHViXFxjb21hbmRhTGFiNC9zcmNcXGFwcFxcY29tcG9uZW50c1xcYWxsXFx2aWV3c1xcbWFpbi1nZW5lcmFsXFxtYWluLWdlbmVyYWwuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2NvbXBvbmVudHMvYWxsL3ZpZXdzL21haW4tZ2VuZXJhbC9tYWluLWdlbmVyYWwuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUE7RUFDSSx5QkFIYTtBQ0VqQiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvYWxsL3ZpZXdzL21haW4tZ2VuZXJhbC9tYWluLWdlbmVyYWwuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIkZ2VuZXJhbFByaW1hcnk6IHJnYigxMzEsIDI0MSwgMTE2KTtcclxuXHJcbi5nZW5lcmFsLWNvbG9yIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICRnZW5lcmFsUHJpbWFyeTtcclxufSIsIi5nZW5lcmFsLWNvbG9yIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzgzZjE3NDtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/components/all/views/main-general/main-general.component.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/components/all/views/main-general/main-general.component.ts ***!
  \*****************************************************************************/
/*! exports provided: MainGeneralComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainGeneralComponent", function() { return MainGeneralComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let MainGeneralComponent = class MainGeneralComponent {
    constructor() { }
    ngOnInit() {
    }
};
MainGeneralComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-main-general',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./main-general.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/all/views/main-general/main-general.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./main-general.component.scss */ "./src/app/components/all/views/main-general/main-general.component.scss")).default]
    })
], MainGeneralComponent);



/***/ }),

/***/ "./src/app/components/all/views/profile/profile.component.scss":
/*!*********************************************************************!*\
  !*** ./src/app/components/all/views/profile/profile.component.scss ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("img {\n  height: 150px;\n  width: 150px;\n  border-radius: 100%;\n  border: 1px solid #333;\n}\n\nh1 {\n  margin: 0 auto;\n  position: absolute;\n  top: 30%;\n}\n\n.container {\n  background-color: rgba(255, 254, 254, 0.877);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9hbGwvdmlld3MvcHJvZmlsZS9DOlxcVXNlcnNcXHRmZXJuYW5kZXpfbWVjb25cXERlc2t0b3BcXEdpdEh1YlxcY29tYW5kYUxhYjQvc3JjXFxhcHBcXGNvbXBvbmVudHNcXGFsbFxcdmlld3NcXHByb2ZpbGVcXHByb2ZpbGUuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2NvbXBvbmVudHMvYWxsL3ZpZXdzL3Byb2ZpbGUvcHJvZmlsZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGFBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7RUFDQSxzQkFBQTtBQ0NKOztBREVBO0VBQ0ksY0FBQTtFQUNBLGtCQUFBO0VBQ0EsUUFBQTtBQ0NKOztBREVBO0VBQ0ksNENBQUE7QUNDSiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvYWxsL3ZpZXdzL3Byb2ZpbGUvcHJvZmlsZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImltZyB7XHJcbiAgICBoZWlnaHQ6IDE1MHB4O1xyXG4gICAgd2lkdGg6IDE1MHB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTAwJTtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICMzMzM7XHJcbn1cclxuXHJcbmgxIHtcclxuICAgIG1hcmdpbjogMCBhdXRvO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiAzMCU7XHJcbn1cclxuXHJcbi5jb250YWluZXJ7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMjU0LCAyNTQsIDAuODc3KTsgXHJcbn1cclxuXHJcbiIsImltZyB7XG4gIGhlaWdodDogMTUwcHg7XG4gIHdpZHRoOiAxNTBweDtcbiAgYm9yZGVyLXJhZGl1czogMTAwJTtcbiAgYm9yZGVyOiAxcHggc29saWQgIzMzMztcbn1cblxuaDEge1xuICBtYXJnaW46IDAgYXV0bztcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDMwJTtcbn1cblxuLmNvbnRhaW5lciB7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAyNTQsIDI1NCwgMC44NzcpO1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/components/all/views/profile/profile.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/components/all/views/profile/profile.component.ts ***!
  \*******************************************************************/
/*! exports provided: ProfileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileComponent", function() { return ProfileComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_services_firestorage_file_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/firestorage/file.service */ "./src/app/services/firestorage/file.service.ts");
/* harmony import */ var src_app_services_authentication_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/authentication/auth.service */ "./src/app/services/authentication/auth.service.ts");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm2015/ngx-toastr.js");
/* harmony import */ var src_app_services_firebase_user_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/firebase/user.service */ "./src/app/services/firebase/user.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var src_app_services_firebase_log_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/services/firebase/log.service */ "./src/app/services/firebase/log.service.ts");
/* harmony import */ var src_app_models_log__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/models/log */ "./src/app/models/log.ts");









let ProfileComponent = class ProfileComponent {
    constructor(userService, fileService, authService, movimientoService, toastr) {
        this.userService = userService;
        this.fileService = fileService;
        this.authService = authService;
        this.movimientoService = movimientoService;
        this.toastr = toastr;
        this.isLoaded = false;
        this.selectedFile = null;
        this.habilitado = false;
    }
    ngOnInit() {
        this.userForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormGroup"]({
            userName: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required]),
            userLastname: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required]),
            userMail: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required]),
            userRole: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"](null),
            userImage: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required])
        });
        this.authService.GetCurrentUser().then(usr => {
            this.user = usr;
            this.userForm.controls['userName'].setValue(this.user.name);
            this.userForm.controls['userLastname'].setValue(this.user.lastname);
            this.userForm.controls['userMail'].setValue(this.user.email);
        });
    }
    onFileChanged(event) {
        this.file = event.target.files[0];
        this.habilitado = true;
    }
    cambio() {
        // if(this.user.name != this.userForm.value.userName || this.user.lastname != this.userForm.value.userLastname){
        // 	this.habilitado = true;
        // }else{
        // 	this.habilitado = false;
        // }
        // console.log(this.habilitado);
        // console.log(this.user.name);
        // console.log(this.user.lastname);
        console.log(this.userForm.controls['userName'].untouched);
        console.log(this.userForm.controls['userName'].value);
        console.log(this.user.name);
        console.log(this.userForm.controls['userLastname'].untouched);
        console.log(this.userForm.controls['userLastname'].value);
        console.log(this.user.lastname);
    }
    updateUser() {
        if ((this.user.name != this.userForm.value.userName) || (this.user.lastname != this.userForm.value.userLastname) || (this.file != null)) {
            this.userService.updateUser(this.user, this.file).then((value) => {
                this.user.name = this.userForm.value.userName;
                this.user.lastname = this.userForm.value.userLastname;
                //console.log(value);
                //if (value) {
                this.toastr.success(`El usuario ${this.user.email} fue modificado con exito`);
                //}
                this.authService.GetCurrentUser().then(usr => {
                    let mensaje = `El usuario ${this.user.email} dió de modificó el usuario ${this.user.email}`;
                    this.movimientoService.persistirMovimiento(usr, src_app_models_log__WEBPACK_IMPORTED_MODULE_8__["TargetMovimiento"].usuario, src_app_models_log__WEBPACK_IMPORTED_MODULE_8__["TipoMovimiento"].alta, mensaje);
                });
                this.resetForm();
            }).catch(() => {
                this.toastr.error(`Ha ocurrido un error`);
                this.resetForm();
            });
        }
        else {
            this.toastr.show("No hay nada para modificar");
        }
    }
    resetForm() {
        this.authService.GetCurrentUser().then(usr => {
            this.user = usr;
            this.userForm.controls['userName'].setValue(this.user.name);
            this.userForm.controls['userLastname'].setValue(this.user.lastname);
            this.userForm.controls['userMail'].setValue(this.user.email);
            this.userForm.controls['userImage'].setValue(null);
            this.habilitado = false;
        });
    }
};
ProfileComponent.ctorParameters = () => [
    { type: src_app_services_firebase_user_service__WEBPACK_IMPORTED_MODULE_5__["UserService"] },
    { type: src_app_services_firestorage_file_service__WEBPACK_IMPORTED_MODULE_2__["FileService"] },
    { type: src_app_services_authentication_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"] },
    { type: src_app_services_firebase_log_service__WEBPACK_IMPORTED_MODULE_7__["LogService"] },
    { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_4__["ToastrService"] }
];
ProfileComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-profile',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./profile.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/all/views/profile/profile.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./profile.component.scss */ "./src/app/components/all/views/profile/profile.component.scss")).default]
    })
], ProfileComponent);



/***/ }),

/***/ "./src/app/components/all/views/redirect/redirect.component.scss":
/*!***********************************************************************!*\
  !*** ./src/app/components/all/views/redirect/redirect.component.scss ***!
  \***********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvYWxsL3ZpZXdzL3JlZGlyZWN0L3JlZGlyZWN0LmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/components/all/views/redirect/redirect.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/components/all/views/redirect/redirect.component.ts ***!
  \*********************************************************************/
/*! exports provided: RedirectComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RedirectComponent", function() { return RedirectComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_services_authentication_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/authentication/auth.service */ "./src/app/services/authentication/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var src_app_models_user__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/models/user */ "./src/app/models/user.ts");





let RedirectComponent = class RedirectComponent {
    constructor(authService, router) {
        this.authService = authService;
        this.router = router;
    }
    ngOnInit() {
        this.authService.GetCurrentUser().then(user => {
            switch (user.role) {
                case src_app_models_user__WEBPACK_IMPORTED_MODULE_4__["Role"].cliente:
                    this.router.navigate(['/cliente']);
                    break;
                case src_app_models_user__WEBPACK_IMPORTED_MODULE_4__["Role"].bartender:
                    this.router.navigate(['/bartender']);
                    break;
                case src_app_models_user__WEBPACK_IMPORTED_MODULE_4__["Role"].cocinero:
                    this.router.navigate(['/cocinero']);
                    break;
                case src_app_models_user__WEBPACK_IMPORTED_MODULE_4__["Role"].cervecero:
                    this.router.navigate(['/cervecero']);
                    break;
                case src_app_models_user__WEBPACK_IMPORTED_MODULE_4__["Role"].mozo:
                    this.router.navigate(['/mozo']);
                    break;
                case src_app_models_user__WEBPACK_IMPORTED_MODULE_4__["Role"].socio:
                    this.router.navigate(['/socio']);
                    break;
            }
        })
            .catch(() => {
            this.router.navigate(['/app/login']);
        });
    }
};
RedirectComponent.ctorParameters = () => [
    { type: src_app_services_authentication_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }
];
RedirectComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-redirect',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./redirect.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/all/views/redirect/redirect.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./redirect.component.scss */ "./src/app/components/all/views/redirect/redirect.component.scss")).default]
    })
], RedirectComponent);



/***/ }),

/***/ "./src/app/components/all/views/register/register.component.scss":
/*!***********************************************************************!*\
  !*** ./src/app/components/all/views/register/register.component.scss ***!
  \***********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvYWxsL3ZpZXdzL3JlZ2lzdGVyL3JlZ2lzdGVyLmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/components/all/views/register/register.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/components/all/views/register/register.component.ts ***!
  \*********************************************************************/
/*! exports provided: RegisterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterComponent", function() { return RegisterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var src_app_models_user__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/models/user */ "./src/app/models/user.ts");
/* harmony import */ var src_app_services_authentication_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/authentication/auth.service */ "./src/app/services/authentication/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm2015/ngx-toastr.js");
/* harmony import */ var src_app_services_firebase_log_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/services/firebase/log.service */ "./src/app/services/firebase/log.service.ts");
/* harmony import */ var src_app_models_log__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/models/log */ "./src/app/models/log.ts");









let RegisterComponent = class RegisterComponent {
    constructor(authService, router, toastr, logService) {
        this.authService = authService;
        this.router = router;
        this.toastr = toastr;
        this.logService = logService;
        this.loading = false;
    }
    ngOnInit() {
        this.registerForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            'name': new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]),
            'lastname': new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]),
            'email': new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]),
            'password': new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]),
            'repPassword': new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]),
            'customCaptcha': new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null),
            'captcha': new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required])
        });
        this.random = this.randomNumber();
    }
    onSubmit() {
        if (this.registerForm.get('customCaptcha').value == this.random) {
            this.loading = true;
            let user = src_app_models_user__WEBPACK_IMPORTED_MODULE_3__["User"].CreateUserWithParams(this.registerForm.get('name').value, this.registerForm.get('lastname').value, this.registerForm.get('email').value, this.registerForm.get('password').value, src_app_models_user__WEBPACK_IMPORTED_MODULE_3__["Role"].cliente);
            this.authService.RegisterWithEmail(user)
                .then(() => {
                let mensaje = `El usuario ${user.email} se dió de alta`;
                this.logService.persistirMovimiento(user, src_app_models_log__WEBPACK_IMPORTED_MODULE_8__["TargetMovimiento"].usuario, src_app_models_log__WEBPACK_IMPORTED_MODULE_8__["TipoMovimiento"].alta, mensaje);
                this.toastr.success('Te has registrado con éxito.');
                this.router.navigate(['app/login']);
            })
                .catch(error => {
                this.toastr.error(error.message, 'Ha ocurrido un error.');
            });
        }
        else {
            this.toastr.warning("Captcha invalido");
        }
    }
    randomNumber() {
        let retorno;
        retorno = Math.floor(Math.random() * 6) + 1;
        return retorno;
    }
};
RegisterComponent.ctorParameters = () => [
    { type: src_app_services_authentication_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] },
    { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_6__["ToastrService"] },
    { type: src_app_services_firebase_log_service__WEBPACK_IMPORTED_MODULE_7__["LogService"] }
];
RegisterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-register',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./register.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/all/views/register/register.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./register.component.scss */ "./src/app/components/all/views/register/register.component.scss")).default]
    })
], RegisterComponent);



/***/ }),

/***/ "./src/app/components/bartender/views/home-bartender/home-bartender.component.scss":
/*!*****************************************************************************************!*\
  !*** ./src/app/components/bartender/views/home-bartender/home-bartender.component.scss ***!
  \*****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvYmFydGVuZGVyL3ZpZXdzL2hvbWUtYmFydGVuZGVyL2hvbWUtYmFydGVuZGVyLmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/components/bartender/views/home-bartender/home-bartender.component.ts":
/*!***************************************************************************************!*\
  !*** ./src/app/components/bartender/views/home-bartender/home-bartender.component.ts ***!
  \***************************************************************************************/
/*! exports provided: HomeBartenderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeBartenderComponent", function() { return HomeBartenderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let HomeBartenderComponent = class HomeBartenderComponent {
    constructor() { }
    ngOnInit() {
    }
    SelectOrder(order) {
        this.currentOrder = order;
    }
};
HomeBartenderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-home-bartender',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./home-bartender.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/bartender/views/home-bartender/home-bartender.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./home-bartender.component.scss */ "./src/app/components/bartender/views/home-bartender/home-bartender.component.scss")).default]
    })
], HomeBartenderComponent);



/***/ }),

/***/ "./src/app/components/bartender/views/main-bartender/main-bartender.component.scss":
/*!*****************************************************************************************!*\
  !*** ./src/app/components/bartender/views/main-bartender/main-bartender.component.scss ***!
  \*****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".bartender-color {\n  background-color: #d840dd;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9iYXJ0ZW5kZXIvdmlld3MvbWFpbi1iYXJ0ZW5kZXIvQzpcXFVzZXJzXFx0ZmVybmFuZGV6X21lY29uXFxEZXNrdG9wXFxHaXRIdWJcXGNvbWFuZGFMYWI0L3NyY1xcYXBwXFxjb21wb25lbnRzXFxiYXJ0ZW5kZXJcXHZpZXdzXFxtYWluLWJhcnRlbmRlclxcbWFpbi1iYXJ0ZW5kZXIuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2NvbXBvbmVudHMvYmFydGVuZGVyL3ZpZXdzL21haW4tYmFydGVuZGVyL21haW4tYmFydGVuZGVyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBO0VBQ0kseUJBSGU7QUNFbkIiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2JhcnRlbmRlci92aWV3cy9tYWluLWJhcnRlbmRlci9tYWluLWJhcnRlbmRlci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIiRiYXJ0ZW5kZXJQcmltYXJ5OiByZ2IoMjE2LCA2NCwgMjIxKTtcclxuXHJcbi5iYXJ0ZW5kZXItY29sb3Ige1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogJGJhcnRlbmRlclByaW1hcnk7XHJcbn0iLCIuYmFydGVuZGVyLWNvbG9yIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Q4NDBkZDtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/components/bartender/views/main-bartender/main-bartender.component.ts":
/*!***************************************************************************************!*\
  !*** ./src/app/components/bartender/views/main-bartender/main-bartender.component.ts ***!
  \***************************************************************************************/
/*! exports provided: MainBartenderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainBartenderComponent", function() { return MainBartenderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_services_authentication_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/authentication/auth.service */ "./src/app/services/authentication/auth.service.ts");



let MainBartenderComponent = class MainBartenderComponent {
    constructor(authService) {
        this.authService = authService;
        this.open = false;
    }
    toggleSidebar() {
        this.open = !this.open;
    }
    ngOnInit() {
        this.authService.GetCurrentUser().then(x => this.user = x);
    }
};
MainBartenderComponent.ctorParameters = () => [
    { type: src_app_services_authentication_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"] }
];
MainBartenderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-main-bartender',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./main-bartender.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/bartender/views/main-bartender/main-bartender.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./main-bartender.component.scss */ "./src/app/components/bartender/views/main-bartender/main-bartender.component.scss")).default]
    })
], MainBartenderComponent);



/***/ }),

/***/ "./src/app/components/bartender/views/manage-products-bartender/manage-products-bartender.component.scss":
/*!***************************************************************************************************************!*\
  !*** ./src/app/components/bartender/views/manage-products-bartender/manage-products-bartender.component.scss ***!
  \***************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvYmFydGVuZGVyL3ZpZXdzL21hbmFnZS1wcm9kdWN0cy1iYXJ0ZW5kZXIvbWFuYWdlLXByb2R1Y3RzLWJhcnRlbmRlci5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/components/bartender/views/manage-products-bartender/manage-products-bartender.component.ts":
/*!*************************************************************************************************************!*\
  !*** ./src/app/components/bartender/views/manage-products-bartender/manage-products-bartender.component.ts ***!
  \*************************************************************************************************************/
/*! exports provided: ManageProductsBartenderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ManageProductsBartenderComponent", function() { return ManageProductsBartenderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let ManageProductsBartenderComponent = class ManageProductsBartenderComponent {
    constructor() { }
    ngOnInit() {
    }
};
ManageProductsBartenderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-manage-products-bartender',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./manage-products-bartender.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/bartender/views/manage-products-bartender/manage-products-bartender.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./manage-products-bartender.component.scss */ "./src/app/components/bartender/views/manage-products-bartender/manage-products-bartender.component.scss")).default]
    })
], ManageProductsBartenderComponent);



/***/ }),

/***/ "./src/app/components/cervecero/views/home-cervecero/home-cervecero.component.scss":
/*!*****************************************************************************************!*\
  !*** ./src/app/components/cervecero/views/home-cervecero/home-cervecero.component.scss ***!
  \*****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvY2VydmVjZXJvL3ZpZXdzL2hvbWUtY2VydmVjZXJvL2hvbWUtY2VydmVjZXJvLmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/components/cervecero/views/home-cervecero/home-cervecero.component.ts":
/*!***************************************************************************************!*\
  !*** ./src/app/components/cervecero/views/home-cervecero/home-cervecero.component.ts ***!
  \***************************************************************************************/
/*! exports provided: HomeCerveceroComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeCerveceroComponent", function() { return HomeCerveceroComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let HomeCerveceroComponent = class HomeCerveceroComponent {
    constructor() { }
    ngOnInit() {
    }
    SelectOrder(order) {
        this.currentOrder = order;
    }
};
HomeCerveceroComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-home-cervecero',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./home-cervecero.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/cervecero/views/home-cervecero/home-cervecero.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./home-cervecero.component.scss */ "./src/app/components/cervecero/views/home-cervecero/home-cervecero.component.scss")).default]
    })
], HomeCerveceroComponent);



/***/ }),

/***/ "./src/app/components/cervecero/views/main-cervecero/main-cervecero.component.scss":
/*!*****************************************************************************************!*\
  !*** ./src/app/components/cervecero/views/main-cervecero/main-cervecero.component.scss ***!
  \*****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".cervecero-color {\n  background-color: #805552;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9jZXJ2ZWNlcm8vdmlld3MvbWFpbi1jZXJ2ZWNlcm8vQzpcXFVzZXJzXFx0ZmVybmFuZGV6X21lY29uXFxEZXNrdG9wXFxHaXRIdWJcXGNvbWFuZGFMYWI0L3NyY1xcYXBwXFxjb21wb25lbnRzXFxjZXJ2ZWNlcm9cXHZpZXdzXFxtYWluLWNlcnZlY2Vyb1xcbWFpbi1jZXJ2ZWNlcm8uY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2NvbXBvbmVudHMvY2VydmVjZXJvL3ZpZXdzL21haW4tY2VydmVjZXJvL21haW4tY2VydmVjZXJvLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBO0VBQ0kseUJBSGU7QUNFbkIiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2NlcnZlY2Vyby92aWV3cy9tYWluLWNlcnZlY2Vyby9tYWluLWNlcnZlY2Vyby5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIiRjZXJ2ZWNlcm9QcmltYXJ5OiByZ2IoMTI4LCA4NSwgODIpO1xyXG5cclxuLmNlcnZlY2Vyby1jb2xvciB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkY2VydmVjZXJvUHJpbWFyeTtcclxufSIsIi5jZXJ2ZWNlcm8tY29sb3Ige1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjODA1NTUyO1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/components/cervecero/views/main-cervecero/main-cervecero.component.ts":
/*!***************************************************************************************!*\
  !*** ./src/app/components/cervecero/views/main-cervecero/main-cervecero.component.ts ***!
  \***************************************************************************************/
/*! exports provided: MainCerveceroComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainCerveceroComponent", function() { return MainCerveceroComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_services_authentication_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/authentication/auth.service */ "./src/app/services/authentication/auth.service.ts");



let MainCerveceroComponent = class MainCerveceroComponent {
    constructor(authService) {
        this.authService = authService;
        this.open = false;
    }
    toggleSidebar() {
        this.open = !this.open;
    }
    ngOnInit() {
        this.authService.GetCurrentUser().then(x => this.user = x);
    }
};
MainCerveceroComponent.ctorParameters = () => [
    { type: src_app_services_authentication_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"] }
];
MainCerveceroComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-main-cervecero',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./main-cervecero.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/cervecero/views/main-cervecero/main-cervecero.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./main-cervecero.component.scss */ "./src/app/components/cervecero/views/main-cervecero/main-cervecero.component.scss")).default]
    })
], MainCerveceroComponent);



/***/ }),

/***/ "./src/app/components/cervecero/views/manage-products-cervecero/manage-products-cervecero.component.scss":
/*!***************************************************************************************************************!*\
  !*** ./src/app/components/cervecero/views/manage-products-cervecero/manage-products-cervecero.component.scss ***!
  \***************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvY2VydmVjZXJvL3ZpZXdzL21hbmFnZS1wcm9kdWN0cy1jZXJ2ZWNlcm8vbWFuYWdlLXByb2R1Y3RzLWNlcnZlY2Vyby5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/components/cervecero/views/manage-products-cervecero/manage-products-cervecero.component.ts":
/*!*************************************************************************************************************!*\
  !*** ./src/app/components/cervecero/views/manage-products-cervecero/manage-products-cervecero.component.ts ***!
  \*************************************************************************************************************/
/*! exports provided: ManageProductsCerveceroComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ManageProductsCerveceroComponent", function() { return ManageProductsCerveceroComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let ManageProductsCerveceroComponent = class ManageProductsCerveceroComponent {
    constructor() { }
    ngOnInit() {
    }
};
ManageProductsCerveceroComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-manage-products-cervecero',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./manage-products-cervecero.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/cervecero/views/manage-products-cervecero/manage-products-cervecero.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./manage-products-cervecero.component.scss */ "./src/app/components/cervecero/views/manage-products-cervecero/manage-products-cervecero.component.scss")).default]
    })
], ManageProductsCerveceroComponent);



/***/ }),

/***/ "./src/app/components/cliente/views/home-cliente/home-cliente.component.scss":
/*!***********************************************************************************!*\
  !*** ./src/app/components/cliente/views/home-cliente/home-cliente.component.scss ***!
  \***********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".btn-info {\n  font-family: Arial, Helvetica, sans-serif;\n}\n\n.price {\n  font-family: Arial, Helvetica, sans-serif;\n  color: green;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9jbGllbnRlL3ZpZXdzL2hvbWUtY2xpZW50ZS9DOlxcVXNlcnNcXHRmZXJuYW5kZXpfbWVjb25cXERlc2t0b3BcXEdpdEh1YlxcY29tYW5kYUxhYjQvc3JjXFxhcHBcXGNvbXBvbmVudHNcXGNsaWVudGVcXHZpZXdzXFxob21lLWNsaWVudGVcXGhvbWUtY2xpZW50ZS5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvY29tcG9uZW50cy9jbGllbnRlL3ZpZXdzL2hvbWUtY2xpZW50ZS9ob21lLWNsaWVudGUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSx5Q0FBQTtBQ0NKOztBREVBO0VBQ0kseUNBQUE7RUFDQSxZQUFBO0FDQ0oiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2NsaWVudGUvdmlld3MvaG9tZS1jbGllbnRlL2hvbWUtY2xpZW50ZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5idG4taW5mbyB7XHJcbiAgICBmb250LWZhbWlseTogQXJpYWwsIEhlbHZldGljYSwgc2Fucy1zZXJpZjtcclxufVxyXG5cclxuLnByaWNlIHtcclxuICAgIGZvbnQtZmFtaWx5OiBBcmlhbCwgSGVsdmV0aWNhLCBzYW5zLXNlcmlmO1xyXG4gICAgY29sb3I6IGdyZWVuXHJcbn0iLCIuYnRuLWluZm8ge1xuICBmb250LWZhbWlseTogQXJpYWwsIEhlbHZldGljYSwgc2Fucy1zZXJpZjtcbn1cblxuLnByaWNlIHtcbiAgZm9udC1mYW1pbHk6IEFyaWFsLCBIZWx2ZXRpY2EsIHNhbnMtc2VyaWY7XG4gIGNvbG9yOiBncmVlbjtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/components/cliente/views/home-cliente/home-cliente.component.ts":
/*!*********************************************************************************!*\
  !*** ./src/app/components/cliente/views/home-cliente/home-cliente.component.ts ***!
  \*********************************************************************************/
/*! exports provided: HomeClienteComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeClienteComponent", function() { return HomeClienteComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_models_product__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/models/product */ "./src/app/models/product.ts");
/* harmony import */ var src_app_models_order__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/models/order */ "./src/app/models/order.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var src_app_services_firebase_order_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/firebase/order.service */ "./src/app/services/firebase/order.service.ts");
/* harmony import */ var src_app_services_authentication_auth_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/authentication/auth.service */ "./src/app/services/authentication/auth.service.ts");
/* harmony import */ var src_app_services_firebase_user_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/services/firebase/user.service */ "./src/app/services/firebase/user.service.ts");
/* harmony import */ var src_app_services_firebase_table_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/services/firebase/table.service */ "./src/app/services/firebase/table.service.ts");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm2015/ngx-toastr.js");
/* harmony import */ var src_app_models_table__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/models/table */ "./src/app/models/table.ts");
/* harmony import */ var src_app_services_firebase_product_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! src/app/services/firebase/product.service */ "./src/app/services/firebase/product.service.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");













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
        this.onReset = new rxjs__WEBPACK_IMPORTED_MODULE_4__["Subject"]();
        this.hasOrder = false;
    }
    ngOnInit() {
        this.InitializeOrder();
        //this.products = this.CreateTestProducts();
        //this.products = this.productService.listado;
        this.products = this.productService.GetAll2();
        //this.products = new Array<Product>();
        //this.products = this.productService.listado;
        //this.showingProducts = this.products;
        this.authService.GetCurrentUser().then(userLogged => this.currentUser = userLogged);
        this.SelectRandomWaiter().then(waiter => this.currentWorker = waiter);
        this.ClearFilters();
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
        if (this.order.tableID == 'No hay')
            this.toastr.error('No hay mesas disponibles. Vuelva más tarde.');
        else {
            if (this.order.CheckOrder()) {
                this.order.waiter = this.currentWorker;
                this.order.client = this.currentUser;
                this.tableService.UpdateStatus(this.order.tableID, src_app_models_table__WEBPACK_IMPORTED_MODULE_10__["TableState"].waitingOrder);
                //this.orderService.Add(this.order);
                this.orderService.Update(this.order).then((value) => {
                    if (!value) {
                        this.orderService.Add(this.order);
                    }
                }).then(() => {
                    this.orderService.UpdateImageURL(this.order, this.currentUser.image);
                });
                this.toastr.success("El pedido se ha realizado correctamente! Este es tu número de pedido: " + this.order.codeID);
                this.hasOrder = true;
            }
            else
                this.toastr.error('Hay algo erróneo con este pedido.');
        }
    }
    // ##### FILTER FUNCTIONS #####
    Filter(type) {
        this.showingProducts = this.products.valueChanges().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_12__["map"])(productos => {
            return productos.filter(res => {
                res = Object.assign(new src_app_models_product__WEBPACK_IMPORTED_MODULE_2__["Product"](), res);
                if (res.IsFoodType(type))
                    return res;
            });
        }));
    }
    ClearFilters() {
        this.showingProducts = this.products.valueChanges().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_12__["map"])(productos => {
            return productos.filter(res => {
                res = Object.assign(new src_app_models_product__WEBPACK_IMPORTED_MODULE_2__["Product"](), res);
                return res;
            });
        }));
    }
    // ###### PRIVATE FUNCTIONS #####
    InitializeOrder() {
        this.tableService.FindAvailable()
            .then(table => {
            this.order = src_app_models_order__WEBPACK_IMPORTED_MODULE_3__["Order"].Create(table.tableID);
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
            // let random;
            // do{
            // 	random = Math.floor(Math.random() * waiters.length);
            // }while(!waiters[random].deleted && waiters[random].state != 'deshabilitado')
            let random = Math.floor(Math.random() * waiters.length);
            return waiters[random];
        });
    }
};
HomeClienteComponent.ctorParameters = () => [
    { type: src_app_services_firebase_order_service__WEBPACK_IMPORTED_MODULE_5__["OrderService"] },
    { type: src_app_services_firebase_user_service__WEBPACK_IMPORTED_MODULE_7__["UserService"] },
    { type: src_app_services_authentication_auth_service__WEBPACK_IMPORTED_MODULE_6__["AuthService"] },
    { type: src_app_services_firebase_table_service__WEBPACK_IMPORTED_MODULE_8__["TableService"] },
    { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_9__["ToastrService"] },
    { type: src_app_services_firebase_product_service__WEBPACK_IMPORTED_MODULE_11__["ProductService"] }
];
HomeClienteComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-home-cliente',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./home-cliente.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/cliente/views/home-cliente/home-cliente.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./home-cliente.component.scss */ "./src/app/components/cliente/views/home-cliente/home-cliente.component.scss")).default]
    })
], HomeClienteComponent);



/***/ }),

/***/ "./src/app/components/cliente/views/main-cliente/main-cliente.component.scss":
/*!***********************************************************************************!*\
  !*** ./src/app/components/cliente/views/main-cliente/main-cliente.component.scss ***!
  \***********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".general-color {\n  background-color: #83f174;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9jbGllbnRlL3ZpZXdzL21haW4tY2xpZW50ZS9DOlxcVXNlcnNcXHRmZXJuYW5kZXpfbWVjb25cXERlc2t0b3BcXEdpdEh1YlxcY29tYW5kYUxhYjQvc3JjXFxhcHBcXGNvbXBvbmVudHNcXGNsaWVudGVcXHZpZXdzXFxtYWluLWNsaWVudGVcXG1haW4tY2xpZW50ZS5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvY29tcG9uZW50cy9jbGllbnRlL3ZpZXdzL21haW4tY2xpZW50ZS9tYWluLWNsaWVudGUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUE7RUFDSSx5QkFIYTtBQ0VqQiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvY2xpZW50ZS92aWV3cy9tYWluLWNsaWVudGUvbWFpbi1jbGllbnRlLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiJGdlbmVyYWxQcmltYXJ5OiByZ2IoMTMxLCAyNDEsIDExNik7XHJcblxyXG4uZ2VuZXJhbC1jb2xvciB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkZ2VuZXJhbFByaW1hcnk7XHJcbn1cclxuXHJcblxyXG4iLCIuZ2VuZXJhbC1jb2xvciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICM4M2YxNzQ7XG59Il19 */");

/***/ }),

/***/ "./src/app/components/cliente/views/main-cliente/main-cliente.component.ts":
/*!*********************************************************************************!*\
  !*** ./src/app/components/cliente/views/main-cliente/main-cliente.component.ts ***!
  \*********************************************************************************/
/*! exports provided: MainClienteComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainClienteComponent", function() { return MainClienteComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_services_authentication_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/authentication/auth.service */ "./src/app/services/authentication/auth.service.ts");



let MainClienteComponent = class MainClienteComponent {
    constructor(authService) {
        this.authService = authService;
        this.open = false;
    }
    toggleSidebar() {
        this.open = !this.open;
    }
    ngOnInit() {
        this.authService.GetCurrentUser().then(x => this.user = x);
    }
};
MainClienteComponent.ctorParameters = () => [
    { type: src_app_services_authentication_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"] }
];
MainClienteComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-main-cliente',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./main-cliente.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/cliente/views/main-cliente/main-cliente.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./main-cliente.component.scss */ "./src/app/components/cliente/views/main-cliente/main-cliente.component.scss")).default]
    })
], MainClienteComponent);



/***/ }),

/***/ "./src/app/components/cliente/views/search-order/search-order.component.scss":
/*!***********************************************************************************!*\
  !*** ./src/app/components/cliente/views/search-order/search-order.component.scss ***!
  \***********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("input {\n  text-align: center;\n}\n\n.price {\n  font-family: Arial, Helvetica, sans-serif;\n  font-weight: bold;\n  color: green;\n}\n\ntextarea {\n  resize: none;\n}\n\n.positive {\n  font-weight: bold;\n  color: green;\n}\n\n.negative {\n  font-weight: bold;\n  color: red;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9jbGllbnRlL3ZpZXdzL3NlYXJjaC1vcmRlci9DOlxcVXNlcnNcXHRmZXJuYW5kZXpfbWVjb25cXERlc2t0b3BcXEdpdEh1YlxcY29tYW5kYUxhYjQvc3JjXFxhcHBcXGNvbXBvbmVudHNcXGNsaWVudGVcXHZpZXdzXFxzZWFyY2gtb3JkZXJcXHNlYXJjaC1vcmRlci5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvY29tcG9uZW50cy9jbGllbnRlL3ZpZXdzL3NlYXJjaC1vcmRlci9zZWFyY2gtb3JkZXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxrQkFBQTtBQ0NKOztBREVBO0VBQ0kseUNBQUE7RUFDQSxpQkFBQTtFQUNBLFlBQUE7QUNDSjs7QURFQTtFQUNJLFlBQUE7QUNDSjs7QURFQTtFQUNJLGlCQUFBO0VBQ0EsWUFBQTtBQ0NKOztBREVBO0VBQ0ksaUJBQUE7RUFDQSxVQUFBO0FDQ0oiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2NsaWVudGUvdmlld3Mvc2VhcmNoLW9yZGVyL3NlYXJjaC1vcmRlci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlucHV0IHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuLnByaWNlIHtcclxuICAgIGZvbnQtZmFtaWx5OiBBcmlhbCwgSGVsdmV0aWNhLCBzYW5zLXNlcmlmO1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICBjb2xvcjogZ3JlZW47XHJcbn1cclxuXHJcbnRleHRhcmVhIHtcclxuICAgIHJlc2l6ZTogbm9uZTtcclxufVxyXG5cclxuLnBvc2l0aXZlIHtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgY29sb3I6IGdyZWVuO1xyXG59XHJcblxyXG4ubmVnYXRpdmUge1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICBjb2xvcjogcmVkO1xyXG59IiwiaW5wdXQge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5wcmljZSB7XG4gIGZvbnQtZmFtaWx5OiBBcmlhbCwgSGVsdmV0aWNhLCBzYW5zLXNlcmlmO1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgY29sb3I6IGdyZWVuO1xufVxuXG50ZXh0YXJlYSB7XG4gIHJlc2l6ZTogbm9uZTtcbn1cblxuLnBvc2l0aXZlIHtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGNvbG9yOiBncmVlbjtcbn1cblxuLm5lZ2F0aXZlIHtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGNvbG9yOiByZWQ7XG59Il19 */");

/***/ }),

/***/ "./src/app/components/cliente/views/search-order/search-order.component.ts":
/*!*********************************************************************************!*\
  !*** ./src/app/components/cliente/views/search-order/search-order.component.ts ***!
  \*********************************************************************************/
/*! exports provided: SearchOrderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchOrderComponent", function() { return SearchOrderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm2015/ngx-toastr.js");
/* harmony import */ var src_app_services_firebase_order_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/firebase/order.service */ "./src/app/services/firebase/order.service.ts");
/* harmony import */ var src_app_services_firebase_table_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/firebase/table.service */ "./src/app/services/firebase/table.service.ts");
/* harmony import */ var src_app_models_order__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/models/order */ "./src/app/models/order.ts");
/* harmony import */ var src_app_models_table__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/models/table */ "./src/app/models/table.ts");
/* harmony import */ var src_app_services_firebase_survey_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/services/firebase/survey.service */ "./src/app/services/firebase/survey.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var src_app_models_survey__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/models/survey */ "./src/app/models/survey.ts");
/* harmony import */ var src_app_services_authentication_auth_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/services/authentication/auth.service */ "./src/app/services/authentication/auth.service.ts");
/* harmony import */ var jspdf__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! jspdf */ "./node_modules/jspdf/dist/jspdf.min.js");
/* harmony import */ var jspdf__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(jspdf__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");













let SearchOrderComponent = class SearchOrderComponent {
    //public misOrders: string[];
    constructor(authService, surveyService, toastr, orderService, tableService) {
        this.authService = authService;
        this.surveyService = surveyService;
        this.toastr = toastr;
        this.orderService = orderService;
        this.tableService = tableService;
        this.alreadyPaid = false;
        this.waitingOrder = false;
        this.surveyDone = false;
        this.file = null;
    }
    ngOnInit() {
        this.surveyForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormGroup"]({
            'tableScore': new _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_8__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_8__["Validators"].min(1), _angular_forms__WEBPACK_IMPORTED_MODULE_8__["Validators"].max(10)]),
            'restaurantScore': new _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_8__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_8__["Validators"].min(1), _angular_forms__WEBPACK_IMPORTED_MODULE_8__["Validators"].max(10)]),
            'waiterScore': new _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_8__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_8__["Validators"].min(1), _angular_forms__WEBPACK_IMPORTED_MODULE_8__["Validators"].max(10)]),
            'cookScore': new _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_8__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_8__["Validators"].min(1), _angular_forms__WEBPACK_IMPORTED_MODULE_8__["Validators"].max(10)]),
            'comment': new _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_8__["Validators"].required]),
            'commentType': new _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_8__["Validators"].required]),
        });
        setInterval(() => {
            if (this.order) {
                let now = new Date();
                this.remainingTime = new Date(this.order.timeLeft).getTime() - now.getTime();
            }
        }, 10);
        this.authService.GetCurrentUser().then(x => this.user = x);
    }
    Pay() {
        this.order.state = src_app_models_order__WEBPACK_IMPORTED_MODULE_5__["OrderState"].paidOut;
        this.orderService.ChangeStatus(src_app_models_order__WEBPACK_IMPORTED_MODULE_5__["OrderState"].paidOut, this.order.codeID);
        this.tableService.UpdateStatus(this.order.tableID, src_app_models_table__WEBPACK_IMPORTED_MODULE_6__["TableState"].paying)
            .then(() => {
            this.toastr.success('En unos instantes el mozo vendrá a buscar el pago.', 'Hecho!');
            this.alreadyPaid = true;
        })
            .catch(() => {
            this.toastr.error('Se ha producido un error.');
        });
    }
    Cancel() {
        this.order.state = src_app_models_order__WEBPACK_IMPORTED_MODULE_5__["OrderState"].cancelled;
        this.order.completed = true;
        this.orderService.ChangeStatus(src_app_models_order__WEBPACK_IMPORTED_MODULE_5__["OrderState"].cancelled, this.order.codeID);
    }
    onFileChanged(event) {
        this.file = event.target.files[0];
    }
    cambiarImagen() {
        this.orderService.setOrderImage(this.order.codeID, this.file);
    }
    IsServed() {
        let served = false;
        if (this.order.state == src_app_models_order__WEBPACK_IMPORTED_MODULE_5__["OrderState"].served || this.order.state == src_app_models_order__WEBPACK_IMPORTED_MODULE_5__["OrderState"].paidOut)
            served = true;
        return served;
    }
    FindOrder() {
        this.waitingOrder = true;
        this.orderService.GetByCodeID(this.orderID)
            .then(ord => this.order = ord)
            .catch(error => this.toastr.error(error, 'Error'))
            .finally(() => this.waitingOrder = false);
    }
    FindPending() {
        this.waitingOrder = true;
        this.orderService.GetByCodeUser(this.user.email)
            .then(ord => this.order = ord)
            .catch(error => this.toastr.error(error, 'Error'))
            .finally(() => this.waitingOrder = false);
    }
    CanPayNow() {
        let can = false;
        if (this.order) {
            if (this.order.state == src_app_models_order__WEBPACK_IMPORTED_MODULE_5__["OrderState"].served)
                can = true;
        }
        return can;
    }
    notCancelled() {
        let can = false;
        if (this.order) {
            if (this.order.state == src_app_models_order__WEBPACK_IMPORTED_MODULE_5__["OrderState"].cancelled || this.order.state == src_app_models_order__WEBPACK_IMPORTED_MODULE_5__["OrderState"].paidOut)
                can = true;
        }
        return can;
    }
    SendAnswers() {
        let survey = src_app_models_survey__WEBPACK_IMPORTED_MODULE_9__["Survey"].Create(this.order, this.surveyForm.get('tableScore').value, this.surveyForm.get('waiterScore').value, this.surveyForm.get('restaurantScore').value, this.surveyForm.get('cookScore').value, this.surveyForm.get('comment').value, this.surveyForm.get('commentType').value);
        this.surveyService.Add(survey)
            .then(() => this.toastr.success('Encuesta enviada correctamente!'))
            .catch(() => this.toastr.error('Se ha producido un error al enviar la encuesta.'))
            .finally(() => this.surveyDone = true);
    }
    ticketPDF() {
        let items = this.order.items;
        let start;
        let usersHtml = '';
        let end = '</ul></div>';
        let nombreArchivo;
        let liSt = '<li>';
        let liEnd = '</li>';
        var img = new Image();
        img.src = '../../../../../assets/img/logo.jpg';
        this.order = Object.assign(new src_app_models_order__WEBPACK_IMPORTED_MODULE_5__["Order"](), this.order);
        this.toastr.info('Generando archivo PDF...');
        start = '<div style="text-align: center"><h1>Pedido: ' + this.order.codeID + '</h1>';
        usersHtml += liSt + 'Mozo: ' + this.order.waiter.email + liEnd;
        usersHtml += liSt + 'Mesa N°: ' + this.order.tableID + liEnd;
        usersHtml += liSt + 'Pedido: ' + this.order.codeID + liEnd;
        const datePipe = new _angular_common__WEBPACK_IMPORTED_MODULE_12__["DatePipe"]('en-US');
        const myFormattedDate = datePipe.transform(this.order.timestamp, 'hh:mm dd/MM/yyyy');
        usersHtml += liSt + 'Fecha del pedido: ' + myFormattedDate + liEnd;
        items.forEach(unItem => {
            let item = ' Producto: ' + unItem.name + ' Precio: $ ' + unItem.price;
            let fullLine = liSt + item + liEnd;
            usersHtml += fullLine;
        });
        usersHtml += liSt + 'Total: $' + this.order.totalPrice + liEnd;
        let html = start + usersHtml + end;
        console.log(html);
        let pdf = new jspdf__WEBPACK_IMPORTED_MODULE_11__();
        pdf.addImage(img, 'jpg', 20, 0, 100, 100);
        pdf.fromHTML(html, 20, 80);
        nombreArchivo = this.order.codeID + '.pdf';
        pdf.save(nombreArchivo);
    }
    ///////////////////////////
    //public currentOrder: Order;
    SelectOrder(order) {
        this.order = order;
    }
};
SearchOrderComponent.ctorParameters = () => [
    { type: src_app_services_authentication_auth_service__WEBPACK_IMPORTED_MODULE_10__["AuthService"] },
    { type: src_app_services_firebase_survey_service__WEBPACK_IMPORTED_MODULE_7__["SurveyService"] },
    { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_2__["ToastrService"] },
    { type: src_app_services_firebase_order_service__WEBPACK_IMPORTED_MODULE_3__["OrderService"] },
    { type: src_app_services_firebase_table_service__WEBPACK_IMPORTED_MODULE_4__["TableService"] }
];
SearchOrderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-search-order',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./search-order.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/cliente/views/search-order/search-order.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./search-order.component.scss */ "./src/app/components/cliente/views/search-order/search-order.component.scss")).default]
    })
], SearchOrderComponent);



/***/ }),

/***/ "./src/app/components/cocinero/views/home-cocinero/home-cocinero.component.scss":
/*!**************************************************************************************!*\
  !*** ./src/app/components/cocinero/views/home-cocinero/home-cocinero.component.scss ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvY29jaW5lcm8vdmlld3MvaG9tZS1jb2NpbmVyby9ob21lLWNvY2luZXJvLmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/components/cocinero/views/home-cocinero/home-cocinero.component.ts":
/*!************************************************************************************!*\
  !*** ./src/app/components/cocinero/views/home-cocinero/home-cocinero.component.ts ***!
  \************************************************************************************/
/*! exports provided: HomeCocineroComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeCocineroComponent", function() { return HomeCocineroComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let HomeCocineroComponent = class HomeCocineroComponent {
    constructor() { }
    ngOnInit() {
    }
    SelectOrder(order) {
        this.currentOrder = order;
    }
};
HomeCocineroComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-home-cocinero',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./home-cocinero.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/cocinero/views/home-cocinero/home-cocinero.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./home-cocinero.component.scss */ "./src/app/components/cocinero/views/home-cocinero/home-cocinero.component.scss")).default]
    })
], HomeCocineroComponent);



/***/ }),

/***/ "./src/app/components/cocinero/views/main-cocinero/main-cocinero.component.scss":
/*!**************************************************************************************!*\
  !*** ./src/app/components/cocinero/views/main-cocinero/main-cocinero.component.scss ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".cocinero-color {\n  background-color: #f7e11c;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9jb2NpbmVyby92aWV3cy9tYWluLWNvY2luZXJvL0M6XFxVc2Vyc1xcdGZlcm5hbmRlel9tZWNvblxcRGVza3RvcFxcR2l0SHViXFxjb21hbmRhTGFiNC9zcmNcXGFwcFxcY29tcG9uZW50c1xcY29jaW5lcm9cXHZpZXdzXFxtYWluLWNvY2luZXJvXFxtYWluLWNvY2luZXJvLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9jb21wb25lbnRzL2NvY2luZXJvL3ZpZXdzL21haW4tY29jaW5lcm8vbWFpbi1jb2NpbmVyby5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQTtFQUNJLHlCQUhjO0FDRWxCIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9jb2NpbmVyby92aWV3cy9tYWluLWNvY2luZXJvL21haW4tY29jaW5lcm8uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIkY29jaW5lcm9QcmltYXJ5OiByZ2IoMjQ3LCAyMjUsIDI4KTtcclxuXHJcbi5jb2NpbmVyby1jb2xvciB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkY29jaW5lcm9QcmltYXJ5O1xyXG59IiwiLmNvY2luZXJvLWNvbG9yIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Y3ZTExYztcbn0iXX0= */");

/***/ }),

/***/ "./src/app/components/cocinero/views/main-cocinero/main-cocinero.component.ts":
/*!************************************************************************************!*\
  !*** ./src/app/components/cocinero/views/main-cocinero/main-cocinero.component.ts ***!
  \************************************************************************************/
/*! exports provided: MainCocineroComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainCocineroComponent", function() { return MainCocineroComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_services_authentication_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/authentication/auth.service */ "./src/app/services/authentication/auth.service.ts");



let MainCocineroComponent = class MainCocineroComponent {
    constructor(authService) {
        this.authService = authService;
        this.open = false;
    }
    toggleSidebar() {
        this.open = !this.open;
    }
    ngOnInit() {
        this.authService.GetCurrentUser().then(x => this.user = x);
    }
};
MainCocineroComponent.ctorParameters = () => [
    { type: src_app_services_authentication_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"] }
];
MainCocineroComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-main-cocinero',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./main-cocinero.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/cocinero/views/main-cocinero/main-cocinero.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./main-cocinero.component.scss */ "./src/app/components/cocinero/views/main-cocinero/main-cocinero.component.scss")).default]
    })
], MainCocineroComponent);



/***/ }),

/***/ "./src/app/components/cocinero/views/manage-products-cocinero/manage-products-cocinero.component.scss":
/*!************************************************************************************************************!*\
  !*** ./src/app/components/cocinero/views/manage-products-cocinero/manage-products-cocinero.component.scss ***!
  \************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvY29jaW5lcm8vdmlld3MvbWFuYWdlLXByb2R1Y3RzLWNvY2luZXJvL21hbmFnZS1wcm9kdWN0cy1jb2NpbmVyby5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/components/cocinero/views/manage-products-cocinero/manage-products-cocinero.component.ts":
/*!**********************************************************************************************************!*\
  !*** ./src/app/components/cocinero/views/manage-products-cocinero/manage-products-cocinero.component.ts ***!
  \**********************************************************************************************************/
/*! exports provided: ManageProductsCocineroComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ManageProductsCocineroComponent", function() { return ManageProductsCocineroComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let ManageProductsCocineroComponent = class ManageProductsCocineroComponent {
    constructor() { }
    ngOnInit() {
    }
};
ManageProductsCocineroComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-manage-products-cocinero',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./manage-products-cocinero.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/cocinero/views/manage-products-cocinero/manage-products-cocinero.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./manage-products-cocinero.component.scss */ "./src/app/components/cocinero/views/manage-products-cocinero/manage-products-cocinero.component.scss")).default]
    })
], ManageProductsCocineroComponent);



/***/ }),

/***/ "./src/app/components/mozo/main/select-order/select-order.component.scss":
/*!*******************************************************************************!*\
  !*** ./src/app/components/mozo/main/select-order/select-order.component.scss ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("h5 {\n  font-weight: bold;\n}\n\nselect {\n  -moz-text-align-last: center;\n       text-align-last: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9tb3pvL21haW4vc2VsZWN0LW9yZGVyL0M6XFxVc2Vyc1xcdGZlcm5hbmRlel9tZWNvblxcRGVza3RvcFxcR2l0SHViXFxjb21hbmRhTGFiNC9zcmNcXGFwcFxcY29tcG9uZW50c1xcbW96b1xcbWFpblxcc2VsZWN0LW9yZGVyXFxzZWxlY3Qtb3JkZXIuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2NvbXBvbmVudHMvbW96by9tYWluL3NlbGVjdC1vcmRlci9zZWxlY3Qtb3JkZXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxpQkFBQTtBQ0NKOztBREVBO0VBQ0ksNEJBQUE7T0FBQSx1QkFBQTtBQ0NKIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9tb3pvL21haW4vc2VsZWN0LW9yZGVyL3NlbGVjdC1vcmRlci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImg1IHtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG59XHJcblxyXG5zZWxlY3Qge1xyXG4gICAgdGV4dC1hbGlnbi1sYXN0OiBjZW50ZXI7XHJcbn0iLCJoNSB7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuXG5zZWxlY3Qge1xuICB0ZXh0LWFsaWduLWxhc3Q6IGNlbnRlcjtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/components/mozo/main/select-order/select-order.component.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/components/mozo/main/select-order/select-order.component.ts ***!
  \*****************************************************************************/
/*! exports provided: SelectOrderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SelectOrderComponent", function() { return SelectOrderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_models_order__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/models/order */ "./src/app/models/order.ts");
/* harmony import */ var src_app_services_firebase_order_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/firebase/order.service */ "./src/app/services/firebase/order.service.ts");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm2015/ngx-toastr.js");
/* harmony import */ var src_app_services_firebase_table_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/firebase/table.service */ "./src/app/services/firebase/table.service.ts");
/* harmony import */ var src_app_models_table__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/models/table */ "./src/app/models/table.ts");
/* harmony import */ var src_app_models_log__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/models/log */ "./src/app/models/log.ts");
/* harmony import */ var src_app_services_authentication_auth_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/services/authentication/auth.service */ "./src/app/services/authentication/auth.service.ts");
/* harmony import */ var src_app_services_firebase_log_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/services/firebase/log.service */ "./src/app/services/firebase/log.service.ts");
/* harmony import */ var jspdf__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! jspdf */ "./node_modules/jspdf/dist/jspdf.min.js");
/* harmony import */ var jspdf__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(jspdf__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");












let SelectOrderComponent = class SelectOrderComponent {
    constructor(orderService, toastr, tableService, authService, movimientoService) {
        this.orderService = orderService;
        this.toastr = toastr;
        this.tableService = tableService;
        this.authService = authService;
        this.movimientoService = movimientoService;
    }
    ngOnInit() {
        setInterval(() => {
            if (this.order) {
                let now = new Date();
                this.remainingTime = new Date(this.order.timeLeft).getTime() - now.getTime();
            }
        }, 10);
    }
    CanBeServed() {
        let can = false;
        if (this.order.state == src_app_models_order__WEBPACK_IMPORTED_MODULE_2__["OrderState"].readyToServe)
            can = true;
        return can;
    }
    SelectItem(item) {
        this.selectedItem = item;
    }
    CompleteOrder() {
        this.order = Object.assign(new src_app_models_order__WEBPACK_IMPORTED_MODULE_2__["Order"](), this.order);
        this.tableService.UpdateStatus(this.order.tableID, src_app_models_table__WEBPACK_IMPORTED_MODULE_6__["TableState"].eating);
        this.order.CompleteOrder();
        this.orderService.Update(this.order).then(() => {
            this.authService.GetCurrentUser().then(user => {
                let mensaje = `El usuario ${user.email} entregó un pedido ${this.order.codeID}`;
                this.movimientoService.persistirMovimiento(user, src_app_models_log__WEBPACK_IMPORTED_MODULE_7__["TargetMovimiento"].pedido, src_app_models_log__WEBPACK_IMPORTED_MODULE_7__["TipoMovimiento"].entrega, mensaje);
            });
        })
            .then(() => {
            this.toastr.success('Orden servida.');
        })
            .catch(() => {
            this.toastr.error('Hubo un error al servir la orden.', 'Error');
        });
    }
    comandaPDF() {
        let items = this.order.items;
        let start;
        let usersHtml = '';
        let end = '</ul></div>';
        let nombreArchivo;
        let liSt = '<li>';
        let liEnd = '</li>';
        this.order = Object.assign(new src_app_models_order__WEBPACK_IMPORTED_MODULE_2__["Order"](), this.order);
        this.toastr.info('Generando archivo PDF...');
        start = '<div style="text-align: center"><h1>Pedido: ' + this.order.codeID + '</h1><hr><ul>';
        usersHtml += liSt + 'Mozo: ' + this.order.waiter.email + liEnd;
        usersHtml += liSt + 'Mesa N°: ' + this.order.tableID + liEnd;
        usersHtml += liSt + 'Pedido: ' + this.order.codeID + liEnd;
        const datePipe = new _angular_common__WEBPACK_IMPORTED_MODULE_11__["DatePipe"]('en-US');
        const myFormattedDate = datePipe.transform(this.order.timestamp, 'hh:mm dd/MM/yyyy');
        usersHtml += liSt + 'Fecha del pedido: ' + myFormattedDate + liEnd;
        items.forEach(unItem => {
            let item = ' Producto: ' + unItem.name + ' Area: ' + unItem.cook;
            let fullLine = liSt + item + liEnd;
            usersHtml += fullLine;
        });
        let html = start + usersHtml + end;
        let pdf = new jspdf__WEBPACK_IMPORTED_MODULE_10__();
        pdf.fromHTML(html, 20, 20);
        nombreArchivo = this.order.codeID + '.pdf';
        pdf.save(nombreArchivo);
    }
};
SelectOrderComponent.ctorParameters = () => [
    { type: src_app_services_firebase_order_service__WEBPACK_IMPORTED_MODULE_3__["OrderService"] },
    { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_4__["ToastrService"] },
    { type: src_app_services_firebase_table_service__WEBPACK_IMPORTED_MODULE_5__["TableService"] },
    { type: src_app_services_authentication_auth_service__WEBPACK_IMPORTED_MODULE_8__["AuthService"] },
    { type: src_app_services_firebase_log_service__WEBPACK_IMPORTED_MODULE_9__["LogService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], SelectOrderComponent.prototype, "order", void 0);
SelectOrderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-select-order',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./select-order.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/mozo/main/select-order/select-order.component.html")).default,
        changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./select-order.component.scss */ "./src/app/components/mozo/main/select-order/select-order.component.scss")).default]
    })
], SelectOrderComponent);



/***/ }),

/***/ "./src/app/components/mozo/views/home-mozo/home-mozo.component.scss":
/*!**************************************************************************!*\
  !*** ./src/app/components/mozo/views/home-mozo/home-mozo.component.scss ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvbW96by92aWV3cy9ob21lLW1vem8vaG9tZS1tb3pvLmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/components/mozo/views/home-mozo/home-mozo.component.ts":
/*!************************************************************************!*\
  !*** ./src/app/components/mozo/views/home-mozo/home-mozo.component.ts ***!
  \************************************************************************/
/*! exports provided: HomeMozoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeMozoComponent", function() { return HomeMozoComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let HomeMozoComponent = class HomeMozoComponent {
    constructor() { }
    ngOnInit() {
    }
    SelectOrder(order) {
        this.currentOrder = order;
    }
};
HomeMozoComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-home-mozo',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./home-mozo.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/mozo/views/home-mozo/home-mozo.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./home-mozo.component.scss */ "./src/app/components/mozo/views/home-mozo/home-mozo.component.scss")).default]
    })
], HomeMozoComponent);



/***/ }),

/***/ "./src/app/components/mozo/views/main-mozo/main-mozo.component.scss":
/*!**************************************************************************!*\
  !*** ./src/app/components/mozo/views/main-mozo/main-mozo.component.scss ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".mozo-color {\n  background-color: #1b87cf;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9tb3pvL3ZpZXdzL21haW4tbW96by9DOlxcVXNlcnNcXHRmZXJuYW5kZXpfbWVjb25cXERlc2t0b3BcXEdpdEh1YlxcY29tYW5kYUxhYjQvc3JjXFxhcHBcXGNvbXBvbmVudHNcXG1vem9cXHZpZXdzXFxtYWluLW1vem9cXG1haW4tbW96by5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvY29tcG9uZW50cy9tb3pvL3ZpZXdzL21haW4tbW96by9tYWluLW1vem8uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUE7RUFDSSx5QkFIVTtBQ0VkIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9tb3pvL3ZpZXdzL21haW4tbW96by9tYWluLW1vem8uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIkbW96b1ByaW1hcnk6IHJnYigyNywgMTM1LCAyMDcpO1xyXG5cclxuLm1vem8tY29sb3Ige1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogJG1vem9QcmltYXJ5O1xyXG59IiwiLm1vem8tY29sb3Ige1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMWI4N2NmO1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/components/mozo/views/main-mozo/main-mozo.component.ts":
/*!************************************************************************!*\
  !*** ./src/app/components/mozo/views/main-mozo/main-mozo.component.ts ***!
  \************************************************************************/
/*! exports provided: MainMozoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainMozoComponent", function() { return MainMozoComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_services_authentication_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/authentication/auth.service */ "./src/app/services/authentication/auth.service.ts");



let MainMozoComponent = class MainMozoComponent {
    constructor(authService) {
        this.authService = authService;
        this.open = false;
    }
    toggleSidebar() {
        this.open = !this.open;
    }
    ngOnInit() {
        this.authService.GetCurrentUser().then(x => this.user = x);
    }
};
MainMozoComponent.ctorParameters = () => [
    { type: src_app_services_authentication_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"] }
];
MainMozoComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-main-mozo',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./main-mozo.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/mozo/views/main-mozo/main-mozo.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./main-mozo.component.scss */ "./src/app/components/mozo/views/main-mozo/main-mozo.component.scss")).default]
    })
], MainMozoComponent);



/***/ }),

/***/ "./src/app/components/mozo/views/manage-tables/manage-tables.component.scss":
/*!**********************************************************************************!*\
  !*** ./src/app/components/mozo/views/manage-tables/manage-tables.component.scss ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvbW96by92aWV3cy9tYW5hZ2UtdGFibGVzL21hbmFnZS10YWJsZXMuY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/components/mozo/views/manage-tables/manage-tables.component.ts":
/*!********************************************************************************!*\
  !*** ./src/app/components/mozo/views/manage-tables/manage-tables.component.ts ***!
  \********************************************************************************/
/*! exports provided: ManageTablesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ManageTablesComponent", function() { return ManageTablesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_services_firebase_table_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/firebase/table.service */ "./src/app/services/firebase/table.service.ts");



let ManageTablesComponent = class ManageTablesComponent {
    constructor(tableService) {
        this.tableService = tableService;
    }
    ngOnInit() {
        this.tables = this.tableService.GetAll().valueChanges();
    }
};
ManageTablesComponent.ctorParameters = () => [
    { type: src_app_services_firebase_table_service__WEBPACK_IMPORTED_MODULE_2__["TableService"] }
];
ManageTablesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-manage-tables',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./manage-tables.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/mozo/views/manage-tables/manage-tables.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./manage-tables.component.scss */ "./src/app/components/mozo/views/manage-tables/manage-tables.component.scss")).default]
    })
], ManageTablesComponent);



/***/ }),

/***/ "./src/app/components/socio/views/home-socio/home-socio.component.scss":
/*!*****************************************************************************!*\
  !*** ./src/app/components/socio/views/home-socio/home-socio.component.scss ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".role-panel {\n  margin: 0 2rem 0 2rem;\n}\n\n.role-input {\n  -moz-text-align-last: center;\n       text-align-last: center;\n}\n\n.card {\n  margin: 3rem 1rem 2rem 0rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9zb2Npby92aWV3cy9ob21lLXNvY2lvL0M6XFxVc2Vyc1xcdGZlcm5hbmRlel9tZWNvblxcRGVza3RvcFxcR2l0SHViXFxjb21hbmRhTGFiNC9zcmNcXGFwcFxcY29tcG9uZW50c1xcc29jaW9cXHZpZXdzXFxob21lLXNvY2lvXFxob21lLXNvY2lvLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9jb21wb25lbnRzL3NvY2lvL3ZpZXdzL2hvbWUtc29jaW8vaG9tZS1zb2Npby5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLHFCQUFBO0FDQ0o7O0FERUE7RUFDSSw0QkFBQTtPQUFBLHVCQUFBO0FDQ0o7O0FEQ0E7RUFDSSwyQkFBQTtBQ0VKIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9zb2Npby92aWV3cy9ob21lLXNvY2lvL2hvbWUtc29jaW8uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucm9sZS1wYW5lbCB7XHJcbiAgICBtYXJnaW46IDAgMnJlbSAwIDJyZW07XHJcbn1cclxuXHJcbi5yb2xlLWlucHV0IHtcclxuICAgIHRleHQtYWxpZ24tbGFzdDogY2VudGVyO1xyXG59XHJcbi5jYXJke1xyXG4gICAgbWFyZ2luOjNyZW0gMXJlbSAycmVtIDByZW1cclxufSIsIi5yb2xlLXBhbmVsIHtcbiAgbWFyZ2luOiAwIDJyZW0gMCAycmVtO1xufVxuXG4ucm9sZS1pbnB1dCB7XG4gIHRleHQtYWxpZ24tbGFzdDogY2VudGVyO1xufVxuXG4uY2FyZCB7XG4gIG1hcmdpbjogM3JlbSAxcmVtIDJyZW0gMHJlbTtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/components/socio/views/home-socio/home-socio.component.ts":
/*!***************************************************************************!*\
  !*** ./src/app/components/socio/views/home-socio/home-socio.component.ts ***!
  \***************************************************************************/
/*! exports provided: HomeSocioComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeSocioComponent", function() { return HomeSocioComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_services_firebase_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/firebase/user.service */ "./src/app/services/firebase/user.service.ts");
/* harmony import */ var src_app_services_firebase_order_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/firebase/order.service */ "./src/app/services/firebase/order.service.ts");
/* harmony import */ var jspdf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! jspdf */ "./node_modules/jspdf/dist/jspdf.min.js");
/* harmony import */ var jspdf__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(jspdf__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm2015/ngx-toastr.js");






let HomeSocioComponent = class HomeSocioComponent {
    constructor(userService, orderService, toastr) {
        this.userService = userService;
        this.orderService = orderService;
        this.toastr = toastr;
        this.changeRoleNewRole = 'socio';
    }
    ngOnInit() {
    }
    ChangeRole() {
        this.userService.SetRole(this.changeRoleEmail, this.changeRoleNewRole);
        this.toastr.info('El rol se ha cambiado correctamente!');
    }
    GenerateCSV() {
        this.toastr.info('Generando la facturación...');
        this.orderService.GetAllCompletedOrders_InArray().then(orders => {
            let data = [];
            orders.forEach(ord => {
                data.push([ord.timeLeft,
                    ord.codeID,
                    ord.client.email,
                    ord.waiter.name + ' ' + ord.waiter.lastname,
                    '$' + ord.totalPrice]);
            });
            let csvData = 'Fecha,Pedido,Cliente,Mozo,Importe\n';
            data.forEach(row => {
                csvData += row.join(',');
                csvData += '\n';
            });
            let file = new Blob([csvData], { type: 'text/csv' });
            let fileUrl = URL.createObjectURL(file);
            let hiddenEl = document.createElement('a');
            hiddenEl.href = fileUrl;
            hiddenEl.target = '_blank';
            hiddenEl.download = 'Facturacion.csv';
            hiddenEl.click();
        });
    }
    GeneratePDF() {
        this.toastr.info('Generando el listado de usuarios...');
        this.userService.GetAll_InArray().then(users => {
            let start = '<div style="text-align: center"><h1>Listado de usuarios</h1><hr><ul>';
            let usersHtml = '';
            let end = '</ul></div>';
            users.forEach(el => {
                let liSt = '<li>';
                let liEnd = '</li>';
                let user = el.email + ' - ' + el.name + ' ' + el.lastname + ' - ' + el.role;
                let fullLine = liSt + user + liEnd;
                usersHtml += fullLine;
            });
            let html = start + usersHtml + end;
            let pdf = new jspdf__WEBPACK_IMPORTED_MODULE_4__();
            pdf.fromHTML(html, 20, 20);
            pdf.save('Prueba.pdf');
        });
    }
};
HomeSocioComponent.ctorParameters = () => [
    { type: src_app_services_firebase_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"] },
    { type: src_app_services_firebase_order_service__WEBPACK_IMPORTED_MODULE_3__["OrderService"] },
    { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_5__["ToastrService"] }
];
HomeSocioComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-home-socio',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./home-socio.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/socio/views/home-socio/home-socio.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./home-socio.component.scss */ "./src/app/components/socio/views/home-socio/home-socio.component.scss")).default]
    })
], HomeSocioComponent);



/***/ }),

/***/ "./src/app/components/socio/views/main-socio/main-socio.component.scss":
/*!*****************************************************************************!*\
  !*** ./src/app/components/socio/views/main-socio/main-socio.component.scss ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".socio-color {\n  background-color: #f51404;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9zb2Npby92aWV3cy9tYWluLXNvY2lvL0M6XFxVc2Vyc1xcdGZlcm5hbmRlel9tZWNvblxcRGVza3RvcFxcR2l0SHViXFxjb21hbmRhTGFiNC9zcmNcXGFwcFxcY29tcG9uZW50c1xcc29jaW9cXHZpZXdzXFxtYWluLXNvY2lvXFxtYWluLXNvY2lvLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9jb21wb25lbnRzL3NvY2lvL3ZpZXdzL21haW4tc29jaW8vbWFpbi1zb2Npby5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQTtFQUNJLHlCQUhXO0FDRWYiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL3NvY2lvL3ZpZXdzL21haW4tc29jaW8vbWFpbi1zb2Npby5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIiRzb2Npb1ByaW1hcnk6IHJnYigyNDUsIDIwLCA0KTtcclxuXHJcbi5zb2Npby1jb2xvciB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkc29jaW9QcmltYXJ5O1xyXG59XHJcblxyXG5cclxuXHJcbiIsIi5zb2Npby1jb2xvciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmNTE0MDQ7XG59Il19 */");

/***/ }),

/***/ "./src/app/components/socio/views/main-socio/main-socio.component.ts":
/*!***************************************************************************!*\
  !*** ./src/app/components/socio/views/main-socio/main-socio.component.ts ***!
  \***************************************************************************/
/*! exports provided: MainSocioComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainSocioComponent", function() { return MainSocioComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_services_authentication_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/authentication/auth.service */ "./src/app/services/authentication/auth.service.ts");



let MainSocioComponent = class MainSocioComponent {
    constructor(authService) {
        this.authService = authService;
        this.open = false;
    }
    toggleSidebar() {
        this.open = !this.open;
    }
    ngOnInit() {
        this.authService.GetCurrentUser().then(x => this.user = x);
    }
};
MainSocioComponent.ctorParameters = () => [
    { type: src_app_services_authentication_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"] }
];
MainSocioComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-main-socio',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./main-socio.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/socio/views/main-socio/main-socio.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./main-socio.component.scss */ "./src/app/components/socio/views/main-socio/main-socio.component.scss")).default]
    })
], MainSocioComponent);



/***/ }),

/***/ "./src/app/components/socio/views/manage-orders-admin/manage-orders-admin.component.scss":
/*!***********************************************************************************************!*\
  !*** ./src/app/components/socio/views/manage-orders-admin/manage-orders-admin.component.scss ***!
  \***********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvc29jaW8vdmlld3MvbWFuYWdlLW9yZGVycy1hZG1pbi9tYW5hZ2Utb3JkZXJzLWFkbWluLmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/components/socio/views/manage-orders-admin/manage-orders-admin.component.ts":
/*!*********************************************************************************************!*\
  !*** ./src/app/components/socio/views/manage-orders-admin/manage-orders-admin.component.ts ***!
  \*********************************************************************************************/
/*! exports provided: ManageOrdersAdminComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ManageOrdersAdminComponent", function() { return ManageOrdersAdminComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let ManageOrdersAdminComponent = class ManageOrdersAdminComponent {
    constructor() { }
    ngOnInit() {
    }
    SelectOrder(order) {
        this.currentOrder = order;
    }
};
ManageOrdersAdminComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-manage-orders-admin',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./manage-orders-admin.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/socio/views/manage-orders-admin/manage-orders-admin.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./manage-orders-admin.component.scss */ "./src/app/components/socio/views/manage-orders-admin/manage-orders-admin.component.scss")).default]
    })
], ManageOrdersAdminComponent);



/***/ }),

/***/ "./src/app/components/socio/views/manage-products-admin/manage-products-admin.component.scss":
/*!***************************************************************************************************!*\
  !*** ./src/app/components/socio/views/manage-products-admin/manage-products-admin.component.scss ***!
  \***************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("table {\n  background-color: rgba(255, 254, 254, 0.877);\n  border-radius: 20px;\n}\ntable th {\n  border: none;\n  text-align: center;\n}\ntable tr {\n  text-align: center;\n}\n.arial {\n  font-family: Arial, Helvetica, sans-serif;\n  font-size: 0.9em;\n  font-weight: bold;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9zb2Npby92aWV3cy9tYW5hZ2UtcHJvZHVjdHMtYWRtaW4vQzpcXFVzZXJzXFx0ZmVybmFuZGV6X21lY29uXFxEZXNrdG9wXFxHaXRIdWJcXGNvbWFuZGFMYWI0L3NyY1xcYXBwXFxjb21wb25lbnRzXFxzb2Npb1xcdmlld3NcXG1hbmFnZS1wcm9kdWN0cy1hZG1pblxcbWFuYWdlLXByb2R1Y3RzLWFkbWluLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9jb21wb25lbnRzL3NvY2lvL3ZpZXdzL21hbmFnZS1wcm9kdWN0cy1hZG1pbi9tYW5hZ2UtcHJvZHVjdHMtYWRtaW4uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBSUE7RUFDSSw0Q0FBQTtFQUNBLG1CQUFBO0FDSEo7QURLSTtFQUNJLFlBQUE7RUFDQSxrQkFBQTtBQ0hSO0FES0k7RUFDSSxrQkFBQTtBQ0hSO0FET0E7RUFDSSx5Q0FBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7QUNKSiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvc29jaW8vdmlld3MvbWFuYWdlLXByb2R1Y3RzLWFkbWluL21hbmFnZS1wcm9kdWN0cy1hZG1pbi5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5wcm9kdWN0IHtcclxuICAgIC8vY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcblxyXG50YWJsZSB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMjU0LCAyNTQsIDAuODc3KTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XHJcblxyXG4gICAgdGgge1xyXG4gICAgICAgIGJvcmRlcjogbm9uZTtcclxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICB9XHJcbiAgICB0ciB7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgfVxyXG59XHJcblxyXG4uYXJpYWwge1xyXG4gICAgZm9udC1mYW1pbHk6IEFyaWFsLCBIZWx2ZXRpY2EsIHNhbnMtc2VyaWY7XHJcbiAgICBmb250LXNpemU6IC45ZW07XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxufSIsInRhYmxlIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDI1NCwgMjU0LCAwLjg3Nyk7XG4gIGJvcmRlci1yYWRpdXM6IDIwcHg7XG59XG50YWJsZSB0aCB7XG4gIGJvcmRlcjogbm9uZTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxudGFibGUgdHIge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5hcmlhbCB7XG4gIGZvbnQtZmFtaWx5OiBBcmlhbCwgSGVsdmV0aWNhLCBzYW5zLXNlcmlmO1xuICBmb250LXNpemU6IDAuOWVtO1xuICBmb250LXdlaWdodDogYm9sZDtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/components/socio/views/manage-products-admin/manage-products-admin.component.ts":
/*!*************************************************************************************************!*\
  !*** ./src/app/components/socio/views/manage-products-admin/manage-products-admin.component.ts ***!
  \*************************************************************************************************/
/*! exports provided: ManageProductsAdminComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ManageProductsAdminComponent", function() { return ManageProductsAdminComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_services_authentication_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/authentication/auth.service */ "./src/app/services/authentication/auth.service.ts");



let ManageProductsAdminComponent = class ManageProductsAdminComponent {
    // constructor(private productService: ProductService, private fileService: FileService, private authService: AuthService, private movimientoService: LogService) { }
    constructor(authService) {
        this.authService = authService;
    }
    ngOnInit() {
        this.authService.GetCurrentUser().then(user => {
            this.role = user.role;
        });
        //this.products = this.productService.GetAll().valueChanges();
        // this.productForm = new FormGroup({
        //   productName: new FormControl(null, [Validators.required]),
        //   productPrice: new FormControl(null, [Validators.required]),
        //   productDescription: new FormControl(null, [Validators.required]),
        //   productImage: new FormControl('', [Validators.required]),
        //   typeComida: new FormControl(null),
        //   typeBebida: new FormControl(null),
        //   typeAlcohol: new FormControl(null),
        //   typePostre: new FormControl(null),
        //   typeCeliaco: new FormControl(null),
        //   typeVegano: new FormControl(null),
        //   productCook: new FormControl(null)
        // })
        // this.getRole();
        // let date = new Date;
        // console.log(date);
        // this.products = new Array<Product>();
        // this.products = this.productService.listado;
        // //this.products = this.CreateTestProducts();
        // this.showingProducts = this.products;
        // console.log("showingProducts");
        // this.haySeleccionado = false;
        // this.productoSeleccionado = null;
    }
};
ManageProductsAdminComponent.ctorParameters = () => [
    { type: src_app_services_authentication_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"] }
];
ManageProductsAdminComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-manage-products-admin',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./manage-products-admin.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/socio/views/manage-products-admin/manage-products-admin.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./manage-products-admin.component.scss */ "./src/app/components/socio/views/manage-products-admin/manage-products-admin.component.scss")).default]
    })
], ManageProductsAdminComponent);



/***/ }),

/***/ "./src/app/components/socio/views/manage-tables-admin/manage-tables-admin.component.scss":
/*!***********************************************************************************************!*\
  !*** ./src/app/components/socio/views/manage-tables-admin/manage-tables-admin.component.scss ***!
  \***********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvc29jaW8vdmlld3MvbWFuYWdlLXRhYmxlcy1hZG1pbi9tYW5hZ2UtdGFibGVzLWFkbWluLmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/components/socio/views/manage-tables-admin/manage-tables-admin.component.ts":
/*!*********************************************************************************************!*\
  !*** ./src/app/components/socio/views/manage-tables-admin/manage-tables-admin.component.ts ***!
  \*********************************************************************************************/
/*! exports provided: ManageTablesAdminComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ManageTablesAdminComponent", function() { return ManageTablesAdminComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_services_firebase_table_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/firebase/table.service */ "./src/app/services/firebase/table.service.ts");



let ManageTablesAdminComponent = class ManageTablesAdminComponent {
    constructor(tableService) {
        this.tableService = tableService;
    }
    ngOnInit() {
        this.tables = this.tableService.GetAll().valueChanges();
    }
};
ManageTablesAdminComponent.ctorParameters = () => [
    { type: src_app_services_firebase_table_service__WEBPACK_IMPORTED_MODULE_2__["TableService"] }
];
ManageTablesAdminComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-manage-tables-admin',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./manage-tables-admin.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/socio/views/manage-tables-admin/manage-tables-admin.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./manage-tables-admin.component.scss */ "./src/app/components/socio/views/manage-tables-admin/manage-tables-admin.component.scss")).default]
    })
], ManageTablesAdminComponent);



/***/ }),

/***/ "./src/app/components/socio/views/manage-users/manage-users.component.scss":
/*!*********************************************************************************!*\
  !*** ./src/app/components/socio/views/manage-users/manage-users.component.scss ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("table {\n  background-color: rgba(255, 254, 254, 0.877);\n  border-radius: 20px;\n}\ntable th {\n  border: none;\n  text-align: center;\n}\ntable tr {\n  text-align: center;\n}\n.arial {\n  font-family: Arial, Helvetica, sans-serif;\n  font-size: 0.9em;\n  font-weight: bold;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9zb2Npby92aWV3cy9tYW5hZ2UtdXNlcnMvQzpcXFVzZXJzXFx0ZmVybmFuZGV6X21lY29uXFxEZXNrdG9wXFxHaXRIdWJcXGNvbWFuZGFMYWI0L3NyY1xcYXBwXFxjb21wb25lbnRzXFxzb2Npb1xcdmlld3NcXG1hbmFnZS11c2Vyc1xcbWFuYWdlLXVzZXJzLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9jb21wb25lbnRzL3NvY2lvL3ZpZXdzL21hbmFnZS11c2Vycy9tYW5hZ2UtdXNlcnMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBSUE7RUFDSSw0Q0FBQTtFQUNBLG1CQUFBO0FDSEo7QURLSTtFQUNJLFlBQUE7RUFDQSxrQkFBQTtBQ0hSO0FES0k7RUFDSSxrQkFBQTtBQ0hSO0FET0E7RUFDSSx5Q0FBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7QUNKSiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvc29jaW8vdmlld3MvbWFuYWdlLXVzZXJzL21hbmFnZS11c2Vycy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi51c2VyIHtcclxuICAgIC8vY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcblxyXG50YWJsZSB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMjU0LCAyNTQsIDAuODc3KTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XHJcblxyXG4gICAgdGgge1xyXG4gICAgICAgIGJvcmRlcjogbm9uZTtcclxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICB9XHJcbiAgICB0ciB7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgfVxyXG59XHJcblxyXG4uYXJpYWwge1xyXG4gICAgZm9udC1mYW1pbHk6IEFyaWFsLCBIZWx2ZXRpY2EsIHNhbnMtc2VyaWY7XHJcbiAgICBmb250LXNpemU6IC45ZW07XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxufSIsInRhYmxlIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDI1NCwgMjU0LCAwLjg3Nyk7XG4gIGJvcmRlci1yYWRpdXM6IDIwcHg7XG59XG50YWJsZSB0aCB7XG4gIGJvcmRlcjogbm9uZTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxudGFibGUgdHIge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5hcmlhbCB7XG4gIGZvbnQtZmFtaWx5OiBBcmlhbCwgSGVsdmV0aWNhLCBzYW5zLXNlcmlmO1xuICBmb250LXNpemU6IDAuOWVtO1xuICBmb250LXdlaWdodDogYm9sZDtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/components/socio/views/manage-users/manage-users.component.ts":
/*!*******************************************************************************!*\
  !*** ./src/app/components/socio/views/manage-users/manage-users.component.ts ***!
  \*******************************************************************************/
/*! exports provided: ManageUsersComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ManageUsersComponent", function() { return ManageUsersComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_models_user__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/models/user */ "./src/app/models/user.ts");
/* harmony import */ var src_app_services_firebase_user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/firebase/user.service */ "./src/app/services/firebase/user.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var src_app_services_firestorage_file_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/firestorage/file.service */ "./src/app/services/firestorage/file.service.ts");
/* harmony import */ var src_app_services_authentication_auth_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/services/authentication/auth.service */ "./src/app/services/authentication/auth.service.ts");
/* harmony import */ var src_app_services_firebase_log_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/services/firebase/log.service */ "./src/app/services/firebase/log.service.ts");
/* harmony import */ var src_app_models_log__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/models/log */ "./src/app/models/log.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm2015/ngx-toastr.js");












let ManageUsersComponent = class ManageUsersComponent {
    constructor(userService, fileService, authService, movimientoService, toastr) {
        this.userService = userService;
        this.fileService = fileService;
        this.authService = authService;
        this.movimientoService = movimientoService;
        this.toastr = toastr;
        //public users: Observable<any[]>;
        this.showingUsers = null;
        this.onReset = new rxjs__WEBPACK_IMPORTED_MODULE_5__["Subject"]();
        this.file = null;
    }
    ngOnInit() {
        this.userForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormGroup"]({
            userName: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]),
            userLastname: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]),
            userMail: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]),
            userRole: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](null),
            userImage: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required])
        });
        //this.users = new Array<User>();
        this.users = this.userService.GetAll2();
        console.log(this.userService.GetAll2());
        //this.users = this.userService.listado;
        //this.showingUsers = this.users;
        this.haySeleccionado = false;
        this.usuarioSeleccionado = null;
        this.ClearFilters();
    }
    addUser() {
        let user;
        this.userService.buscarEmail(this.userForm.value.userMail).then(resultado => {
            if (resultado) {
                this.toastr.error("Email duplicado");
                this.Cancel();
            }
            else if (!resultado) {
                user = src_app_models_user__WEBPACK_IMPORTED_MODULE_2__["User"].CreateUserFromAdmin(this.userForm.value.userName, this.userForm.value.userLastname, this.userForm.value.userMail, this.userForm.value.userRole);
                this.userService.persistirUsuario(user, this.file).then((value) => {
                    if (value) {
                        this.Cancel();
                    }
                    this.authService.GetCurrentUser().then(usr => {
                        let mensaje = `El usuario ${usr.email} dió de alta el usuario ${user.email}`;
                        this.movimientoService.persistirMovimiento(usr, src_app_models_log__WEBPACK_IMPORTED_MODULE_9__["TargetMovimiento"].usuario, src_app_models_log__WEBPACK_IMPORTED_MODULE_9__["TipoMovimiento"].alta, mensaje);
                    });
                });
            }
            ;
        });
    }
    onFileChanged(event) {
        this.file = event.target.files[0];
    }
    changeState(uid, state) {
        this.userService.GetUserByID(uid).then(usuarioMod => {
            if (state == "habilitado") {
                this.userService.updateState(uid, "deshabilitado");
                this.authService.GetCurrentUser().then(user => {
                    let mensaje = `El usuario ${user.email} cambio el estado a deshabilitado  del usuario ${usuarioMod.email}`;
                    this.movimientoService.persistirMovimiento(user, src_app_models_log__WEBPACK_IMPORTED_MODULE_9__["TargetMovimiento"].usuario, src_app_models_log__WEBPACK_IMPORTED_MODULE_9__["TipoMovimiento"].deshabilitacion, mensaje);
                });
            }
            if (state == "deshabilitado") {
                this.userService.updateState(uid, "habilitado");
                this.authService.GetCurrentUser().then(user => {
                    let mensaje = `El usuario ${user.email} cambio el estado a habilitado  del usuario ${usuarioMod.email}`;
                    this.movimientoService.persistirMovimiento(user, src_app_models_log__WEBPACK_IMPORTED_MODULE_9__["TargetMovimiento"].usuario, src_app_models_log__WEBPACK_IMPORTED_MODULE_9__["TipoMovimiento"].habilitacion, mensaje);
                });
            }
        });
    }
    deleteUser(uid) {
        this.userService.GetUserByID(uid).then(usuarioMod => {
            this.userService.delete(uid);
            this.authService.GetCurrentUser().then(user => {
                let mensaje = `El usuario ${user.email} dio de baja al usuario ${usuarioMod.email}`;
                this.movimientoService.persistirMovimiento(user, src_app_models_log__WEBPACK_IMPORTED_MODULE_9__["TargetMovimiento"].usuario, src_app_models_log__WEBPACK_IMPORTED_MODULE_9__["TipoMovimiento"].borrado, mensaje);
            });
        });
    }
    editarUsuario(usuario) {
        this.usuarioSeleccionado = usuario;
        this.haySeleccionado = true;
        this.userForm.controls['userName'].setValue(usuario.name);
        this.userForm.controls['userLastname'].setValue(usuario.lastname);
        this.userForm.controls['userMail'].setValue(usuario.email);
        this.userForm.controls['userRole'].setValue(usuario.role);
        console.log(this.usuarioSeleccionado);
    }
    updateUser() {
        let rol = this.usuarioSeleccionado.role;
        this.usuarioSeleccionado.name = this.userForm.value.userName;
        this.usuarioSeleccionado.lastname = this.userForm.value.userLastname;
        this.usuarioSeleccionado.email = this.userForm.value.userMail;
        this.usuarioSeleccionado.role = this.userForm.value.userRole;
        this.userService.updateUser(this.usuarioSeleccionado, this.file).then(() => {
            if (rol != this.usuarioSeleccionado.role) {
                this.userService.SetRole(this.usuarioSeleccionado.email, this.usuarioSeleccionado.role);
            }
            // console.log(value);
            // if (value) {
            //   this.Cancel();
            // }
            this.authService.GetCurrentUser().then(usr => {
                let mensaje = `El usuario ${usr.email} dió de modificó el usuario ${this.usuarioSeleccionado.email}`;
                this.movimientoService.persistirMovimiento(usr, src_app_models_log__WEBPACK_IMPORTED_MODULE_9__["TargetMovimiento"].usuario, src_app_models_log__WEBPACK_IMPORTED_MODULE_9__["TipoMovimiento"].alta, mensaje);
            }).then(() => {
                this.Cancel();
            });
        });
    }
    // ##### FILTER FUNCTIONS #####
    Filter(type) {
        this.showingUsers = this.users.valueChanges().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_10__["map"])(users => {
            return users.filter(element => {
                element = Object.assign(new src_app_models_user__WEBPACK_IMPORTED_MODULE_2__["User"](), element);
                if (type == 'habilitados' || type == 'suspendidos') {
                    console.log(type);
                    if (type == 'suspendidos' && element.state == 'deshabilitado') {
                        //if (element.state == 'deshabilitado')
                        return element;
                    }
                    else {
                        if (type == 'habilitados' && element.state == 'habilitado')
                            return element;
                    }
                }
                else {
                    if (element.role == type)
                        return element;
                }
            });
        }));
    }
    search() {
        this.showingUsers = this.users.valueChanges().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_10__["map"])(usuarios => {
            return usuarios.filter(res => {
                res = Object.assign(new src_app_models_user__WEBPACK_IMPORTED_MODULE_2__["User"](), res);
                console.log(res.state);
                if (res.name.includes(this.busqueda) || res.email.includes(this.busqueda) || this.busqueda == null)
                    if (!res.deleted)
                        return res;
            });
        }));
    }
    Cancel() {
        this.userForm.reset();
        this.onReset.next();
        this.haySeleccionado = false;
        this.usuarioSeleccionado = null;
    }
    ClearFilters() {
        this.search();
    }
};
ManageUsersComponent.ctorParameters = () => [
    { type: src_app_services_firebase_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"] },
    { type: src_app_services_firestorage_file_service__WEBPACK_IMPORTED_MODULE_6__["FileService"] },
    { type: src_app_services_authentication_auth_service__WEBPACK_IMPORTED_MODULE_7__["AuthService"] },
    { type: src_app_services_firebase_log_service__WEBPACK_IMPORTED_MODULE_8__["LogService"] },
    { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_11__["ToastrService"] }
];
ManageUsersComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-manage-users',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./manage-users.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/socio/views/manage-users/manage-users.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./manage-users.component.scss */ "./src/app/components/socio/views/manage-users/manage-users.component.scss")).default]
    })
], ManageUsersComponent);



/***/ }),

/***/ "./src/app/components/socio/views/survey-table/survey-table.component.scss":
/*!*********************************************************************************!*\
  !*** ./src/app/components/socio/views/survey-table/survey-table.component.scss ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("table {\n  background: silver;\n  border: 2px solid black;\n  border-radius: 10px;\n}\ntable th {\n  border: none;\n}\nlabel {\n  margin-top: 3rem;\n  background: white;\n  border-radius: 10px;\n  border: 2px solid black;\n}\n.red {\n  color: red;\n}\n.yellow {\n  color: #d8b800;\n}\n.green {\n  color: #01b301;\n}\n.survey {\n  cursor: pointer;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9zb2Npby92aWV3cy9zdXJ2ZXktdGFibGUvQzpcXFVzZXJzXFx0ZmVybmFuZGV6X21lY29uXFxEZXNrdG9wXFxHaXRIdWJcXGNvbWFuZGFMYWI0L3NyY1xcYXBwXFxjb21wb25lbnRzXFxzb2Npb1xcdmlld3NcXHN1cnZleS10YWJsZVxcc3VydmV5LXRhYmxlLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9jb21wb25lbnRzL3NvY2lvL3ZpZXdzL3N1cnZleS10YWJsZS9zdXJ2ZXktdGFibGUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxrQkFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7QUNDSjtBRENJO0VBQ0ksWUFBQTtBQ0NSO0FER0E7RUFDSSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtBQ0FKO0FER0E7RUFDSSxVQUFBO0FDQUo7QURHQTtFQUNJLGNBQUE7QUNBSjtBREdBO0VBQ0ksY0FBQTtBQ0FKO0FER0E7RUFDSSxlQUFBO0FDQUoiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL3NvY2lvL3ZpZXdzL3N1cnZleS10YWJsZS9zdXJ2ZXktdGFibGUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJ0YWJsZSB7XHJcbiAgICBiYWNrZ3JvdW5kOiBzaWx2ZXI7XHJcbiAgICBib3JkZXI6IDJweCBzb2xpZCBibGFjaztcclxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcblxyXG4gICAgdGgge1xyXG4gICAgICAgIGJvcmRlcjogbm9uZTtcclxuICAgIH1cclxufVxyXG5cclxubGFiZWx7XHJcbiAgICBtYXJnaW4tdG9wOiAzcmVtO1xyXG4gICAgYmFja2dyb3VuZDogd2hpdGU7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gICAgYm9yZGVyOiAycHggc29saWQgYmxhY2s7XHJcbn1cclxuXHJcbi5yZWQge1xyXG4gICAgY29sb3I6IHJlZDtcclxufVxyXG5cclxuLnllbGxvdyB7XHJcbiAgICBjb2xvcjogcmdiKDIxNiwgMTg0LCAwKTtcclxufVxyXG5cclxuLmdyZWVuIHtcclxuICAgIGNvbG9yOiByZ2IoMSwgMTc5LCAxKTtcclxufVxyXG5cclxuLnN1cnZleSB7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbn0iLCJ0YWJsZSB7XG4gIGJhY2tncm91bmQ6IHNpbHZlcjtcbiAgYm9yZGVyOiAycHggc29saWQgYmxhY2s7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG59XG50YWJsZSB0aCB7XG4gIGJvcmRlcjogbm9uZTtcbn1cblxubGFiZWwge1xuICBtYXJnaW4tdG9wOiAzcmVtO1xuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgYm9yZGVyOiAycHggc29saWQgYmxhY2s7XG59XG5cbi5yZWQge1xuICBjb2xvcjogcmVkO1xufVxuXG4ueWVsbG93IHtcbiAgY29sb3I6ICNkOGI4MDA7XG59XG5cbi5ncmVlbiB7XG4gIGNvbG9yOiAjMDFiMzAxO1xufVxuXG4uc3VydmV5IHtcbiAgY3Vyc29yOiBwb2ludGVyO1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/components/socio/views/survey-table/survey-table.component.ts":
/*!*******************************************************************************!*\
  !*** ./src/app/components/socio/views/survey-table/survey-table.component.ts ***!
  \*******************************************************************************/
/*! exports provided: SurveyTableComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SurveyTableComponent", function() { return SurveyTableComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_services_firebase_survey_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/firebase/survey.service */ "./src/app/services/firebase/survey.service.ts");



let SurveyTableComponent = class SurveyTableComponent {
    constructor(surveyService) {
        this.surveyService = surveyService;
    }
    ngOnInit() {
        this.surveys = this.surveyService.GetAll().valueChanges();
    }
    SelectSurvey(surv) {
        this.survey = surv;
    }
};
SurveyTableComponent.ctorParameters = () => [
    { type: src_app_services_firebase_survey_service__WEBPACK_IMPORTED_MODULE_2__["SurveyService"] }
];
SurveyTableComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-survey-table',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./survey-table.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/socio/views/survey-table/survey-table.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./survey-table.component.scss */ "./src/app/components/socio/views/survey-table/survey-table.component.scss")).default]
    })
], SurveyTableComponent);



/***/ }),

/***/ "./src/app/components/socio/views/view-logs/view-logs.component.scss":
/*!***************************************************************************!*\
  !*** ./src/app/components/socio/views/view-logs/view-logs.component.scss ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("table {\n  background-color: rgba(255, 254, 254, 0.877);\n  border-radius: 20px;\n}\ntable th {\n  border: none;\n  text-align: center;\n}\ntable tr {\n  text-align: center;\n}\nh4 {\n  color: darkgrey;\n}\n.arial {\n  font-family: Arial, Helvetica, sans-serif;\n  font-size: 0.9em;\n  font-weight: bold;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9zb2Npby92aWV3cy92aWV3LWxvZ3MvQzpcXFVzZXJzXFx0ZmVybmFuZGV6X21lY29uXFxEZXNrdG9wXFxHaXRIdWJcXGNvbWFuZGFMYWI0L3NyY1xcYXBwXFxjb21wb25lbnRzXFxzb2Npb1xcdmlld3NcXHZpZXctbG9nc1xcdmlldy1sb2dzLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9jb21wb25lbnRzL3NvY2lvL3ZpZXdzL3ZpZXctbG9ncy92aWV3LWxvZ3MuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBSUE7RUFDSSw0Q0FBQTtFQUNBLG1CQUFBO0FDSEo7QURLSTtFQUNJLFlBQUE7RUFDQSxrQkFBQTtBQ0hSO0FES0k7RUFDSSxrQkFBQTtBQ0hSO0FET0E7RUFDSSxlQUFBO0FDSko7QURPQTtFQUNJLHlDQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtBQ0pKIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9zb2Npby92aWV3cy92aWV3LWxvZ3Mvdmlldy1sb2dzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnVzZXIge1xyXG4gICAgLy9jdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuXHJcbnRhYmxlIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAyNTQsIDI1NCwgMC44NzcpO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMjBweDtcclxuXHJcbiAgICB0aCB7XHJcbiAgICAgICAgYm9yZGVyOiBub25lO1xyXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIH1cclxuICAgIHRyIHtcclxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICB9XHJcbn1cclxuXHJcbmg0e1xyXG4gICAgY29sb3I6IGRhcmtncmV5O1xyXG59XHJcblxyXG4uYXJpYWwge1xyXG4gICAgZm9udC1mYW1pbHk6IEFyaWFsLCBIZWx2ZXRpY2EsIHNhbnMtc2VyaWY7XHJcbiAgICBmb250LXNpemU6IC45ZW07XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxufSIsInRhYmxlIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDI1NCwgMjU0LCAwLjg3Nyk7XG4gIGJvcmRlci1yYWRpdXM6IDIwcHg7XG59XG50YWJsZSB0aCB7XG4gIGJvcmRlcjogbm9uZTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxudGFibGUgdHIge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbmg0IHtcbiAgY29sb3I6IGRhcmtncmV5O1xufVxuXG4uYXJpYWwge1xuICBmb250LWZhbWlseTogQXJpYWwsIEhlbHZldGljYSwgc2Fucy1zZXJpZjtcbiAgZm9udC1zaXplOiAwLjllbTtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59Il19 */");

/***/ }),

/***/ "./src/app/components/socio/views/view-logs/view-logs.component.ts":
/*!*************************************************************************!*\
  !*** ./src/app/components/socio/views/view-logs/view-logs.component.ts ***!
  \*************************************************************************/
/*! exports provided: ViewLogsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViewLogsComponent", function() { return ViewLogsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_models_log__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/models/log */ "./src/app/models/log.ts");
/* harmony import */ var src_app_services_firebase_log_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/firebase/log.service */ "./src/app/services/firebase/log.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm2015/ngx-toastr.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");









let ViewLogsComponent = class ViewLogsComponent {
    constructor(logService, toastr) {
        this.logService = logService;
        this.toastr = toastr;
        this.esVisible = false;
        //public showingLogs: Observable<any[]>;
        this.showingLogs = null;
        this.todos = true;
        this.onReset = new rxjs__WEBPACK_IMPORTED_MODULE_5__["Subject"]();
    }
    ngOnInit() {
        this.logForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormGroup"]({
            typeSocio: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](null),
            typeCervecero: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](null),
            typeBartender: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](null),
            typeCliente: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](null),
            typeDelivery: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](null),
            typeCocinero: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](null),
            typeTodos: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](true),
            typeMozo: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](null),
            fechaInicio: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](null),
            fechaFin: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](null),
        });
        //this.hola();
        this.arrayCB = new Array();
        this.enableDisable();
        this.cargarArrayCB();
        //this.logs = new Array<Log>();
        //this.logs = this.logService.listado;
        this.logs = this.logService.GetAll2();
        this.ClearFilters();
    }
    search() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            this.setFechas();
            this.data = new Array();
            //this.showingLogs = this.logService.GetAll2().valueChanges().pipe(
            this.showingLogs = this.logs.valueChanges().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["map"])(logs => {
                return logs.filter(res => {
                    //this.showingLogs = this.logs.filter(res => {
                    res = Object.assign(new src_app_models_log__WEBPACK_IMPORTED_MODULE_2__["Log"](), res);
                    // this.showingLogs = this.logs.filter(res => {
                    if (res['fecha'] > this.fechaInicio && res['fecha'] < this.fechaFin) {
                        if (res['usuario'].includes(this.busqueda) || this.busqueda == null) {
                            if (this.logForm.value.typeMozo && res['role'] == src_app_models_log__WEBPACK_IMPORTED_MODULE_2__["Role"].mozo) {
                                this.coincidencias++;
                                this.data.push(res);
                                return res;
                            }
                            if (this.logForm.value.typeBartender && res['role'] == src_app_models_log__WEBPACK_IMPORTED_MODULE_2__["Role"].bartender) {
                                this.coincidencias++;
                                this.data.push(res);
                                return res;
                            }
                            if (this.logForm.value.typeCervecero && res['role'] == src_app_models_log__WEBPACK_IMPORTED_MODULE_2__["Role"].cervecero) {
                                this.coincidencias++;
                                this.data.push(res);
                                return res;
                            }
                            if (this.logForm.value.typeCliente && res['role'] == src_app_models_log__WEBPACK_IMPORTED_MODULE_2__["Role"].cliente) {
                                this.coincidencias++;
                                this.data.push(res);
                                return res;
                            }
                            if (this.logForm.value.typeCocinero && res['role'] == src_app_models_log__WEBPACK_IMPORTED_MODULE_2__["Role"].cocinero) {
                                this.coincidencias++;
                                this.data.push(res);
                                return res;
                            }
                            if (this.logForm.value.typeDelivery && res['role'] == src_app_models_log__WEBPACK_IMPORTED_MODULE_2__["Role"].delivery) {
                                this.coincidencias++;
                                this.data.push(res);
                                return res;
                            }
                            if (this.logForm.value.typeSocio && res['role'] == src_app_models_log__WEBPACK_IMPORTED_MODULE_2__["Role"].socio) {
                                this.coincidencias++;
                                this.data.push(res);
                                return res;
                            }
                            if (this.logForm.value.typeTodos) {
                                this.coincidencias++;
                                this.data.push(res);
                                return res;
                            }
                            ;
                        }
                        ;
                    }
                });
            }));
            console.log("4" + this.esVisible);
        });
    }
    setFechas() {
        this.coincidencias = 0;
        if (this.logForm.value.fechaInicio == null) {
            this.fechaInicio = 0;
        }
        else {
            this.fechaInicio = Date.parse(this.logForm.value.fechaInicio.toString());
        }
        if (this.logForm.value.fechaFin == null) {
            this.fechaFin = Date.now();
        }
        else {
            this.fechaFin = Date.parse(this.logForm.value.fechaFin.toString());
        }
    }
    Cancel() {
        this.logForm.reset();
        this.onReset.next();
        this.logForm.controls['typeTodos'].setValue(true);
        this.enableDisable();
        this.logForm.controls['fechaInicio'].setValue(null);
        this.logForm.controls['fechaFin'].setValue(null);
        this.ClearFilters();
    }
    enableDisable() {
        if (this.todos) {
            this.logForm.controls['typeMozo'].disable();
            this.logForm.controls['typeCliente'].disable();
            this.logForm.controls['typeCocinero'].disable();
            this.logForm.controls['typeBartender'].disable();
            this.logForm.controls['typeCervecero'].disable();
            this.logForm.controls['typeDelivery'].disable();
            this.logForm.controls['typeSocio'].disable();
            this.logForm.controls['typeMozo'].setValue(false);
            this.logForm.controls['typeCliente'].setValue(false);
            this.logForm.controls['typeCocinero'].setValue(false);
            this.logForm.controls['typeBartender'].setValue(false);
            this.logForm.controls['typeCervecero'].setValue(false);
            this.logForm.controls['typeSocio'].setValue(false);
        }
        else {
            this.logForm.controls['typeMozo'].enable();
            this.logForm.controls['typeCliente'].enable();
            this.logForm.controls['typeCocinero'].enable();
            this.logForm.controls['typeBartender'].enable();
            this.logForm.controls['typeCervecero'].enable();
            this.logForm.controls['typeDelivery'].enable();
            this.logForm.controls['typeSocio'].enable();
        }
    }
    cargarArrayCB() {
        let typeMozo = this.logForm.value.typeMozo;
        let typeCliente = this.logForm.value.typeCliente;
        let typeCocinero = this.logForm.value.typeCocinero;
        let typeBartender = this.logForm.value.typeBartender;
        let typeCervecero = this.logForm.value.typeCervecero;
        let typeDelivery = this.logForm.value.typeDelivery;
        let typeSocio = this.logForm.value.typeSocio;
        let typeTodos = this.logForm.value.typeTodos;
        this.arrayCB.push(typeBartender, typeCervecero, typeCliente, typeCocinero, typeDelivery, typeMozo, typeSocio, typeTodos);
    }
    sendSettings() {
        // this.showingLogs = this.logs.filter(res => {
        this.showingLogs = this.logs.valueChanges().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["map"])(logs => {
            logs.filter(res => {
                if (this.logForm.value.typeMozo && res.role == src_app_models_log__WEBPACK_IMPORTED_MODULE_2__["Role"].mozo) {
                    return res;
                }
                if (this.logForm.value.typeBartender && res.role == src_app_models_log__WEBPACK_IMPORTED_MODULE_2__["Role"].bartender) {
                    return res;
                }
                if (this.logForm.value.typeCervecero && res.role == src_app_models_log__WEBPACK_IMPORTED_MODULE_2__["Role"].cervecero) {
                    return res;
                }
                if (this.logForm.value.typeCliente && res.role == src_app_models_log__WEBPACK_IMPORTED_MODULE_2__["Role"].cliente) {
                    return res;
                }
                if (this.logForm.value.typeCocinero && res.role == src_app_models_log__WEBPACK_IMPORTED_MODULE_2__["Role"].cocinero) {
                    return res;
                }
                if (this.logForm.value.typeDelivery && res.role == src_app_models_log__WEBPACK_IMPORTED_MODULE_2__["Role"].delivery) {
                    return res;
                }
                if (this.logForm.value.typeSocio && res.role == src_app_models_log__WEBPACK_IMPORTED_MODULE_2__["Role"].socio) {
                    return res;
                }
                if (this.logForm.value.typeTodos) {
                    return res;
                }
                ;
            });
        }));
    }
    ClearFilters() {
        if (this.logForm.value.fechaInicio == null || this.logForm.value.fechaInicio == NaN) {
            this.fechaInicio = 0;
        }
        else {
            this.fechaInicio = Date.parse(this.logForm.value.fechaInicio.toString());
        }
        if (this.logForm.value.fechaFin == null || this.logForm.value.fechaFin == NaN) {
            this.fechaFin = Date.now();
        }
        else {
            this.fechaFin = Date.parse(this.logForm.value.fechaFin.toString());
        }
        console.log("1" + this.esVisible);
        this.search().then(() => {
            this.esVisible = true;
            console.log("2" + this.esVisible);
        });
        console.log("3" + this.esVisible);
    }
    exportCSV() {
        this.toastr.info('Exportando logs...');
        let csvData;
        let data = this.getData();
        setTimeout(function () {
            data.map(row => {
                csvData += row;
            });
            console.log(csvData);
            let file = new Blob([csvData], { type: 'text/csv' });
            let fileUrl = URL.createObjectURL(file);
            let hiddenEl = document.createElement('a');
            hiddenEl.href = fileUrl;
            hiddenEl.target = '_blank';
            hiddenEl.download = 'EstadisticasPedidos.csv';
            hiddenEl.click();
        }, 4000);
    }
    getData() {
        let data = [];
        data.push(['categoria,nombre,cantidad,tipo\n']);
        this.data.forEach(log => {
            const datePipe = new _angular_common__WEBPACK_IMPORTED_MODULE_8__["DatePipe"]('en-US');
            const myFormattedDate = datePipe.transform(log.fecha, 'hh:mm dd/MM/yyyy');
            data.push([log.usuario + ',' + myFormattedDate + ',' + log.observacion + '\n']);
        });
        return data;
    }
};
ViewLogsComponent.ctorParameters = () => [
    { type: src_app_services_firebase_log_service__WEBPACK_IMPORTED_MODULE_3__["LogService"] },
    { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_7__["ToastrService"] }
];
ViewLogsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-view-logs',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./view-logs.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/socio/views/view-logs/view-logs.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./view-logs.component.scss */ "./src/app/components/socio/views/view-logs/view-logs.component.scss")).default]
    })
], ViewLogsComponent);



/***/ }),

/***/ "./src/app/components/socio/views/view-orders-stats/view-orders-stats.component.scss":
/*!*******************************************************************************************!*\
  !*** ./src/app/components/socio/views/view-orders-stats/view-orders-stats.component.scss ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("h3, h2, h1 {\n  color: lightgrey;\n}\n\nimg {\n  height: 240px;\n  width: 240px;\n}\n\n.card-title {\n  font-weight: bold;\n}\n\n.card {\n  margin: 2rem;\n  align-items: center;\n}\n\ntable {\n  background-color: rgba(255, 254, 254, 0.877);\n  border-radius: 20px;\n}\n\ntable th {\n  border: none;\n  text-align: center;\n}\n\ntable tr {\n  text-align: center;\n}\n\n.arial {\n  font-family: Arial, Helvetica, sans-serif;\n  font-size: 0.9em;\n  font-weight: bold;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9zb2Npby92aWV3cy92aWV3LW9yZGVycy1zdGF0cy9DOlxcVXNlcnNcXHRmZXJuYW5kZXpfbWVjb25cXERlc2t0b3BcXEdpdEh1YlxcY29tYW5kYUxhYjQvc3JjXFxhcHBcXGNvbXBvbmVudHNcXHNvY2lvXFx2aWV3c1xcdmlldy1vcmRlcnMtc3RhdHNcXHZpZXctb3JkZXJzLXN0YXRzLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9jb21wb25lbnRzL3NvY2lvL3ZpZXdzL3ZpZXctb3JkZXJzLXN0YXRzL3ZpZXctb3JkZXJzLXN0YXRzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksZ0JBQUE7QUNDSjs7QURFQTtFQUNJLGFBQUE7RUFDQSxZQUFBO0FDQ0o7O0FES0E7RUFDRyxpQkFBQTtBQ0ZIOztBRElBO0VBQ0ksWUFBQTtFQUNBLG1CQUFBO0FDREo7O0FES0E7RUFDSSw0Q0FBQTtFQUNBLG1CQUFBO0FDRko7O0FESUk7RUFDSSxZQUFBO0VBQ0Esa0JBQUE7QUNGUjs7QURJSTtFQUNJLGtCQUFBO0FDRlI7O0FETUE7RUFDSSx5Q0FBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7QUNISiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvc29jaW8vdmlld3Mvdmlldy1vcmRlcnMtc3RhdHMvdmlldy1vcmRlcnMtc3RhdHMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJoMywgaDIsIGgxe1xyXG4gICAgY29sb3I6IGxpZ2h0Z3JleTtcclxufVxyXG5cclxuaW1nIHtcclxuICAgIGhlaWdodDogMjQwcHg7XHJcbiAgICB3aWR0aDogMjQwcHg7XHJcbiAgIC8vIGJvcmRlci1yYWRpdXM6IDEwMCU7XHJcbiAgIC8vIGJvcmRlcjogc29saWQgMXB4ICMzMzM7XHJcbiAgIC8vY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcblxyXG4uY2FyZC10aXRsZSB7XHJcbiAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG59XHJcbi5jYXJke1xyXG4gICAgbWFyZ2luOiAycmVtOyAgICBcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7ICBcclxufVxyXG5cclxuXHJcbnRhYmxlIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAyNTQsIDI1NCwgMC44NzcpO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMjBweDtcclxuXHJcbiAgICB0aCB7XHJcbiAgICAgICAgYm9yZGVyOiBub25lO1xyXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIH1cclxuICAgIHRyIHtcclxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICB9XHJcbn1cclxuXHJcbi5hcmlhbCB7XHJcbiAgICBmb250LWZhbWlseTogQXJpYWwsIEhlbHZldGljYSwgc2Fucy1zZXJpZjtcclxuICAgIGZvbnQtc2l6ZTogLjllbTtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG59IiwiaDMsIGgyLCBoMSB7XG4gIGNvbG9yOiBsaWdodGdyZXk7XG59XG5cbmltZyB7XG4gIGhlaWdodDogMjQwcHg7XG4gIHdpZHRoOiAyNDBweDtcbn1cblxuLmNhcmQtdGl0bGUge1xuICBmb250LXdlaWdodDogYm9sZDtcbn1cblxuLmNhcmQge1xuICBtYXJnaW46IDJyZW07XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbnRhYmxlIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDI1NCwgMjU0LCAwLjg3Nyk7XG4gIGJvcmRlci1yYWRpdXM6IDIwcHg7XG59XG50YWJsZSB0aCB7XG4gIGJvcmRlcjogbm9uZTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxudGFibGUgdHIge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5hcmlhbCB7XG4gIGZvbnQtZmFtaWx5OiBBcmlhbCwgSGVsdmV0aWNhLCBzYW5zLXNlcmlmO1xuICBmb250LXNpemU6IDAuOWVtO1xuICBmb250LXdlaWdodDogYm9sZDtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/components/socio/views/view-orders-stats/view-orders-stats.component.ts":
/*!*****************************************************************************************!*\
  !*** ./src/app/components/socio/views/view-orders-stats/view-orders-stats.component.ts ***!
  \*****************************************************************************************/
/*! exports provided: ViewOrdersStatsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViewOrdersStatsComponent", function() { return ViewOrdersStatsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_services_firebase_order_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/firebase/order.service */ "./src/app/services/firebase/order.service.ts");
/* harmony import */ var src_app_models_order__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/models/order */ "./src/app/models/order.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm2015/ngx-toastr.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");









let ViewOrdersStatsComponent = class ViewOrdersStatsComponent {
    constructor(orderService, toastr) {
        this.orderService = orderService;
        this.toastr = toastr;
        this.cancelledOrders = null;
        this.delayedOrders = null;
        this.topBest = null;
        this.topWorst = null;
        this.mostrar = false;
        this.onReset = new rxjs__WEBPACK_IMPORTED_MODULE_6__["Subject"]();
    }
    ngOnInit() {
        this.settingsForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormGroup"]({
            fechaInicio: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"](null),
            fechaFin: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"](null),
        });
        this.orders = this.orderService.GetAll();
        this.ClearFilters();
    }
    ClearFilters() {
        this.search();
    }
    Cancel() {
        this.settingsForm.reset();
        this.onReset.next();
        this.settingsForm.controls['fechaInicio'].setValue(null);
        this.settingsForm.controls['fechaFin'].setValue(null);
        this.search();
    }
    search() {
        if (this.settingsForm.value.fechaInicio == null || this.settingsForm.value.fechaInicio == NaN) {
            this.fechaInicio = 0;
        }
        else {
            this.fechaInicio = Date.parse(this.settingsForm.value.fechaInicio.toString());
        }
        if (this.settingsForm.value.fechaFin == null || this.settingsForm.value.fechaFin == NaN) {
            this.fechaFin = Date.now();
        }
        else {
            this.fechaFin = Date.parse(this.settingsForm.value.fechaFin.toString());
        }
        this.showingOrders = this.orderService.GetAll().valueChanges().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(orders => {
            return orders.filter(order => {
                order = Object.assign(new src_app_models_order__WEBPACK_IMPORTED_MODULE_3__["Order"](), order);
                if (order['timestamp'] > this.fechaInicio && order['timestamp'] < this.fechaFin) {
                    return order;
                }
            });
        }));
        this.getDelayed();
        this.getCancelled();
        this.getTop();
    }
    getCancelled() {
        this.cancelledOrders = this.showingOrders.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(orders => {
            return orders.filter(order => {
                order = Object.assign(new src_app_models_order__WEBPACK_IMPORTED_MODULE_3__["Order"](), order);
                if (order['state'] == "Cancelado") {
                    return order;
                }
            });
        }));
    }
    getDelayed() {
        this.delayedOrders = this.showingOrders.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(orders => {
            return orders.filter(order => {
                order = Object.assign(new src_app_models_order__WEBPACK_IMPORTED_MODULE_3__["Order"](), order);
                if (order['delayed'] < 0) {
                    console.log(order['delayed']);
                    return order;
                }
            });
        }));
    }
    setDate() {
        console.log(Date.parse(this.settingsForm.value.fechaInicio.toString()));
        if (this.settingsForm.value.fechaInicio != null) {
            this.fechaInicio = Date.parse(this.settingsForm.value.fechaInicio.toString());
        }
        else {
            this.fechaFin = Date.parse(this.settingsForm.value.fechaFin.toString());
        }
    }
    getTop() {
        this.lista = new Array();
        let cantidadNombres = new Array();
        let cantidad;
        let copia = this.showingOrders;
        copia.subscribe(orders => {
            orders.map(order => {
                order.items.map(uno => {
                    this.lista.push(uno['name']);
                }).map(() => {
                    cantidadNombres = this.lista.reduce((contadorNombre, nombre) => {
                        contadorNombre[nombre] = (contadorNombre[nombre] || 0) + 1;
                        return contadorNombre;
                    }, {});
                });
            });
            var result = Object.keys(cantidadNombres).map(function (key) {
                return [String(key), cantidadNombres[key]];
            });
            //console.log(result);
            console.table(result);
            const mejores = Object.assign([], result);
            const peores = Object.assign([], result);
            mejores.sort((a, b) => (a[1] > b[1]) ? -1 : ((b[1] > a[1]) ? 1 : 0));
            peores.sort((a, b) => (a[1] > b[1]) ? 1 : ((b[1] > a[1]) ? -1 : 0));
            console.table(mejores);
            console.table(peores);
            this.topBest = new Array();
            this.topWorst = new Array();
            this.topBest.push(mejores[0], mejores[1], mejores[2]);
            this.topWorst.push(peores[0], peores[1], peores[2]);
        });
    }
    exportCSV() {
        this.toastr.info('Exportando estadística...');
        let csvData;
        let data = this.getData();
        setTimeout(function () {
            data.map(row => {
                csvData += row;
            });
            console.log(csvData);
            let file = new Blob([csvData], { type: 'text/csv' });
            let fileUrl = URL.createObjectURL(file);
            let hiddenEl = document.createElement('a');
            hiddenEl.href = fileUrl;
            hiddenEl.target = '_blank';
            hiddenEl.download = 'EstadisticasPedidos.csv';
            hiddenEl.click();
        }, 4000);
    }
    getData() {
        let data = [];
        data.push(['categoria,nombre,cantidad,tipo\n']);
        data.push(['puesto1MasVendido' + ',' + this.topBest[0][0] + ',' + this.topBest[0][1] + ',unidades\n']);
        data.push(['puesto2MasVendido' + ',' + this.topBest[1][0] + ',' + this.topBest[1][1] + ',unidades\n']);
        data.push(['puesto3MasVendido' + ',' + this.topBest[2][0] + ',' + this.topBest[2][1] + ',unidades\n']);
        data.push(['puesto1MenosVendido' + ',' + this.topWorst[2][0] + ',' + this.topWorst[2][1] + ',unidades\n']);
        data.push(['puesto2MenosVendido' + ',' + this.topWorst[1][0] + ',' + this.topWorst[1][1] + ',unidades\n']);
        data.push(['puesto3MenosVendido' + ',' + this.topWorst[0][0] + ',' + this.topWorst[0][1] + ',unidades\n']);
        this.orderService.GetAllDelayedOrders_InArray().then(orders => {
            data.push(['pedidosNoEntregadosEnTiempoEstipulado\n' + 'codigo,fecha,demora\n']);
            orders.filter(order => {
                if (order.timestamp > this.fechaInicio && order.timestamp < this.fechaFin) {
                    const datePipe = new _angular_common__WEBPACK_IMPORTED_MODULE_8__["DatePipe"]('en-US');
                    const myFormattedDate = datePipe.transform(order.timestamp, 'hh:mm dd/MM/yyyy');
                    let diff = Math.floor(order.delayed / (1000 * 60));
                    let res;
                    if (diff < 0)
                        res = 'Pasado por ' + (diff * -1) + ' minutos.';
                    else
                        res = diff + ' minutos.';
                    data.push([order.codeID + ',' + myFormattedDate + ',' + res + '\n']);
                }
            });
        }).then(() => {
            this.orderService.GetAllCancelledOrders_InArray().then(orders => {
                data.push(['pedidosCancelados\n' + 'codigo,fecha,estado\n']);
                orders.filter(order => {
                    if (order.timestamp > this.fechaInicio && order.timestamp < this.fechaFin) {
                        const datePipe = new _angular_common__WEBPACK_IMPORTED_MODULE_8__["DatePipe"]('en-US');
                        const myFormattedDate = datePipe.transform(order.timestamp, 'hh:mm dd/MM/yyyy');
                        data.push([order.codeID + ',' + myFormattedDate + ',' + order.state + '\n']);
                    }
                });
            });
        });
        return data;
    }
};
ViewOrdersStatsComponent.ctorParameters = () => [
    { type: src_app_services_firebase_order_service__WEBPACK_IMPORTED_MODULE_2__["OrderService"] },
    { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_7__["ToastrService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], ViewOrdersStatsComponent.prototype, "fechaInicio", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], ViewOrdersStatsComponent.prototype, "fechaFin", void 0);
ViewOrdersStatsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-view-orders-stats',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./view-orders-stats.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/socio/views/view-orders-stats/view-orders-stats.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./view-orders-stats.component.scss */ "./src/app/components/socio/views/view-orders-stats/view-orders-stats.component.scss")).default]
    })
], ViewOrdersStatsComponent);



/***/ }),

/***/ "./src/app/components/socio/views/view-tables-stats/view-tables-stats.component.scss":
/*!*******************************************************************************************!*\
  !*** ./src/app/components/socio/views/view-tables-stats/view-tables-stats.component.scss ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("h3, h2, h1 {\n  color: lightgrey;\n  margin: 2rem;\n}\n\nimg {\n  height: 240px;\n  width: 240px;\n}\n\n.card-title {\n  font-weight: bold;\n}\n\n.card {\n  margin: 2rem;\n  align-items: center;\n}\n\ntable {\n  background-color: rgba(255, 254, 254, 0.877);\n  border-radius: 20px;\n}\n\ntable th {\n  border: none;\n  text-align: center;\n}\n\ntable tr {\n  text-align: center;\n}\n\n.arial {\n  font-family: Arial, Helvetica, sans-serif;\n  font-size: 0.9em;\n  font-weight: bold;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9zb2Npby92aWV3cy92aWV3LXRhYmxlcy1zdGF0cy9DOlxcVXNlcnNcXHRmZXJuYW5kZXpfbWVjb25cXERlc2t0b3BcXEdpdEh1YlxcY29tYW5kYUxhYjQvc3JjXFxhcHBcXGNvbXBvbmVudHNcXHNvY2lvXFx2aWV3c1xcdmlldy10YWJsZXMtc3RhdHNcXHZpZXctdGFibGVzLXN0YXRzLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9jb21wb25lbnRzL3NvY2lvL3ZpZXdzL3ZpZXctdGFibGVzLXN0YXRzL3ZpZXctdGFibGVzLXN0YXRzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksZ0JBQUE7RUFDQSxZQUFBO0FDQ0o7O0FERUE7RUFDSSxhQUFBO0VBQ0EsWUFBQTtBQ0NKOztBREtBO0VBQ0csaUJBQUE7QUNGSDs7QURJQTtFQUNJLFlBQUE7RUFDQSxtQkFBQTtBQ0RKOztBREtBO0VBQ0ksNENBQUE7RUFDQSxtQkFBQTtBQ0ZKOztBRElJO0VBQ0ksWUFBQTtFQUNBLGtCQUFBO0FDRlI7O0FESUk7RUFDSSxrQkFBQTtBQ0ZSOztBRE1BO0VBQ0kseUNBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0FDSEoiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL3NvY2lvL3ZpZXdzL3ZpZXctdGFibGVzLXN0YXRzL3ZpZXctdGFibGVzLXN0YXRzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaDMsIGgyLCBoMXtcclxuICAgIGNvbG9yOiBsaWdodGdyZXk7XHJcbiAgICBtYXJnaW46IDJyZW07XHJcbn1cclxuXHJcbmltZyB7XHJcbiAgICBoZWlnaHQ6IDI0MHB4O1xyXG4gICAgd2lkdGg6IDI0MHB4O1xyXG4gICAvLyBib3JkZXItcmFkaXVzOiAxMDAlO1xyXG4gICAvLyBib3JkZXI6IHNvbGlkIDFweCAjMzMzO1xyXG4gICAvL2N1cnNvcjogcG9pbnRlcjtcclxufVxyXG5cclxuLmNhcmQtdGl0bGUge1xyXG4gICBmb250LXdlaWdodDogYm9sZDtcclxufVxyXG4uY2FyZHtcclxuICAgIG1hcmdpbjogMnJlbTsgICAgXHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyOyAgXHJcbn1cclxuXHJcblxyXG50YWJsZSB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMjU0LCAyNTQsIDAuODc3KTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XHJcblxyXG4gICAgdGgge1xyXG4gICAgICAgIGJvcmRlcjogbm9uZTtcclxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICB9XHJcbiAgICB0ciB7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgfVxyXG59XHJcblxyXG4uYXJpYWwge1xyXG4gICAgZm9udC1mYW1pbHk6IEFyaWFsLCBIZWx2ZXRpY2EsIHNhbnMtc2VyaWY7XHJcbiAgICBmb250LXNpemU6IC45ZW07XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxufSIsImgzLCBoMiwgaDEge1xuICBjb2xvcjogbGlnaHRncmV5O1xuICBtYXJnaW46IDJyZW07XG59XG5cbmltZyB7XG4gIGhlaWdodDogMjQwcHg7XG4gIHdpZHRoOiAyNDBweDtcbn1cblxuLmNhcmQtdGl0bGUge1xuICBmb250LXdlaWdodDogYm9sZDtcbn1cblxuLmNhcmQge1xuICBtYXJnaW46IDJyZW07XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbnRhYmxlIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDI1NCwgMjU0LCAwLjg3Nyk7XG4gIGJvcmRlci1yYWRpdXM6IDIwcHg7XG59XG50YWJsZSB0aCB7XG4gIGJvcmRlcjogbm9uZTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxudGFibGUgdHIge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5hcmlhbCB7XG4gIGZvbnQtZmFtaWx5OiBBcmlhbCwgSGVsdmV0aWNhLCBzYW5zLXNlcmlmO1xuICBmb250LXNpemU6IDAuOWVtO1xuICBmb250LXdlaWdodDogYm9sZDtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/components/socio/views/view-tables-stats/view-tables-stats.component.ts":
/*!*****************************************************************************************!*\
  !*** ./src/app/components/socio/views/view-tables-stats/view-tables-stats.component.ts ***!
  \*****************************************************************************************/
/*! exports provided: ViewTablesStatsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViewTablesStatsComponent", function() { return ViewTablesStatsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var src_app_services_firebase_order_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/firebase/order.service */ "./src/app/services/firebase/order.service.ts");
/* harmony import */ var src_app_models_order__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/models/order */ "./src/app/models/order.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var src_app_models_survey__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/models/survey */ "./src/app/models/survey.ts");
/* harmony import */ var src_app_services_firebase_survey_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/services/firebase/survey.service */ "./src/app/services/firebase/survey.service.ts");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm2015/ngx-toastr.js");










let ViewTablesStatsComponent = class ViewTablesStatsComponent {
    constructor(orderService, surveyService, toastr) {
        this.orderService = orderService;
        this.surveyService = surveyService;
        this.toastr = toastr;
        this.mesaMasUsada = null;
        this.mesaMenosUsada = null;
        this.mesaMayorFacturacion = null;
        this.mesaMenorFacturacion = null;
        this.facturaMayorImporte = null;
        this.facturaMenorImporte = null;
        this.onReset = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
    }
    ngOnInit() {
        this.surveys = this.surveyService.GetAll().valueChanges();
        this.settingsForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            fechaInicio: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null),
            fechaFin: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null),
        });
        this.orders = this.orderService.GetAll();
        this.ClearFilters();
    }
    SelectSurvey(surv) {
        this.survey = surv;
    }
    ClearFilters() {
        this.search();
    }
    Cancel() {
        this.settingsForm.reset();
        this.onReset.next();
        this.settingsForm.controls['fechaInicio'].setValue(null);
        this.settingsForm.controls['fechaFin'].setValue(null);
        this.search();
    }
    search() {
        this.setNulls();
        if (this.settingsForm.value.fechaInicio == null || this.settingsForm.value.fechaInicio == NaN) {
            this.fechaInicio = 0;
        }
        else {
            this.fechaInicio = Date.parse(this.settingsForm.value.fechaInicio.toString());
        }
        if (this.settingsForm.value.fechaFin == null || this.settingsForm.value.fechaFin == NaN) {
            this.fechaFin = Date.now();
        }
        else {
            this.fechaFin = Date.parse(this.settingsForm.value.fechaFin.toString());
        }
        this.showingOrders = this.orderService.GetAll().valueChanges().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["map"])(orders => {
            return orders.filter(order => {
                order = Object.assign(new src_app_models_order__WEBPACK_IMPORTED_MODULE_5__["Order"](), order);
                if (order['timestamp'] > this.fechaInicio && order['timestamp'] < this.fechaFin) {
                    return order;
                }
            });
        }));
        this.surveysGood = this.surveyService.GetAll2().valueChanges().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["map"])(surveys => {
            return surveys.filter(survey => {
                survey = Object.assign(new src_app_models_survey__WEBPACK_IMPORTED_MODULE_7__["Survey"](), survey);
                if (survey['order']['timestamp'] > this.fechaInicio && survey['order']['timestamp'] < this.fechaFin) {
                    if (((survey['cookScore'] + survey['restaurantScore'] + survey['tableScore'] + survey['waiterScore']) / 4) >= 7)
                        return survey;
                }
                //console.log(surveys);
            });
        }));
        this.surveysBad = this.surveyService.GetAll2().valueChanges().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["map"])(surveys => {
            return surveys.filter(survey => {
                survey = Object.assign(new src_app_models_survey__WEBPACK_IMPORTED_MODULE_7__["Survey"](), survey);
                if (survey['order']['timestamp'] > this.fechaInicio && survey['order']['timestamp'] < this.fechaFin) {
                    if (((survey['cookScore'] + survey['restaurantScore'] + survey['tableScore'] + survey['waiterScore']) / 4) <= 4)
                        return survey;
                }
                //console.log(surveys);
            });
        }));
        this.getTops();
    }
    setNulls() {
        this.mesaMasUsada = null;
        this.mesaMenosUsada = null;
        this.mesaMayorFacturacion = null;
        this.mesaMenorFacturacion = null;
        this.facturaMayorImporte = null;
        this.facturaMenorImporte = null;
        this.lista = null;
        this.arrayAcumulador = null;
    }
    getTops() {
        this.lista = new Array();
        let cantidadNombres = new Array();
        let cantidad;
        let copia = this.showingOrders;
        this.facturaMayorImporte = new src_app_models_order__WEBPACK_IMPORTED_MODULE_5__["Order"]();
        this.facturaMenorImporte = new src_app_models_order__WEBPACK_IMPORTED_MODULE_5__["Order"]();
        this.arrayAcumulador = new Array();
        copia.subscribe(orders => {
            orders.map(order => {
                if (order) {
                    this.sumarIngresos(order);
                    this.lista.push(order.tableID);
                    this.mayorMenorImporte(order);
                }
            }).map(() => {
                cantidadNombres = this.lista.reduce((contadorNombre, nombre) => {
                    contadorNombre[nombre] = (contadorNombre[nombre] || 0) + 1;
                    return contadorNombre;
                }, {});
            });
            var result = Object.keys(cantidadNombres).map(function (key) {
                return [String(key), cantidadNombres[key]];
            });
            this.getMayoryMenorFacturación();
            cantidad = result.length;
            this.mesaMasUsada = result[0];
            this.mesaMenosUsada = result[cantidad - 1];
            // console.log(this.mesaMenosUsada);
            // console.log(this.mesaMasUsada);
            // console.log(this.facturaMenorImporte);
            // console.log(this.facturaMayorImporte);
            // console.log(this.mesaMenorFacturacion);
            // console.log(this.mesaMayorFacturacion);
        });
    }
    mayorMenorImporte(order) {
        if (this.facturaMayorImporte == null || this.facturaMenorImporte == null) {
            this.facturaMayorImporte = order;
            this.facturaMenorImporte = order;
        }
        else {
            if (order.totalPrice > this.facturaMayorImporte.totalPrice) {
                this.facturaMayorImporte = order;
            }
            if (order.totalPrice < this.facturaMayorImporte.totalPrice) {
                this.facturaMenorImporte = order;
            }
        }
    }
    sumarIngresos(order) {
        if (this.arrayAcumulador[order.tableID] == null) {
            this.arrayAcumulador[order.tableID] = order.totalPrice;
        }
        else {
            this.arrayAcumulador[order.tableID] = this.arrayAcumulador[order.tableID] + order.totalPrice;
        }
    }
    getMayoryMenorFacturación() {
        this.arrayAcumulador.forEach(elemento => {
            console.log(elemento);
            if (this.mesaMayorFacturacion == null || this.mesaMenorFacturacion == null) {
                this.mesaMenorFacturacion = this.arrayAcumulador[this.arrayAcumulador.indexOf(elemento)];
                this.mesaMayorFacturacion = this.arrayAcumulador[this.arrayAcumulador.indexOf(elemento)];
            }
            else {
                if (elemento < this.mesaMenorFacturacion) {
                    this.mesaMenorFacturacion = this.arrayAcumulador[this.arrayAcumulador.indexOf(elemento)];
                }
                if (elemento > this.mesaMayorFacturacion) {
                    this.mesaMayorFacturacion = this.arrayAcumulador[this.arrayAcumulador.indexOf(elemento)];
                }
            }
        });
    }
    setDate() {
        console.log(Date.parse(this.settingsForm.value.fechaInicio.toString()));
        if (this.settingsForm.value.fechaInicio != null) {
            this.fechaInicio = Date.parse(this.settingsForm.value.fechaInicio.toString());
        }
        else {
            this.fechaFin = Date.parse(this.settingsForm.value.fechaFin.toString());
        }
    }
    exportCSV() {
        this.toastr.info('Exportando estadística...');
        let csvData = 'categoria,numDeMesa,cantidad,tipo\n';
        csvData += 'masUsada' + ',' + this.mesaMasUsada[0] + ',' + this.mesaMasUsada[1] + ',veces\n';
        csvData += 'menosUsada' + ',' + this.mesaMenosUsada[0] + ',' + this.mesaMenosUsada[1] + ',veces\n';
        csvData += 'mayorRecaudacion' + ',' + this.arrayAcumulador.indexOf(this.mesaMayorFacturacion) + ',' + this.mesaMayorFacturacion + ',pesos\n';
        csvData += 'menorRecaudacion' + ',' + this.arrayAcumulador.indexOf(this.mesaMenorFacturacion) + ',' + this.mesaMenorFacturacion + ',pesos\n';
        csvData += 'mayorFactura' + ',' + this.facturaMayorImporte.tableID + ',' + this.facturaMayorImporte.totalPrice + ',pesos\n';
        csvData += 'menorFactura' + ',' + this.facturaMenorImporte.tableID + ',' + this.facturaMenorImporte.totalPrice + ',pesos\n';
        console.log(csvData);
        let file = new Blob([csvData], { type: 'text/csv' });
        let fileUrl = URL.createObjectURL(file);
        let hiddenEl = document.createElement('a');
        hiddenEl.href = fileUrl;
        hiddenEl.target = '_blank';
        hiddenEl.download = 'EstadisticasMesas.csv';
        hiddenEl.click();
    }
};
ViewTablesStatsComponent.ctorParameters = () => [
    { type: src_app_services_firebase_order_service__WEBPACK_IMPORTED_MODULE_4__["OrderService"] },
    { type: src_app_services_firebase_survey_service__WEBPACK_IMPORTED_MODULE_8__["SurveyService"] },
    { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_9__["ToastrService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], ViewTablesStatsComponent.prototype, "fechaInicio", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], ViewTablesStatsComponent.prototype, "fechaFin", void 0);
ViewTablesStatsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-view-tables-stats',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./view-tables-stats.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/socio/views/view-tables-stats/view-tables-stats.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./view-tables-stats.component.scss */ "./src/app/components/socio/views/view-tables-stats/view-tables-stats.component.scss")).default]
    })
], ViewTablesStatsComponent);



/***/ }),

/***/ "./src/app/directives/is-prod.directive.ts":
/*!*************************************************!*\
  !*** ./src/app/directives/is-prod.directive.ts ***!
  \*************************************************/
/*! exports provided: IsProdDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IsProdDirective", function() { return IsProdDirective; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../environments/environment */ "./src/environments/environment.ts");



let IsProdDirective = class IsProdDirective {
    constructor(el) {
        this.el = el;
    }
    ngOnInit() {
        if (_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].production)
            this.el.nativeElement.style.display = 'none';
    }
};
IsProdDirective.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('isProd')
], IsProdDirective.prototype, "nothing", void 0);
IsProdDirective = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({
        selector: '[isProd]'
    })
], IsProdDirective);



/***/ }),

/***/ "./src/app/directives/survey-average.directive.ts":
/*!********************************************************!*\
  !*** ./src/app/directives/survey-average.directive.ts ***!
  \********************************************************/
/*! exports provided: SurveyAverageDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SurveyAverageDirective", function() { return SurveyAverageDirective; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let SurveyAverageDirective = class SurveyAverageDirective {
    constructor(el) {
        this.el = el;
    }
    ngOnInit() {
        if (!this.returnAvg)
            this.Paint();
    }
    ngOnChanges() {
        if (this.returnAvg)
            this.el.nativeElement.innerHTML = this.CalculateAverage().toFixed(2);
    }
    CalculateAverage() {
        return (this.survey.tableScore +
            this.survey.restaurantScore +
            this.survey.waiterScore +
            this.survey.cookScore) / 4;
    }
    Paint() {
        let avg = this.CalculateAverage();
        if (avg < 4)
            this.el.nativeElement.style.color = 'red';
        else if (avg >= 4 && avg < 7)
            this.el.nativeElement.style.color = 'yellow';
        else
            this.el.nativeElement.style.color = 'green';
    }
};
SurveyAverageDirective.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('surveyAverage')
], SurveyAverageDirective.prototype, "survey", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('returnAverage')
], SurveyAverageDirective.prototype, "returnAvg", void 0);
SurveyAverageDirective = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({
        selector: '[surveyAverage]'
    })
], SurveyAverageDirective);



/***/ }),

/***/ "./src/app/directives/survey-comment.directive.ts":
/*!********************************************************!*\
  !*** ./src/app/directives/survey-comment.directive.ts ***!
  \********************************************************/
/*! exports provided: SurveyCommentDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SurveyCommentDirective", function() { return SurveyCommentDirective; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


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
SurveyCommentDirective.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('surveyComment')
], SurveyCommentDirective.prototype, "isPositive", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('isIcon')
], SurveyCommentDirective.prototype, "isIcon", void 0);
SurveyCommentDirective = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({
        selector: '[surveyComment]'
    })
], SurveyCommentDirective);



/***/ }),

/***/ "./src/app/guards/auth.guard.ts":
/*!**************************************!*\
  !*** ./src/app/guards/auth.guard.ts ***!
  \**************************************/
/*! exports provided: AuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function() { return AuthGuard; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/fire/auth */ "./node_modules/@angular/fire/auth/es2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");





let AuthGuard = class AuthGuard {
    constructor(afsAuth, router) {
        this.afsAuth = afsAuth;
        this.router = router;
    }
    canActivate(next, state) {
        return this.afsAuth.authState
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(authState => !!authState), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(auth => {
            if (!auth)
                this.router.navigate(['/app/login']);
            else
                console.log('Is auth:', auth);
        }));
    }
};
AuthGuard.ctorParameters = () => [
    { type: _angular_fire_auth__WEBPACK_IMPORTED_MODULE_3__["AngularFireAuth"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
];
AuthGuard = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], AuthGuard);



/***/ }),

/***/ "./src/app/models/log.ts":
/*!*******************************!*\
  !*** ./src/app/models/log.ts ***!
  \*******************************/
/*! exports provided: Log, Role, TipoMovimiento, TargetMovimiento */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Log", function() { return Log; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Role", function() { return Role; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TipoMovimiento", function() { return TipoMovimiento; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TargetMovimiento", function() { return TargetMovimiento; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

class Log {
    constructor() {
        this.id = "";
        this.usuario = "";
        this.role = null;
        this.target = null;
        this.tipo = null;
        this.fecha = null;
        this.observacion = "";
    }
    static CreateLogWithParams(usuario, role, target, tipo, observacion) {
        let movimiento = new Log();
        movimiento.usuario = usuario;
        movimiento.role = role;
        movimiento.target = target;
        movimiento.tipo = tipo;
        movimiento.observacion = observacion;
        movimiento.fecha = Date.now();
        return movimiento;
    }
}
var Role;
(function (Role) {
    Role["socio"] = "socio";
    Role["mozo"] = "mozo";
    Role["cocinero"] = "cocinero";
    Role["cervecero"] = "cervecero";
    Role["bartender"] = "bartender";
    Role["cliente"] = "cliente";
    Role["delivery"] = "delivery";
    //noEspecifica = 'No Especifica'
})(Role || (Role = {}));
var TipoMovimiento;
(function (TipoMovimiento) {
    TipoMovimiento["alta"] = "Alta";
    TipoMovimiento["habilitacion"] = "Habilitacion";
    TipoMovimiento["deshabilitacion"] = "Deshabilitacion";
    TipoMovimiento["modificacion"] = "Modificacion";
    TipoMovimiento["ingreso"] = "Ingreso";
    TipoMovimiento["egreso"] = "Egreso";
    TipoMovimiento["entrega"] = "Entrega";
    TipoMovimiento["suspension"] = "Suspension";
    TipoMovimiento["reincorporacion"] = "Reincorporacion";
    TipoMovimiento["borrado"] = "Borrado";
    TipoMovimiento["preparacion"] = "En preparaci\u00F3n";
    TipoMovimiento["finalizacion"] = "Finaliz\u00F3";
    //noEspecifica = 'No Especifica'
})(TipoMovimiento || (TipoMovimiento = {}));
var TargetMovimiento;
(function (TargetMovimiento) {
    TargetMovimiento["usuario"] = "Usuario";
    TargetMovimiento["producto"] = "Producto";
    TargetMovimiento["pedido"] = "Pedido";
    TargetMovimiento["mesa"] = "Mesa";
    //noEspecifica = 'No Especifica'
})(TargetMovimiento || (TargetMovimiento = {}));


/***/ }),

/***/ "./src/app/models/order.ts":
/*!*********************************!*\
  !*** ./src/app/models/order.ts ***!
  \*********************************/
/*! exports provided: Order, OrderState */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Order", function() { return Order; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrderState", function() { return OrderState; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _product__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./product */ "./src/app/models/product.ts");
/* harmony import */ var _classes_helpers_common_helper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../classes/helpers/common-helper */ "./src/app/classes/helpers/common-helper.ts");



class Order {
    constructor() {
        this.codeID = Order.GenerateCodeID();
        this.items = [];
        this.totalPrice = 0;
        this.tableID = '';
        this.state = OrderState.pending;
        this.timeLeft = undefined;
        this.timestamp = Date.now();
        this.completed = false;
        this.delayed = null;
    }
    CompleteOrder() {
        this.completed = true;
        this.state = OrderState.served;
        if (this.timeLeft != null) {
            let resta = (Date.parse(this.timeLeft)) - Date.now();
            if (resta < 0) {
                this.delayed = resta;
            }
        }
    }
    CalculateTimeInMinutes() {
        let minutes = 0;
        let difference = new Date(this.timeLeft).getTime() - (new Date()).getTime();
        minutes = Math.floor(difference / (1000 * 60));
        return minutes;
    }
    AddMinutes(minutes) {
        let theDate;
        if (!this.timeLeft)
            theDate = new Date();
        else
            theDate = new Date(this.timeLeft);
        let time = theDate.getTime() + Math.floor(minutes * (1000 * 60));
        let date = new Date(time);
        this.timeLeft = _classes_helpers_common_helper__WEBPACK_IMPORTED_MODULE_2__["CommonHelper"].ConvertDate(date);
    }
    CalculateTotal() {
        this.totalPrice = this.items.reduce((before, actual) => {
            return before + actual.price;
        }, 0);
    }
    UpdateOrderState() {
        if (this.IsFinished())
            this.state = OrderState.readyToServe;
        else if (this.IsBeingPrepared())
            this.state = OrderState.cooking;
        else
            this.state = OrderState.pending;
    }
    static Create(tableID) {
        let newOrder = new Order();
        newOrder.tableID = tableID;
        return newOrder;
    }
    CheckOrder() {
        let isValid = false;
        if ((this.codeID != '' && this.codeID != undefined) &&
            this.items.length > 0 &&
            this.totalPrice > 0 &&
            (this.tableID != '' && this.tableID != undefined) &&
            this.state != undefined &&
            (this.timestamp != undefined && this.timestamp != 0))
            isValid = true;
        return isValid;
    }
    static GenerateCodeID() {
        let code = '';
        let now = new Date();
        code += now.getDate();
        code += now.getHours();
        code += now.getMinutes();
        let number = Math.floor((Math.random() * 5) + 1);
        switch (number) {
            case 1:
                code += 'A';
                break;
            case 2:
                code += 'B';
                break;
            case 3:
                code += 'C';
                break;
            case 4:
                code += 'D';
                break;
            default:
                code += 'E';
                break;
        }
        return code;
    }
    IsBeingPrepared() {
        let isBeingPrepared = false;
        this.items.forEach(el => {
            if (el.state == _product__WEBPACK_IMPORTED_MODULE_1__["FoodState"].preparing)
                isBeingPrepared = true;
        });
        return isBeingPrepared;
    }
    IsFinished() {
        let finished = true;
        this.items.forEach(el => {
            if (el.state != _product__WEBPACK_IMPORTED_MODULE_1__["FoodState"].finished)
                finished = false;
        });
        return finished;
    }
}
var OrderState;
(function (OrderState) {
    OrderState["pending"] = "Pendiente";
    OrderState["cooking"] = "Cocin\u00E1ndose";
    OrderState["readyToServe"] = "Listo para servir";
    OrderState["served"] = "Servido";
    OrderState["paidOut"] = "Pagado";
    OrderState["cancelled"] = "Cancelado";
})(OrderState || (OrderState = {}));


/***/ }),

/***/ "./src/app/models/product.ts":
/*!***********************************!*\
  !*** ./src/app/models/product.ts ***!
  \***********************************/
/*! exports provided: Product, FoodType, FoodState, Cook */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Product", function() { return Product; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FoodType", function() { return FoodType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FoodState", function() { return FoodState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Cook", function() { return Cook; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

class Product {
    constructor() {
        this.codeID = "";
        this.name = "";
        this.image = "";
        this.price = -1;
        this.foodTypes = [];
        this.state = FoodState.pending;
        this.demand = 0;
    }
    IsFoodType(type) {
        return this.foodTypes.includes(type);
    }
    static Create(code, name, image, price, foodTypes, cook, description) {
        let newProd = new Product();
        newProd.codeID = code;
        newProd.name = name;
        newProd.image = image;
        newProd.price = price;
        newProd.foodTypes = foodTypes;
        newProd.cook = cook;
        newProd.description = description;
        return newProd;
    }
}
var FoodType;
(function (FoodType) {
    FoodType["comida"] = "comida";
    FoodType["bebida"] = "bebida";
    FoodType["postre"] = "postre";
    FoodType["alcohol"] = "alcohol";
    FoodType["celiaco"] = "celiaco";
    FoodType["vegano"] = "vegano";
})(FoodType || (FoodType = {}));
var FoodState;
(function (FoodState) {
    FoodState["pending"] = "Pendiente";
    FoodState["preparing"] = "Prepar\u00E1ndose";
    FoodState["finished"] = "Terminando";
})(FoodState || (FoodState = {}));
var Cook;
(function (Cook) {
    Cook["cocinero"] = "cocinero";
    Cook["cervecero"] = "cervecero";
    Cook["bartender"] = "bartender";
})(Cook || (Cook = {}));


/***/ }),

/***/ "./src/app/models/survey.ts":
/*!**********************************!*\
  !*** ./src/app/models/survey.ts ***!
  \**********************************/
/*! exports provided: Survey */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Survey", function() { return Survey; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

class Survey {
    constructor() {
        this.tableScore = 0;
        this.waiterScore = 0;
        this.restaurantScore = 0;
        this.cookScore = 0;
    }
    static Create(order, table, waiter, restaurant, cook, comment, commentType) {
        let newSurvey = new Survey();
        newSurvey.order = order;
        newSurvey.tableScore = table;
        newSurvey.waiterScore = waiter;
        newSurvey.restaurantScore = restaurant;
        newSurvey.cookScore = cook;
        newSurvey.comment = comment;
        newSurvey.commentType = commentType;
        return newSurvey;
    }
}


/***/ }),

/***/ "./src/app/models/table.ts":
/*!*********************************!*\
  !*** ./src/app/models/table.ts ***!
  \*********************************/
/*! exports provided: Table, TableState */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Table", function() { return Table; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TableState", function() { return TableState; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

class Table {
    constructor() {
        this.tableID = '';
        this.state = TableState.available;
    }
    static Create(tableID, state) {
        let newTable = new Table();
        newTable.tableID = tableID;
        newTable.state = state;
        return newTable;
    }
}
var TableState;
(function (TableState) {
    TableState["available"] = "Disponible";
    TableState["waitingOrder"] = "Cliente esperando pedido";
    TableState["eating"] = "Cliente comiendo";
    TableState["paying"] = "Cliente pagando";
    TableState["closed"] = "Cerrada";
})(TableState || (TableState = {}));


/***/ }),

/***/ "./src/app/models/user.ts":
/*!********************************!*\
  !*** ./src/app/models/user.ts ***!
  \********************************/
/*! exports provided: User, Role */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "User", function() { return User; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Role", function() { return Role; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

class User {
    constructor() {
        this.name = "";
        this.lastname = "";
        this.password = "";
        this.email = "";
        this.role = null;
        this.image = null;
        this.deleted = true;
        this.state = 'deshabilitado';
    }
    static CreateUserWithParams(name, lastname, email, password, role) {
        let user = new User();
        user.name = name;
        user.lastname = lastname;
        user.password = password;
        user.email = email;
        user.role = role;
        user.deleted = false;
        user.state = 'habilitado';
        user.image = 'https://firebasestorage.googleapis.com/v0/b/tplab4-aa5ae.appspot.com/o/imagenesUsuarios%2Fdefault-profile.png?alt=media&token=e03046d0-3237-4039-8bd3-a1ba051c0645';
        return user;
    }
    static CreateUserFromAdmin(name, lastname, email, role) {
        let user = new User();
        user.name = name;
        user.lastname = lastname;
        user.password = email;
        user.email = email;
        user.role = role;
        user.deleted = false;
        user.state = 'habilitado';
        return user;
    }
}
var Role;
(function (Role) {
    Role["socio"] = "socio";
    Role["mozo"] = "mozo";
    Role["cocinero"] = "cocinero";
    Role["cervecero"] = "cervecero";
    Role["bartender"] = "bartender";
    Role["cliente"] = "cliente";
    Role["delivery"] = "delivery";
})(Role || (Role = {}));


/***/ }),

/***/ "./src/app/pipes/neat-date.pipe.ts":
/*!*****************************************!*\
  !*** ./src/app/pipes/neat-date.pipe.ts ***!
  \*****************************************/
/*! exports provided: NeatDatePipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NeatDatePipe", function() { return NeatDatePipe; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


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
NeatDatePipe = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
        name: 'neatDate'
    })
], NeatDatePipe);



/***/ }),

/***/ "./src/app/pipes/sort-pipe.pipe.ts":
/*!*****************************************!*\
  !*** ./src/app/pipes/sort-pipe.pipe.ts ***!
  \*****************************************/
/*! exports provided: SortPipePipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SortPipePipe", function() { return SortPipePipe; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let SortPipePipe = class SortPipePipe {
    transform(array, args) {
        if (array != null) {
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
    }
};
SortPipePipe = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
        name: 'sortPipe'
    })
], SortPipePipe);



/***/ }),

/***/ "./src/app/pipes/table.pipe.ts":
/*!*************************************!*\
  !*** ./src/app/pipes/table.pipe.ts ***!
  \*************************************/
/*! exports provided: TablePipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TablePipe", function() { return TablePipe; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


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
TablePipe = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
        name: 'table'
    })
], TablePipe);



/***/ }),

/***/ "./src/app/pipes/timeleft.pipe.ts":
/*!****************************************!*\
  !*** ./src/app/pipes/timeleft.pipe.ts ***!
  \****************************************/
/*! exports provided: TimeleftPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TimeleftPipe", function() { return TimeleftPipe; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


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
TimeleftPipe = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
        name: 'timeleft'
    })
], TimeleftPipe);



/***/ }),

/***/ "./src/app/services/authentication/auth.service.ts":
/*!*********************************************************!*\
  !*** ./src/app/services/authentication/auth.service.ts ***!
  \*********************************************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/fire/auth */ "./node_modules/@angular/fire/auth/es2015/index.js");
/* harmony import */ var angularfire2_firestore__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! angularfire2/firestore */ "./node_modules/angularfire2/firestore/index.js");
/* harmony import */ var angularfire2_firestore__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(angularfire2_firestore__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var src_app_models_user__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/models/user */ "./src/app/models/user.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _firebase_user_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../firebase/user.service */ "./src/app/services/firebase/user.service.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var q__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! q */ "./node_modules/q/q.js");
/* harmony import */ var q__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(q__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _firebase_log_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../firebase/log.service */ "./src/app/services/firebase/log.service.ts");
/* harmony import */ var src_app_models_log__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/models/log */ "./src/app/models/log.ts");











let AuthService = class AuthService {
    constructor(afsAuth, db, router, userService, logService) {
        this.afsAuth = afsAuth;
        this.db = db;
        this.router = router;
        this.userService = userService;
        this.logService = logService;
    }
    RegisterWithEmail(user) {
        return new Promise((resolve, reject) => {
            this.afsAuth.auth.createUserWithEmailAndPassword(user.email, user.password)
                .then(userData => {
                resolve(userData);
                this.userService.Add(user);
                console.log('Register successful');
            })
                .catch(error => console.log(reject(error)));
        });
    }
    // public RegisterWithEmailAdmin(user: User, file: File) {
    // 	var logueado:User;
    // 	this.GetCurrentUser().then(usr =>{
    // 		logueado=user;
    // 		this.afsAuth.auth.createUserWithEmailAndPassword(user.email, user.password)
    // 		 .then(userData => {				
    // 			 //this.userService.Add(user);
    // 			this.LoginWithEmail(logueado.email, logueado.password);
    // 		 	this.userService.persistirUsuario(user, file).then(value =>{
    // 		 		if(value){
    // 		 			//location.reload();
    // 		 		}
    // 		 	}).catch(error => console.log(reject(error)));					
    // 		 	console.log('Register successful');
    // 		 })
    // 		 .catch(error => console.log(reject(error)))
    // 	})
    // }
    RegisterWithEmailAdmin(mail) {
        this.userService.GetUserByEmail(mail).then(user => {
            const pass = user.password;
            this.RegisterWithEmail(user).then(() => {
                this.LoginWithEmail(mail, pass);
            });
        });
    }
    LoginWithEmail(email, pwd) {
        return new Promise((resolve, reject) => {
            this.afsAuth.auth.signInWithEmailAndPassword(email, pwd)
                .then(userData => {
                this.userService.GetUserByEmail(userData.user.email).then(user => {
                    resolve(userData);
                    console.log('Login success', userData);
                    this.RedirectForRole(email);
                    this.userService.GetUserByEmail(email).then(user => {
                        let mensaje = `El usuario ${user.email} inició sesión`;
                        this.logService.persistirMovimiento(user, src_app_models_log__WEBPACK_IMPORTED_MODULE_10__["TargetMovimiento"].usuario, src_app_models_log__WEBPACK_IMPORTED_MODULE_10__["TipoMovimiento"].ingreso, mensaje);
                    });
                });
            })
                .catch(error => reject(error));
        });
    }
    LogoutEmail() {
        this.GetCurrentUser()
            .then(user => {
            let mensaje = `El usuario ${user.email} cerró sesión`;
            this.logService.persistirMovimiento(user, src_app_models_log__WEBPACK_IMPORTED_MODULE_10__["TargetMovimiento"].usuario, src_app_models_log__WEBPACK_IMPORTED_MODULE_10__["TipoMovimiento"].egreso, mensaje)
                .then(() => {
                this.afsAuth.auth.signOut();
            });
        });
    }
    GetCurrentUser() {
        return this.GetCurrentEmail().then(email => {
            if (!email)
                Object(q__WEBPACK_IMPORTED_MODULE_8__["reject"])('error');
            return this.userService.GetUserByEmail(email).then(user => {
                return this.RemoveUserPassword(user);
            });
        });
    }
    GetCurrentEmail() {
        return this.afsAuth.user.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["map"])(user => user.email))
            .toPromise();
    }
    RemoveUserPassword(user) {
        user.password = '';
        return user;
    }
    RedirectForRole(email) {
        this.userService.GetUserByEmail(email).then(user => {
            switch (user.role) {
                case src_app_models_user__WEBPACK_IMPORTED_MODULE_4__["Role"].cliente:
                    this.router.navigate(['/cliente']);
                    break;
                case src_app_models_user__WEBPACK_IMPORTED_MODULE_4__["Role"].mozo:
                    this.router.navigate(['/mozo']);
                    break;
                case src_app_models_user__WEBPACK_IMPORTED_MODULE_4__["Role"].socio:
                    this.router.navigate(['/socio']);
                    break;
                case src_app_models_user__WEBPACK_IMPORTED_MODULE_4__["Role"].cocinero:
                    this.router.navigate(['/cocinero']);
                    break;
                case src_app_models_user__WEBPACK_IMPORTED_MODULE_4__["Role"].cervecero:
                    this.router.navigate(['/cervecero']);
                    break;
                case src_app_models_user__WEBPACK_IMPORTED_MODULE_4__["Role"].bartender:
                    this.router.navigate(['/bartender']);
                    break;
                default:
                    alert('No tiene rol.');
                    break;
            }
        });
    }
};
AuthService.ctorParameters = () => [
    { type: _angular_fire_auth__WEBPACK_IMPORTED_MODULE_2__["AngularFireAuth"] },
    { type: angularfire2_firestore__WEBPACK_IMPORTED_MODULE_3__["AngularFirestore"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] },
    { type: _firebase_user_service__WEBPACK_IMPORTED_MODULE_6__["UserService"] },
    { type: _firebase_log_service__WEBPACK_IMPORTED_MODULE_9__["LogService"] }
];
AuthService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], AuthService);



/***/ }),

/***/ "./src/app/services/firebase/log.service.ts":
/*!**************************************************!*\
  !*** ./src/app/services/firebase/log.service.ts ***!
  \**************************************************/
/*! exports provided: LogService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LogService", function() { return LogService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var angularfire2_firestore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! angularfire2/firestore */ "./node_modules/angularfire2/firestore/index.js");
/* harmony import */ var angularfire2_firestore__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(angularfire2_firestore__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var src_app_models_log__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/models/log */ "./src/app/models/log.ts");
/* harmony import */ var _firestorage_file_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../firestorage/file.service */ "./src/app/services/firestorage/file.service.ts");
/* harmony import */ var _angular_fire_functions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/fire/functions */ "./node_modules/@angular/fire/functions/es2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var src_app_classes_helpers_common_helper__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/classes/helpers/common-helper */ "./src/app/classes/helpers/common-helper.ts");








let LogService = class LogService {
    constructor(db, afsFunc, fileService) {
        this.db = db;
        this.afsFunc = afsFunc;
        this.fileService = fileService;
        this.listado = new Array();
        this.movimientos = this.db.collection('movimientos');
        this.traerMovimientosArray();
    }
    GetAll3() {
        return this.db.collection("movimientos").valueChanges().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["map"])(logs => {
            return logs.filter(res => {
                res = Object.assign(new src_app_models_log__WEBPACK_IMPORTED_MODULE_3__["Log"](), res);
                return res;
            });
        }));
    }
    GetAll2() {
        return this.db.collection("movimientos");
    }
    GetAll() {
        return this.db.collection("movimientos");
    }
    traerMovimientosArray() {
        let listadoObservable = null;
        listadoObservable = this.traerMovimientos();
        listadoObservable.subscribe(movs => {
            movs.forEach(unMov => {
                let m = new src_app_models_log__WEBPACK_IMPORTED_MODULE_3__["Log"];
                m.id = unMov.id;
                m.role = unMov.role;
                m.target = unMov.target;
                m.usuario = unMov.usuario;
                m.tipo = unMov.tipo;
                m.fecha = unMov.fecha;
                m.observacion = unMov.observacion;
                this.listado.push(m);
            });
        });
    }
    traerMovimientos() {
        return this.movimientos.snapshotChanges().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["map"])(actions => {
            return actions.map(action => {
                const datos = action.payload.doc.data();
                const id = action.payload.doc.id;
                return Object.assign({ id }, datos);
            });
        }));
    }
    persistirMovimiento(usuario, target, tipo, observacion) {
        let movimiento = src_app_models_log__WEBPACK_IMPORTED_MODULE_3__["Log"].CreateLogWithParams(usuario.email, usuario.role, target, tipo, observacion);
        return this.movimientos.add(src_app_classes_helpers_common_helper__WEBPACK_IMPORTED_MODULE_7__["CommonHelper"].ConvertToObject(movimiento)).then(doc => {
            this.movimientos.doc(doc.id).update({ id: doc.id });
            console.log("persistio");
        }).then(() => {
            return true;
        }).catch(() => {
            return false;
        });
    }
};
LogService.ctorParameters = () => [
    { type: angularfire2_firestore__WEBPACK_IMPORTED_MODULE_2__["AngularFirestore"] },
    { type: _angular_fire_functions__WEBPACK_IMPORTED_MODULE_5__["AngularFireFunctions"] },
    { type: _firestorage_file_service__WEBPACK_IMPORTED_MODULE_4__["FileService"] }
];
LogService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], LogService);



/***/ }),

/***/ "./src/app/services/firebase/order.service.ts":
/*!****************************************************!*\
  !*** ./src/app/services/firebase/order.service.ts ***!
  \****************************************************/
/*! exports provided: OrderService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrderService", function() { return OrderService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var angularfire2_firestore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! angularfire2/firestore */ "./node_modules/angularfire2/firestore/index.js");
/* harmony import */ var angularfire2_firestore__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(angularfire2_firestore__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var src_app_models_order__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/models/order */ "./src/app/models/order.ts");
/* harmony import */ var src_app_classes_helpers_common_helper__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/classes/helpers/common-helper */ "./src/app/classes/helpers/common-helper.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _firestorage_file_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../firestorage/file.service */ "./src/app/services/firestorage/file.service.ts");







let OrderService = class OrderService {
    constructor(db, fileService) {
        this.db = db;
        this.fileService = fileService;
        this.primerosTres = new Array();
        this.ultimosTres = new Array();
        this.listado = new Array();
        this.ordenes = this.db.collection('pedidos');
        this.traerOrdenesArray();
    }
    Add(order) {
        this.db.collection("pedidos").add(src_app_classes_helpers_common_helper__WEBPACK_IMPORTED_MODULE_4__["CommonHelper"].ConvertToObject(order));
    }
    GetAllOrderByTime() {
        return this.db.collection("pedidos", ref => ref.where('completed', '==', false));
    }
    GetAllCompletedOrders_InArray() {
        return this.db.collection("pedidos", ref => ref.where('completed', '==', true)).get().toPromise()
            .then(doc => {
            let orders = [];
            doc.docs.forEach(el => {
                orders.push(el.data());
            });
            return orders;
        });
    }
    GetAllByWaiterOrderByTime(email) {
        // It's not order by time yet. It requires to create an index.
        //return this.db.collection("orders", ref => ref.where('waiter.email', '==', email).orderBy('timestamp', 'desc'));
        return this.db.collection("pedidos", ref => ref.where('waiter.email', '==', email).where('completed', '==', false));
    }
    GetAllByWaiterOrderByTime2(email) {
        const pendiente = 'Pendiente';
        const servido = 'Servido';
        // It's not order by time yet. It requires to create an index.
        //return this.db.collection("orders", ref => ref.where('waiter.email', '==', email).orderBy('timestamp', 'desc'));
        return this.db.collection("pedidos", ref => ref.where('client.email', '==', email));
    }
    GetAllByCook(cook) {
        let documents = this.db.collection("pedidos", ref => ref.where('completed', '==', false).orderBy('timestamp', 'desc'));
        return documents.valueChanges().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(orders => {
            return orders.filter(order => {
                order = Object.assign(new src_app_models_order__WEBPACK_IMPORTED_MODULE_3__["Order"](), order);
                var hasRole = false;
                order['items'].forEach(el => {
                    if (el.cook == cook)
                        hasRole = true;
                });
                if (hasRole)
                    return order;
            });
        }));
    }
    ChangeStatus(state, orderCode) {
        this.GetByCodeID(orderCode).then(order => {
            order.state = state;
            this.db.collection("pedidos").doc(order.id).update(order);
        });
    }
    Update(order) {
        return this.GetByCodeID(order.codeID).then(or => {
            let obj = src_app_classes_helpers_common_helper__WEBPACK_IMPORTED_MODULE_4__["CommonHelper"].ConvertToObject(order);
            this.db.collection("pedidos").doc(or.id).update(obj);
        })
            .then(() => {
            return true;
        })
            .catch(() => {
            return false;
        });
    }
    UpdateImage(order, image) {
        return this.fileService.subirFotoPedido(image, order.id).then(() => {
            return true;
        });
    }
    UpdateImageURL(order, url) {
        this.GetByCodeID(order.codeID).then(ord => {
            this.fileService.updatePhotoUrlOrders(url, ord.id);
        }).catch(() => {
            console.log("no se pudo actualizar url de imagen");
        });
    }
    GetByCodeID(code) {
        let documents = this.db.collection("pedidos", ref => ref.where('codeID', '==', code));
        return documents.get().toPromise().then(doc => {
            return new Promise((resolve, reject) => {
                if (doc.docs[0]) {
                    let theOrder = doc.docs[0].data();
                    theOrder.id = doc.docs[0].id;
                    resolve(theOrder);
                }
                else
                    reject('No se encontró el pedido.');
            });
        });
    }
    setOrderImage(code, image) {
        this.GetByCodeID(code).then(ord => {
            this.UpdateImage(ord, image);
        }).catch(() => {
            console.log("no se pudo subir");
        });
    }
    GetByCodeUser(code) {
        let documents = this.db.collection("pedidos", ref => ref.where('client.email', '==', code) && ref.where('completed', '==', false));
        return documents.get().toPromise().then(doc => {
            return new Promise((resolve, reject) => {
                if (doc.docs[0]) {
                    let theOrder = doc.docs[0].data();
                    theOrder.id = doc.docs[0].id;
                    resolve(theOrder);
                }
                else
                    reject('No se encontró el pedido.');
            });
        });
    }
    GetAllCancelled() {
        return this.db.collection("pedidos").valueChanges()
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(orders => {
            return orders.filter(order => {
                order = Object.assign(new src_app_models_order__WEBPACK_IMPORTED_MODULE_3__["Order"](), order);
                if (order['state'] == "Cancelado")
                    return order;
            });
        }));
    }
    GetAllDelayed() {
        return this.db.collection("pedidos").valueChanges()
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(orders => {
            return orders.filter(order => {
                order = Object.assign(new src_app_models_order__WEBPACK_IMPORTED_MODULE_3__["Order"](), order);
                if (order['delayed'] < 0) {
                    return order;
                }
            });
        }));
    }
    ;
    GetAll() {
        return this.db.collection("pedidos");
    }
    // public GetTopBest(fechaInicio: number, fechaFin: number): Promise<boolean> {
    // 	let listado = new Array<any>();
    // 	return this.GetAllCompletedOrders_InArray().then(orders => {
    // 		orders.forEach(order => {	
    // 			if(order.timestamp > fechaInicio && order.timestamp < fechaFin)	{
    // 				order.items.forEach(element => {
    // 					listado.push(element.name);
    // 				});
    // 			}				
    // 		})
    // 	}).then(() => {
    // 		let cantidadNombres = new Array<any>();
    // 		cantidadNombres = listado.reduce((contadorNombre, nombre) => {
    // 			contadorNombre[nombre] = (contadorNombre[nombre] || 0) + 1;
    // 			return contadorNombre;
    // 		}, {});
    // 		var result = Object.keys(cantidadNombres).map(function (key) {
    // 			return [String(key), cantidadNombres[key]];
    // 		});
    // 		const cantidad = result.length;
    // 		console.log(cantidad);
    // 		this.primerosTres.push(result[0], result[1], result[2]);
    // 		this.ultimosTres.push(result[cantidad - 3], result[cantidad - 2], result[cantidad - 1]);
    // 	}).then(() => {
    // 		return true;
    // 	}
    // 	).catch(() => {
    // 		return false;
    // 	}
    // 	)
    // }
    traerOrdenesArray() {
        this.db.collection("pedidos").get().toPromise()
            .then(doc => {
            let orders = [];
            doc.docs.forEach(el => {
                orders.push(el.data());
            });
            return orders;
        });
    }
    GetAllCancelledOrders_InArray() {
        return this.db.collection("pedidos").get().toPromise()
            .then(doc => {
            let orders = [];
            doc.docs.forEach(el => {
                let ela = el.data();
                if (ela['state'] == 'Cancelado') {
                    orders.push(ela);
                }
            });
            return orders;
        });
    }
    GetAllDelayedOrders_InArray() {
        return this.db.collection("pedidos").get().toPromise()
            .then(doc => {
            let orders = [];
            doc.docs.forEach(el => {
                let ela = el.data();
                if (ela['delayed'] != null) {
                    orders.push(ela);
                }
            });
            return orders;
        });
    }
};
OrderService.ctorParameters = () => [
    { type: angularfire2_firestore__WEBPACK_IMPORTED_MODULE_2__["AngularFirestore"] },
    { type: _firestorage_file_service__WEBPACK_IMPORTED_MODULE_6__["FileService"] }
];
OrderService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], OrderService);



/***/ }),

/***/ "./src/app/services/firebase/product.service.ts":
/*!******************************************************!*\
  !*** ./src/app/services/firebase/product.service.ts ***!
  \******************************************************/
/*! exports provided: ProductService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductService", function() { return ProductService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var angularfire2_firestore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! angularfire2/firestore */ "./node_modules/angularfire2/firestore/index.js");
/* harmony import */ var angularfire2_firestore__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(angularfire2_firestore__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _angular_fire_functions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/fire/functions */ "./node_modules/@angular/fire/functions/es2015/index.js");
/* harmony import */ var src_app_models_product__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/models/product */ "./src/app/models/product.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _firestorage_file_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../firestorage/file.service */ "./src/app/services/firestorage/file.service.ts");
/* harmony import */ var src_app_classes_helpers_common_helper__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/classes/helpers/common-helper */ "./src/app/classes/helpers/common-helper.ts");






//import { getLocaleFirstDayOfWeek } from '@angular/common';
//import { runInThisContext } from 'vm';


let ProductService = class ProductService {
    constructor(db, afsFunc, fileService) {
        this.db = db;
        this.afsFunc = afsFunc;
        this.fileService = fileService;
        //public listado: Product[];
        //public listado: Array<Product>;
        this.listado = new Array();
        this.primerosTres = new Array();
        this.ultimosTres = new Array();
        this.productos = this.db.collection('productos');
        this.traerProductosArray();
        console.log(this.listado);
    }
    //  private CreateTestProducts(): Product[]
    //  {
    //  	return [
    //  		Product.Create('B-CER-QUIL', 'Cerveza Quilmes', 'assets/img/B-CER-QUIL.jpg', 50, [FoodType.bebida, FoodType.alcohol], Cook.cervecero, "Bebida con alcohol, no recomendada si vas a conducir"),
    //  		Product.Create('C-COM-MCFR', 'Milanesa con fritas', 'assets/img/C-COM-MCFR.jpg', 300, [FoodType.comida], Cook.cocinero, "Milanesa de ternera acompañada de papas fritas"),
    //  		Product.Create('C-COM-MACF', 'Milanesa a caballo con fritas', 'assets/img/C-COM-MACF.jpg', 350, [FoodType.comida], Cook.cocinero, "Milanesa de ternera acompañada de huevo frito y papas fritas"),
    //  		Product.Create('C-COM-MNAF', 'Milanesa napo con fritas', 'assets/img/C-COM-MNAF.jpg', 350, [FoodType.comida], Cook.cocinero, "Milanesa con salsa de tomate, jamón y muzzarella acompañada de papas fritas"),
    //  		Product.Create('B-GAS-COCA', 'Coca-Cola', 'assets/img/B-GAS-COCA.jpg', 60, [FoodType.bebida, FoodType.vegano, FoodType.celiaco], Cook.bartender, "Bebida sin alcohol gasificada de extractos naturales"),
    //  		Product.Create('B-AGU-BONA', 'Bon Aqua', 'assets/img/B-AGU-BONA.jpg', 45, [FoodType.bebida, FoodType.vegano, FoodType.celiaco], Cook.bartender, "Bebida sin alcohol y sin gas de origenes naturales"),
    //  		Product.Create('B-TRA-DDFR', 'Daikiri de frutilla', 'assets/img/B-TRA-DDFR.jpg', 70, [FoodType.bebida, FoodType.alcohol, FoodType.postre], Cook.bartender, "Bebida con alcohol, no recomendada si vas a manejar"),
    //  		Product.Create('C-COM-ENCE', 'Ensalada el Cesar', 'assets/img/C-COM-ENCE.jpg', 150, [FoodType.comida, FoodType.vegano], Cook.cocinero, " Ensalada de lechuga romana y croûtons con jugo de limón, aceite de oliva, huevo, salsa Worcestershire, anchoas, ajo, mostaza de Dijon, queso parmesano y pimienta negra"),
    //  		Product.Create('C-COM-EMPA', 'Empanada', 'assets/img/C-COM-EMPA.jpg', 50, [FoodType.comida], Cook.cocinero, " Empanada de pollo"),
    //  		Product.Create('B-VIN-VINO', 'Vino', 'assets/img/B-VIN-VINO.jpg', 550, [FoodType.bebida, FoodType.alcohol], Cook.bartender, "Bebida con alcohol, no recomendada si vas a conducir"),
    //  	];
    //  }
    // private CreateTestProducts() {
    //     let lista = [
    //         Product.Create('B-CER-QUIL', 'Cerveza Quilmes', 'assets/img/B-CER-QUIL.jpg', 50, [FoodType.bebida, FoodType.alcohol], Cook.cervecero, "Bebida con alcohol, no recomendada si vas a conducir"),
    //         Product.Create('C-COM-MCFR', 'Milanesa con fritas', 'assets/img/C-COM-MCFR.jpg', 300, [FoodType.comida], Cook.cocinero, "Milanesa de ternera acompañada de papas fritas"),
    //         Product.Create('C-COM-MACF', 'Milanesa a caballo con fritas', 'assets/img/C-COM-MACF.jpg', 350, [FoodType.comida], Cook.cocinero, "Milanesa de ternera acompañada de huevo frito y papas fritas"),
    //         Product.Create('C-COM-MNAF', 'Milanesa napo con fritas', 'assets/img/C-COM-MNAF.jpg', 350, [FoodType.comida], Cook.cocinero, "Milanesa con salsa de tomate, jamón y muzzarella acompañada de papas fritas"),
    //         Product.Create('B-GAS-COCA', 'Coca-Cola', 'assets/img/B-GAS-COCA.jpg', 60, [FoodType.bebida, FoodType.vegano, FoodType.celiaco], Cook.bartender, "Bebida sin alcohol gasificada de extractos naturales"),
    //         Product.Create('B-AGU-BONA', 'Bon Aqua', 'assets/img/B-AGU-BONA.jpg', 45, [FoodType.bebida, FoodType.vegano, FoodType.celiaco], Cook.bartender, "Bebida sin alcohol y sin gas de origenes naturales"),
    //         Product.Create('B-TRA-DDFR', 'Daikiri de frutilla', 'assets/img/B-TRA-DDFR.jpg', 70, [FoodType.bebida, FoodType.alcohol, FoodType.postre], Cook.bartender, "Bebida con alcohol, no recomendada si vas a manejar"),
    //         Product.Create('C-COM-ENCE', 'Ensalada el Cesar', 'assets/img/C-COM-ENCE.jpg', 150, [FoodType.comida, FoodType.vegano], Cook.cocinero, " Ensalada de lechuga romana y croûtons con jugo de limón, aceite de oliva, huevo, salsa Worcestershire, anchoas, ajo, mostaza de Dijon, queso parmesano y pimienta negra"),
    //         Product.Create('C-COM-EMPA', 'Empanada', 'assets/img/C-COM-EMPA.jpg', 50, [FoodType.comida], Cook.cocinero, " Empanada de pollo"),
    //         Product.Create('B-VIN-VINO', 'Vino', 'assets/img/B-VIN-VINO.jpg', 550, [FoodType.bebida, FoodType.alcohol], Cook.bartender, "Bebida con alcohol, no recomendada si vas a conducir"),
    //     ];
    //     lista.forEach(elProd => {
    //         console.log(elProd);
    //         this.persistirProducto(elProd);
    //     })
    // }
    GetAll() {
        return this.db.collection("productos");
    }
    GetAll2() {
        return this.db.collection("productos");
    }
    traerProductos() {
        return this.productos.snapshotChanges().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(actions => {
            return actions.map(action => {
                const datos = action.payload.doc.data();
                const id = action.payload.doc.id;
                return Object.assign({ id }, datos);
            });
        }));
    }
    traerProductosArray() {
        let listadoObservable = null;
        listadoObservable = this.traerProductos();
        console.log("traerProductosArray ListadoObservable");
        listadoObservable.subscribe(prods => {
            prods.forEach(unProd => {
                let p = new src_app_models_product__WEBPACK_IMPORTED_MODULE_4__["Product"];
                p.codeID = unProd.codeID;
                p.cook = unProd.cook;
                p.description = unProd.description;
                p.foodTypes = unProd.foodTypes;
                p.name = unProd.name;
                p.image = unProd.image;
                p.price = parseInt(unProd.price);
                p.state = unProd.state;
                p.worker = unProd.worker;
                this.listado.push(p);
            });
        });
    }
    persistirProducto(producto, foto) {
        return this.productos.add(src_app_classes_helpers_common_helper__WEBPACK_IMPORTED_MODULE_7__["CommonHelper"].ConvertToObject(producto)).then(doc => {
            this.productos.doc(doc.id).update({ codeID: doc.id });
            //this.productos.doc(doc.id).update({ pathImg: doc.id });
            console.log(foto);
            if (foto) {
                //this.fileService.subirFoto(foto, producto.name);
                this.fileService.subirFotoProducto(foto, doc.id);
            }
        }).then(() => {
            //location.reload();
            return true;
        }).catch(() => {
            return false;
        });
    }
    updateState(uid, state) {
        this.productos.doc(uid).update({ state: state });
    }
    updateProd(producto, foto) {
        return this.productos.doc(producto.codeID).update({
            name: producto.name,
            price: producto.price,
            foodTypes: producto.foodTypes,
            cook: producto.cook,
            description: producto.description
        }).then(() => {
            if (foto) {
                this.fileService.subirFotoProducto(foto, producto.codeID);
            }
        }).then(() => {
            return true;
        }).catch(() => {
            return false;
        });
    }
    GetProductByID(id) {
        let docRef = this.db.collection('productos', ref => ref.where('codeID', '==', id));
        return docRef.get().toPromise().then(doc => {
            let product = doc.docs[0].data();
            product.codeID = doc.docs[0].id;
            return product;
        });
    }
};
ProductService.ctorParameters = () => [
    { type: angularfire2_firestore__WEBPACK_IMPORTED_MODULE_2__["AngularFirestore"] },
    { type: _angular_fire_functions__WEBPACK_IMPORTED_MODULE_3__["AngularFireFunctions"] },
    { type: _firestorage_file_service__WEBPACK_IMPORTED_MODULE_6__["FileService"] }
];
ProductService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], ProductService);



/***/ }),

/***/ "./src/app/services/firebase/survey.service.ts":
/*!*****************************************************!*\
  !*** ./src/app/services/firebase/survey.service.ts ***!
  \*****************************************************/
/*! exports provided: SurveyService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SurveyService", function() { return SurveyService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var angularfire2_firestore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! angularfire2/firestore */ "./node_modules/angularfire2/firestore/index.js");
/* harmony import */ var angularfire2_firestore__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(angularfire2_firestore__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var src_app_classes_helpers_common_helper__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/classes/helpers/common-helper */ "./src/app/classes/helpers/common-helper.ts");




let SurveyService = class SurveyService {
    constructor(db) {
        this.db = db;
    }
    GetAll() {
        return this.db.collection('encuestas');
    }
    GetAll2() {
        return this.db.collection('encuestas');
    }
    Add(surv) {
        return new Promise((resolve, reject) => {
            this.db.collection('encuestas').add(src_app_classes_helpers_common_helper__WEBPACK_IMPORTED_MODULE_3__["CommonHelper"].ConvertToObject(surv))
                .then(() => resolve())
                .catch(() => reject());
        });
    }
    getAllGood() {
        return this.db.collection('encuestas', ref => ref.where('commentType', '==', true));
    }
};
SurveyService.ctorParameters = () => [
    { type: angularfire2_firestore__WEBPACK_IMPORTED_MODULE_2__["AngularFirestore"] }
];
SurveyService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], SurveyService);



/***/ }),

/***/ "./src/app/services/firebase/table.service.ts":
/*!****************************************************!*\
  !*** ./src/app/services/firebase/table.service.ts ***!
  \****************************************************/
/*! exports provided: TableService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TableService", function() { return TableService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var angularfire2_firestore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! angularfire2/firestore */ "./node_modules/angularfire2/firestore/index.js");
/* harmony import */ var angularfire2_firestore__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(angularfire2_firestore__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var src_app_models_table__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/models/table */ "./src/app/models/table.ts");




let TableService = class TableService {
    constructor(db) {
        this.db = db;
    }
    GetAll() {
        return this.db.collection("mesas");
    }
    UpdateStatus(tableID, newState) {
        let document = this.db.collection("mesas", ref => ref.where('tableID', '==', tableID));
        return document.get().toPromise()
            .then(doc => {
            let table = doc.docs[0].data();
            table.id = doc.docs[0].id;
            table.state = newState;
            return this.db.collection("mesas").doc(table.id).update(table)
                .then(() => {
                return true;
            })
                .catch(() => {
                return false;
            });
        })
            .catch(() => {
            return false;
        });
    }
    FindAvailable() {
        let documents = this.db.collection('mesas', ref => ref.where('state', '==', src_app_models_table__WEBPACK_IMPORTED_MODULE_3__["TableState"].available));
        return documents.get().toPromise()
            .then(doc => {
            let newTable;
            let found = false;
            doc.docs.forEach(table => {
                if (table.exists && !found) {
                    newTable = table.data();
                    newTable.id = table.id;
                    found = true;
                }
            });
            if (!found)
                newTable = src_app_models_table__WEBPACK_IMPORTED_MODULE_3__["Table"].Create('No hay', src_app_models_table__WEBPACK_IMPORTED_MODULE_3__["TableState"].closed);
            return newTable;
        });
    }
};
TableService.ctorParameters = () => [
    { type: angularfire2_firestore__WEBPACK_IMPORTED_MODULE_2__["AngularFirestore"] }
];
TableService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], TableService);



/***/ }),

/***/ "./src/app/services/firebase/user.service.ts":
/*!***************************************************!*\
  !*** ./src/app/services/firebase/user.service.ts ***!
  \***************************************************/
/*! exports provided: UserService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserService", function() { return UserService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var angularfire2_firestore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! angularfire2/firestore */ "./node_modules/angularfire2/firestore/index.js");
/* harmony import */ var angularfire2_firestore__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(angularfire2_firestore__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _angular_fire_functions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/fire/functions */ "./node_modules/@angular/fire/functions/es2015/index.js");
/* harmony import */ var src_app_models_user__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/models/user */ "./src/app/models/user.ts");
/* harmony import */ var src_app_classes_helpers_common_helper__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/classes/helpers/common-helper */ "./src/app/classes/helpers/common-helper.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _firestorage_file_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../firestorage/file.service */ "./src/app/services/firestorage/file.service.ts");








let UserService = class UserService {
    constructor(db, afsFunc, fileService) {
        this.db = db;
        this.afsFunc = afsFunc;
        this.fileService = fileService;
        //public listado: Product[];
        //public listado: Array<Product>;
        this.listado = new Array();
        this.usuarios = this.db.collection('usuarios');
        this.traerUsuariosArray();
    }
    GetAll_InArray() {
        return this.db.collection('usuarios').get().toPromise()
            .then(doc => {
            let users = [];
            doc.docs.forEach(el => {
                let us = el.data();
                us.password = '';
                users.push(us);
            });
            return users;
        });
    }
    GetAll() {
        return this.db.collection("usuarios").valueChanges().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["map"])(actions => {
            return actions.map(action => {
                return action = Object.assign(new src_app_models_user__WEBPACK_IMPORTED_MODULE_4__["User"](), action);
            });
        }));
    }
    GetAll2() {
        return this.db.collection("usuarios");
    }
    SetRole(email, role) {
        this.SetRoleInFirebase(email, role);
        this.SetRoleInCloudFunctions(email, role);
    }
    Add(user) {
        this.db.collection("usuarios").add(src_app_classes_helpers_common_helper__WEBPACK_IMPORTED_MODULE_5__["CommonHelper"].ConvertToObject(user));
    }
    SetRoleInCloudFunctions(email, role) {
        const setRoleFunction = this.afsFunc.httpsCallable('setRole');
        setRoleFunction({ email: email, desiredRole: role })
            .subscribe(response => console.log(response));
    }
    SetRoleInFirebase(email, role) {
        this.GetUserByEmail(email).then(doc => {
            let user = doc;
            user.role = role;
            this.db.collection('usuarios').doc(doc.id).update(user);
            console.log('User role updated on firebase!');
        });
    }
    GetUserByEmail(email) {
        let docRef = this.db.collection('usuarios', ref => ref.where('email', '==', email));
        return docRef.get().toPromise().then(doc => {
            if (!doc.empty) {
                let user = doc.docs[0].data();
                user.id = doc.docs[0].id;
                return user;
            }
            else {
                return null;
            }
        });
    }
    buscarEmail(email) {
        let docRef = this.db.collection('usuarios', ref => ref.where('email', '==', email));
        return docRef.get().toPromise().then(doc => {
            if (!doc.empty) {
                return true;
            }
            else {
                return false;
            }
        });
    }
    GetAllWaiters() {
        let documents = this.db.collection('usuarios', ref => ref.where('role', '==', 'mozo'));
        return documents.get().toPromise().then(doc => {
            var waiters = [];
            doc.docs.forEach(user => {
                let waiter = user.data();
                waiter.id = user.id;
                waiters.push(waiter);
            });
            return waiters;
        });
    }
    GetUserByID(id) {
        let docRef = this.db.collection('usuarios', ref => ref.where('id', '==', id));
        return docRef.get().toPromise().then(doc => {
            let user = doc.docs[0].data();
            user.id = doc.docs[0].id;
            return user;
        });
    }
    // public ModifyProfileImage(email: string, image: string): Promise<void>
    // {
    // 	return this.GetUserByEmail(email).then(doc => {
    // 		let user = doc;
    // 		user.image = image;
    // 		console.log('new token', image);
    // 		this.db.collection('usuarios').doc(doc.id).update(user);
    // 	})
    // }
    ModifyProfileImage(email, image) {
        return this.GetUserByEmail(email).then(doc => {
            let user = doc;
            this.fileService.subirFotoUsuarios(image, user.id);
        });
    }
    traerUsuariosArray() {
        let listadoObservable = null;
        listadoObservable = this.traerUsuarios();
        console.log("traerUsuariosArray ListadoObservable");
        listadoObservable.subscribe(usrs => {
            usrs.forEach(unUser => {
                let u = new src_app_models_user__WEBPACK_IMPORTED_MODULE_4__["User"];
                u.id = unUser.id;
                u.name = unUser.name;
                u.lastname = unUser.lastname;
                u.email = unUser.email;
                u.image = unUser.image;
                u.role = unUser.role;
                u.state = unUser.state;
                u.deleted = unUser.deleted;
                u.password = unUser.password;
                if (!u.deleted) {
                    if (u.role != src_app_models_user__WEBPACK_IMPORTED_MODULE_4__["Role"].cliente)
                        this.listado.push(u);
                }
            });
        });
    }
    traerUsuarios() {
        return this.usuarios.snapshotChanges().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["map"])(actions => {
            return actions.map(action => {
                const datos = action.payload.doc.data();
                const id = action.payload.doc.id;
                return Object.assign({ id }, datos);
            });
        }));
    }
    persistirUsuario(usuario, foto) {
        let idGenerado;
        return this.usuarios.add(src_app_classes_helpers_common_helper__WEBPACK_IMPORTED_MODULE_5__["CommonHelper"].ConvertToObject(usuario)).then(doc => {
            this.usuarios.doc(doc.id).update({ id: doc.id });
            idGenerado = doc.id;
        })
            .then(() => {
            if (foto) {
                return this.fileService.subirFotoUsuarios(foto, idGenerado).then(() => {
                    return true;
                });
            }
            else {
                return this.fileService.subirFotoGenericaUsuarios(idGenerado).then(() => {
                    return true;
                });
            }
        }).catch(() => {
            return false;
        });
    }
    updateState(uid, state) {
        this.usuarios.doc(uid).update({ state: state });
    }
    delete(uid) {
        this.usuarios.doc(uid).update({ deleted: true });
    }
    updateUser(usuario, foto) {
        let retorno = this.usuarios.doc(usuario.id).update({
            name: usuario.name,
            lastname: usuario.lastname,
        })
            .then(() => {
            if (foto) {
                return this.fileService.subirFotoUsuarios(foto, usuario.id).then(() => {
                    return true;
                });
            }
        }).catch(() => {
            return false;
        });
        console.log(retorno);
        return retorno;
    }
};
UserService.ctorParameters = () => [
    { type: angularfire2_firestore__WEBPACK_IMPORTED_MODULE_2__["AngularFirestore"] },
    { type: _angular_fire_functions__WEBPACK_IMPORTED_MODULE_3__["AngularFireFunctions"] },
    { type: _firestorage_file_service__WEBPACK_IMPORTED_MODULE_7__["FileService"] }
];
UserService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], UserService);



/***/ }),

/***/ "./src/app/services/firestorage/file.service.ts":
/*!******************************************************!*\
  !*** ./src/app/services/firestorage/file.service.ts ***!
  \******************************************************/
/*! exports provided: FileService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FileService", function() { return FileService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_fire_storage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/fire/storage */ "./node_modules/@angular/fire/storage/es2015/index.js");
/* harmony import */ var q__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! q */ "./node_modules/q/q.js");
/* harmony import */ var q__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(q__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var angularfire2_firestore__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! angularfire2/firestore */ "./node_modules/angularfire2/firestore/index.js");
/* harmony import */ var angularfire2_firestore__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(angularfire2_firestore__WEBPACK_IMPORTED_MODULE_4__);





let FileService = class FileService {
    constructor(angularFirestore, storage) {
        this.angularFirestore = angularFirestore;
        this.storage = storage;
        this.products = this.angularFirestore.collection('productos');
        this.users = this.angularFirestore.collection('usuarios');
        this.orders = this.angularFirestore.collection('pedidos');
    }
    Upload(fileName, file) {
        return this.storage.upload(fileName, file).
            then((success) => Object(q__WEBPACK_IMPORTED_MODULE_3__["resolve"])(success))
            .catch((error) => Object(q__WEBPACK_IMPORTED_MODULE_3__["reject"])(error.message));
    }
    GetImageURL(fileName) {
        return this.storage.ref(fileName).getDownloadURL().toPromise().then(URL => Object(q__WEBPACK_IMPORTED_MODULE_3__["resolve"])(URL));
    }
    subirFotoProducto(foto, uid) {
        const pathFoto = `imagenesProductos/${uid}`;
        const tarea = this.storage.upload(pathFoto, foto);
        tarea.then(() => {
            this.storage
                .ref(pathFoto)
                .getDownloadURL().subscribe(url => {
                this.updatePhotoUrlProduct(url, uid);
            });
        });
    }
    updatePhotoUrlProduct(url, uid) {
        this.products.doc(uid).update({ image: url });
    }
    subirFotoUsuarios(foto, uid) {
        const pathFoto = `imagenesUsuarios/${uid}`;
        const tarea = this.storage.upload(pathFoto, foto);
        return tarea.then(() => {
            this.storage
                .ref(pathFoto)
                .getDownloadURL().subscribe(url => {
                this.updatePhotoUrlUsers(url, uid);
                //this.updatePhotoUrlUsers(url, uid).then(()=>{
                //location.reload();
                //});
            });
        }).then(() => {
            //location.reload();
            return true;
        }).catch(() => {
            return false;
        });
        ;
    }
    subirFotoGenericaUsuarios(uid) {
        const url = 'https://firebasestorage.googleapis.com/v0/b/tplab4-aa5ae.appspot.com/o/imagenesUsuarios%2Fdefault-profile.png?alt=media&token=e03046d0-3237-4039-8bd3-a1ba051c0645';
        return this.users.doc(uid).update({ image: url }).then(() => {
            return true;
        });
    }
    updatePhotoUrlUsers(url, uid) {
        return this.users.doc(uid).update({ image: url }).then(() => {
            return true;
        });
    }
    updatePhotoUrlOrders(url, uid) {
        console.log(url);
        console.log(uid);
        return this.orders.doc(uid).update({ image: url }).then(() => {
            return true;
        });
    }
    subirFotoPedido(foto, uid) {
        const pathFoto = `imagenesPedidos/${uid}`;
        const tarea = this.storage.upload(pathFoto, foto);
        console.log("uid" + uid);
        return tarea.then(() => {
            this.storage
                .ref(pathFoto)
                .getDownloadURL().subscribe(url => {
                this.updatePhotoUrlOrders(url, uid);
            });
        }).then(() => {
            return true;
        }).catch(() => {
            return false;
        });
        ;
    }
};
FileService.ctorParameters = () => [
    { type: angularfire2_firestore__WEBPACK_IMPORTED_MODULE_4__["AngularFirestore"] },
    { type: _angular_fire_storage__WEBPACK_IMPORTED_MODULE_2__["AngularFireStorage"] }
];
FileService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], FileService);



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment, FirebaseConfig */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FirebaseConfig", function() { return FirebaseConfig; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

const environment = {
    production: false
};
const FirebaseConfig = {
    apiKey: "AIzaSyBDTW-VITk7AxwM2UTC3WHXBocAbkQSw-0",
    authDomain: "tplab4-aa5ae.firebaseapp.com",
    databaseURL: "https://tplab4-aa5ae.firebaseio.com",
    projectId: "tplab4-aa5ae",
    storageBucket: "tplab4-aa5ae.appspot.com",
    messagingSenderId: "509156396761",
    appId: "1:509156396761:web:4135bfd7ae9f2726a278c8"
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");





if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\tfernandez_mecon\Desktop\GitHub\comandaLab4\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map