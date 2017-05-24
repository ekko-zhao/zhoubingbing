import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
//RouterStateSnapshot
@Injectable()
export class CanActivateGuard implements CanActivate{
	canActivate(route:ActivatedRouteSnapshot, state:RouterStateSnapshot){
		console.log(route)
		console.log(state)
		return new Observable<boolean>( observer => {
			console.log('CanActivateGuard-s')
			setTimeout(function(){
				observer.next(true);
				observer.complete();
				console.log('CanActivateGuard-e')
			},2000)
			
		})
		//return false;
	}
}