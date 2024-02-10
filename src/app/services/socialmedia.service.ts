import { Injectable, forwardRef } from "@angular/core";
import { Observable } from "rxjs";
import { SocialLocalRepository } from "../repository/social.local";
import { SocialModel } from "../models/social.model";


@Injectable({ 
    providedIn: 'root', 
})
export abstract class SocialMediaService {
    
    constructor() { }

    abstract getList(): Observable<Array<SocialModel>>;

    abstract addSocial(model: SocialModel): Observable<boolean>;

}

