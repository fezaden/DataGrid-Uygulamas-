import {  Observable, from, of } from 'rxjs';
import { SocialMediaService } from './../services/socialmedia.service';
import { Injectable } from '@angular/core';
import { SocialModel } from '../models/social.model';
import { AngularFirestore } from '@angular/fire/compat/firestore';


@Injectable({
  providedIn: 'root',
})
export class SocialFirebaseRepository extends SocialMediaService {

  
  constructor(private firestore: AngularFirestore) {
    super();
  }
  
  override getList(): Observable<SocialModel[]> {
    return this.firestore.collection<SocialModel>('socialList').valueChanges();
  }
  
  override addSocial(model: SocialModel): Observable<boolean> {
    return new Observable<boolean>(observer => {
      this.firestore.collection<SocialModel>('socialList').add(model)
        .then(() => {
          observer.next(true);
          observer.complete();
        })
        .catch(error => {
          console.error('Error adding social:', error);
          observer.next(false);
          observer.complete();
        });
    });
  }
  

}