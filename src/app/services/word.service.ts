import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { WordModel } from '../models/word.model';

const httpOptions = {
    headers: new HttpHeaders({
        'Content-Type': 'application/json'
    })
};

@Injectable({
    providedIn: 'root'
})
export class WordService {
    private apiUrl:string = 'http://localhost/lang/back/';

    constructor(private http: HttpClient) { }

    getAll(): Observable<any> {
        return this.http.get(this.apiUrl + 'list.php');
    }

    add(word: WordModel) {
        return this.http.post(
            this.apiUrl + 'add.php', word, httpOptions
        )
        .toPromise()
        .then(this.handleSuccess)
        .catch(this.handleError);
    }

    delete(id:number): Promise<any> {
        return this.http.delete(
            this.apiUrl + 'delete/' + id
        )
        .toPromise()
        .then(this.handleSuccess)
        .catch(this.handleError);
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
 