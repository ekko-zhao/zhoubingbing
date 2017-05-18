import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './component/app.component';
import { HeaderComponent } from './component/header.component';
import { ListComponent } from './component/list.component';
//import { ContactModule } from './module/contact.module';
import { FooterComponent } from './component/footer.component';
import { ListItemComponent } from './component/item.component';


import { BeautifulBackgroundDirective } from './directive/beautifulBackground.directive';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SexReform } from './pipe/sexreform.pipe';

import { HttpModule } from '@angular/http';


import { RequestOptions, Http } from '@angular/http';
import { HttpInterceptor } from './services/http-interceptor';
import { HttpInterceptorBackend } from './services/http-interceptor-backend';
import { httpFactory } from './services/http-factory';

@NgModule({
	declarations: [AppComponent, HeaderComponent, ListComponent, ListItemComponent, FooterComponent, SexReform, BeautifulBackgroundDirective],
	imports: [BrowserModule, FormsModule, ReactiveFormsModule, HttpModule],
	bootstrap: [AppComponent],
	
	providers:[
		HttpInterceptor, HttpInterceptorBackend,{
			provide: Http,useFactory:httpFactory ,deps:[HttpInterceptorBackend, RequestOptions]
		}
		
	]
})
export class AppModule{
	
}