import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class HttpService {
    constructor(
        private _http: Http
    ) { }
    public origin: string = process.env.origin ? process.env.origin : '';
    public get(url: string): Observable<any[]> {
        url = (url.indexOf('local') > -1) ? url : (this.origin + url);
        let headers = new Headers({
            /* 'Cache-Control': 'no-cache' */
        });
        return this._http.get(url, { 'headers': headers, withCredentials: true })
            .map(this.extractData)
            .catch(this.handleError)
    }
    public post(url: string, obj: object): Observable<any> {
        url = (url.indexOf('local') > -1) ? url : (this.origin + url);
        let body = JSON.stringify(obj);
        let headers = new Headers({
            'Content-type': 'application/json',
            /* 'Cache-Control': 'no-cache' */
        });
        let options = new RequestOptions({ 'headers': headers, 'withCredentials': true, });

        return this._http.post(url, body, options)
            .map(this.extractData)
            .catch(this.handleError)
    }

    private extractData(res: Response) {
        let data = res.json();
        if (data.code === "666666") {
            sessionStorage.clear();
            if (res.url.indexOf('logout') > -1) {
                window.location.href = process.env.NODE_ENV === 'production' ? '/index' : './index.html';
            } else {
                ; (window as any).confirm({
                    text: '登录超时,请重新登录',
                    type: 2,
                    done: () => {
                        window.location.href = process.env.NODE_ENV === 'production' ? '/login' : './login.html';
                    }
                })

            }
        } else if (data.code && data.code !== "000000") {
            ; (window as any).confirm({
                text: data.message,
                type: 2
            })
        }
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
