import { Injectable } from '@angular/core';
import { AngularFireStorage } from '@angular/fire/storage';
import { reject, resolve } from 'q';

@Injectable({
	providedIn: 'root'
})
export class FileService {

	constructor(private storage: AngularFireStorage) { }

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
}
