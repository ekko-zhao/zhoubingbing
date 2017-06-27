import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

//bootstrap
import {ngxBootstrap} from './ngxBootstrap'

//components
import { AppComponent } from './app.component';
import { AlertComponent } from './components/alert/alert.component';
import { OtherComponent } from './components/other/other.component';
import { ChildComponent } from './components/child/child.component';
import { ConfirmComponent } from './components/confirm/confirm.component';

//pipes


@NgModule({
  declarations: [
    AppComponent,
    AlertComponent,
    OtherComponent,
    ChildComponent,
    ConfirmComponent
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
