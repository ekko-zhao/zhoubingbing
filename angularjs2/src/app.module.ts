import { enableProdMode, NgModule, ModuleWithProviders } from '@angular/core';
import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';




import { AppComponent } from './component/app.component';
import { HeaderComponent } from './component/header.component';
import { FooterComponent } from './component/footer.component';
import { RouterChildComponent } from './component/router.child';
import { RouterChild2Component } from './component/router.child2';
import { RouterCCViewComponent } from './component/router.cc.view';

import { rootRouterConfig } from './router-config/app.routers';
import { CanActivateGuard } from './services/can.activate.guard';
import { CanActivateChildGuard } from './services/can.activate.child.guard';
import { CanDeactivateGuard } from './services/can.deactivate.guard';
import { ResolveGuard } from './services/resolve.guard';


let rootRouterModule: ModuleWithProviders = RouterModule.forRoot(rootRouterConfig, {useHash: true});

import { APP_BASE_HREF } from '@angular/common';


enableProdMode();

@NgModule({
	declarations: [AppComponent, HeaderComponent, FooterComponent, RouterChildComponent, RouterChild2Component,  RouterCCViewComponent],
	imports: [BrowserModule, rootRouterModule, HttpModule],
	bootstrap: [AppComponent],
	providers:[
		CanActivateGuard, CanActivateChildGuard, CanDeactivateGuard, ResolveGuard,
		{provide:APP_BASE_HREF, useValue:'/'}
	]
})
export class AppModule{
	
}