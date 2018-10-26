import { Injectable, Optional } from '@angular/core';
import { Request, Response } from '@angular/http';
import { Observable } from 'rxjs';

@Injectable()
export class HttpInterceptorService {
    beforeRequest(request: Request): Request {
        /* 请求发出前的处理逻辑 */
        return request;
    }

    afterResponse(res: Observable<Response>): Observable<any> {
        //请求响应的处理逻辑
        // res.subscribe((data) => {});
        return res;
    }
}
