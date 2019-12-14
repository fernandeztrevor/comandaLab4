import { Injectable } from '@angular/core';
import { AngularFirestore } from 'angularfire2/firestore';
import { Table, TableState } from 'src/app/models/table';

@Injectable({
  	providedIn: 'root'
})
export class TableService {

	constructor(private db: AngularFirestore) { }

	public GetAll(): any
	{
		return this.db.collection("tables");
	}

	public UpdateStatus(tableID: string, newState: TableState): Promise<boolean>
	{
		let document = this.db.collection("tables", ref => ref.where('tableID', '==', tableID));
		return document.get().toPromise()
			.then(doc => {
				let table: Table = doc.docs[0].data() as Table;
				table.id = doc.docs[0].id;
				table.state = newState;
				return this.db.collection("tables").doc(table.id).update(table)
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

	public FindAvailable(): Promise<Table>
	{
		let documents = this.db.collection('tables', ref => ref.where('state', '==', TableState.available));
		return documents.get().toPromise()
			.then(doc => {
				let newTable: Table;
				let found = false;
				doc.docs.forEach(table => {
					if(table.exists && !found)
					{
						newTable = table.data() as Table;
						newTable.id = table.id;
						found = true;
					}
				})

				if(!found)
					newTable = Table.Create('No hay', TableState.closed);
				
				return newTable;
			});
	}

}
