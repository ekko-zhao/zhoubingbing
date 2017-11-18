import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule, RequestOptions, Http } from '@angular/http';


// service
import { HttpInterceptorService } from '@service/http-interceptor.service';
import { HttpInterceptorBackendService } from '@service/http-interceptor-backend.service';
import { httpFactory } from '@service/http-factory';

// components
import { RegisterComponent } from './register.component';
import { MobileCodeComponent } from '@myCommon/mobile-code/mobile-code.component';

// directive
import { UsernameValidator } from '@myDirective/username.directive';

// service
// import { MyService } from '@service/my-service';

@NgModule({
    declarations: [
        RegisterComponent,
        MobileCodeComponent,
        UsernameValidator
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
    bootstrap: [RegisterComponent]
})
export class RegisterModule { }
