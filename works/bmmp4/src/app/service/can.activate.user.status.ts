import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { CookieService } from 'angular2-cookie/services/cookies.service';
import { Observable } from 'rxjs/Observable';
import { HttpService } from '@service/http-service';


@Injectable()
export class CanActivateUserStatus implements CanActivate {
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
            this.http.get('api/v1/user/userStatus').subscribe(
                response => {
                    if (response['retCode'] === '000000' && response['data'] === 1) {
                        observer.next(true);
                        observer.complete();
                    } else {
                        window.location.href = './index.html';
                    }
                },
                error => {
                    observer.next(false);
                    observer.complete();
                    alert("网络错误，请求数据失败");
                }
            )
        })
    }
}
