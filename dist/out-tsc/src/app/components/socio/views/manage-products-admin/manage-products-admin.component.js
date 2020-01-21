import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
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
ManageProductsAdminComponent = tslib_1.__decorate([
    Component({
        selector: 'app-manage-products-admin',
        templateUrl: './manage-products-admin.component.html',
        styleUrls: ['./manage-products-admin.component.scss']
    })
], ManageProductsAdminComponent);
export { ManageProductsAdminComponent };
//# sourceMappingURL=manage-products-admin.component.js.map