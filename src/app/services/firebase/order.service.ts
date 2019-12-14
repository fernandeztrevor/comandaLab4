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

	constructor(private db: AngularFirestore) { }

	public Add(order: Order): void
	{
		this.db.collection("pedidos").add(CommonHelper.ConvertToObject(order));
	}

	public GetAllOrderByTime(): AngularFirestoreCollection<Order>
	{
		return this.db.collection("pedidos", ref => ref.where('completed', '==', false));
	}

	public GetAllCompletedOrders_InArray(): Promise<Order[]>
	{
		return this.db.collection("pedidos", ref => ref.where('completed', '==', true)).get().toPromise()
		.then(doc => {

			let orders: Order[] = [];
			doc.docs.forEach(el => {
					orders.push(el.data() as Order);
				});

			return orders;
			})
	}

	public GetAllByWaiterOrderByTime(email: string)
	{
		// It's not order by time yet. It requires to create an index.
		//return this.db.collection("orders", ref => ref.where('waiter.email', '==', email).orderBy('timestamp', 'desc'));
		return this.db.collection("pedidos", ref => ref.where('waiter.email', '==', email).where('completed', '==', false));
	}

	public GetAllByCook(cook: Cook): Observable<Order[]>
	{
    let documents = this.db.collection("pedidos", ref => ref.where('completed', '==', false).orderBy('timestamp', 'desc'))  as AngularFirestoreCollection<Order>;
		return documents.valueChanges().pipe(
			map(orders => {
        return orders.filter(order => {
          order = Object.assign(new Order(), order);
					var hasRole = false;
					order['items'].forEach(el => {
						if(el.cook == cook)
							hasRole = true;
					});
					if(hasRole)
						return order;
				})
			})
		);
	}

	public ChangeStatus(state: OrderState, orderCode: string): void
	{
		this.GetByCodeID(orderCode).then(order => {
			order.state = state;
			this.db.collection("pedidos").doc(order.id).update(order);
		});
	}

	public Update(order: Order): Promise<boolean>
	{
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

	public GetByCodeID(code: string): Promise<Order>
	{
		let documents = this.db.collection("pedidos", ref => ref.where('codeID', '==', code));
		return documents.get().toPromise().then(doc => {
			return new Promise((resolve, reject) => {
				if(doc.docs[0])
				{
					let theOrder = doc.docs[0].data() as Order;
					theOrder.id = doc.docs[0].id;
					resolve(theOrder);
				}
				else
					reject('No se encontró el pedido.');
			})
		});
	}

}
