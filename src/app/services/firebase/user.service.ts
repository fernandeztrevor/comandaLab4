import { Injectable } from '@angular/core';
import { AngularFirestore } from 'angularfire2/firestore';
import { AngularFireFunctions } from '@angular/fire/functions';
import { User, Role } from 'src/app/models/user';
import { CommonHelper } from 'src/app/classes/helpers/common-helper';
import { resolve, reject } from 'q';

@Injectable({
	providedIn: 'root'
})

export class UserService {

	constructor(private db: AngularFirestore, private afsFunc: AngularFireFunctions) { }

	public GetAll_InArray(): Promise<User[]>
	{
		return this.db.collection('users').get().toPromise()
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
		this.db.collection("users").add(CommonHelper.ConvertToObject(user));
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
			this.db.collection('users').doc(doc.id).update(user);
			console.log('User role updated on firebase!')
		})
	}

	public GetUserByEmail(email: string): Promise<User>
	{
		let docRef = this.db.collection('users', ref => ref.where('email', '==', email));
		return docRef.get().toPromise().then(doc => {
			let user = doc.docs[0].data() as User;
			user.id = doc.docs[0].id;
			return user;
		})
	}
	
	public GetAllWaiters(): Promise<User[]>
	{
		let documents = this.db.collection('users', ref => ref.where('role', '==', 'mozo'));
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

	public ModifyProfileImage(email: string, image: string): Promise<void>
	{
		return this.GetUserByEmail(email).then(doc => {
			let user = doc;
			user.image = image;
			console.log('new token', image);
			this.db.collection('users').doc(doc.id).update(user);
		})
	}
}
