import { Injectable } from '@angular/core';
import { Request, Response } from '@angular/http';
import { Observable } from 'rxjs';

@Injectable()
export class HttpInterceptor{
	beforeRequest(request:Request):Request{
		//请求发出前的处理逻辑
		console.log(request);
		return request;
	}
	
	afterResponse(res: Observable<Response>): Observable<any>{
		//请求响应的处理逻辑
		/*res.subscibe( (data) =>{
			console.log(data)
		});*/
		return res;
	}
	
}