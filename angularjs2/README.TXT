TypeScript 2.x-----------------------
npm install @types/node --save-dev


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


//组件-------------------------------------------------------------------------------------------------------------
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

//父及组件通过@ViewChild获取子组件的引用
<list-item  (click)="listen(contact)" ></list-item>
@ViewChild(ListItemComponent) listItemComponent :ListItemComponent;
listen(c:any){
	this.listItemComponent.listen();
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
//ng-content------------------
父组件
<header></header>

子组件
<ng-content select="header"> </ng-content>
<ng-content select=".className"> </ng-content>
<ng-content select="[name=attr]"> </ng-content>

ngOnInit
ngOnChanges
ngDoCheck
ngAfterContentInit
ngAfterContentChecked
ngAfterViewInit
ngAfterViewChecked



//变化监测类---------------
constructor(private cd:ChangeDetectorRef){
	cd.detach();//断开
	cd.reatdach();//链接
	cd.detachChanges();//手动监测
}


//queries 视图查询----------------------------
<input #theInput type="text">

@ViewChild('theInput') input :ElementRef
constructor(private renderer: Renderer){}
ngAfterViewInit(){
	this.renderer.invokeElementMethod(this.input.nativeElement, 'focus')
}
or
<input #theInput type="text">
queries: {
	input:new ViewChild('theInput')
}
input :ElementRef = null;
constructor(private renderer: Renderer){}
ngAfterViewInit(){
	this.renderer.invokeElementMethod(this.input.nativeElement, 'focus')
}

ng-content 内容查询----------------------------

<my-list>
	<li *ngFor="#item of items">{{item}}</li>
<my-list>

@Directive({
	selector:'li'
})
export class ListItem{}

@Component({
	selector:'my-list',
	template:`
		<ul>
			<ng-content></ng-content>
		</ul>
	`
})
export class MyListComponent implements AfterContentInit(){
	@ContentChildren(ListItem) items: QueryList<ListItem>;
	ngAfterContentInit()}{
		//do something...
	}
}
or
queries: {
	input:new ContentChildren(ListItem)
}
items: QueryList<ListItem>



//元数据
@Component({
	queries
	encapsulation: ViewEncapsulation.None // ViewEncapsulation.Native // ViewEncapsulation.Emulated
})


//模板-------------------------------------------------------------------------------------------------------------

[title]="title"
[attr.colspan]="{{1+2}}"



[class.className]="isBoolean"

[style.style-property]="isBoolean? : "
[style.font-size.px]="isBoolean? 30 : 18 "

事件绑定()
(click)="fn()"

//表单双向绑定
<input type="text" [value]="name" (input)="name=$event.target.value" />
<input type="text" name="username" [(ngModel)]="user.name" (ngModelChange)="user.name=$event" >

<input type="text" [(ngModel)]="name" [ngModelOptions]="{standalone:true}">//没有name属性
<input type="text" name="name" [(ngModel)]="name">

import { FormsModule } from '@angular/forms';
@NgModule({
	declarations: [],
	imports: [FormsModule],
	bootstrap: []
})
export class AppModule{ }


[ngClass]="fn()" \ ="{class:isBoolean}"
[ngStyle]
<ul [ngSwitch]="property">
	<li *ngSwitchCase=""></li>
	<li *ngSwitchCase=""></li>
	<li *ngSwitchDefault></li>
</ul>

//单选框----------------
<input type="radio" name="six" [(ngModel)]="property" value="female">
<input type="radio" name="six" [(ngModel)]="property" value="male">

//单选框----------------
<input type="checkbox" name="six" [(ngModel)]="property">
property:true\false

//单选下拉框----------------
interests:any[] =[
	{value:'', text:''},
	{value:'', text:''}
]

<select name="interestValue" [(ngModel)]="">
	<option *ngFor="let interest of interests" value="interest.value or interest">{{ interest.text }}</option>
</select>

多选时 select 的值为 数组

//DOM 元素局部变量----------------
<input type="text" name="thinput" #thinput [(ngModel)]="thinput2">
<p>{{thinput.value}}</p>

thinput2:string = '111'

//NgForm 表单局部变量----------------
<form #editform="ngForm"></form>
追踪表单的验证状态 editform.valid

@ViewChild('editform') editform :ElementRef
console.log( this.editform )
editform.value 为表单对象的值

//NgModule 控件局部变量----------------
<input type="text" name="thinput" [(ngModel)]="" #thinput="ngModel">
追踪input的验证状态 thinput.valid


//NgModelGroup指令----------------
<fieldset ngModelGroup="nameGroup" #nameGroup="ngModelGroup=">
	性：<input type="text" name="firstname" [(ngModel)]="firstname" >
	名：<input type="text" name="lastname" [(ngModel)]="lastname" >
</fieldset>
ngForm.value = {
	nameGroup:{
		firstname:''
		lastname:''
	}
}




表单状态-------------
pristine
dirty
valid
invalid
touched
untouched


//指令-------------------------------------------------------------------------------------------------------------
<li *ngFor="let item of items; let i = index;"></li>
<li *ngFor="let item of items; trackBy: trackByfn"></li>
trackByfn(){
	return contact.id;
}

*ngIf=""



UNMET PEER

DEPENDENCY







































