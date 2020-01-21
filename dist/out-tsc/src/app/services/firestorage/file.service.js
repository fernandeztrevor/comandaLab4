import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { reject, resolve } from 'q';
let FileService = class FileService {
    constructor(angularFirestore, storage) {
        this.angularFirestore = angularFirestore;
        this.storage = storage;
        this.products = this.angularFirestore.collection('productos');
        this.users = this.angularFirestore.collection('usuarios');
    }
    Upload(fileName, file) {
        return this.storage.upload(fileName, file).
            then((success) => resolve(success))
            .catch((error) => reject(error.message));
    }
    GetImageURL(fileName) {
        return this.storage.ref(fileName).getDownloadURL().toPromise().then(URL => resolve(URL));
    }
    subirFotoProducto(foto, uid) {
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
    updatePhotoUrlProduct(url, uid) {
        this.products.doc(uid).update({ image: url });
    }
    subirFotoUsuarios(foto, uid) {
        const pathFoto = `imagenesUsuarios/${uid}`;
        const tarea = this.storage.upload(pathFoto, foto);
        return tarea.then(() => {
            this.storage
                .ref(pathFoto)
                .getDownloadURL().subscribe(url => {
                this.updatePhotoUrlUsers(url, uid).then(() => {
                    location.reload();
                });
            });
        }).then(() => {
            //location.reload();
            return true;
        }).catch(() => {
            return false;
        });
        ;
    }
    updatePhotoUrlUsers(url, uid) {
        return this.users.doc(uid).update({ image: url }).then(() => {
            return true;
        });
    }
};
FileService = tslib_1.__decorate([
    Injectable({
        providedIn: 'root'
    })
], FileService);
export { FileService };
//# sourceMappingURL=file.service.js.map