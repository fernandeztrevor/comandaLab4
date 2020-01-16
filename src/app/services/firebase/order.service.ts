import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';
import { Order, OrderState } from 'src/app/models/order';
import { CommonHelper } from 'src/app/classes/helpers/common-helper';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { Cook } from 'src/app/models/product';
import { reject } from 'q';

@Injectable({
	providedIn: 'root'
})
export class OrderService {

	
    public primerosTres = new Array<any>();
	public ultimosTres = new Array<any>();
	public listado = new Array<Order>();
	public ordenes: AngularFirestoreCollection;

	constructor(private db: AngularFirestore) {
		this.ordenes = this.db.collection<Order>('pedidos');
		this.traerOrdenesArray();
	 }

	public Add(order: Order): void {
		this.db.collection("pedidos").add(CommonHelper.ConvertToObject(order));
	}

	public GetAllOrderByTime(): AngularFirestoreCollection<Order> {
		return this.db.collection("pedidos", ref => ref.where('completed', '==', false));
	}

	public GetAllCompletedOrders_InArray(): Promise<Order[]> {
		return this.db.collection("pedidos", ref => ref.where('completed', '==', true)).get().toPromise()
			.then(doc => {

				let orders: Order[] = [];
				doc.docs.forEach(el => {
					orders.push(el.data() as Order);
				});

				return orders;
			})
	}



	public GetAllByWaiterOrderByTime(email: string) {
		// It's not order by time yet. It requires to create an index.
		//return this.db.collection("orders", ref => ref.where('waiter.email', '==', email).orderBy('timestamp', 'desc'));
		return this.db.collection("pedidos", ref => ref.where('waiter.email', '==', email).where('completed', '==', false));
	}

	public GetAllByWaiterOrderByTime2(email: string) {
		const pendiente = 'Pendiente';
		const servido = 'Servido';
		// It's not order by time yet. It requires to create an index.
		//return this.db.collection("orders", ref => ref.where('waiter.email', '==', email).orderBy('timestamp', 'desc'));
		return this.db.collection("pedidos", ref => ref.where('client.email', '==', email));
	}

	public GetAllByCook(cook: Cook): Observable<Order[]> {
		let documents = this.db.collection("pedidos", ref => ref.where('completed', '==', false).orderBy('timestamp', 'desc')) as AngularFirestoreCollection<Order>;
		return documents.valueChanges().pipe(
			map(orders => {
				return orders.filter(order => {
					order = Object.assign(new Order(), order);
					var hasRole = false;
					order['items'].forEach(el => {
						if (el.cook == cook)
							hasRole = true;
					});
					if (hasRole)
						return order;
				})
			})
		);
	}

	public ChangeStatus(state: OrderState, orderCode: string): void {
		this.GetByCodeID(orderCode).then(order => {
			order.state = state;
			this.db.collection("pedidos").doc(order.id).update(order);
		});
	}

	public Update(order: Order): Promise<boolean> {
		return this.GetByCodeID(order.codeID).then(or => {
			let obj = CommonHelper.ConvertToObject(order);
			this.db.collection("pedidos").doc(or.id).update(obj);
		})
			.then(() => {
				return true;
			})
			.catch(() => {
				return false;
			})
	}

	public GetByCodeID(code: string): Promise<Order> {
		let documents = this.db.collection("pedidos", ref => ref.where('codeID', '==', code));
		return documents.get().toPromise().then(doc => {
			return new Promise((resolve, reject) => {
				if (doc.docs[0]) {
					let theOrder = doc.docs[0].data() as Order;
					theOrder.id = doc.docs[0].id;
					resolve(theOrder);
				}
				else
					reject('No se encontró el pedido.');
			})
		});
	}

	public GetByCodeUser(code: string): Promise<Order> {
		let documents = this.db.collection("pedidos", ref => ref.where('client.email', '==', code) && ref.where('completed', '==', false));
		return documents.get().toPromise().then(doc => {
			return new Promise((resolve, reject) => {
				if (doc.docs[0]) {
					let theOrder = doc.docs[0].data() as Order;
					theOrder.id = doc.docs[0].id;
					resolve(theOrder);
				}
				else
					reject('No se encontró el pedido.');
			})
		});
	}

	public GetAllCancelled() {
		return this.db.collection("pedidos").valueChanges()
			.pipe(
				map(orders => {
					return orders.filter(order => {
						order = Object.assign(new Order(), order);
						if (order['state'] == "Cancelado")
							return order;
					});
				})
			);
	}

	public GetAllDelayed() {
		return this.db.collection("pedidos").valueChanges()
			.pipe(
				map(orders => {
					return orders.filter(order => {
						order = Object.assign(new Order(), order);
						if (order['delayed'] < 0) {
							return order;
						}
					});
				})
			);
	};

	public GetAll() {
		return this.db.collection("pedidos");
	}

	public GetTopBest(): Promise<boolean> {
		let listado = new Array<any>();

		 return this.GetAllCompletedOrders_InArray().then(orders => {
			orders.forEach(order => {
				 order.items.forEach(element => {
				 	listado.push(element.name);
				 });
			})
		}).then(() => {
			let cantidadNombres = new Array<any>() ;

			cantidadNombres = listado.reduce((contadorNombre, nombre) => {
				contadorNombre[nombre] = (contadorNombre[nombre] || 0) + 1;
				return contadorNombre;
			}, {});

			var result = Object.keys(cantidadNombres).map(function(key) {
				return [String(key), cantidadNombres[key]];
			  });
			  const cantidad = result.length;
			  console.log(cantidad);
			  this.primerosTres.push(result[0], result[1], result[2]);
			  this.ultimosTres.push(result[cantidad-3], result[cantidad-2], result[cantidad-1]);
		}).then(()=>{
			return true;
		}			
		).catch(()=>{
			return false;
		}
			
		)
	}

	public traerOrdenesArray() {
		this.db.collection("pedidos").get().toPromise()
			.then(doc => {

				let orders: Order[] = [];
				doc.docs.forEach(el => {
					orders.push(el.data() as Order);
				});
				
				return orders;
			})
	}




}
