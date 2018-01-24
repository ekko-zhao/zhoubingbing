import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ModuleWithProviders } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { HeaderComponent } from './components/header.component';
import { FooterComponent } from './components/footer.component';

import { RouterModule } from '@angular/router';
import { rootRouterConfig } from './router-config/app.routers';
let rootRouterModule: ModuleWithProviders = RouterModule.forRoot(rootRouterConfig, {useHash: true});

//bootstrap
import { ngxBootstrap } from './ngxBootstrap'

//components
import { AppComponent } from './app.component';
import { AlertComponent } from './components/alert/alert.component';
import { ConfirmComponent } from './components/confirm/confirm.component';
import { LoadingComponent } from './components/loading/loading.component';

//pipes

@NgModule({
    declarations: [
        AppComponent,
        AlertComponent,
        ConfirmComponent,
        LoadingComponent,
        HeaderComponent,
        FooterComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        ngxBootstrap,
        rootRouterModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
