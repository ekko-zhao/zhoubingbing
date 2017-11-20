import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule, RequestOptions, Http } from '@angular/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// swiper
import { KSSwiperModule } from 'angular2-swiper';

// bootstrap
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { PopoverModule } from 'ngx-bootstrap/popover';

// service
import { HttpInterceptorService } from '@service/http-interceptor.service';
import { HttpInterceptorBackendService } from '@service/http-interceptor-backend.service';
import { httpFactory } from '@service/http-factory';

// components
import { LoginComponent } from './login.component';
import { HeaderIndexComponent } from '../header-index/header-index.component';
import { MobileCodeComponent } from '@myCommon/mobile-code/mobile-code.component';

// 动画 Directive
import { Collapse } from '../animations/Collapse';

// service
// import { MyService } from '@service/my-service';

@NgModule({
    declarations: [
        Collapse,
        LoginComponent,
        MobileCodeComponent,
        HeaderIndexComponent
    ],
    imports: [
        BrowserAnimationsModule,
        BrowserModule,
        HttpModule,
        FormsModule,
        BsDropdownModule.forRoot(),
        PopoverModule.forRoot(),
        KSSwiperModule
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
    bootstrap: [LoginComponent]
})
export class LoginModule { }
