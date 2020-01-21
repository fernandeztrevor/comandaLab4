import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { Log } from 'src/app/models/log';
import { map } from 'rxjs/operators';
import { CommonHelper } from 'src/app/classes/helpers/common-helper';
let LogService = class LogService {
    constructor(db, afsFunc, fileService) {
        this.db = db;
        this.afsFunc = afsFunc;
        this.fileService = fileService;
        this.listado = new Array();
        this.movimientos = this.db.collection('movimientos');
        this.traerMovimientosArray();
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
    traerMovimientos() {
        return this.movimientos.snapshotChanges().pipe(map(actions => {
            return actions.map(action => {
                const datos = action.payload.doc.data();
                const id = action.payload.doc.id;
                return Object.assign({ id }, datos);
            });
        }));
    }
    //   persistirMovimiento(movimiento: Log): Promise<boolean> {
    //     return this.movimientos.add(CommonHelper.ConvertToObject(movimiento)).then(doc => {
    //         this.movimientos.doc(doc.id).update({ id: doc.id });        
    //     }).then(() => {
    //         return true;
    //     }).catch(() => {
    //         return false;
    //     });
    // }
    persistirMovimiento(usuario, target, tipo, observacion) {
        let movimiento = Log.CreateLogWithParams(usuario.email, usuario.role, target, tipo, observacion);
        return this.movimientos.add(CommonHelper.ConvertToObject(movimiento)).then(doc => {
            this.movimientos.doc(doc.id).update({ id: doc.id });
            console.log("persistio");
        }).then(() => {
            return true;
        }).catch(() => {
            return false;
        });
    }
};
LogService = tslib_1.__decorate([
    Injectable({
        providedIn: 'root'
    })
], LogService);
export { LogService };
//# sourceMappingURL=log.service.js.map