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
	orders: AngularFirestoreCollection;

	constructor(private angularFirestore: AngularFirestore, private storage: AngularFireStorage) {
		this.products = this.angularFirestore.collection<Product>('productos');
		this.users = this.angularFirestore.collection<User>('usuarios');
		this.orders = this.angularFirestore.collection<User>('pedidos');
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
					this.updatePhotoUrlUsers(url, uid);
					//this.updatePhotoUrlUsers(url, uid).then(()=>{
						//location.reload();
					//});
				});
		}).then(() => {
			//location.reload();
			return true;
		}).catch(() => {
			return false;
		});;
	}

	public subirFotoGenericaUsuarios(uid: string): Promise<boolean> {
		const url:string = 'https://firebasestorage.googleapis.com/v0/b/tplab4-aa5ae.appspot.com/o/imagenesUsuarios%2Fdefault-profile.png?alt=media&token=e03046d0-3237-4039-8bd3-a1ba051c0645';
		return this.users.doc(uid).update({ image: url }).then(()=>{
			return true;
		});
	}

	public updatePhotoUrlUsers(url: string, uid: string): Promise<boolean>{
		return this.users.doc(uid).update({ image: url }).then(()=>{
			return true;
		});
	}

	public updatePhotoUrlOrders(url: string, uid: string): Promise<boolean>{
		console.log(url);
		console.log(uid);
		return this.orders.doc(uid).update({ image: url }).then(()=>{
			return true;
		});
	}

	public subirFotoPedido(foto: File, uid: string): Promise<boolean> {
		const pathFoto = `imagenesPedidos/${uid}`;
		const tarea = this.storage.upload(pathFoto, foto);	
		console.log("uid"+uid);	

		return tarea.then(() => {
			
			this.storage
				.ref(pathFoto)
				.getDownloadURL().subscribe(url => {					
					this.updatePhotoUrlOrders(url, uid);
				});
		}).then(() => {
			return true;
		}).catch(() => {
			return false;
		});;
	}
}
