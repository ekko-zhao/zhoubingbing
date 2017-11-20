
import { Routes } from '@angular/router';
// 路由拦截
import { CanActivateAdminStatus } from '@service/can.activate.admin.status';
import { CanActivateTransmitStatus } from '@service/can.activate.transmit.status';

export const rootRouterConfig: Routes = [
    { path: '', redirectTo: 'notice/notice-list', pathMatch: "full" },

    // 对账单模板
    // { path: 'bill/manage', loadChildren: './components/bill/manage/manage.module.ts#ManageModule', canActivate: [CanActivateAdminStatus] },
    /* {
            "permissionId": 1,
            "parentId": 0,
            "name": "对账单模板",
            "url": null,
            "icon": "general",
            "children": [
                {
                    "permissionId": 10,
                    "parentId": 1,
                    "name": "对账单模板管理",
                    "url": "bill/manage",
                    "icon": null,
                    "children": []
                }
            ]
        }, */
    //公告
    { path: 'notice/notice-list', loadChildren: './components/notice/notice-list/notice-list.module.ts#NoticeListModule', canActivate: [CanActivateAdminStatus] },

    //账号管理
    { path: 'account/account-query', loadChildren: './components/account/account-query/account-query.module.ts#AccountQueryModule', canActivate: [CanActivateAdminStatus] },
    { path: 'account/add-account', loadChildren: './components/account/add-account/add-account.module.ts#AddAccountModule', canActivate: [CanActivateAdminStatus] },
    { path: 'account/add-success', loadChildren: './components/account/add-account/add-success.module.ts#AddSuccessModule', canActivate: [CanActivateAdminStatus, CanActivateTransmitStatus] }

]
