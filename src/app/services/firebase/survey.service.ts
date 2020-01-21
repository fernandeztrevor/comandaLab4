import { Injectable } from '@angular/core';
import { AngularFirestore } from 'angularfire2/firestore';
import { Survey } from 'src/app/models/survey';
import { CommonHelper } from 'src/app/classes/helpers/common-helper';

@Injectable({
	providedIn: 'root'
})

export class SurveyService {

	constructor(private db: AngularFirestore) { }

	public GetAll(): any
	{
		return this.db.collection('encuestas');
	}

	public GetAll2()
	{
		return this.db.collection('encuestas');
	}

	public Add(surv: Survey): Promise<void>
	{
		return new Promise((resolve, reject) => {
			this.db.collection('encuestas').add(CommonHelper.ConvertToObject(surv))
				.then(() => resolve())
				.catch(() => reject());
		})
	}
}
