import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';
import { AngularFireFunctions } from '@angular/fire/functions';
import { User, Role } from 'src/app/models/user';
import { CommonHelper } from 'src/app/classes/helpers/common-helper';
import { resolve, reject } from 'q';
import { Observable } from 'rxjs/internal/Observable';
import { map } from 'rxjs/operators';
import { FileService } from '../firestorage/file.service';

@Injectable({
	providedIn: 'root'
})

export class UserService {

	public usuarios: AngularFirestoreCollection;
    //public listado: Product[];
    //public listado: Array<Product>;
    public listado = new Array<User>();
    public url: string;

	constructor(private db: AngularFirestore, private afsFunc: AngularFireFunctions, private fileService: FileService) {
		this.usuarios = this.db.collection<User>('usuarios');
        this.traerUsuariosArray();
	 }

	public GetAll_InArray(): Promise<User[]>
	{
		return this.db.collection('usuarios').get().toPromise()
			.then(doc => {
				let users: User[] = [];
				doc.docs.forEach(el => {
					let us = el.data() as User;
					us.password = '';
					users.push(us);
				})
				return users;
			})
	}

	public SetRole(email: string, role: string): void
	{
		this.SetRoleInFirebase(email, role);
		this.SetRoleInCloudFunctions(email, role);
	}

	public Add(user: User): void
	{
		this.db.collection("usuarios").add(CommonHelper.ConvertToObject(user));
	}

	private SetRoleInCloudFunctions(email: string, role: string): void
	{
		const setRoleFunction = this.afsFunc.httpsCallable('setRole');
		setRoleFunction({email: email, desiredRole: role})
			.subscribe(response => console.log(response));
	}

	private SetRoleInFirebase(email: string, role: string): void
	{
		this.GetUserByEmail(email).then(doc => {
			let user = doc;
			user.role = role as Role;
			this.db.collection('usuarios').doc(doc.id).update(user);
			console.log('User role updated on firebase!')
		})
	}

	public GetUserByEmail(email: string): Promise<User>
	{
		let docRef = this.db.collection('usuarios', ref => ref.where('email', '==', email));
		return docRef.get().toPromise().then(doc => {
			let user = doc.docs[0].data() as User;
			user.id = doc.docs[0].id;
			return user;
		})
	}
	
	public GetAllWaiters(): Promise<User[]>
	{
		let documents = this.db.collection('usuarios', ref => ref.where('role', '==', 'mozo'));
		return documents.get().toPromise().then(doc => {
			var waiters: User[] = [];
			doc.docs.forEach(user => {
				let waiter = user.data() as User;
				waiter.id = user.id;
				waiters.push(waiter);
			})
			return waiters;
		})
	}

	// public ModifyProfileImage(email: string, image: string): Promise<void>
	// {
	// 	return this.GetUserByEmail(email).then(doc => {
	// 		let user = doc;
	// 		user.image = image;
	// 		console.log('new token', image);
	// 		this.db.collection('usuarios').doc(doc.id).update(user);
	// 	})
	// }

	public ModifyProfileImage(email: string, image: File): Promise<void>
	{
		return this.GetUserByEmail(email).then(doc => {
			let user = doc;
			this.fileService.subirFotoUsuarios(image, user.id);
		})
	}

	traerUsuariosArray() {
        let listadoObservable = null;

        listadoObservable = this.traerUsuarios();
        console.log("traerUsuariosArray ListadoObservable");
        listadoObservable.subscribe(usrs => {
            usrs.forEach(unUser => {

				let u = new User;

				u.id = unUser.id;
				u.name = unUser.name;
				u.lastname = unUser.lastname;
				u.email = unUser.email;
				u.image = unUser.image;
				u.role = unUser.role;
				u.state = unUser.state;
				u.deleted = unUser.deleted;
				u.password = unUser.password;

				if(!u.deleted){
					if(u.role != Role.cliente)
					this.listado.push(u);
				}                
            });
        });
	}
	
	traerUsuarios(): Observable<any[]> {
        return this.usuarios.snapshotChanges().pipe(
            map(actions => {
                return actions.map(action => {
                    const datos = action.payload.doc.data() as User;
                    const id = action.payload.doc.id;
                    return { id, ...datos };
                });
            })
        );
	}

	persistirUsuario(usuario: User, foto: File): Promise<boolean> {
 		let idGenerado: string;

        return this.usuarios.add(CommonHelper.ConvertToObject(usuario)).then(doc => {
			this.usuarios.doc(doc.id).update({ id: doc.id });  
			idGenerado = doc.id;			           
		})		
		.then(() => {
            if (foto) {				
            return  this.fileService.subirFotoUsuarios(foto, idGenerado).then(()=>{
					return true;
				});
            }             
        }).catch(() => {
            return false;
        });
    }
	
	updateState(uid: string, state: string) {
        this.usuarios.doc(uid).update({ state: state });
	}
	
	delete(uid:string){
		this.usuarios.doc(uid).update({ deleted: true });
	}


	
}
