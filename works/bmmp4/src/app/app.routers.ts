
import { Routes } from '@angular/router';
// 路由拦截
import { CanActivatePermission } from '@service/can.activate.permission';
import { CanActivateUserStatus } from '@service/can.activate.user.status';
import { CanActivateTransmitStatus } from '@service/can.activate.transmit.status';

export const rootRouterConfig: Routes = [
    { path: '', redirectTo: 'general', pathMatch: "full" },
    { path: 'general', loadChildren: './components/general/general.module.ts#GeneralModule', canActivate: [CanActivateUserStatus, CanActivatePermission] },
    // 公告
    { path: 'notice/notice-list', loadChildren: './components/notice/notice-list/notice-list.module.ts#NoticeListModule', canActivate: [CanActivateUserStatus, CanActivatePermission] },

    // 交易查询
    { path: 'trade/realtime', loadChildren: './components/trade/realtime/realtime.module.ts#RealtimeModule', canActivate: [CanActivateUserStatus, CanActivatePermission] },
    { path: 'trade/count', loadChildren: './components/trade/count/count.module.ts#CountModule', canActivate: [CanActivateUserStatus, CanActivatePermission] },
    { path: 'trade/detail', loadChildren: './components/trade/detail/detail.module.ts#DetailModule', canActivate: [CanActivateUserStatus, CanActivatePermission] },
    /*  直联  */
    { path: 'trade/group/direct', loadChildren: './components/trade/count-direct/count-direct.module.ts#CountDirectModule', canActivate: [CanActivateUserStatus, CanActivatePermission] },
    { path: 'trade/detail/direct', loadChildren: './components/trade/detail-direct/detail-direct.module.ts#DetailDirectModule', canActivate: [CanActivateUserStatus, CanActivatePermission] },
    /*  专业化  */
    { path: 'trade/group/special', loadChildren: './components/trade/count-special/count-special.module.ts#CountSpecialModule', canActivate: [CanActivateUserStatus, CanActivatePermission] },
    { path: 'trade/detail/special', loadChildren: './components/trade/detail-special/detail-special.module.ts#DetailSpecialModule', canActivate: [CanActivateUserStatus, CanActivatePermission] },

    // 账务查询
    { path: 'accounting/settle-accounts-count', loadChildren: './components/accounting/settle-accounts-count/settle-accounts-count.module.ts#SettleAccountsCountModule', canActivate: [CanActivateUserStatus, CanActivatePermission] },
    { path: 'accounting/settle-accounts-detail', loadChildren: './components/accounting/settle-accounts-detail/settle-accounts-detail.module.ts#SettleAccountsDetailModule', canActivate: [CanActivateUserStatus, CanActivatePermission] },
    { path: 'accounting/draw-detail', loadChildren: './components/accounting/draw-detail/draw-detail.module.ts#DrawDetailModule', canActivate: [CanActivateUserStatus, CanActivatePermission] },
    { path: 'accounting/account-info', loadChildren: './components/accounting/account-info/account-info.module.ts#AccountInfoModule', canActivate: [CanActivateUserStatus, CanActivatePermission] },

    //划款查询
    { path: 'transfer/info', loadChildren: './components/transfer/info/info.module.ts#InfoModule', canActivate: [CanActivateUserStatus, CanActivatePermission] },

    // 对账单下载
    { path: 'bill/download', loadChildren: './components/bill/download/download.module.ts#DownloadModule', canActivate: [CanActivateUserStatus, CanActivatePermission] },
    { path: 'bill/subscribe', loadChildren: './components/bill/subscribe/subscribe.module.ts#SubscribeModule', canActivate: [CanActivateUserStatus, CanActivatePermission] },
    //{ path: 'bill/custom', loadChildren: './components/bill/custom/custom.module.ts#CustomModule', canActivate: [CanActivateUserStatus, CanActivatePermission] },

    // 数据分析
    { path: 'data/analyse', loadChildren: './components/data/analyse/analyse.module.ts#AnalyseModule', canActivate: [CanActivateUserStatus, CanActivatePermission] },

    // 商户号管理
    { path: 'merchant/merchant-manage', loadChildren: './components/merchant/merchant-manage/merchant-manage.module.ts#MerchantManageModule', canActivate: [CanActivateUserStatus, CanActivatePermission] },
    { path: 'merchant/submerchant-manage', loadChildren: './components/merchant/submerchant-manage/submerchant-manage.module.ts#SubmerchantManageModule', canActivate: [CanActivateUserStatus, CanActivatePermission] },

    // 安全设置
    { path: 'account/change-password', loadChildren: './components/account/change-password/change-password.module.ts#ChangePasswordModule', canActivate: [CanActivateUserStatus, CanActivatePermission] },
    { path: 'account/change-password-success', loadChildren: './components/account/change-password/success.module.ts#SuccessModule', canActivate: [CanActivateUserStatus, CanActivateTransmitStatus] },
    { path: 'account/change-cellphone', loadChildren: './components/account/change-cellphone/change-cellphone.module.ts#ChangeCellphoneModule', canActivate: [CanActivateUserStatus, CanActivatePermission] },
    { path: 'account/change-cellphone-success', loadChildren: './components/account/change-cellphone/success.module.ts#SuccessModule', canActivate: [CanActivateUserStatus, CanActivateTransmitStatus] },
]
