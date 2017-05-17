import { Component} from '@angular/core';
import { SharedService } from '../services/shared.service';
import { ContactService } from '../services/contact.service';

const CONTACT_URL = './src/json/contact.json';

@Component({
	selector: 'list',
	template: `<p>{{contacts?.name}}</p><button (click)="JSON()">button</button>`,
	styles: [ ],
	providers:[SharedService, ContactService]
})
export class ListComponent {
	contacts:any;
	errorMessage:any;
	constructor(private _contactService: ContactService){
		
	}
	getContacts(){
		return this._contactService.getContacts(CONTACT_URL).subscribe(
			contacts => this.contacts = contacts,
			error => this.errorMessage = <any>error
		)
		/*return this._contactService.addContact({'name':'zhoubingbing'},CONTACT_URL).subscribe(
			contacts => this.contacts = contacts,
			error => this.errorMessage = <any>error
		)*/
	}
	JSON(){
		var a = this.getContacts()
		
		setTimeout( () => { console.log(this.contacts) } ,200)
		setTimeout( () => { console.log(this.errorMessage) } ,200)
		//JSON.stringify(this.getContacts())
	}
}
