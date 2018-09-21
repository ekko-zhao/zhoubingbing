TypeScript 2.x-----------------------
npm install @types/node --save-dev

// webpack把模块里templateUrl的html文件像打包stylesUrl一样打包
 loaders: [
    {
        test: /\.ts$/,
        loaders: ['ts', 'angular2-template-loader']
    }
 ]

//angular2 --------------------------------------------------------------------

?.安全操作符
{{detail?.name}}


//生产环境
import { enableProdMode } from '@angular/core';
enableProdMode();


// 入口 main.js------------------------------------------------------------------------
import 'reflect-metadata';
import 'zone.js';

import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
//import { platformBrowser } from '@angular/platform-browser';
import { AppModule } from './app.module';

platformBrowserDynamic().bootstrapModule(AppModule)
	.catch( err => console.log(err) )

//启动根模块--------------------------------------------------------------------
//app.module.ts

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

//知识点记载---------------------------------------------------------------
(keyup)
按键事件过滤(keyup.enter)
失去焦点事件 (blur)

//元数据 渲染方式
@Component({
	queries
	encapsulation: ViewEncapsulation.None (没有样式包装)  || ViewEncapsulation.Emulated（样式包装 [_ngcontent-1]）|| ViewEncapsulation.Native
})


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
				<list-item [ contactName ]="contact" (onListen)="listen($event)"></list-item>
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
//ng-content 插槽------------------------------------------------------
    父组件
    <parent-component>
        <header></header>
        <div class="className">className</div>
        <div name="attr">attr</div>
    </parent-component>

    子组件
    <ng-content select="header"> </ng-content>
    <ng-content select=".className"> </ng-content>
    <ng-content select="[name=attr]"> </ng-content>



ngOnInit
ngOnDestroy
ngOnChanges
ngDoCheck
ngAfterContentInit
ngAfterContentChecked
ngAfterViewInit
ngAfterViewChecked


//组件初始化 插入DOM中
ngOnInit(){

}
//组件销毁
ngOnDestroy(){

}


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


[ngClass]="fn()" \ ="{class:isBoolean}"
[ngStyle]="{'background-color':'green'}"

// ngSwitch ----------------------------------------------------------------
<ul [ngSwitch]="property">
	<li *ngSwitchCase=""></li>
	<li *ngSwitchCase=""></li>
	<li *ngSwitchDefault></li>
</ul>

NgPlural NgPluralCase -------------------------------------------------------
class MyLocalization extends NgLocalization{
	getPluralCategory(value:any){
		if(value<5) return 'few'
	}
}
@Component({
	selector:'',
	template:`
		<div [ngPlural]="value">
			<template ngPluralCase="0">0</template>
			<template ngPluralCase="1">1</template>
			<template ngPluralCase="few">few</template>
			<template ngPluralCase="other">other</template>
		</div>
	`,
	directives: [NgPlural, NgPluralCase],
	providers: [provide(NgLocalization,{useClass: MyLocalization})]
})

//表单双向绑定 -------------------------------------------------------
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




NgPlural NgPluralCase--------------------------
class MyLocalization extends NgLocalization{
	getPluralCategory(value:any){
		if(value<5) return 'few'
	}
}

@Component({
	selector:'',
	template:`
		<div [ngPlural]="value">
			<template ngPluralCase="0">0</template>
			<template ngPluralCase="1">1</template>
			<template ngPluralCase="few">few</template>
			<template ngPluralCase="other">other</template>
		</div>
	`,
	directives: [NgPlural, NgPluralCase],
	providers: [provide(NgLocalization,{useClass: MyLocalization})]
})


//单选框----------------
<input type="radio" name="six" [(ngModel)]="property" value="female">
<input type="radio" name="six" [(ngModel)]="property" value="male">

//复选框----------------
<input type="checkbox" name="six" [(ngModel)]="property">
property:true\false

//单选下拉框----------------
interests:any[] =[
	{value:'', text:''},
	{value:'', text:''}
]

<select name="interestValue" [(ngModel)]="">
	<option *ngFor="let interest of interests" [value]="interest.value">{{ interest.text }}</option>
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
<fieldset ngModelGroup="nameGroup" #nameGroup="ngModelGroup">
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


