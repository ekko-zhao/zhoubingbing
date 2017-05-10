TypeScript 2.x-----------------------
npm install @types/node --save-dev

//angular2 --------------------------------------------------------------------

?.安全操作符
{{detail?.name}}




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

[innerHtml]
{{}}
[title]="title"
[attr.colspan]="{{1+2}}"

[class.className]="isBoolean"

[style.style-property]="isBoolean? : "
[style.font-size.px]="isBoolean? 30 : 18 "

事件绑定()
(click)="fn()"


//表单双向绑定----------------
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

表单验证-------------
required
minlength
maxlength
pattern


//模型驱动方式构建表单
import { ReactiveFormsModule } from '@angular/forms';
@NgModule({
	imports: [ReactiveFormsModule]
})


const EMAIL_REGEXP = new RegExp("[a-z0-9]+@[a-x0-9].com");
const TEL_REGEXP = new RegExp("1[0-9]{10}");
function validateFirstName(c: FormControl) {
	return ( EMAIL_REGEXP.test(c.value) || TEL_REGEXP.test(c.value) ) ? null : {
		firstName:{
			valid:false,
			errorMsg:'用户名必须是手机号或者邮箱地址'
		}
	}
}
import { FormGroup, FormControl, Validators } from '@angular/forms';
@Component({
	selector: 'list',
	template: `
		<form [formGroup]="editform">
			姓：<input type="text" formControlName="firstName" required/>
			<!-- <input type="text" formControlName="firstName" pattern="[0-9]{10}" required/> -->
			<p>{{editform.controls.firstName.errors?.firstName.errorMsg}}</p>
			<p *ngIf="editform.controls.firstName.errors?.minlength">minLength(4)</p>
			<button type="button" (click)="submit(editform)">button</button>
		</form>
	`
})
export class ListComponent {
	editform: any;
	constructor(){
		//console.log(Validators.pattern)
		this.editform = new FormGroup({
			firstName: new FormControl('', [Validators.minLength(4) ,Validators.pattern([a-z0-9]+@[a-x0-9].com)  ])
			
			//正则表达式 不加 / /
		})
	}
	
}

//管道------------------------

date 
yyyy	2013
yy		13
y		2013

MMMM	August
MMM		Aug
MM		08
M		8

EEEE	Thursday
EEE		Thu
dd		09
d		9

//24hours
HH		23
H		8
//12hours
hh		11
h		8

mm      09
m		9

ss		02
s		2
.sss	.995

a		AM
jj      04 AM
j		4 AM

四位时区标识
Z		0700
z


{{ expression | pipeName1 | pipeName2 }}

data
json 非纯管道
uppercase
lowercase

slice 非纯管道


//decimal minIntegerDigits.minFactionDigits-maxFactionDigits
整数 小数最小保留数 小数最大保留数
number : 1.0-2

currency : 'USD' : false
USD23.23
currency : 'USD' : true : '1.2-2'
$23.23
CNY 人民币
EUR 欧元

percent 将小数转化为 百分比

{{number : percent[:1.0-2] }}

{{slice : start[:end] }}



自定义管道
import { SexReform } from './pipe/sexreform.pipe';
@NgModule({ 
	declarations: [SexReform]
})

import { Pipe, PipeTransform } from '@angular/core';
@Pipe({ name: 'sexReform'})
export class SexReform implements PipeTransform{
	transform(val:string): string{
		switch(val){
			case 'male': return '男';
			case 'female': return '女';
			default: return '未知性别';
		}
	}
	//{{val | sexReform }}
	
	/*
		transform 可以接受多个参数
		transform(val1:string, val2:string){}
		{{val1 | sexReform : val2 }}
	*/
}

默认情况下为纯管道 pure:boolean default true
@Pipe({
	name: 'sexReform',
	pure: false//非纯管道
})






//指令-------------------------------------------------------------------------------------------------------------
<li *ngFor="let item of items; let i = index;"></li>
<li *ngFor="let item of items; trackBy: trackByfn"></li>
trackByfn(){
	return contact.id;
}

*ngIf=""










































