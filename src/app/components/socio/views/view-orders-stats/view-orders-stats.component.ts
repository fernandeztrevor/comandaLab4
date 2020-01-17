import { Component, OnInit, Input } from '@angular/core';
import { OrderService } from 'src/app/services/firebase/order.service';
import { Order } from 'src/app/models/order';
import { map } from 'rxjs/operators';
import { AuthService } from 'src/app/services/authentication/auth.service';
import { User } from 'src/app/models/user';
import { FormGroup, FormControl } from '@angular/forms';
import { Subject, Observable, observable } from 'rxjs';

@Component({
  selector: 'app-view-orders-stats',
  templateUrl: './view-orders-stats.component.html',
  styleUrls: ['./view-orders-stats.component.scss']
})
export class ViewOrdersStatsComponent implements OnInit {
  
  public orders: any;
  public showingOrders: Observable<any[]>;
  public cancelledOrders: any = null;
  public delayedOrders: any = null;
  public topBest: any = null;
  public topWorst: any = null;
  public me: User;  
  public mostrar=false;

  public lista: any[];

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
    this.getDelayed();
    this.getCancelled();
    this.getTop();
  }

  public getCancelled() {    
    this.cancelledOrders = this.showingOrders.pipe(
      map(orders => {
        return orders.filter(order => {
          order = Object.assign(new Order(), order);
          if (order['state'] == "Cancelado") {
            return order;
          }
        });
      })
    );
  }

  public getDelayed() {
    this.delayedOrders = this.showingOrders.pipe(
      map(orders => {
        return orders.filter(order => {
          order = Object.assign(new Order(), order);
          if (order['delayed'] < 0) {
            console.log(order['delayed']);
            return order;
          }
        });
      })
    );
  }

  public setDate() {
    console.log(Date.parse(this.settingsForm.value.fechaInicio.toString()));
    if (this.settingsForm.value.fechaInicio != null) {
      this.fechaInicio = Date.parse(this.settingsForm.value.fechaInicio.toString());
    }
    else {
      this.fechaFin = Date.parse(this.settingsForm.value.fechaFin.toString());
    }
  }

  public getTop() {
    this.lista = new Array<any>();
    let cantidadNombres = new Array<any>();
    let cantidad:number;
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
          
          
        })
      })
      var result = Object.keys(cantidadNombres).map(function (key) {
        return [String(key), cantidadNombres[key]];
      });
      cantidad = result.length;
      console.log(result);
      this.topBest = new Array<any>();
      this.topWorst = new Array<any>();

      this.topBest.push(result[0], result[1], result[2]);
			this.topWorst.push(result[cantidad - 3], result[cantidad - 2], result[cantidad - 1]);
    });
  }

}








