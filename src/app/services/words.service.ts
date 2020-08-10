import { Injectable } from '@angular/core';
import { WordModel } from '../models/word.model';
import { BaseService } from './base-service.service';
import { HttpClient } from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})
export class WordsService extends BaseService<WordModel> {

    constructor(private http: HttpClient) {
        super('http://localhost/lang/back/words/', http);
    }
}
