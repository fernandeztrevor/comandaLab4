import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { User, Role } from 'src/app/models/user';
import { CommonHelper } from 'src/app/classes/helpers/common-helper';
import { map } from 'rxjs/operators';
let UserService = class UserService {
    constructor(db, afsFunc, fileService) {
        this.db = db;
        this.afsFunc = afsFunc;
        this.fileService = fileService;
        //public listado: Product[];
        //public listado: Array<Product>;
        this.listado = new Array();
        this.usuarios = this.db.collection('usuarios');
        this.traerUsuariosArray();
    }
    GetAll_InArray() {
        return this.db.collection('usuarios').get().toPromise()
            .then(doc => {
            let users = [];
            doc.docs.forEach(el => {
                let us = el.data();
                us.password = '';
                users.push(us);
            });
            return users;
        });
    }
    SetRole(email, role) {
        this.SetRoleInFirebase(email, role);
        this.SetRoleInCloudFunctions(email, role);
    }
    Add(user) {
        this.db.collection("usuarios").add(CommonHelper.ConvertToObject(user));
    }
    SetRoleInCloudFunctions(email, role) {
        const setRoleFunction = this.afsFunc.httpsCallable('setRole');
        setRoleFunction({ email: email, desiredRole: role })
            .subscribe(response => console.log(response));
    }
    SetRoleInFirebase(email, role) {
        this.GetUserByEmail(email).then(doc => {
            let user = doc;
            user.role = role;
            this.db.collection('usuarios').doc(doc.id).update(user);
            console.log('User role updated on firebase!');
        });
    }
    GetUserByEmail(email) {
        let docRef = this.db.collection('usuarios', ref => ref.where('email', '==', email));
        return docRef.get().toPromise().then(doc => {
            let user = doc.docs[0].data();
            user.id = doc.docs[0].id;
            return user;
        });
    }
    GetAllWaiters() {
        let documents = this.db.collection('usuarios', ref => ref.where('role', '==', 'mozo'));
        return documents.get().toPromise().then(doc => {
            var waiters = [];
            doc.docs.forEach(user => {
                let waiter = user.data();
                waiter.id = user.id;
                waiters.push(waiter);
            });
            return waiters;
        });
    }
    GetUserByID(id) {
        let docRef = this.db.collection('usuarios', ref => ref.where('id', '==', id));
        return docRef.get().toPromise().then(doc => {
            let user = doc.docs[0].data();
            user.id = doc.docs[0].id;
            return user;
        });
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
    ModifyProfileImage(email, image) {
        return this.GetUserByEmail(email).then(doc => {
            let user = doc;
            this.fileService.subirFotoUsuarios(image, user.id);
        });
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
                if (!u.deleted) {
                    if (u.role != Role.cliente)
                        this.listado.push(u);
                }
            });
        });
    }
    traerUsuarios() {
        return this.usuarios.snapshotChanges().pipe(map(actions => {
            return actions.map(action => {
                const datos = action.payload.doc.data();
                const id = action.payload.doc.id;
                return Object.assign({ id }, datos);
            });
        }));
    }
    persistirUsuario(usuario, foto) {
        let idGenerado;
        return this.usuarios.add(CommonHelper.ConvertToObject(usuario)).then(doc => {
            this.usuarios.doc(doc.id).update({ id: doc.id });
            idGenerado = doc.id;
        })
            .then(() => {
            if (foto) {
                return this.fileService.subirFotoUsuarios(foto, idGenerado).then(() => {
                    return true;
                });
            }
        }).catch(() => {
            return false;
        });
    }
    updateState(uid, state) {
        this.usuarios.doc(uid).update({ state: state });
    }
    delete(uid) {
        this.usuarios.doc(uid).update({ deleted: true });
    }
};
UserService = tslib_1.__decorate([
    Injectable({
        providedIn: 'root'
    })
], UserService);
export { UserService };
//# sourceMappingURL=user.service.js.map