// 重置表单
import { NgForm } from '@angular/forms';

<from #searchForm="ngForm">
	<input name="form.systemReferNo" [(ngModel)]="form.systemReferNo"
</from>
this.searchForm.resetFrom()
单个重置
'form.systemReferNo' 与 表单name 一致
this.searchForm.controls['form.systemReferNo'].reset();

// 添加 表单自定义验证-------------------------------------------------------

/* username.validator.ts */
import { FormControl } from '@angular/forms';
export function validateUsername(c: FormControl) {
    //let regexp = /^1[0-9]{10,10}$/;
    let regexp = /^[^_][A-Za-z0-9_\u4e00-\u9fa5]+$/;

    let strlen = 0;
    let value = c.value;
    if(!value) return;
    for (var i = 0; i < value.length; i++) {
        if (value.charCodeAt(i) > 255)
            strlen += 2;
        else
            strlen++;
    }

    return regexp.test(c.value) && (strlen >= 6 && strlen <= 30)  ? null : {
        validate: { valid: false }
    }
}

/* username.directive.ts */
import { Directive } from '@angular/core';
import { NG_VALIDATORS } from '@angular/forms';
import { validateUsername } from '@myDirective/username.validator';

@Directive({
    selector: '[validateUsername][ngModel]',
    providers: [
        { provide: NG_VALIDATORS, useValue: validateUsername, multi: true }
    ]
})
export class UsernameValidator {
}
/* 	
	模型驱动方式构建表单
	firstName: new FormControl('', [Validators.minLength(4) , UsernameValidator])
*/

/* html */
<input class="form-control" type="text" name="name" id="name" [(ngModel)]="form.name" validateUsername (keyup)="form.name=$event.target.value" required>


//模型驱动方式构建表单

/*
	<form [formGroup]="editform">
		<input type="text" formControlName="firstName" >
	</form>
	this.editform = new FormGroup({
		firstName: new FormControl('', [Validators.minLength(4) , Validators.pattern([a-z0-9]+@[a-x0-9].com)])
		// 第一个参数可以是一个 Object{ value: '', disabled: false} 指定值和 状态
		//firstName: new FormControl('', validateFirstName)

		//正则表达式 不加 / /
	})
	
*/

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
			//firstName: new FormControl('', validateFirstName)

			//正则表达式 不加 / /
		})
	}

}

//formControl-----------
<input type="text" [formControl]="firstname2">
<p>{{firstname2.value}}</p>
firstname2: FormControl = new FormControl();

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
number : '1.0-2'

currency : 'USD' : false
USD23.23
currency : 'USD' : true : '1.2-2'
$23.23
CNY 人民币
EUR 欧元

percent 将小数转化为 百分比

{{ * | number : percent[:1.0-2] }}

{{ * | slice : start[:end] }}



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


*ngIf=""
[hidden]=""
(ngModelChange)


<li *ngFor="let item of items; let i = index;"></li>
<li *ngFor="let item of items; trackBy: trackByfn; let isEven=even; let isFirst=first; let isOdd=odd; let isLast=last;"></li>
trackByfn(index : number, contact : Hero){
	return contact.id;
}


//自定义指令------------------
import { Directive, ElementRef} from '@angular/core';
@Directive({
	selector:'[myBeautifulBackground]'
})
export class BeautifulBackgroundDirective{
	constructor(el: ElementRef){
		el.nativeElement.style.backgroundColor='yellow'
	}
}
<p myBeautifulBackground>background</p>


/* app.module.ts*/
@NgModule({
    declarations: [
        directive.file.ts
    ]
})
	
//为指令绑定输入
import { Directive, ElementRef, Input } from '@angular/core';
@Directive({
	selector:'[myBeautifulBackground]'
})
export class BeautifulBackgroundDirective{
	private _defaultColor = 'yellow'
	private el:HTMLElement;

	@Input('myBeautifulBackground') set backgroundColor(colorName:string){
		this.setStyle(colorName)
	}

	constructor(el: ElementRef){
		this.el = el.nativeElement;
		this.setStyle(this._defaultColor);
	}

