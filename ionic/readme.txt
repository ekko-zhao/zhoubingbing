
// 安装
$ npm install -g ionic cordova

// 新建项目
$ ionic start projectName

// 在浏览器中启动
ionic serve


// ionic 

color ＝“primary secondary danger light dark  ”


// IonicModule-----------------------------------

@NgModule({
  declarations: [
    MyApp,
    HomePage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp, {

    })
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage
  ],
  providers: []
})
export class AppModule {}

Static Members:
forRoot(appRoot, config, deepLinkConfig)



// 元素标签-----------------------------------

<ion-footer> </ion-footer>
<ion-header> </ion-header>

hideWhen="android,ios,portrait,landscape"

<ion-icon name="ios-clock" ios="ios-home" md="md-home"></ion-icon>
	Input Properties
	Attr		Type		Details
	ios			string		Specifies which icon to use on ios mode.
	md			string
	name		string
	isActive	boolean

	
// 图片 懒加载---------------------
ion-img仅用于虚拟滚动中

<ion-img width="80" height="80" src="..."></ion-img>
<ion-img [width]="imgWidth" [height]="imgHeight" src="..."></ion-img>
<ion-img style="width: 80px; height: 80px;" src="..."></ion-img>

Input Properties
Attr		Type		Details
alt			string		Set the alt attribute which gets assigned to the inner img element.
bounds		any
cache		boolean
height		string
src			string
width		width

$img-placeholder-background	#eee




// InfiniteScroll  无限滚动----------------------------

<ion-content>
	<ion-list>
		<ion-item *ngFor="let i of items">{{i}}</ion-item>
	</ion-list>
	
	<ion-infinite-scroll (ionInfinite)="doInfinite($event)">
		<ion-infinite-scroll-content></ion-infinite-scroll-content>
	</ion-infinite-scroll>
</ion-content>


用于加载更多
@Component({...})
export class NewsFeedPage {
	items = [];

	constructor() {
		for (let i = 0; i < 30; i++) {
			this.items.push( this.items.length );
		}
	}

	doInfinite(infiniteScroll) {
	console.log('Begin async operation');
	
	setTimeout(() => {
		for (let i = 0; i < 30; i++) {
			this.items.push( this.items.length );
		}
	
		console.log('Async operation has ended');
			infiniteScroll.complete();
		}, 500);
	}
	
	
	// 异步加载
	doInfinite(): Promise<any> {
		console.log('Begin async operation');
	
		return new Promise((resolve) => {
			setTimeout(() => {
				for (var i = 0; i < 30; i++) {
					this.items.push( this.items.length );
				}
			
				console.log('Async operation has ended');
				resolve();
			}, 500);
		})
	}

}


<ion-content>

	<ion-infinite-scroll (ionInfinite)="doInfinite($event)">
		<ion-infinite-scroll-content
			loadingSpinner="bubbles"
			loadingText="Loading more data...">
		</ion-infinite-scroll-content>
	</ion-infinite-scroll>

</ion-content>


Instance Members:
	complete()
	enable(shouldEnable: boolean) // 没有更多可以添加的数据，并且不再需要无限滚动时，
	waitFor()

Input Properties:
Attr		Type		Details
enabled		boolean
position	string		top or bottom. Default is bottom. 加载更多发生在底部 还是顶部
threshold	string		下拉的距离 发生 100px or 10%

Output Events:
Attr		Details		ionInfinite









// 图像--------------------------------
<ion-avatar item-start> </ion-avatar>
<ion-avatar item-end> </ion-avatar>



// Chip 芯片 --------------------------------------------------
	ion-chip
	<ion-chip>
		<ion-label color="secondary">Secondary Label</ion-label>
	</ion-chip>
	
	<ion-chip>
		<ion-label>Danger</ion-label>
		<ion-label color="secondary">Secondary Label</ion-label>
	</ion-chip>
	
	<ion-chip>
		<ion-avatar>
	    	<img src="assets/img/my-img.png">
		</ion-avatar>
		<ion-label color="secondary">Secondary Label</ion-label>
	</ion-chip>


// showWhen
<span ion-text color="primary" showWhen="ios">Cancel</span>
<ion-icon name="md-close" showWhen="android, windows"></ion-icon>



// Config --------------------------------------------------


