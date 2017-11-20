import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ModuleWithProviders } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule, RequestOptions, Http } from '@angular/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// bootstrap
import { ngxBootstrap } from './ngxBootstrap';

// service
import { HttpInterceptorService } from './service/http-interceptor.service';
import { HttpInterceptorBackendService } from './service/http-interceptor-backend.service';
import { httpFactory } from './service/http-factory';

// 路由
import { RouterModule } from '@angular/router';
import { APP_BASE_HREF, DatePipe } from '@angular/common';
import { rootRouterConfig } from './admin.routers';
let rootRouterModule: ModuleWithProviders = RouterModule.forRoot(rootRouterConfig, { useHash: true });

// 路由拦截
import { CanActivateAdminStatus } from '@service/can.activate.admin.status';
import { CanActivateTransmitStatus } from '@service/can.activate.transmit.status';

// components
import { AdminComponent } from './admin.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import { HeaderComponent } from './header/header.component';
import { AdminContainerComponent } from './admin-container/admin-container.component';
import { NavAsideComponent } from './nav-aside/nav-aside.component';
import { AsideControlComponent } from './aside-control/aside-control.component';
import { AppRouterComponent } from './app-router/app-router.component';
import { SubTitleComponent } from './sub-title/sub-title.component';
import { TodayGeneralComponent } from './today-general/today-general.component';

import { AppConfirmComponent } from '@myCommon/app-confirm/app-confirm.component';
import { AppLoadingComponent } from '@myCommon/app-loading/app-loading.component';
import { AppAlertComponent } from '@myCommon/app-alert/app-alert.component';

// 动画 Directive
import { Collapse } from './animations/Collapse';

// service
import { MyService } from '@service/my-service';
import { HttpService } from '@service/http-service';
import { CookieService } from 'angular2-cookie/services/cookies.service';

@NgModule({
    declarations: [
        Collapse,
        AdminComponent,
        TopBarComponent,
        HeaderComponent,
        AdminContainerComponent,
        NavAsideComponent,
        AsideControlComponent,
        AppRouterComponent,
        SubTitleComponent,
        TodayGeneralComponent,
        AppConfirmComponent,
        AppLoadingComponent,
        AppAlertComponent
    ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        HttpModule,
        FormsModule,
        RouterModule,
        rootRouterModule,
        ngxBootstrap
    ],
    providers: [
        { provide: APP_BASE_HREF, useValue: '/' },
        DatePipe,
        MyService,
        HttpService,
        CookieService,
        CanActivateAdminStatus,
        CanActivateTransmitStatus,

        //http拦截器
        HttpInterceptorService,
        HttpInterceptorBackendService,
        {
            provide: Http,
            useFactory: httpFactory,
            deps: [HttpInterceptorBackendService, RequestOptions]
        }
    ],
    bootstrap: [AdminComponent]
})
export class AdminModule { }
