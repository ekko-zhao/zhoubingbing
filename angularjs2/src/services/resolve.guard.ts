import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { Observable } from 'rxjs';
import { Http, Response, Headers, RequestOptions } from '@angular/http';

@Injectable()
export class ResolveGuard implements  Resolve<any>{
	
	constructor(private _http: Http){
		
	}
	
	resolve(){
		
		return this._http.get('./src/json/contact.json')
		.map(this.extractData)
		.catch(this.handleError)
		
		/*return new Observable<boolean>( observer => {
			//console.log('CanActivateGuard-s')
			setTimeout(function(){
				observer.next(true);
				observer.complete();
				//console.log('CanActivateGuard-e')
				//return {name:'bingbing', age:23}
			},2000)
			
		})*/
		
		//return {name:'bingbing', age:23}
	}

	private extractData(res: Response){
		let body = res.json();
		return body.data|| {}
		
	}
	private handleError(error: any){
		let errMsg = (error.massage) ? error.massage:
			error.status? `${error.status} - ${error.statusText}` : 'Server error';
		return Observable.throw(errMsg);
	}
}