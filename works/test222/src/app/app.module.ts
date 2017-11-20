import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


// components
import { AppComponent } from './app.component';
// service
// import { MyService } from '@service/my-service';

@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserModule
    ],
    providers: [
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
