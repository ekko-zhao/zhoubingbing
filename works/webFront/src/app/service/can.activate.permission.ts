import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { HttpService } from '@service/http-service';
import { CookieService } from 'angular2-cookie/services/cookies.service';

@Injectable()
export class CanActivatePermission implements CanActivate {
    public userData: any;

    constructor(
        public http: HttpService,
        private cookie: CookieService
    ) {
        this.userData = cookie.getObject('userData');
    }
    canActivate(
        route: ActivatedRouteSnapshot, // 表示要激活的目标配置项
        state: RouterStateSnapshot  //  表示当前所处的路由状态 包含了（要激活的目标配置项）
    ) {
        // 请求权限
        return new Observable<boolean>(observer => {
            let permissions = sessionStorage.getItem('permissions');
            /* if (process.env.NODE_ENV === 'production') {
                let permissions = sessionStorage.getItem('permissions');
            } */

            if (permissions) {
                observer.next(true);
                observer.complete();
            } else {
                let data = {
                    userId: this.userData['userId']
                }
                this.http.post('api/v1/permissions', data).subscribe(
                    response => {
                        if (response['retCode'] === '000000') {
                            this.cookie.putObject('permissions', response['data']);
                            sessionStorage.setItem('permissions', response['data']);
                            observer.next(true);
                        } else {
                            observer.next(false);
                            alert(response['retMsg']);
                        }
                        observer.complete();
                    },
                    error => {
                        observer.next(false);
                        observer.complete();
                        alert("网络错误，请求权限数据失败");
                    }
                )
            }
        })

    }
}
