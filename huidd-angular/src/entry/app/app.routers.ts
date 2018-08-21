
import { Routes } from '@angular/router';
export const rootRouterConfig: Routes = [
    { path: '', redirectTo: 'app', pathMatch: "full" },
    { path: 'app', loadChildren: 'src/components/app-router/index/index.module.ts#IndexModule' },

    // 系统管理
    { path: 'app/system/log', loadChildren: 'src/components/app-router/system/log-manage/log-manage.module.ts#LogManageModule' },

    // 用户管理
    { path: 'app/user/account', loadChildren: 'src/components/app-router/user/account/account.module.ts#AccountModule' },
    { path: 'app/user/app-account', loadChildren: 'src/components/app-router/user/app-account/app-account.module.ts#AppAccountModule' },

    // 优惠信息管理
    { path: 'app/preferential/app-manage', loadChildren: 'src/components/app-router/preferential/app-manage/app-manage.module.ts#AppManageModule' },
    { path: 'app/preferential/bank-manage', loadChildren: 'src/components/app-router/preferential/bank-manage/bank-manage.module.ts#BankManageModule' },
    { path: 'app/preferential/card-manage', loadChildren: 'src/components/app-router/preferential/card-manage/card-manage.module.ts#CardManageModule' },
    { path: 'app/preferential/merchant-manage', loadChildren: 'src/components/app-router/preferential/merchant-manage/merchant-manage.module.ts#MerchantManageModule' },
    { path: 'app/preferential/store-manage', loadChildren: 'src/components/app-router/preferential/store-manage/store-manage.module.ts#StoreManageModule' },
    { path: 'app/preferential/user-message', loadChildren: 'src/components/app-router/preferential/user-message/user-message.module.ts#UserMessageModule' },

]
