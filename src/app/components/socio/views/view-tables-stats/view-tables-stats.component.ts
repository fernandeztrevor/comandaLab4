import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Subject, Observable } from 'rxjs';
import { OrderService } from 'src/app/services/firebase/order.service';
import { Order } from 'src/app/models/order';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-view-tables-stats',
  templateUrl: './view-tables-stats.component.html',
  styleUrls: ['./view-tables-stats.component.scss']
})
export class ViewTablesStatsComponent implements OnInit {

  public orders: any;
  public showingOrders: Observable<any[]>;

  public mesaMasUsada: any = null;
  public mesaMenosUsada: any = null;
  public mesaMayorFacturacion: Order = null;
  public mesaMenorFacturacion: Order = null;
  public facturaMayorImporte: any = null;
  public facturaMenorImporte: any = null;

  public lista: any[];
  public arrayAcumulador: any[];


  public settingsForm: FormGroup;
  public onReset: Subject<void> = new Subject<void>();
  @Input() fechaInicio: number;
  @Input() fechaFin: number;

  constructor(private orderService: OrderService) { }

  ngOnInit() {
    this.settingsForm = new FormGroup({
      fechaInicio: new FormControl(null),
      fechaFin: new FormControl(null),
    });
    this.orders = this.orderService.GetAll();
    this.ClearFilters();
  }

  public ClearFilters(): void {
    this.search();
  }

  public Cancel(): void {
    this.settingsForm.reset();
    this.onReset.next();
    this.settingsForm.controls['fechaInicio'].setValue(null);
    this.settingsForm.controls['fechaFin'].setValue(null);
    this.search();
  }

  public search() {

    if (this.settingsForm.value.fechaInicio == null || this.settingsForm.value.fechaInicio == NaN) {
      this.fechaInicio = 0;
    } else {
      this.fechaInicio = Date.parse(this.settingsForm.value.fechaInicio.toString());
    }

    if (this.settingsForm.value.fechaFin == null || this.settingsForm.value.fechaFin == NaN) {
      this.fechaFin = Date.now();
    } else {
      this.fechaFin = Date.parse(this.settingsForm.value.fechaFin.toString());
    }

    this.showingOrders = this.orderService.GetAll().valueChanges().pipe(
      map(orders => {
        return orders.filter(order => {
          order = Object.assign(new Order(), order);
          if (order['timestamp'] > this.fechaInicio && order['timestamp'] < this.fechaFin) {
            return order;
          }
        });
      })
    );

    this.getTops();
  }

  public getTops() {
    this.lista = new Array<any>();
    let cantidadNombres = new Array<any>();
    let cantidad: number;
    let copia = this.showingOrders;
    this.facturaMayorImporte, this.facturaMenorImporte = new Order();
    this.arrayAcumulador = new Array<number>();    

    copia.subscribe(orders => {
      orders.map(order => {
        this.mayorMenorImporte(order);
        this.sumarIngresos(order);
        

        this.lista.push(order.tableID);
      }).map(() => {
        cantidadNombres = this.lista.reduce((contadorNombre, nombre) => {
          contadorNombre[nombre] = (contadorNombre[nombre] || 0) + 1;
          return contadorNombre;
        }, {});
      });
      //console.log(cantidadNombres);

      var result = Object.keys(cantidadNombres).map(function (key) {
        return [String(key), cantidadNombres[key]];
      });
      cantidad = result.length;
      this.mesaMasUsada = result[0];
      this.mesaMenosUsada = result[cantidad - 1];
      console.log(this.mesaMenosUsada);
      console.log(this.mesaMasUsada);
      console.log(this.facturaMenorImporte); 
      console.log(this.facturaMayorImporte);
      
      console.log(this.arrayAcumulador);
    });

  }

  public mayorMenorImporte(order: Order) {

    if (this.facturaMayorImporte == null || this.facturaMenorImporte == null) {
      this.facturaMayorImporte = order;
      this.facturaMenorImporte = order;
    } else {
      if (order.totalPrice > this.facturaMayorImporte.totalPrice) {
        this.facturaMayorImporte = order;
      }
      if (order.totalPrice < this.facturaMayorImporte.totalPrice) {
        this.facturaMenorImporte = order;
      }
    }
  }

  public sumarIngresos(order: Order) {
    console.log(order.tableID);
    if (this.arrayAcumulador[order.tableID] == null ) {
      console.log(order.totalPrice);
      this.arrayAcumulador[order.tableID] = order.totalPrice;
    } else {
      //this.arrayAcumulador.push(order.tableID, (this.arrayAcumulador[order.tableID] + order.totalPrice));
      this.arrayAcumulador[order.tableID] = this.arrayAcumulador[order.tableID] + order.totalPrice;
    }
    console.log(this.arrayAcumulador);

    //let otroarray = this.arrayAcumulador.filter(Boolean);    

    // this.arrayAcumulador.sort(function(a, b) {
    //   return (b.value - a.value)
    // });
  }

  



}