	private setStyle(color:string){
		this.el.style.backgroundColor = color
	}
}

<p [myBeautifulBackground]="color">background</p>
color:string = "red";

//响应用户操作
import { Directive, ElementRef, Input, HostListener } from '@angular/core';
@Directive({
	selector:'[myBeautifulBackground]'
})
export class BeautifulBackgroundDirective{
	private _defaultColor = 'yellow'
	private el:HTMLElement;

	@Input('myBeautifulBackground') backgroundColor:string;

	constructor(el: ElementRef){
		this.el = el.nativeElement;
		this.setStyle(this._defaultColor);
	}
	// 获取 event 
	// @HostListener('click', ['$event','$event.target'])  onClick(event, target){}
	
	@HostListener('click') onClick(){
		this.setStyle(this.backgroundColor || this._defaultColor);
	}

	private setStyle(color:string){
		this.el.style.backgroundColor = color
	}
}

<p [myBeautifulBackground]="'red'">background</p>

//自定义指令结构
import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';
@Directive({
	selector:'[myBeautifulBackground]'
})
export class BeautifulBackgroundDirective{

	@Input('myBeautifulBackground')
	set condition(newCondition:boolean){
		console.log(newCondition)
		if(!newCondition){
			this.viewContainer.createEmbeddedView(this.templateRef);
		}else{
			this.viewContainer.clear()
		}
	}
	constructor(private templateRef:TemplateRef <any>, private viewContainer: ViewContainerRef ){
		console.log(this.templateRef);

	}

}

<p *myBeautifulBackground="b" >asas</p>
b:boolean = false / true



// FormArrayName----------------------
@Component({
	selector:'',
	template:`
		<div>

		</div>
	`,
})


//共享服务示例----------------------
/*
	自组建可以用 父级组件的providers
*/

import { Injectable } from '@angular/core';
@Injectable()
export class SharedService{
	list: string[] = [];
	append(str: string){
		this.list.push(str)
	}
}

//parent-component
import { Component} from '@angular/core';
import { SharedService } from '../services/shared.service';

@Component({
	selector: 'list',
	template: `\
		<ul *ngFor="let item of list">
			<li>{{item}}</li>
		</ul>
		<list-item></list-item>
	`,
	styles: [ ],
	providers:[SharedService]
})
export class ListComponent {
	list: string[]=[];
	constructor(private _sharedService: SharedService){
		var $t = this
		setTimeout(function(){
			console.log($t._sharedService)
		},2000)
	}
	ngOnInit(): any{
		this.list = this._sharedService.list;
	}
}

//child-component
//注意子组件不能加 providers:[SharedService]，否则他们将会分别创建自己的实例对象
import { Component} from '@angular/core';
import { SharedService } from '../services/shared.service';
@Component ({
	selector: "list-item",
	template: `
		<input type="text" [(ngModel)]="inputText">
		<button (click)="add()">button</button>
	`

})
export class ListItemComponent{
	inputText:string = 'Testing data'
	constructor(private _sharedService: SharedService){

	}
	add(){
		this._sharedService.append(this.inputText);
		console.log(this._sharedService)
	}
}


//http get 请求-------------------------

import { HttpModule } from '@angular/http';
@NgModule({
	imports: [HttpModule]
})


import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable, URLSearchParams } from 'rxjs/Rx';

@Injectable()
export class ContactService{
	constructor(private _http: Http){}

	//get
	getContacts(url:string): Observable<any[]>{
		return this._http.get(url)
		.map(this.extractData)
		.catch(this.handleError)
	}
	//Promise
	/*getContacts(url:string): Promise<any[]>{
		return this._http.get(url)
		.toPromise()
		.then(this.extractData)
		.catch(this.handleError)
	}*/
	//jsonp
	getContacts(){
		let url='';
		let params = new URLSearchParams();
		params.set('format','json');
		params.set('callback','JSONP_CALLBACK');

		return this._jsonp
		.get(url,{search: params})
		.map(res =>res.json())
		.subscribe(
			contacts => this.contacts = contacts,
			error => this.errorMessage = <any>error
		)
	}


