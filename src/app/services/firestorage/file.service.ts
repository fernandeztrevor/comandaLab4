import { Injectable } from '@angular/core';
import { AngularFireStorage } from '@angular/fire/storage';
import { reject, resolve } from 'q';
import { AngularFirestoreCollection, AngularFirestore } from 'angularfire2/firestore';
import { Product } from 'src/app/models/product';

@Injectable({
	providedIn: 'root'
})
export class FileService {
	products: AngularFirestoreCollection;

	constructor(private angularFirestore: AngularFirestore,private storage: AngularFireStorage) {
		this.products = this.angularFirestore.collection<Product>('productos');
	 }

	public Upload(fileName: string, file: File): Promise<void>
	{
		return this.storage.upload(fileName, file).
			then((success) => resolve(success))
			.catch((error) => reject(error.message));
	}

	public GetImageURL(fileName: string)
	{
		return this.storage.ref(fileName).getDownloadURL().toPromise().then(URL => resolve(URL));
	}

	public subirFoto(foto: File, uid: string): string {
		console.log(foto);
	 	const pathFoto = `imagenesProductos/${uid}`;
	 	const tarea = this.storage.upload(pathFoto, foto);
	
	 	tarea.then(() => {
	 	  this.storage
	 		.ref(pathFoto)
			 .getDownloadURL().subscribe(url=>{
				return url;
			 });
	 	});
	
	   }
}
