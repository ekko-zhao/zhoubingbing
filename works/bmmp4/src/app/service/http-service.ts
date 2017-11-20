import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { CookieService } from 'angular2-cookie/services/cookies.service';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';


@Injectable()
export class HttpService {
    public token: string;
    constructor(private _http: Http,
        private cookie: CookieService,
    ) {
        //this.token = this.cookie.getObject('userData') && this.cookie.getObject('userData')['token'] ? this.cookie.getObject('userData')['token'] : '';
        // console.log(this.cookie)
    }

    public get(url: string): Observable<any[]> {
        // let token = this.cookie.getObject('userData') && this.cookie.getObject('userData')['token'] ? this.cookie.getObject('userData')['token'] : '';

        /* let headers = new Headers({ 'Content-type': 'application/json', 'token': this.token });
        let options = new RequestOptions({ 'headers': headers }); */
        // , options
        return this._http.get(url)
            .map(this.extractData)
            .catch(this.handleError)
    }

    public post(url: string, obj: object): Observable<any> {

        let body = JSON.stringify(obj);
        //let headers = new Headers({ 'Content-type': 'application/json', 'token': this.token });
        let headers = new Headers({ 'Content-type': 'application/json' });
        let options = new RequestOptions({ 'headers': headers });
        return this._http.post(url, body, options)
        //return this._http.post(url, body)
            // return this._http.post(url, body)
            .map(this.extractData)
            .catch(this.handleError)
    }

    private extractData(res: Response) {
        let data = res.json();
        return data || {};
    }

    private handleError(error: any) {
        let errMsg = (error.massage) ? error.massage :
            error.status ? `${error.status} - ${error.statusText}` : 'Server error';
        return Observable.throw(errMsg);
    }
}
