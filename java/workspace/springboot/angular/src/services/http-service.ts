import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions, RequestMethod } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class HttpService {
    constructor(
        private _http: Http
    ) {
        this.extractData = this.extractData.bind(this);
    }
    public origin: string = process.env.origin ? process.env.origin : '';
    public get(url: string): Observable<any[]> {
        let headers = new Headers({
            /* 'Cache-Control': 'no-cache' */
        });
        return this._http.get(url, { 'headers': headers, withCredentials: true })
            .map(this.extractData)
            .catch(this.handleError)
    }
    public post(url: string, obj: object): Observable<any> {
        let body = JSON.stringify(obj);
        let headers = new Headers({
            'Content-type': 'application/json'
        });
        let options = new RequestOptions({ 'headers': headers, 'withCredentials': true });

        return this._http.post(url, body, options)
            .map(this.extractData)
            .catch(this.handleError)
    }

    private extractData(res: Response) {
        let data = res.json();
        return data;
    }

    private handleError(error: any) {
        ; (window as any).confirm({
            text: '网络错误，请求数据失败！',
            type: 2
        })
        let errMsg = (error.message) ? error.message :
            error.status ? `${error.status} - ${error.statusText}` : 'Server error';
        return Observable.throw(errMsg);
    }
}
