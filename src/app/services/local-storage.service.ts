import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';
import { SocialModel } from '../models/social.model';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {
  private dbPath = '/socialList';

  tutorialsRef: AngularFirestoreCollection<SocialModel>;

  constructor(private db: AngularFirestore) {
    this.tutorialsRef = db.collection(this.dbPath);
  }

  getAll(): AngularFirestoreCollection<SocialModel> {
    return this.tutorialsRef;
  }

  create(model: SocialModel): any {
    return this.tutorialsRef.add({ ...model });
  }
}
