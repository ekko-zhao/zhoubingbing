import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Rx';



@Injectable()
export class ContactService{
	constructor(private _http: Http){}
	
	getContacts(url:string): Observable<any[]>{
		return this._http.get(url)
		.map(this.extractData)
		.catch(this.handleError)
	}
	//Response
	private extractData(res: Response){
		
		let body = res.json();
		console.log(res)
		console.log(body)
		
		return body.data|| {}
	}
	
	private handleError(error: any){
		let errMsg = (error.massage) ? error.massage:
			error.status? `${error.status} - ${error.statusText}` : 'Server error';
		return Observable.throw(errMsg);
	}
	
}