	//post
	addContact(contact:object,url:string) : Observable<any>{
		let body = JSON.stringify(contact);
		let headers = new Headers({'Content-type':'application/json'})
		let options = new RequestOptions({'headers': headers});

		return this._http.post(url, body, options)
		.map(this.extractData)
		.catch(this.handleError)
	}


	let url ='url';

	private extractData(res: Response){
		let data = res.json();
		return data|| {}
	}

	private handleError(error: any){
		let errMsg = (error.massage) ? error.massage:
			error.status? `${error.status} - ${error.statusText}` : 'Server error';
		return Observable.throw(errMsg);
	}

}

import { Component} from '@angular/core';
import { SharedService } from '../services/shared.service';
const CONTACT_URL = './src/json/contact.json';

@Component({
	selector: 'list',
	template: ``,
	styles: [ ],
	providers:[ContactService]
})
export class ListComponent {
	contacts:any;
	errorMessage:any;
	constructor(private _contactService: ContactService){ }
	getContacts(){
		return this._contactService.getContacts(CONTACT_URL).subscribe(
			contacts => this.contacts = contacts,
			error => this.errorMessage = <any>error
		)
	}
}

# 跨域请求 阻止 sessionId 发生改变	设置 withCredentials:true

	let options = new RequestOptions({ 'headers': headers, 'withCredentials': true });
        return this._http.post(url, body, options)
		


//拦截器 interceptor-----------------------------

import { RequestOptions, Http, HttpModule } from '@angular/http';
import { HttpInterceptor } from './http-interceptor';
import { HttpInterceptorBackend } from './http-interceptor-backend';
import { httpFactory } from './http-factory';

@NgModule({
	imports: [HttpModule],
	providers:[HttpInterceptor, HttpInterceptorBackend,
		{
			provide: Http,
		 	useFactory: httpFactory,
			deps: [HttpInterceptorBackend, RequestOptions]
		}

	]
})


http-interceptor.ts---------

import { Injectable } from '@angular/core';
import { Request, Response } from '@angular/http';
import { Observable } from 'rxjs';

@Injectable()
export class HttpInterceptor{
	beforeRequest(request:Request):Request{
		//请求发出前的处理逻辑
		console.log(request);
		return request;
	}

	afterResponse(res: Observable<Response>): Observable<any>{
		//请求响应的处理逻辑
		/*
		res.subscribe( (data) =>{
			console.log(data);
		});
		*/
		return res;
	}
}


http-interceptor-backend.ts-------------

import { Injectable } from '@angular/core';
import { ConnectionBackend, XHRConnection, XHRBackend, Request } from '@angular/http';
import { HttpInterceptor } from './http-interceptor';

@Injectable()
export class HttpInterceptorBackend implements ConnectionBackend {
	constructor(private _httpInterceptor: HttpInterceptor, private _xhrBackend: XHRBackend){}
	createConnection(request: Request): XHRConnection{
		let interceptor = this._httpInterceptor;

		let req = interceptor.beforeRequest ? interceptor.beforeRequest(request) : request;
		let result = this._xhrBackend.createConnection(req);
		result.response = interceptor.afterResponse ? interceptor.afterResponse(result.response) : result.response;

		return result;
	}
}


http-factory.ts---------

import { RequestOptions, Http } from '@angular/http';
import { HttpInterceptorBackend } from './http-interceptor-backend';

export function httpFactory(httpInterceptorBackend: HttpInterceptorBackend, requestOptions: RequestOptions): Http{
	return new Http(httpInterceptorBackend, requestOptions);
}



//依赖注入----------------------------------------------------------------------------------------------------------------------

@Injectable() 当该服务依赖其他服务时 必须 加@Injectable()； 否则可选； angular官方推荐无论是否有其他依赖都需要 @Injectable()；

//在组件中注入服务-------------
@Component({
	providers:[ serviceName ]
})
export class className{
	constructor(public serviceproperty :serviceName){ }
}

//在服务中注入服务-------------
@Injectable()
export class serviceName{
	constructor(public serviceproperty :serviceName){}

}

//在模块中注入服务-------------

@NgModule({
	providers:[serviceName]
})


