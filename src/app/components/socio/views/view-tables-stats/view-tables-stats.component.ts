import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Subject, Observable } from 'rxjs';
import { OrderService } from 'src/app/services/firebase/order.service';
import { Order } from 'src/app/models/order';
import { map } from 'rxjs/operators';
import { Survey } from 'src/app/models/survey';
import { SurveyService } from 'src/app/services/firebase/survey.service';

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
  public mesaMayorFacturacion: any = null;
  public mesaMenorFacturacion: any = null;
  public facturaMayorImporte: any = null;
  public facturaMenorImporte: any = null;

  public lista: any[];
  public arrayAcumulador: any[];

  public surveys: any;
  public survey: Survey;
  public surveysGood: any;
  public surveysBad: any;

  public settingsForm: FormGroup;
  public onReset: Subject<void> = new Subject<void>();
  @Input() fechaInicio: number;
  @Input() fechaFin: number;

  constructor(private orderService: OrderService, private surveyService: SurveyService) { }

  ngOnInit() {
    this.surveys = this.surveyService.GetAll().valueChanges();

    this.settingsForm = new FormGroup({
      fechaInicio: new FormControl(null),
      fechaFin: new FormControl(null),
    });
    this.orders = this.orderService.GetAll();
    this.ClearFilters();
  }

  public SelectSurvey(surv: Survey): void
	{
		this.survey = surv;
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
    this.setNulls();

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

    this.surveysGood = this.surveyService.GetAll2().valueChanges().pipe(
      map(surveys => {
        return surveys.filter(survey => {
          survey = Object.assign(new Survey(), survey);
          if (survey['order']['timestamp'] > this.fechaInicio && survey['order']['timestamp'] < this.fechaFin) {
            if(((survey['cookScore']+survey['restaurantScore']+survey['tableScore']+survey['waiterScore'])/4)>=7)
            return survey;
          }
          console.log(surveys);
        });
      })
      
    );

    this.surveysBad = this.surveyService.GetAll2().valueChanges().pipe(
      map(surveys => {
        return surveys.filter(survey => {
          survey = Object.assign(new Survey(), survey);
          if (survey['order']['timestamp'] > this.fechaInicio && survey['order']['timestamp'] < this.fechaFin) {
            if(((survey['cookScore']+survey['restaurantScore']+survey['tableScore']+survey['waiterScore'])/4)<=4)
            return survey;
          }
          console.log(surveys);
        });
      })
      
    );

    this.getTops();
  }

  public setNulls(){
    this.mesaMasUsada= null;
    this.mesaMenosUsada= null;
    this.mesaMayorFacturacion = null;
    this.mesaMenorFacturacion = null;
    this.facturaMayorImporte = null;
    this.facturaMenorImporte = null;
  
    this.lista= null;
    this.arrayAcumulador= null;
  }

  public getTops() {
    this.lista = new Array<any>();
    let cantidadNombres = new Array<any>();
    let cantidad: number;
    let copia = this.showingOrders;
    this.facturaMayorImporte = new Order();
    this.facturaMenorImporte = new Order();
    this.arrayAcumulador = new Array<number>();

    copia.subscribe(orders => {
      orders.map(order => {
        if (order) {

          this.sumarIngresos(order);
          this.lista.push(order.tableID);
          this.mayorMenorImporte(order);
        }

      }).map(() => {
        cantidadNombres = this.lista.reduce((contadorNombre, nombre) => {
          contadorNombre[nombre] = (contadorNombre[nombre] || 0) + 1;
          return contadorNombre;
        }, {});
      });

      var result = Object.keys(cantidadNombres).map(function (key) {
        return [String(key), cantidadNombres[key]];
      });
      this.getMayoryMenorFacturación();
      cantidad = result.length;
      this.mesaMasUsada = result[0];
      this.mesaMenosUsada = result[cantidad - 1];
      console.log(this.mesaMenosUsada);
      console.log(this.mesaMasUsada);
      console.log(this.facturaMenorImporte);
      console.log(this.facturaMayorImporte);
      console.log(this.mesaMenorFacturacion);
      console.log(this.mesaMayorFacturacion);
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
    if (this.arrayAcumulador[order.tableID] == null) {
      this.arrayAcumulador[order.tableID] = order.totalPrice;
    } else {
      this.arrayAcumulador[order.tableID] = this.arrayAcumulador[order.tableID] + order.totalPrice;
    }
  }

  public getMayoryMenorFacturación() {
    this.arrayAcumulador.forEach(elemento => {
      console.log(elemento);
      if (this.mesaMayorFacturacion == null || this.mesaMenorFacturacion == null) {
        this.mesaMenorFacturacion = this.arrayAcumulador[this.arrayAcumulador.indexOf(elemento)];
        this.mesaMayorFacturacion = this.arrayAcumulador[this.arrayAcumulador.indexOf(elemento)];
      } else {
        if (elemento < this.mesaMenorFacturacion) {
          this.mesaMenorFacturacion = this.arrayAcumulador[this.arrayAcumulador.indexOf(elemento)];
        }
        if (elemento > this.mesaMayorFacturacion) {

          this.mesaMayorFacturacion = this.arrayAcumulador[this.arrayAcumulador.indexOf(elemento)];
        }
      }

    })

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




}
