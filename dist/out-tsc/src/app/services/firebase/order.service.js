import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { Order } from 'src/app/models/order';
import { CommonHelper } from 'src/app/classes/helpers/common-helper';
import { map } from 'rxjs/operators';
let OrderService = class OrderService {
    constructor(db) {
        this.db = db;
        this.primerosTres = new Array();
        this.ultimosTres = new Array();
        this.listado = new Array();
        this.ordenes = this.db.collection('pedidos');
        this.traerOrdenesArray();
    }
    Add(order) {
        this.db.collection("pedidos").add(CommonHelper.ConvertToObject(order));
    }
    GetAllOrderByTime() {
        return this.db.collection("pedidos", ref => ref.where('completed', '==', false));
    }
    GetAllCompletedOrders_InArray() {
        return this.db.collection("pedidos", ref => ref.where('completed', '==', true)).get().toPromise()
            .then(doc => {
            let orders = [];
            doc.docs.forEach(el => {
                orders.push(el.data());
            });
            return orders;
        });
    }
    GetAllByWaiterOrderByTime(email) {
        // It's not order by time yet. It requires to create an index.
        //return this.db.collection("orders", ref => ref.where('waiter.email', '==', email).orderBy('timestamp', 'desc'));
        return this.db.collection("pedidos", ref => ref.where('waiter.email', '==', email).where('completed', '==', false));
    }
    GetAllByWaiterOrderByTime2(email) {
        const pendiente = 'Pendiente';
        const servido = 'Servido';
        // It's not order by time yet. It requires to create an index.
        //return this.db.collection("orders", ref => ref.where('waiter.email', '==', email).orderBy('timestamp', 'desc'));
        return this.db.collection("pedidos", ref => ref.where('client.email', '==', email));
    }
    GetAllByCook(cook) {
        let documents = this.db.collection("pedidos", ref => ref.where('completed', '==', false).orderBy('timestamp', 'desc'));
        return documents.valueChanges().pipe(map(orders => {
            return orders.filter(order => {
                order = Object.assign(new Order(), order);
                var hasRole = false;
                order['items'].forEach(el => {
                    if (el.cook == cook)
                        hasRole = true;
                });
                if (hasRole)
                    return order;
            });
        }));
    }
    ChangeStatus(state, orderCode) {
        this.GetByCodeID(orderCode).then(order => {
            order.state = state;
            this.db.collection("pedidos").doc(order.id).update(order);
        });
    }
    Update(order) {
        return this.GetByCodeID(order.codeID).then(or => {
            let obj = CommonHelper.ConvertToObject(order);
            this.db.collection("pedidos").doc(or.id).update(obj);
        })
            .then(() => {
            return true;
        })
            .catch(() => {
            return false;
        });
    }
    GetByCodeID(code) {
        let documents = this.db.collection("pedidos", ref => ref.where('codeID', '==', code));
        return documents.get().toPromise().then(doc => {
            return new Promise((resolve, reject) => {
                if (doc.docs[0]) {
                    let theOrder = doc.docs[0].data();
                    theOrder.id = doc.docs[0].id;
                    resolve(theOrder);
                }
                else
                    reject('No se encontró el pedido.');
            });
        });
    }
    GetByCodeUser(code) {
        let documents = this.db.collection("pedidos", ref => ref.where('client.email', '==', code) && ref.where('completed', '==', false));
        return documents.get().toPromise().then(doc => {
            return new Promise((resolve, reject) => {
                if (doc.docs[0]) {
                    let theOrder = doc.docs[0].data();
                    theOrder.id = doc.docs[0].id;
                    resolve(theOrder);
                }
                else
                    reject('No se encontró el pedido.');
            });
        });
    }
    GetAllCancelled() {
        return this.db.collection("pedidos").valueChanges()
            .pipe(map(orders => {
            return orders.filter(order => {
                order = Object.assign(new Order(), order);
                if (order['state'] == "Cancelado")
                    return order;
            });
        }));
    }
    GetAllDelayed() {
        return this.db.collection("pedidos").valueChanges()
            .pipe(map(orders => {
            return orders.filter(order => {
                order = Object.assign(new Order(), order);
                if (order['delayed'] < 0) {
                    return order;
                }
            });
        }));
    }
    ;
    GetAll() {
        return this.db.collection("pedidos");
    }
    // public GetTopBest(fechaInicio: number, fechaFin: number): Promise<boolean> {
    // 	let listado = new Array<any>();
    // 	return this.GetAllCompletedOrders_InArray().then(orders => {
    // 		orders.forEach(order => {	
    // 			if(order.timestamp > fechaInicio && order.timestamp < fechaFin)	{
    // 				order.items.forEach(element => {
    // 					listado.push(element.name);
    // 				});
    // 			}				
    // 		})
    // 	}).then(() => {
    // 		let cantidadNombres = new Array<any>();
    // 		cantidadNombres = listado.reduce((contadorNombre, nombre) => {
    // 			contadorNombre[nombre] = (contadorNombre[nombre] || 0) + 1;
    // 			return contadorNombre;
    // 		}, {});
    // 		var result = Object.keys(cantidadNombres).map(function (key) {
    // 			return [String(key), cantidadNombres[key]];
    // 		});
    // 		const cantidad = result.length;
    // 		console.log(cantidad);
    // 		this.primerosTres.push(result[0], result[1], result[2]);
    // 		this.ultimosTres.push(result[cantidad - 3], result[cantidad - 2], result[cantidad - 1]);
    // 	}).then(() => {
    // 		return true;
    // 	}
    // 	).catch(() => {
    // 		return false;
    // 	}
    // 	)
    // }
    traerOrdenesArray() {
        this.db.collection("pedidos").get().toPromise()
            .then(doc => {
            let orders = [];
            doc.docs.forEach(el => {
                orders.push(el.data());
            });
            return orders;
        });
    }
};
OrderService = tslib_1.__decorate([
    Injectable({
        providedIn: 'root'
    })
], OrderService);
export { OrderService };
//# sourceMappingURL=order.service.js.map