//serviceName1 , serviceName2 中依赖相同服务时 serviceName2会覆盖serviceName1中的service
@NgModule({
	import:[serviceName1,serviceName2],
	exports:[moduleName]
})


//依赖查找的规则是按照注入器从当前组件向父级查找 找不到就会报错

//@Host 限定在当前组件查找  找不到就会报错
constructor( @Host() propertyName: serviceName ){}

//@Optional 可以兼容依赖不存在的情况 提高系统的健壮性 找不到不会报错
constructor( @Optional() propertyName: serviceName ){}





//provider 注册方式

·类 Provider
var injector = Injector.resolveAndCreate({
	{provide:Render, useClass:DomRender},
	{provide:Render, useClass:CanvasRender},
	{provide:Render, useClass:ServiceRender}
})


·值globalSetting
let globalSetting ={}


@Component({
	provides:[
		{provide:provideName1, useValue:'aass'},
		{provide:provideName2, useValue:globalSetting}
	]
})



·别名 globalSetting  实现多个依赖共享一个对象实例
@Component({
	provides:[
		{provide:NewLoggerService, useClass:NewLoggerService},
		{provide:OldLoggerService, useExisting:NewLoggerService},
	]
})


·工厂 Provider
@Component({
	provides:[
		{provide:ContactService, useFactory:contactServiceFactory, deps:[ Service1, Service2  ]}
	]
})


//在子组件中获取父级组件的引用
@Component({
	selector:'child-component'
})
export class className{
	constructor(private _parentComponent:ParentComponent){
		console.log(_parentComponent)
	}
}



//在子组件中获取父级组件的实例对象
export abstract class Parent{
	name:string
}

//parent-component
import { Parent } from './parent';
@Component({
	providers:[
		{provide:Parent, useClass: ListComponent}
	]
})
export class ListComponent implements Parent{
	name:string = 'bingbing';
	constructor(){
		console.log(1)
	}
}

//child-component
import { Parent } from './parent';
export class ListItemComponent{
	constructor(public _parent:Parent ){

	}

}



//路由配置
//app.router.ts---------------------------------------
import { Routes } from '@angular/router';
import { HeaderComponent } from '../component/header.component';
import { FooterComponent } from '../component/footer.component';

export const rootRouterConfig: Routes =[
	{path: '', redirectTo: 'header', pathMatch: "full" },
	{path:'header/:id', component: HeaderComponent},
	{path:'footer', component: FooterComponent}
]
//嵌套路由
export const rootRouterConfig: Routes =[
	{path: '', redirectTo: 'header', pathMatch: "full" },
	{path:'header/:id', component: HeaderComponent,children:[
		{path:'path', component: componentName }
	]},
	{path:'footer', component: FooterComponent}
]

//footer.component.ts----------------------------------
@Component({
	//selector: '',
	template: `<h3>footer</h3>`,
})
export class FooterComponent{ }



//app.component.ts--------------------------------------
@Component({
	selector: 'app-component',
	template: `
		<main>
			<router-outlet></router-outlet>
			//path:'header/:id' 自动拼接
			<a [routerLink]="['/header',12]" [queryParams]="{limit:5}" routerLinkActive="className">header</a>
			<a [routerLink]="['/footer']" routerLinkActive="className">footer</a>
			<!--
				or
				<a [routerLink]="['/header',12]">header</a>
				<a [routerLink]="['/footer']">footer</a>

				//向子页面添加 Matrix参数
				<a [routerLink]="['/header',12,{start:'2017-5-12'，end:'2017-5-20'}]">header</a>

			-->

		</main>
	`
})
export class AppComponent{ }

]

//app.module.ts
import { RouterModule } from '@angular/router';
import { rootRouterConfig } from './app.routers';
let rootRouterModule: ModuleWithProviders = RouterModule.forRoot(rootRouterConfig, { useHash: true });

@NgModule({
	declarations: [AppComponent, HeaderComponent, FooterComponent],
	imports: [BrowserModule, rootRouterModule],
	bootstrap: [AppComponent],
	//providers:[]
})
export class AppModule{ }


