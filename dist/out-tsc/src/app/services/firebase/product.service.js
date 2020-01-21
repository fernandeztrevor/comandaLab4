import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { Product } from 'src/app/models/product';
import { map } from 'rxjs/operators';
import { CommonHelper } from 'src/app/classes/helpers/common-helper';
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
    traerProductos() {
        return this.productos.snapshotChanges().pipe(map(actions => {
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
                let p = new Product;
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
        return this.productos.add(CommonHelper.ConvertToObject(producto)).then(doc => {
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
ProductService = tslib_1.__decorate([
    Injectable({
        providedIn: 'root'
    })
], ProductService);
export { ProductService };
//# sourceMappingURL=product.service.js.map