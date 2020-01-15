import { Component, OnInit } from '@angular/core';
import { OrderService } from 'src/app/services/firebase/order.service';
import { Order } from 'src/app/models/order';
import { map } from 'rxjs/operators';
import { AuthService } from 'src/app/services/authentication/auth.service';
import { User } from 'src/app/models/user';

@Component({
  selector: 'app-view-orders-stats',
  templateUrl: './view-orders-stats.component.html',
  styleUrls: ['./view-orders-stats.component.scss']
})
export class ViewOrdersStatsComponent implements OnInit {
  public orders: any;
  public cancelledOrders: any;
  public delayedOrders: any;
  public topBest: any;
  public me: User;


  constructor(private orderService: OrderService, private authService: AuthService) { }

  ngOnInit() {

    // this.cancelledOrders = this.orderService.GetAll().valueChanges()
    //   .pipe(
    //     map(orders => {
    //       return orders.filter(order => {
    //         order = Object.assign(new Order(), order);
    //         if (order['state'] == "Cancelado")
    //           return order;
    //       });
    //     })
    //   );
    this.cancelledOrders = this.orderService.GetAllCancelled();
    this.delayedOrders = this.orderService.GetAllDelayed();
    this.topBest = this.orderService.GetTopBest();


    //   this.delayedOrders = this.orderService.GetAll().valueChanges()
    //     .pipe(
    //       map(orders => {
    //         return orders.filter(order => {
    //           order = Object.assign(new Order(), order);
    //           if (order['delayed'] < 0) {
    //             return order;
    //           }

    //         });
    //       })
    //     );
    // };
  }
}







