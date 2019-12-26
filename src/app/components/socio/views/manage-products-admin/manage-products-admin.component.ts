import { Component, OnInit } from '@angular/core';
import { Product, FoodType, Cook } from 'src/app/models/product';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Subject } from 'rxjs';
import { ProductService } from 'src/app/services/firebase/product.service';

@Component({
  selector: 'app-manage-products-admin',
  templateUrl: './manage-products-admin.component.html',
  styleUrls: ['./manage-products-admin.component.scss']
})
export class ManageProductsAdminComponent implements OnInit {

  public products: Product[];
  public showingProducts: Product[];
  public productForm: FormGroup;
  public onReset: Subject<void> = new Subject<void>();
  public file: File;

  constructor(private productService: ProductService) { }

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
    })

    this.products = new Array<Product>();

    //this.products = this.CreateTestProducts();
    this.showingProducts = this.products;
    console.log(this.showingProducts);
  }

  private CreateTestProducts(): Product[] {
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

  public addProduct(): void {
    let product: Product;
    let array: Array<any>;

    array = this.traerFoodTypes();

    product = Product.Create(
      '',
      this.productForm.value.productName,
      '',
      this.productForm.value.productPrice,
      array,
      this.productForm.value.productCook,
      this.productForm.value.productDescription
    )

    this.productService.persistirProducto(product, this.file);
  }

  onFileChanged(event) {
    this.file = event.target.files[0];
  }

  public traerFoodTypes(): Array<string> {

    let retorno = new Array<string>();

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

  // ##### FILTER FUNCTIONS #####

  public Filter(type: string): void {
    this.showingProducts = this.products.filter((element) => {
      if (element.IsFoodType(type))
        return element;
    })
  }

  public ClearFilters(): void {
    this.showingProducts = this.products;
  }

  public CancelOrder(): void {
    this.onReset.next();
  }

}
