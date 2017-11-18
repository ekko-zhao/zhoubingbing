import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule, RequestOptions, Http } from '@angular/http';

// service
import { HttpInterceptorService } from '@service/http-interceptor.service';
import { HttpInterceptorBackendService } from '@service/http-interceptor-backend.service';
import { httpFactory } from '@service/http-factory';

// components
import { AdminLoginComponent } from './admin-login.component';
import { MobileCodeComponent } from '@myCommon/mobile-code/mobile-code.component';

@NgModule({
    declarations: [
        AdminLoginComponent,
        MobileCodeComponent
    ],
    imports: [
        BrowserModule,
        HttpModule,
        FormsModule
    ],
    providers: [
        //http拦截器
        HttpInterceptorService,
        HttpInterceptorBackendService,
        {
            provide: Http,
            useFactory: httpFactory,
            deps: [HttpInterceptorBackendService, RequestOptions]
        }
    ],
    bootstrap: [AdminLoginComponent]
})
export class AdminLoginModule { }
