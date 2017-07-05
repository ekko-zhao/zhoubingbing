import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

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
        LoadingComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        ngxBootstrap
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