//设置base-------------------------------
import { APP_BASE_HREF } from '@angular/common';
@NgModule({
	providers:[
		{provide:APP_BASE_HREF, useValue:'/app'}
	]
})
export class AppModule{ }


//代码跳转页面
import { Router } from '@angular/router';
export class AppComponent{
	constructor(public _router:Router){
		setTimeout(function(){
			//_router.navigate(['/footer']);
			console.log(_router)
			//字符串 or urlTree	实例
			_router.navigateByUrl('/footer');

			/*
				//不改变url 跳转页面
				_router.navigate(['/footer',23], {skipLocationChange:true});
				
				// 查询参数 
				_router.navigate(['/footer',23], {queryParams:{'name':'yxman'}});
					url?name=yxman
				
				_router.navigate(['/footer',{'name':'yxman'}]); 
					url;name=yxman
				
			*/

			/*
				_router.navigate(['/footer'，23]);
				_router.navigateByUrl('/header/23');

			*/


		},2000)
	}
}


//获取 url参数 id

import { ActivatedRoute } from '@angular/router';

constructor(private _activatedRoute: ActivatedRoute){
	console.log(_activatedRoute.snapshot.params['id'])
	_activatedRoute.snapshot.url[0]) === 'header'
	_activatedRoute.snapshot.url[1]) === 23 === id
}



//同一页面内跳转参数订阅
export class className implements OnInit, OnDestroy{
	private sub: any;
	id: string
	constructor( private _activatedRoute:ActivatedRoute){
		this.sub = _activatedRoute.params.subscribe(parames =>{
			this.id = parames.id
			console.log(this.id)
		})
	}

	ngOnInit(){
	}
	ngOnDestroy(){
		//避免内存泄漏
		this.sub.unsubscribe()
	}
}

//同一页面内跳查询转参数订阅
export class className implements OnInit, OnDestroy{
	private sub: any;
	limit: string
	constructor( private _activatedRoute:ActivatedRoute){
		this.sub = _activatedRoute.queryParams.subscribe(parames =>{
			this.limit = parames.limit
			console.log(this.limit)
		})
	}

	ngOnInit(){
	}
	ngOnDestroy(){
		//避免内存泄漏
		this.sub.unsubscribe()
	}
}

//路由嵌套-------------------------------
//parent-router
<router-outlet></router-outlet>

//child-router
<router-outlet></router-outlet>
<router-outlet name="aux"></router-outlet>


//路由配置
export const rootRouterConfig: Routes =[
	{path: '', redirectTo: 'main', pathMatch: "full" },
	{path:'main/:id', component: componentName,
		children:[
			path: '', component: componentName,
			path: 'child', component: componentName,
			{path: 'view', component: componentName, outlet:'aux'}
		]
	},
]

//路由跳转---------------------------------
_router.navigate(['/header','233', {s:'2017-05-24'}, {outlets:{primary: ['child'], aux:['view']}}]);
or
_router.navigate(['/header','233', {s:'2017-05-24'}, 'child', {outlets:{aux:['view']}}]);

// 监听路由变化 ---------------------------------
constructor(
	private router: Router,
){}
this.router.events
	.filter(event => event instanceof NavigationEnd)
	.map(() => this.activatedRoute)
	.subscribe((event) => {
		
	});

//路由拦截---------------------------------

CanActivate 开始进入路由时
CanActivateChild 路由子路由控制
CanDeactivate 开始离开路由时


//can.activate.guard.ts
import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

@Injectable()
export class CanActivateGuard implements CanActivate{
	canActivate(  route:ActivatedRouteSnapshot, state:RouterStateSnapshot ){
		//route 表示要激活的目标配置项
		//state 表示当前所处的路由状态  包含了（要激活的目标配置项）

		if(/* 登陆 */){
			return true;
		}else{
			return false;
		}

		/*
			//异步执行
			return new Observable<boolean>( observer => {
				setTimeout(function(){
					observer.next(true);
					//observer.next(false);
					observer.complete();
				},2000)

			})
		*/
	}
}

//模块注入
@NgModule({
	providers:[ CanActivateGuard ]
})

