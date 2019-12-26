import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';
import { AngularFireFunctions } from '@angular/fire/functions';
import { Product, FoodType, Cook } from 'src/app/models/product';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
//import { getLocaleFirstDayOfWeek } from '@angular/common';
//import { runInThisContext } from 'vm';
import { FileService } from '../firestorage/file.service';
import { CommonHelper } from 'src/app/classes/helpers/common-helper';

@Injectable({
    providedIn: 'root'
})

export class ProductService {
    public productos: AngularFirestoreCollection;
    //public listado: Product[];
    public listado: Array<Product>;

    constructor(private db: AngularFirestore, private afsFunc: AngularFireFunctions, private fileService: FileService) {
        this.productos = this.db.collection<Product>('productos');
        this.traerProductosArray();
    }

     private CreateTestProducts(): Product[]
     {
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

    traerProductos(): Observable<any[]> {
        return this.productos.snapshotChanges().pipe(
            map(actions => {
                return actions.map(action => {
                    const datos = action.payload.doc.data() as Product;
                    const id = action.payload.doc.id;
                    return { id, ...datos };
                });
            })
        );
    }

    traerProductosArray() {
        //this.CreateTestProducts();

        //let listadoObservable: Observable<any[]>;
        let listadoObservable = null;

        listadoObservable = this.traerProductos();
        console.log(listadoObservable);

        // if (listadoObservable == null) {
        //     this.CreateTestProducts();
        // }
        listadoObservable.subscribe(prods => {
            prods.forEach(unProd => {
                
                let p = new Product;
                p.codeID = unProd.codeID;
                p.cook = unProd.cook;
                p.description = unProd.description;
                p.foodTypes = unProd.foodTypes;
                p.name = unProd.name;
                p.pathImg = unProd.pathImg;
                p.price = unProd.price;
                p.state = unProd.state;
                p.worker = unProd.worker;
                
                this.listado.push(p);
            })
        })
    }

    //persistirProducto(producto: Product, foto?: Array<File>) {
        persistirProducto(producto: Product, foto: File) {

        console.log(foto);

        
        this.productos.add(CommonHelper.ConvertToObject(producto)).then(doc => {
            this.productos.doc(doc.id).update({ codeID: doc.id });
            this.productos.doc(doc.id).update({ pathImg: doc.id });
            if (foto) {
               this.fileService.subirFoto(foto, doc.id);
            }
        });
    }

}
