import { Component, ViewChild } from '@angular/core';
//import { ListComponent } from './component/item.component';
import { ListItemComponent } from './item.component';

@Component({
	selector: 'list',
	template: `
		<p (click)="editContact()">click-change</p>
		<ul>
			<li *ngFor="let contact of contacts">
				<list-item [contact]="contact" (click)="listen()" ></list-item>
			</li>
		</ul>
	`,
	styles: [
		`ul{ margin:30px 0; list-style:none}`,
		`li{margin-bottom:10px; border-bottom:1px #999 solid}`
	]
})
export class ListComponent {
	contacts = [{"name":"lisi","telNum":"13212121212"},{"name":"zhangsan","telNum":"13212121212"}];
	editContact(){
		//this.contacts = [{"name":"zhou","telNum":"13212121212"},{"name":"bingbing","telNum":"13212121212"}]; 
		this.contacts[0] = {"name":"zhou","telNum":"13212121212"}
	}
	
	@ViewChild(ListItemComponent) listItemComponent :ListItemComponent;
	
	listen(){
		this.listItemComponent.listen();
		//this.listItemComponent.contact.name="test"
	}
}
