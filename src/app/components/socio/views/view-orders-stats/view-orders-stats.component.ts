import { Component, OnInit, Input, RendererFactory2 } from '@angular/core';
import { OrderService } from 'src/app/services/firebase/order.service';
import { Order } from 'src/app/models/order';
import { map } from 'rxjs/operators';
import { AuthService } from 'src/app/services/authentication/auth.service';
import { User } from 'src/app/models/user';
import { FormGroup, FormControl } from '@angular/forms';
import { Subject, Observable, observable } from 'rxjs';
import { ToastrService } from 'ngx-toastr';
import { DatePipe } from '@angular/common';

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
  public mostrar = false;

  public lista: any[];

  public settingsForm: FormGroup;
  public onReset: Subject<void> = new Subject<void>();
  @Input() fechaInicio: number;
  @Input() fechaFin: number;


  constructor(private orderService: OrderService, private toastr: ToastrService) { }

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
    let cantidad: number;
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

  public exportCSV() {
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

  getData(): Array<any> {

    let data: string[][] = [];

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
          const datePipe = new DatePipe('en-US');
          const myFormattedDate = datePipe.transform(order.timestamp, 'hh:mm dd/MM/yyyy');
          data.push(
            [order.codeID + ',' + myFormattedDate + ',' + order.state + '\n']);
        }
      })
    }).then(() => {
      this.orderService.GetAllCancelledOrders_InArray().then(orders => {
        data.push(['pedidosCancelados\n' + 'codigo,fecha,estado\n']);
        orders.filter(order => {
          if (order.timestamp > this.fechaInicio && order.timestamp < this.fechaFin) {
            const datePipe = new DatePipe('en-US');
            const myFormattedDate = datePipe.transform(order.timestamp, 'hh:mm dd/MM/yyyy');
            data.push(
              [order.codeID + ',' + myFormattedDate + ',' + order.state + '\n']);
          }
        })
      });
    });

    return data;
  }



}








