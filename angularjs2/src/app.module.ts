import { enableProdMode, NgModule, ModuleWithProviders } from '@angular/core';
import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';


import { AppComponent } from './component/app.component';
import { HeaderComponent } from './component/header.component';
import { FooterComponent } from './component/footer.component';

import { rootRouterConfig } from './router-config/app.routers';

let rootRouterModule: ModuleWithProviders = RouterModule.forRoot(rootRouterConfig, {useHash: true});

import { APP_BASE_HREF } from '@angular/common';


enableProdMode();

@NgModule({
	declarations: [AppComponent, HeaderComponent, FooterComponent],
	imports: [BrowserModule, rootRouterModule],
	bootstrap: [AppComponent],
	providers:[
		{provide:APP_BASE_HREF, useValue:'/'}
	]
})
export class AppModule{
	
}