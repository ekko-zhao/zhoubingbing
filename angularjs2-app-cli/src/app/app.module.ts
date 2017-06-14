import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import  * as bootstrap from 'ngx-bootstrap';
const ngxBootstrap = [
	bootstrap.PaginationModule.forRoot(),
	bootstrap.ModalModule.forRoot()
	
	
	
]


import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
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
