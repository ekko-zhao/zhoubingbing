import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ContactItem } from './component/contactItem.component';

@NgModule({
	declarations: [ContactItem],
	imports: [BrowserModule],
	bootstrap: [ContactItem]
})
export class AppModule{
	
}