//路由配置注入
import { CanActivateGuard } from '../services/can.activate.guard';
export const rootRouterConfig: Routes =[
	{path: 'child', component: componentName, canActivate:[CanActivateGuard]},
]

//CanActivateChild 与 CanActivate类似 用于控制子路由配置项-------------------------------
@Injectable()
export class CanActivateChildGuard implements CanActivate{
	canActivateChild(){
		return true;
	}
}
//路由配置注入
import { CanActivateGuard } from '../services/can.activate.guard';
export const rootRouterConfig: Routes =[
	{path: 'child', component: componentName, canActivateChild:[CanActivateChildGuard],children:[
		{},
		{}
	]},
]


//反激活路由(离开路由时) CanDeactivate----------------
@Injectable()
export class CanDeactivateGuard implements CanDeactivate{
	CanDeactivate(component:any, route:ActivatedRouteSnapshot, state:RouterStateSnapshot){
		//比较component实例数据是否发生变化

		//异步执行
			return new Observable<boolean>( observer => {
				confirm({
					done:function{
						observer.next(true);
						observer.complete();
					}
				})
			})

		return true;
	}
}

import { CanDeactivateGuard } from '../services/can.deactivate.guard';
export const rootRouterConfig: Routes =[
	{path: 'child', component: componentName, canDeactivate:[CanDeactivateGuard],children:[
		{},
		{}
	]},
]

//模块注入
@NgModule({
	providers:[ CanDeactivate ]
})


//数据预加载拦截-----------------------------------------
//resolve.guard.ts
import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { Observable } from 'rxjs';
import { Http, Response, Headers, RequestOptions } from '@angular/http';

@Injectable()
export class ResolveGuard implements  Resolve<any>{
	constructor(private _http: Http){ }

	resolve(){
		return this._http.get('./src/json/contact.json')
		.map(this.extractData)
		.catch(this.handleError)
		/*
			return new Observable<boolean>( observer => {
				setTimeout(function(){
					observer.next(true);
					observer.complete();
				},2000)
			})

		*/
		//拦截服务返回的数据 放置在ActivatedRoute 的data属性中
	}

	private extractData(res: Response){
		let body = res.json();
		return body.data|| {}

	}

	private handleError(error: any){
		let errMsg = (error.massage) ? error.massage:
			error.status? `${error.status} - ${error.statusText}` : 'Server error';
		return Observable.throw(errMsg);
	}
}
//路由
import { ResolveGuard } from '../services/resolve.guard';
export const rootRouterConfig: Routes =[
	{path: 'child', component: componentName,
		resolve:{
			contact: ResolveGuard
		},
		children:[
		{},
		{}
	]},
]

//模块注入
@NgModule({
	providers:[ ResolveGuard ]
})


//动画---------------------------------------------------------------------------------
npm install --save @angular/animations

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
//into your app.module.ts file.

//myAnimation.component.ts
import { trigger, state, style, animate, transition} from '@angular/animations';
@Component({
	selector: 'my-animation',
	template: `
		<button type="button" [@heroState]="state" (click)="toggleState()">button-animate</button>
	`,
	animations: [
		trigger('heroState', [
			state('inactive', style({
				backgroundColor: '#eee',
				transform: 'scale(1)'
			})),
			state('active',   style({
				backgroundColor: '#cfd8dc',
				transform: 'scale(1.1)'
			})),
			transition('inactive => active', animate('100ms ease-in')),
			transition('active => inactive', animate('100ms ease-out')),

			/*
				//延迟0.2s 第一个参数
				animate('0.2s 0.1s ease-out')

				transition('inactive => active', [
					style({transform: 'translateX(-100%) scale(1)'}),
					animate('100ms')
				]),

				//进场
				//transition(':enter', [ ... ]); // void => *
				transition('void => *', animate('100ms ease-out')),

				//离场
				transition('* => void', animate('100ms ease-out'))
				//transition(':leave', [ ... ]); // * => void


				//0%, 70%, 100%
				transition('* => void', [
				  animate(300, keyframes([
					style({opacity: 1, transform: 'translateX(0)',     offset: 0}),
					style({opacity: 1, transform: 'translateX(-15px)', offset: 0.7}),
					style({opacity: 0, transform: 'translateX(100%)',  offset: 1.0})
				  ]))
				])

				//并行动画组
				transition('void => *', [
				  style({width: 10, transform: 'translateX(50px)', opacity: 0}),
				  group([
					animate('0.3s 0.1s ease', style({
					  transform: 'translateX(0)',
					  width: 120
					})),
					animate('0.3s ease', style({
					  opacity: 1
					}))
				  ])
				]),

			*/

		])
	]
})
export class MyAnimation{
	state:string = 'active';
	toggleState(){
		if(this.state == "inactive" ){
			this.state = "active"
		}else{
			this.state = "inactive"
		}

	}
}

