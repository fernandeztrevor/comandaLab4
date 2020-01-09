import { Injectable } from '@angular/core';
import { AngularFireStorage } from '@angular/fire/storage';
import { reject, resolve } from 'q';
import { AngularFirestoreCollection, AngularFirestore } from 'angularfire2/firestore';
import { Product } from 'src/app/models/product';
import { ProductService } from '../firebase/product.service';
import { User } from 'src/app/models/user';
import { promise } from 'protractor';

@Injectable({
	providedIn: 'root'
})
export class FileService {
	products: AngularFirestoreCollection;
	users: AngularFirestoreCollection;

	constructor(private angularFirestore: AngularFirestore, private storage: AngularFireStorage) {
		this.products = this.angularFirestore.collection<Product>('productos');
		this.users = this.angularFirestore.collection<User>('usuarios');
	}

	public Upload(fileName: string, file: File): Promise<void> {
		return this.storage.upload(fileName, file).
			then((success) => resolve(success))
			.catch((error) => reject(error.message));
	}

	public GetImageURL(fileName: string) {
		return this.storage.ref(fileName).getDownloadURL().toPromise().then(URL => resolve(URL));
	}

	public subirFotoProducto(foto: File, uid: string) {
		const pathFoto = `imagenesProductos/${uid}`;
		const tarea = this.storage.upload(pathFoto, foto);

		tarea.then(() => {
			this.storage
				.ref(pathFoto)
				.getDownloadURL().subscribe(url => {
					this.updatePhotoUrlProduct(url, uid);
				});
		});
	}

	public updatePhotoUrlProduct(url: string, uid: string) {
		this.products.doc(uid).update({ image: url });
	}

	public subirFotoUsuarios(foto: File, uid: string): Promise<boolean> {
		const pathFoto = `imagenesUsuarios/${uid}`;
		const tarea = this.storage.upload(pathFoto, foto);

		return tarea.then(() => {
			this.storage
				.ref(pathFoto)
				.getDownloadURL().subscribe(url => {
					this.updatePhotoUrlUsers(url, uid).then(()=>{
						location.reload();
					});
				});
		}).then(() => {
			//location.reload();
			return true;
		}).catch(() => {
			return false;
		});;
	}

	public updatePhotoUrlUsers(url: string, uid: string): Promise<boolean>{
		return this.users.doc(uid).update({ image: url }).then(()=>{
			return true;
		});
	}
}
