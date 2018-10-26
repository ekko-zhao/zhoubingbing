import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule, RequestOptions, Http } from '@angular/http';

// service
import { HttpInterceptorService } from 'src/services/http-interceptor.service';
import { HttpInterceptorBackendService } from 'src/services/http-interceptor-backend.service';
import { httpFactory } from 'src/services/http-factory';

// components
import { LoginComponent } from 'src/components/login-root/login.component';

@NgModule({
    imports: [
        BrowserModule,
        HttpModule,
        FormsModule
    ],
    declarations: [
        LoginComponent,
    ],
    providers: [
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
