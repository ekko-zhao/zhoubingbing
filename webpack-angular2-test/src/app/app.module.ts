import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
// components
import { AppComponent } from './app.component';
// service
// import { MyService } from '@service/my-service';

@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserModule,
        HttpModule
    ],
    providers: [
    ],
    bootstrap: [AppComponent]
})
export class AppModule {}
