import { Injectable, forwardRef } from "@angular/core";
import { Observable } from "rxjs";
import { SocialModel } from "../models/social.model";


@Injectable({ 
    providedIn: 'root', 
})
export abstract class SocialMediaService {
    
    constructor() { }

    abstract getList(): Observable<Array<SocialModel>>;

    abstract addSocial(model: SocialModel): Observable<boolean>;

}

