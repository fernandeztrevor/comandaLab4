import { Component, OnInit, Input } from '@angular/core';
import { OrderService } from 'src/app/services/firebase/order.service';
import { Order } from 'src/app/models/order';
import { map } from 'rxjs/operators';
import { AuthService } from 'src/app/services/authentication/auth.service';
import { User } from 'src/app/models/user';
import { FormGroup, FormControl } from '@angular/forms';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-view-orders-stats',
  templateUrl: './view-orders-stats.component.html',
  styleUrls: ['./view-orders-stats.component.scss']
})
export class ViewOrdersStatsComponent implements OnInit {

  //public orders: Order[];
  public orders: any;
  public showingOrders: any;
  public cancelledOrders: any;
  public delayedOrders: any;
  public topBest: any = null;
  public topWorst: any = null;
  public me: User;

  public settingsForm: FormGroup;
  public onReset: Subject<void> = new Subject<void>();
  @Input() fechaInicio: number;
  @Input() fechaFin: number;


  constructor(private orderService: OrderService, private authService: AuthService) { }

  ngOnInit() {

    this.settingsForm = new FormGroup({
      fechaInicio: new FormControl(null),
      fechaFin: new FormControl(null),
    });

    //this.orders = new Array<Order>();
    //this.orders = this.orderService.listado;
    this.orders = this.orderService.GetAll();

    this.ClearFilters();

    //esto de abajo se tiene que pasar a una funcion
    //this.cancelledOrders = this.orderService.GetAllCancelled();
    //this.delayedOrders = this.orderService.GetAllDelayed();

    // this.orderService.GetTopBest().then(() => {
    //   this.topBest = this.orderService.primerosTres;
    //   this.topWorst = this.orderService.ultimosTres;
    //   console.log(this.topWorst);
    // });



  }


  public ClearFilters(): void {
    //this.showingOrders = this.orders;
    this.search();
    this.getCancelled();
    this.getDelayed();
  }

  public Cancel(): void {
    this.settingsForm.reset();
    this.onReset.next();
    this.settingsForm.controls['fechaInicio'].setValue(null);
    this.settingsForm.controls['fechaFin'].setValue(null);
    this.search();
  }

  public search() {

    console.log(this.fechaFin);
    console.log(this.fechaInicio);


    if (this.settingsForm.value.fechaInicio == null) {
      this.fechaInicio = 0;
    } else {
      this.fechaInicio = Date.parse(this.settingsForm.value.fechaInicio.toString());
    }

    if (this.settingsForm.value.fechaFin == null) {
      this.fechaFin = Date.now();
    } else {
      this.fechaFin = Date.parse(this.settingsForm.value.fechaFin.toString());
    }

    console.log(this.fechaFin);
    console.log(this.fechaInicio);

    this.showingOrders = this.orderService.GetAll().valueChanges().pipe(
      map(orders => {
        return orders.filter(order => {
          order = Object.assign(new Order(), order);
          if (order['timestamp'] > this.fechaInicio && order['timestamp'] < this.fechaFin) {
            return order;
          }
        });
      })
    )

    this.getDelayed();
    this.getCancelled();
  }

  public getCancelled() {
    console.log(this.showingOrders);
    this.cancelledOrders = this.orderService.GetAll().valueChanges().pipe(
      map(orders => {
        return orders.filter(order => {
          order = Object.assign(new Order(), order);
          if (order['state'] == "Cancelado") {
            return order;
          }
        });
      })
    )
  }

  public getDelayed() {
    console.log(this.showingOrders);
    this.delayedOrders = this.orderService.GetAll().valueChanges().pipe(
      map(orders => {
        return orders.filter(order => {
          order = Object.assign(new Order(), order);          
          if (order['delayed'] < 0) {
            console.log(order['delayed']);
            return order;
          }
        });
      })
    )
  }

  public getTopBest() {
    console.log(this.showingOrders);
    let listado = new Array<any>();
    this.showingOrders.valueChanges().pipe
  }

  

  public setDate(){
    console.log(Date.parse(this.settingsForm.value.fechaInicio.toString()));
    if(this.settingsForm.value.fechaInicio != null){
       this.fechaInicio = Date.parse(this.settingsForm.value.fechaInicio.toString());
     }
     else{
       this.fechaFin = Date.parse(this.settingsForm.value.fechaFin.toString());
     }
  }
}







