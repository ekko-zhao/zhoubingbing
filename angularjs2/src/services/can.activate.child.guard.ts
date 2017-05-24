import { Injectable } from '@angular/core';
import { CanActivateChild, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
//RouterStateSnapshot
@Injectable()
export class CanActivateChildGuard implements CanActivateChild{
	canActivateChild(){
		return true
	}
}