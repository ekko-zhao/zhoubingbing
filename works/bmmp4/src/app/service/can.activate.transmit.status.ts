import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

@Injectable()
export class CanActivateTransmitStatus implements CanActivate {
    canActivate(
        route: ActivatedRouteSnapshot, // 表示要激活的目标配置项
        state: RouterStateSnapshot  //  表示当前所处的路由状态 包含了（要激活的目标配置项）
    ) {
        console.log(route)
        if (route.params['transmit'] === 'ok'){
            return true;
        }else{
            return false;
        }

    }
}
