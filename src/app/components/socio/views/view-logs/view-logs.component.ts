import { Component, OnInit } from '@angular/core';
import { Log, Role } from 'src/app/models/log';
import { LogService } from 'src/app/services/firebase/log.service';
import { SortPipePipe } from 'src/app/pipes/sort-pipe.pipe';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Subject, Observable } from 'rxjs';
import { typeWithParameters } from '@angular/compiler/src/render3/util';
import { map, flatMap } from 'rxjs/operators';

@Component({
  selector: 'app-view-logs',
  templateUrl: './view-logs.component.html',
  styleUrls: ['./view-logs.component.scss']
})
export class ViewLogsComponent implements OnInit {

  public esVisible = false;

  public logs: any;
  //public showingLogs: Observable<any[]>;
  public showingLogs = null;

  public busqueda: string;
  public coincidencias: number;
  public todos: boolean = true;
  public arrayCB: boolean[];

  public logForm: FormGroup;
  public onReset: Subject<void> = new Subject<void>();
  public fechaInicio: number;
  public fechaFin: number;

  constructor(private logService: LogService) { }

  ngOnInit() {

    this.logForm = new FormGroup({
      typeSocio: new FormControl(null),
      typeCervecero: new FormControl(null),
      typeBartender: new FormControl(null),
      typeCliente: new FormControl(null),
      typeDelivery: new FormControl(null),
      typeCocinero: new FormControl(null),
      typeTodos: new FormControl(true),
      typeMozo: new FormControl(null),
      fechaInicio: new FormControl(null),
      fechaFin: new FormControl(null),
    });
    this.arrayCB = new Array<boolean>();

    this.enableDisable();

    this.cargarArrayCB();

    this.logs = new Array<Log>();
    this.logs = this.logService.listado;

    console.log("this.showingLogs");
    console.log(this.showingLogs);


    this.ClearFilters();
  }


  public async search() {
    this.setFechas();

    this.showingLogs = this.logService.GetAll2().valueChanges().pipe(

      map(logs => {
        return logs.filter(res => {
          res = Object.assign(new Log(), res);
          // this.showingLogs = this.logs.filter(res => {
          if (res['fecha'] > this.fechaInicio && res['fecha'] < this.fechaFin) {
            if (res['usuario'].includes(this.busqueda) || this.busqueda == null) {
              if (this.logForm.value.typeMozo && res['role'] == Role.mozo) {
                this.coincidencias++;
                return res;
              }
              if (this.logForm.value.typeBartender && res['role'] == Role.bartender) {
                this.coincidencias++;
                return res;
              }
              if (this.logForm.value.typeCervecero && res['role'] == Role.cervecero) {
                this.coincidencias++;
                return res;
              }
              if (this.logForm.value.typeCliente && res['role'] == Role.cliente) {
                this.coincidencias++;
                return res;
              }
              if (this.logForm.value.typeCocinero && res['role'] == Role.cocinero) {
                this.coincidencias++;
                return res;
              }
              if (this.logForm.value.typeDelivery && res['role'] == Role.delivery) {
                this.coincidencias++;
                return res;
              }
              if (this.logForm.value.typeSocio && res['role'] == Role.socio) {
                this.coincidencias++;
                return res;
              }
              if (this.logForm.value.typeTodos) {
                this.coincidencias++;
                return res;
              };
            };
          }
        });
      })
    );
    console.log("4"+this.esVisible);

  }

  public setFechas() {
    this.coincidencias = 0;
    if (this.logForm.value.fechaInicio == null) {
      this.fechaInicio = 0;
    } else {
      this.fechaInicio = Date.parse(this.logForm.value.fechaInicio.toString());
    }

    if (this.logForm.value.fechaFin == null) {
      this.fechaFin = Date.now();
    } else {
      this.fechaFin = Date.parse(this.logForm.value.fechaFin.toString());
    }
  }

  public Cancel(): void {
    this.logForm.reset();
    this.onReset.next();
    this.logForm.controls['typeTodos'].setValue(true);
    this.enableDisable();
    this.logForm.controls['fechaInicio'].setValue(null);
    this.logForm.controls['fechaFin'].setValue(null);
    this.ClearFilters();
  }

  public enableDisable() {
    if (this.todos) {
      this.logForm.controls['typeMozo'].disable();
      this.logForm.controls['typeCliente'].disable();
      this.logForm.controls['typeCocinero'].disable();
      this.logForm.controls['typeBartender'].disable();
      this.logForm.controls['typeCervecero'].disable();
      this.logForm.controls['typeDelivery'].disable();
      this.logForm.controls['typeSocio'].disable();

      this.logForm.controls['typeMozo'].setValue(false);
      this.logForm.controls['typeCliente'].setValue(false);
      this.logForm.controls['typeCocinero'].setValue(false);
      this.logForm.controls['typeBartender'].setValue(false);
      this.logForm.controls['typeCervecero'].setValue(false);
      this.logForm.controls['typeSocio'].setValue(false);
    } else {
      this.logForm.controls['typeMozo'].enable();
      this.logForm.controls['typeCliente'].enable();
      this.logForm.controls['typeCocinero'].enable();
      this.logForm.controls['typeBartender'].enable();
      this.logForm.controls['typeCervecero'].enable();
      this.logForm.controls['typeDelivery'].enable();
      this.logForm.controls['typeSocio'].enable();
    }
  }

  public cargarArrayCB() {
    let typeMozo: boolean = this.logForm.value.typeMozo;
    let typeCliente: boolean = this.logForm.value.typeCliente;
    let typeCocinero: boolean = this.logForm.value.typeCocinero;
    let typeBartender: boolean = this.logForm.value.typeBartender;
    let typeCervecero: boolean = this.logForm.value.typeCervecero;
    let typeDelivery: boolean = this.logForm.value.typeDelivery;
    let typeSocio: boolean = this.logForm.value.typeSocio;
    let typeTodos: boolean = this.logForm.value.typeTodos;

    this.arrayCB.push(typeBartender, typeCervecero, typeCliente, typeCocinero, typeDelivery, typeMozo, typeSocio, typeTodos);
  }

  public sendSettings() {


    this.showingLogs = this.logs.filter(res => {

      if (this.logForm.value.typeMozo && res.role == Role.mozo) {
        return res;
      }
      if (this.logForm.value.typeBartender && res.role == Role.bartender) {
        return res;
      }
      if (this.logForm.value.typeCervecero && res.role == Role.cervecero) {
        return res;
      }
      if (this.logForm.value.typeCliente && res.role == Role.cliente) {
        return res;
      }
      if (this.logForm.value.typeCocinero && res.role == Role.cocinero) {
        return res;
      }
      if (this.logForm.value.typeDelivery && res.role == Role.delivery) {
        return res;
      }
      if (this.logForm.value.typeSocio && res.role == Role.socio) {
        return res;
      }
      if (this.logForm.value.typeTodos) {
        return res;
      };
    });
  }

  public ClearFilters() {

    if (this.logForm.value.fechaInicio == null || this.logForm.value.fechaInicio == NaN) {
      this.fechaInicio = 0;
    } else {
      this.fechaInicio = Date.parse(this.logForm.value.fechaInicio.toString());
    }

    if (this.logForm.value.fechaFin == null || this.logForm.value.fechaFin == NaN) {
      this.fechaFin = Date.now();
    } else {
      this.fechaFin = Date.parse(this.logForm.value.fechaFin.toString());
    }
    console.log("1"+this.esVisible);
    this.search().then(()=>{
      this.esVisible = true;
      console.log("2"+this.esVisible);
    }
    )
    console.log("3"+this.esVisible);

  }
}
