
//启动根模块--------------------------------------------------------------------
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './component/app.component';
import { HeaderComponent } from './component/header.component';
import { FooterComponent } from './component/footer.component';
import { ContactModule } from './module/contact.module';

@NgModule({
	declarations: [AppComponent, HeaderComponent, FooterComponent],
	imports: [BrowserModule, ContactModule],
	exports: [],
	bootstrap: [AppComponent],
	providers:[]
})
export class AppModule{
	
}


//导出模块--------------------------------------------------------------------
import { NgModule } from '@angular/core';
import { ContactItemComponent } from '../component/contactItem.component';

@NgModule({
	declarations: [ContactItemComponent],
	exports: [ContactItemComponent]
})
export class ContactModule{}


//组件-------------------------------------------------------------------------
import { Component } from '@angular/core';
@Component({
	selector: 'contact-item',
	template: ``
	templateUrl:'',
	providers:[],
	styles:[``,``]
	styleUrls:[]
})


组件的所有子组件均默认继承父组件的注入器对象

 *ngFor="let item of items"

(click)="fn()"  *ngIf=""
<input type="text"  [value]="name" (input)="name=$event.target.value" />



组件传递数据
parent-component

import { Component } from '@angular/core';
@Component({
	selector: 'list',
	template: `
		<ul>
			<li *ngFor="let contact of contacts">
				<list-item [contactName]="contact" (onListen)="listen($event)"></list-item>
			</li>
		</ul>
	`,
	styles: [
		`ul{ margin:30px 0; list-style:none}`,
		`li{margin-bottom:10px; border-bottom:1px #999 solid}`
	]
})
export class ListComponent {
	contacts = [{},{}];
	
	listen(arg:boolean){
		console.log(arg)
	}
}

child-component
import { Component, OnInit, Input, Output, SimpleChanges, EventEmitter } from '@angular/core';
@Component ({
	selector: "list-item",
	template: `
		<div >
			<label (click)="listen()">{{contactName.name}}</label>
			<span>{{contactName.telNum}}</span>
		</div>
	`
})
export class ListItemComponent implements OnInit{
	ngOnInit(){ }
	@Input() contactName:any = {};
	
	//向parent组件传递数据
	@Output() onListen = new EventEmitter<boolean>();
	listen(){
		this.onListen.emit(true)
	}
	
	//钩子函数 当parent组件传递的值 contact 改变时触发
	changes:string[] = [];
	ngOnChanges( changes:{ [proKey:string]: SimpleChanges } ){
		let log: string[] = [];
		
		for(let proName in changes){
			let changeProp = changes[proName];
			console.log (changeProp.previousValue);
			console.log (changeProp.currentValue);
		}
	}
	
}
//or
@Component ({
	inputs: ['contactName'],
	selector: "list-item",
	template: `
		<div class ="contact-info">
			<label>{{contactName.name}}</label>
			<span>{{contactName.telNum}}</span>
		</div>
	`
})
export class ListItemComponent implements OnInit{
	ngOnInit(){}
}

//父及组件通过局部变量获取子组件引用
parent-component
<list-item (click)="collect.listen()" #collect></list-item>

child-component
export class ListItemComponent{
	name:string = 'lisi'
	listen(){
		console.log(this.name);
	}
}


//getter  setter
@Component ({
	selector: "list-item",
	template: `
		<div>
			<label>{{contact.name}}</label>
			<span>{{contact.telNum}}</span>
		</div>
	`
})
export class ListItemComponent{
	_contact: any  = {}
	@Input()
	set contact( contact: any  ){
		this._contact.name = ( contact.name && contact.name.trim() ) || 'no name set';
		
		this._contact.telNum = contact.telNum || "000-0000";
	}
	get contact(){
		return this._contact;
	}
	
}






TypeScript 2.x-----------------------
npm install @types/node --save-dev
