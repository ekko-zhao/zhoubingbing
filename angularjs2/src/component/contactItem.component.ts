import { Component } from '@angular/core';

@Component({
	selector: 'contact-item',
	template: `
		<ul>
			<li>
				<p (click)=setName() >{{name}}</p>
				<p>13820000000</p>
			</li>
		</ul>
	`,
	styles: [
		`ul{ margin:30px 0; list-style:none}`,
		`li{margin-bottom:10px; border-bottom:1px #999 solid}`
		
	]
})
export class ContactItemComponent{
	name: string= 'lisi';
	setName(){
		this.name = 'bingbing';
	}
		
}
