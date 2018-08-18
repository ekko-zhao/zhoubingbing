import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule, RequestOptions, Http } from '@angular/http';
import { ModalModule } from 'ngx-bootstrap/modal';

// service
import { CookieService } from 'angular2-cookie/services/cookies.service';
import { HttpInterceptorService } from 'src/services/http-interceptor.service';
import { HttpInterceptorBackendService } from 'src/services/http-interceptor-backend.service';
import { httpFactory } from 'src/services/http-factory';

// components
import { LoginComponent } from 'src/components/login-root/login.component';
import { AppAlertComponent } from 'src/components/common/app-alert/app-alert.component';
import { ButtonLoadingComponent } from 'src/components/common/button-loading/button-loading.component';
import { AppConfirmComponent } from 'src/components/common/app-confirm/app-confirm.component';

@NgModule({
    imports: [
        BrowserModule,
        HttpModule,
        FormsModule,
        ModalModule.forRoot()
    ],
    declarations: [
        LoginComponent,
        AppAlertComponent,
        ButtonLoadingComponent,
        AppConfirmComponent
    ],
    providers: [
        CookieService,
        // http拦截器
        HttpInterceptorService,
        HttpInterceptorBackendService,
        {
            provide: Http,
            useFactory: httpFactory,
            deps: [HttpInterceptorBackendService, RequestOptions]
        },
    ],
    bootstrap: [
        LoginComponent
    ]
})
export class LoginModule { }
