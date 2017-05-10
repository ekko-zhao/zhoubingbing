import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './component/app.component';
import { HeaderComponent } from './component/header.component';
import { ListComponent } from './component/list.component';
//import { ContactModule } from './module/contact.module';
import { FooterComponent } from './component/footer.component';
import { ListItemComponent } from './component/item.component';


import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SexReform } from './pipe/sexreform.pipe';


@NgModule({
	declarations: [AppComponent, HeaderComponent, ListComponent, ListItemComponent, FooterComponent, SexReform],
	imports: [BrowserModule, FormsModule, ReactiveFormsModule],
	bootstrap: [AppComponent]
})
export class AppModule{
	
}