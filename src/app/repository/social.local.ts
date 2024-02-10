import { AsyncSubject, Observable, of } from 'rxjs';
import { SocialMediaService } from './../services/socialmedia.service';
import { Injectable } from '@angular/core';
import { SocialModel } from '../models/social.model';


var defaultSocialList: SocialModel[] = [
    new SocialModel(),
];

@Injectable({ providedIn: 'root' })
export class SocialLocalRepository extends SocialMediaService {

    override getList(): Observable<SocialModel[]> {
        return of(defaultSocialList)
    }

    override addSocial(model: SocialModel): Observable<boolean> {
        defaultSocialList.push(model);
        return of(true);
    }

}