import { IonicApp, IonicModule } from 'ionic-angular';

@NgModule({
declarations: [ MyApp ],
	imports: [
		BrowserModule,
		IonicModule.forRoot(MyApp, {
			backButtonText: 'Go Back',
			iconMode: 'ios',
			modalEnter: 'modal-slide-in',
			modalLeave: 'modal-slide-out',
			tabsPlacement: 'bottom',
			pageTransition: 'ios-transition',
			
			
			tabsPlacement: 'bottom',
	      	platforms: {
				ios: {
					tabsPlacement: 'top',
				}
			}
			
			
		}, {}
	)],
	bootstrap: [IonicApp],
	entryComponents: [ MyApp ],
	providers: []
})

Property			Type		Details
mode				string		在整个应用程序中使用的模式。

activator			string		用于按钮，更改按下按钮的效果 Available options: "ripple", "highlight".


loadingEnter		string		The name of the transition to use while a loading indicator is presented.
loadingLeave

actionSheetEnter	
actionSheetLeave	

alertEnter			
alertLeave			

modalEnter	
modalLeave

pickerEnter
pickerLeave

popoverEnter
popoverLeave


backButtonText		string			The text to display by the back button icon in the navbar.
backButtonIcon		string			The icon to use as the back button icon.

iconMode			string		The mode to use for all icons throughout the application. Available options: "ios", "md"
locationStrategy	string		设置为“路径”以在使用深度链接时除去hashbang。

menuType			string		Type of menu to display. Available options: "overlay", "reveal", "push".

pageTransition		string		更改页面时要使用的转换的名称。	Available options: "ios-transition", "md-transition", "wp-transition".

spinner				string		未定义名称时使用的默认微调框。
swipeBackEnabled	boolean		是否启用本地iOS滑盖即可返回功能。

tabsHighlight		boolean		是否在选择该选项卡时显示高亮线。
tabsLayout			string		The layout to use for all tabs. Available options: "icon-top", "icon-start", "icon-end", "icon-bottom", "icon-hide", "title-hide".
tabsPlacement		string		The position of the tabs relative to the content. Available options: "top", "bottom"
tabsHideOnSubPages	boolean		在页面上是否隐藏标签。 If true it will not show the tabs on child pages.

toastEnter			string		The name of the transition to use while a toast is presented.
toastLeave			string		The name of the transition to use while a toast is dismissed.


Instance Members:
get(key, fallbackValue:any)		// Returns a single config value, given a key。 fallbackValue 的作用是没有设置默认值的时候， 返回改值

getBoolean(key, fallbackValue:boolean)
getNumber(key, fallbackValue:number)
set(platform('ios'|'android'), key, value)


// Events --------------------------------------------------
用于不同页面传递数据

import { Events } from 'ionic-angular';

// first page (publish an event when a user is created)
constructor(public events: Events) {}
createUser(user) {
	console.log('User created!')
	this.events.publish('user:created', user, Date.now());
}

// second page (listen for the user created event after function is called)
constructor(public events: Events) {
	events.subscribe('user:created', (user, time) => {
		// user and time are the same arguments passed in `events.publish(user, time)`
		console.log('Welcome', user, 'at', time);
	});
}

Instance Members:
// 添加数据
publish(topic:string, eventData:any)

// 获取数据
subscribe(topic:string, handler:function)

// 取消订阅
unsubscribe(topic, handler)






// 获取组件的 Instance --------------------------------

import { ViewChild } from '@angular/core';

@ViewChild('#instanceName') instanceName; 该实例有 Instance Members 等方法
 
// API -----------------------------------------------------------------------------------------------

// App --------------------------------
import {  App } from 'ionic-angular';

constructor( public app: App ){}

Instance Members:
	getActiveNav()  	Returns: NavController
	getActiveNavContainers()
	getActiveNavs()
	getRootNav()
	getRootNavById()
	getRootNavs()
	isScrolling()
	setTitle(val)
	
	
	viewDidEnter
	viewDidLeave
	viewDidLoad
	viewWillEnter
	viewWillLeave
	viewWillUnload
	


// NavParams --------------------------------

import {  NavParams } from 'ionic-angular';

constructor( public params: NavParams ){
	var property = this.params.get('propertyName')
}


