import { AsyncSubject, Observable, of } from 'rxjs';
import { SocialMediaService } from './../services/socialmedia.service';
import { Injectable } from '@angular/core';
import { SocialModel } from '../models/social.model';


var defaultSocialList: SocialModel[] = [
];

@Injectable({ providedIn: 'root' })
export class SocialLocalRepository extends SocialMediaService {


    private localStorageKey = 'socialList';

    constructor() {
      super();
      this.loadFromLocalStorage();
    }
  
    override getList(): Observable<SocialModel[]> {
        this.loadFromLocalStorage();
      return of(defaultSocialList);
    }
  
    override addSocial(model: SocialModel): Observable<boolean> {
      defaultSocialList.push(model);
      this.saveToLocalStorage();
      return of(true);
    }
  
    private loadFromLocalStorage() {
      const data = localStorage.getItem(this.localStorageKey);
      if (data) {
        defaultSocialList = JSON.parse(data);
      }
    }
  
    private saveToLocalStorage() {
      localStorage.setItem(this.localStorageKey, JSON.stringify(defaultSocialList));
    }
}