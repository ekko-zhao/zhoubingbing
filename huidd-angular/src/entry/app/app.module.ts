import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ModuleWithProviders } from '@angular/core';
import { HttpModule, RequestOptions, Http } from '@angular/http';
import { APP_BASE_HREF } from '@angular/common';
// import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// service
import { CookieService } from 'angular2-cookie/services/cookies.service';
import { HttpInterceptorService } from 'src/services/http-interceptor.service';
import { HttpInterceptorBackendService } from 'src/services/http-interceptor-backend.service';
import { httpFactory } from 'src/services/http-factory';

// 路由
import { RouterModule } from '@angular/router';
import { CanActivateTransmitStatus } from 'src/services/can.activate.transmit.status';
import { rootRouterConfig } from './app.routers';
const useHash = process.env.NODE_ENV === 'production' ? false : true;
let rootRouterModule: ModuleWithProviders = RouterModule.forRoot(rootRouterConfig, { useHash: useHash });

// components
import { AppComponent } from 'src/components/app-root/app.component';
import { NavigatorModule } from 'src/components/app-root/navigator/navigator.module';
import { AppAlertModule } from 'src/components/common/app-alert/app-alert.module';
import { AppConfirmModule } from 'src/components/common/app-confirm/app-confirm.module';
import { AppLoadingModule } from 'src/components/common/app-loading/app-loading.module';

// 动画 Directive
// import { Collapse } from 'src/animations/Collapse';

@NgModule({
    imports: [
        BrowserModule,
        HttpModule,
        rootRouterModule,
        NavigatorModule,
        AppAlertModule,
        AppConfirmModule,
        AppLoadingModule
    ],
    declarations: [
        // Collapse,
        AppComponent
    ],
    providers: [
        { provide: APP_BASE_HREF, useValue: '/' },
        CookieService,
        // http拦截器
        HttpInterceptorService,
        HttpInterceptorBackendService,
        {
            provide: Http,
            useFactory: httpFactory,
            deps: [HttpInterceptorBackendService, RequestOptions]
        },
        // 路由拦截
        CanActivateTransmitStatus
    ],
    bootstrap: [
        AppComponent
    ]
})
export class AppModule { }
