import { Injectable } from '@angular/core';
import { VerbModel } from '../models/verb.model';
import { BaseService } from './base.service';
import { HttpClient } from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})
export class VerbsService extends BaseService<VerbModel> {

    constructor(private http: HttpClient) {
        super('http://localhost/lang/back/verbs/', http);
    }
}
