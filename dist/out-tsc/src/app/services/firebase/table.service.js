import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { Table, TableState } from 'src/app/models/table';
let TableService = class TableService {
    constructor(db) {
        this.db = db;
    }
    GetAll() {
        return this.db.collection("mesas");
    }
    UpdateStatus(tableID, newState) {
        let document = this.db.collection("mesas", ref => ref.where('tableID', '==', tableID));
        return document.get().toPromise()
            .then(doc => {
            let table = doc.docs[0].data();
            table.id = doc.docs[0].id;
            table.state = newState;
            return this.db.collection("mesas").doc(table.id).update(table)
                .then(() => {
                return true;
            })
                .catch(() => {
                return false;
            });
        })
            .catch(() => {
            return false;
        });
    }
    FindAvailable() {
        let documents = this.db.collection('mesas', ref => ref.where('state', '==', TableState.available));
        return documents.get().toPromise()
            .then(doc => {
            let newTable;
            let found = false;
            doc.docs.forEach(table => {
                if (table.exists && !found) {
                    newTable = table.data();
                    newTable.id = table.id;
                    found = true;
                }
            });
            if (!found)
                newTable = Table.Create('No hay', TableState.closed);
            return newTable;
        });
    }
};
TableService = tslib_1.__decorate([
    Injectable({
        providedIn: 'root'
    })
], TableService);
export { TableService };
//# sourceMappingURL=table.service.js.map