import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Rx';

@Injectable()
export class ContactService{
	constructor(private _http: Http){}
	
	getContacts(url:string): Observable<any[]>{
		return this._http.get(url)
		.map(this.extractData)
		.catch(this.handleError)
	}
	
	/*getContacts(url:string): Promise<any[]>{
		return this._http.get(url)
		.toPromise()
		.then(this.extractData)
		.catch(this.handleError)
	}*/
	
	addContact(contact:object,url:string) : Observable<any>{
		let body = JSON.stringify(contact);
		let headers = new Headers({'Content-type':'application/json'})
		let options = new RequestOptions({'headers': headers});
		
		return this._http.post(url, body, options)
		.map(this.extractData)
		.catch(this.handleError)
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