import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { Product, FoodType, Cook } from 'src/app/models/product';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Subject } from 'rxjs';
import { TargetMovimiento, TipoMovimiento } from 'src/app/models/log';
import { Role } from 'src/app/models/user';
let ProductManagementComponent = class ProductManagementComponent {
    constructor(productService, fileService, authService, movimientoService) {
        this.productService = productService;
        this.fileService = fileService;
        this.authService = authService;
        this.movimientoService = movimientoService;
        this.onReset = new Subject();
    }
    ngOnInit() {
        this.productForm = new FormGroup({
            productName: new FormControl(null, [Validators.required]),
            productPrice: new FormControl(null, [Validators.required]),
            productDescription: new FormControl(null, [Validators.required]),
            productImage: new FormControl('', [Validators.required]),
            typeComida: new FormControl(null),
            typeBebida: new FormControl(null),
            typeAlcohol: new FormControl(null),
            typePostre: new FormControl(null),
            typeCeliaco: new FormControl(null),
            typeVegano: new FormControl(null),
            productCook: new FormControl(null)
        });
        this.products = new Array();
        this.products = this.productService.listado;
        //this.showingProducts = this.products;
        this.ClearFilters();
        this.haySeleccionado = false;
        this.productoSeleccionado = null;
    }
    showProd() {
        if (this.role == "socio") {
            this.showingProducts = this.products;
            console.log("showingProducts");
        }
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
    addProduct() {
        let product;
        let array;
        array = this.traerFoodTypes();
        this.traerCook();
        product = Product.Create('', this.productForm.value.productName, '', this.productForm.value.productPrice, array, this.productForm.value.productCook, this.productForm.value.productDescription);
        this.productService.persistirProducto(product, this.file).then((value) => {
            if (value) {
                this.Cancel();
            }
            this.authService.GetCurrentUser().then(user => {
                let mensaje = `El usuario ${user.email} dió de alta el producto ${product.name}`;
                this.movimientoService.persistirMovimiento(user, TargetMovimiento.producto, TipoMovimiento.alta, mensaje);
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
            retorno.push(FoodType.comida);
        }
        if (this.productForm.value.typeBebida) {
            retorno.push(FoodType.bebida);
        }
        if (this.productForm.value.typePostre) {
            retorno.push(FoodType.postre);
        }
        if (this.productForm.value.typeAlcohol) {
            retorno.push(FoodType.alcohol);
        }
        if (this.productForm.value.typeCeliaco) {
            retorno.push(FoodType.celiaco);
        }
        if (this.productForm.value.typeVegano) {
            retorno.push(FoodType.vegano);
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
                    this.movimientoService.persistirMovimiento(user, TargetMovimiento.producto, TipoMovimiento.deshabilitacion, mensaje);
                });
            }
            if (state == "Deshabilitado") {
                this.productService.updateState(uid, "Pendiente");
                this.authService.GetCurrentUser().then(user => {
                    let mensaje = `El usuario ${user.email} habilitó el producto ${prod.name}`;
                    this.movimientoService.persistirMovimiento(user, TargetMovimiento.producto, TipoMovimiento.habilitacion, mensaje);
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
                this.movimientoService.persistirMovimiento(user, TargetMovimiento.producto, TipoMovimiento.modificacion, mensaje);
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
            if (element.cook == this.role || this.role == Role.socio)
                if (element.IsFoodType(type))
                    return element;
        });
    }
    ClearFilters() {
        //this.showingProducts = this.products;
        this.authService.GetCurrentUser().then(user => {
            this.role = user.role;
            this.showingProducts = this.products.filter((element) => {
                if (element.cook == this.role || this.role == Role.socio)
                    return element;
                //console.log(element.cook)
            });
            //console.log(this.role);
        });
    }
    Cancel() {
        this.productForm.reset();
        this.onReset.next();
    }
};
ProductManagementComponent = tslib_1.__decorate([
    Component({
        selector: 'app-product-management',
        templateUrl: './product-management.component.html',
        styleUrls: ['./product-management.component.scss']
    })
], ProductManagementComponent);
export { ProductManagementComponent };
//# sourceMappingURL=product-management.component.js.map