//动画回调----------------------
template: `
  <ul>
    <li *ngFor="let hero of heroes"
        (@heroState.start)="animationStarted($event)"
        (@heroState.done)="animationDone($event)"
        [@heroState]="state">
      {{hero.name}}
    </li>
  </ul>
`,





//延迟加载模块实现------------------------------------------
npm install angular-router-loader --save-dev
npm install awesome-typescript-loader --save-dev

//webpack.config.js
module: {
	loaders: [{
		test: /\.tsx?$/,
		loader: 'awesome-typescript-loader!angular-router-loader',
		//or
		// loaders: ['awesome-typescript-loader','angular-router-loader'],
		exclude: '/node_modules/'
	}]
}

//delaying-component
import { Component } from '@angular/core';
@Component({
	template: `
		<p>delaying.component-ok<p>
	`
})
export class DelayingComponent{
	constructor(){}
}

//delaying-module
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DelayingComponent } from './delaying.component';
import {CommonModule} from "@angular/common";


//和 app.routers.ts 路由一对一
	const delayingRortes: Routes = [
		{path:'', component: OtherComponent}
		{path:'id', component: DelayingComponent}
	]

	/*
	在延迟加载模块中需要 imports CommonModule， 解析 ngIf ngFor 等指令
	*/


@NgModule({
	imports: [ RouterModule.forChild(delayingRortes), CommonModule ],
	declarations: [DelayingComponent],

})
export class DelayingModule{}

//app.routers.ts

export const rootRouterConfig: Routes =[
	//{path:'delay/id', component:DelayingModule}
	{path:'delay', loadChildren:'../delaying.module/delaying.module.ts#DelayingModule'}
	/*
		//?sync=true 为同步加载
		{path:'delay', loadChildren:'../delaying.module/delaying.module.ts#DelayingModule?sync=true'}
	*/
]


//CanLoad模块加载拦截 ------------------------------------
//用法和CanActivate相似

//can.load.guard.ts

@injector()
export class CanLoadGuard implements CanLoad {
	canLoad(route:Route){
		if(/* 允许加载 */){
			return true;
		}else{
			return false;
		}
		//异步加载同上

	}
}

//app.routers.ts
export const rootRouterConfig: Routes =[
	//{path:'delay/id', component:DelayingModule}
	{path:'delay', loadChildren:'../delaying.module/delaying.module.ts#DelayingModule'，canLoad:[CanLoadGuard]}

]



//测试----------------------------------------------------------------------------
jasmine [ˈdʒæzmɪn]
Karma [ˈkɑ:mə]

//端到端的测试
Protractor

//md5加密--------------------------------------------------
npm install --save-dev crypto;
const crypto =  required('crypto');
var md5 = (str:string)=>{
		return crypto.createHash('md5')
		.update(str.toString())
		.digest('hex')
	}



---------------------------------------------------------------------------------------------------------------------

针对页面上某个元素的数据更新做处理
   1、定义模板驱动表单名
  <input type="text" pInputText size="50" [formControl]="term" placeholder="输入搜索条件">

   2、ts 文件中新建一个表单元素对象。
  colo = new FormControl();

  3、ngonInit中订阅数据更新

    this.colo.valueChanges.distinctUntilChanged().subscribe((ast) => {
     //do something
    })


------------------------------------------------------------------------------
import {DomSanitizer} from "@angular/platform-browser";
import { HttpService } from '@service/http-service';
constructor(
        private sanitizer: DomSanitizer
 ) { }
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
