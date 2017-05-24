import { Injectable } from '@angular/core';
import { CanDeactivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
//RouterStateSnapshot
@Injectable()
export class CanDeactivateGuard implements CanDeactivate<any>{
	canDeactivate(component: any, route:ActivatedRouteSnapshot, state:RouterStateSnapshot){
		
		//return false;
		return new Observable<boolean>( observer => {
			setTimeout(function(){
				observer.next(true);
				//observer.next(false);
				observer.complete();
			},2000)

		})
	}
}