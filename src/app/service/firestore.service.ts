import { Injectable } from '@angular/core';

import { AngularFireDatabase, AngularFireList, AngularFireObject } from '@angular/fire/compat/database';
@Injectable({
  providedIn: 'root'
})
export class FirestoreService {

  datasRef: AngularFireList<any>;
  dataRef: AngularFireObject<any>;
  constructor(private firestore: AngularFireDatabase) { }

  public getItems() {
    return this.firestore.object('todo').snapshotChanges();
  }

  public createItem(data:{name: string, url: string}){
    const datRef = this.firestore.object('todo');
    return datRef.set(data);
    //return this.firestore.collection('todo').add(data);
  }
}
