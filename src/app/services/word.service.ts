import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { WordModel } from '../models/word.model';

@Injectable({
    providedIn: 'root'
})
export class WordService {
    private apiUrl:string = 'http://localhost:8080/api/';

    constructor(private http: HttpClient) { }

    getAll(): Observable<any> {
        return this.http.get(this.apiUrl + 'word');
    }

    edit(word: WordModel): Promise<any> {
        return this.http.put(
            this.apiUrl + 'update', word
        )
        .toPromise()
        .then(this.handleSuccess)
        .catch(this.handleError);
    }

    private handleSuccess(successResponse): Promise<any> {
        console.log(successResponse);
        return Promise.resolve(successResponse);
    }

    private handleError(errorResponse): Promise<any> {
        console.log(errorResponse);
        return Promise.reject(errorResponse);
    }
}
 