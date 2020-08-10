import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

const httpOptions = {
    headers: new HttpHeaders({
        'Content-Type': 'application/json'
    })
};

export class BaseService<Model> {
    private _apiUrl:string;
    private _http: HttpClient;

    constructor(apiUrl:string, http: HttpClient) {
        this._apiUrl = apiUrl;
        this._http = http;
    }

    public getAll(): Observable<any> {
        return this._http.get(this._apiUrl + 'list.php');
    }

    public add(data: Model) {
        return this._http.post(this._apiUrl + 'add.php', data, httpOptions);
    }

    public delete(id:number): Promise<any> {
        return this._http.delete(
            this._apiUrl + 'delete/' + id
        )
        .toPromise()
        .then(this.handleSuccess)
        .catch(this.handleError);
    }

    public edit(data: Model): Promise<any> {
        return this._http.put(
            this._apiUrl + 'update', data
        )
        .toPromise()
        .then(this.handleSuccess)
        .catch(this.handleError);
    }

    private handleSuccess(successResponse:any): Promise<any> {
        console.log(successResponse);
        return Promise.resolve(successResponse);
    }

    private handleError(errorResponse:any): Promise<any> {
        console.log(errorResponse);
        return Promise.reject(errorResponse);
    }
}
