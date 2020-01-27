import { Injectable } from '@angular/core';
import { AngularFirestoreCollection, AngularFirestore } from 'angularfire2/firestore';
import { Log, TargetMovimiento, TipoMovimiento } from 'src/app/models/log';
import { FileService } from '../firestorage/file.service';
import { AngularFireFunctions } from '@angular/fire/functions';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { CommonHelper } from 'src/app/classes/helpers/common-helper';
import { User } from 'src/app/models/user';

@Injectable({
  providedIn: 'root'
})
export class LogService {

  public movimientos: AngularFirestoreCollection;
  public listado = new Array<Log>();

  constructor(private db: AngularFirestore, private afsFunc: AngularFireFunctions, private fileService: FileService) {
    this.movimientos = this.db.collection<Log>('movimientos');
    this.traerMovimientosArray()
  }

  public GetAll3(): Observable<any[]> {
    return this.db.collection("movimientos").valueChanges().pipe(
      map(logs => {
        return logs.filter(res => {
          res = Object.assign(new Log(), res);
          return res;
        });
      })
    )

  }

  public GetAll2() : AngularFirestoreCollection<Log>{
    return this.db.collection("movimientos");
  }
  public GetAll(): any {
    return this.db.collection("movimientos");
  }


  traerMovimientosArray() {
    let listadoObservable = null;

    listadoObservable = this.traerMovimientos();
    listadoObservable.subscribe(movs => {
      movs.forEach(unMov => {

        let m = new Log;

        m.id = unMov.id;
        m.role = unMov.role;
        m.target = unMov.target;
        m.usuario = unMov.usuario;
        m.tipo = unMov.tipo;
        m.fecha = unMov.fecha;
        m.observacion = unMov.observacion;

        this.listado.push(m);
      });
    });
  }

  traerMovimientos(): Observable<any[]> {
    return this.movimientos.snapshotChanges().pipe(
      map(actions => {
        return actions.map(action => {
          const datos = action.payload.doc.data() as Log;
          const id = action.payload.doc.id;
          return { id, ...datos };
        });
      })
    );
  }

  persistirMovimiento(usuario: User, target: TargetMovimiento, tipo: TipoMovimiento, observacion: string): Promise<boolean> {

    let movimiento: Log = Log.CreateLogWithParams(usuario.email, usuario.role, target, tipo, observacion);

    return this.movimientos.add(CommonHelper.ConvertToObject(movimiento)).then(doc => {
      this.movimientos.doc(doc.id).update({ id: doc.id });
      console.log("persistio");
    }).then(() => {
      return true;
    }).catch(() => {
      return false;
    });
  }


}
