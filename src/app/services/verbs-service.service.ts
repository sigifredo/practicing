import { Injectable } from '@angular/core';
import { VerbModel } from '../models/verb.model';
import { BaseService } from './base-service.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';

const httpOptions = {
    headers: new HttpHeaders({
        'Content-Type': 'application/json'
    })
};

@Injectable({
  providedIn: 'root'
})
export class VerbsServiceService extends BaseService<VerbModel> {

    constructor(private http: HttpClient) {
        super('http://localhost/lang/back/verbs/', http);
    }
}
