
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

	
// 图像--------------------------------
<ion-avatar item-start> </ion-avatar>
<ion-avatar item-end> </ion-avatar>	





		
		
		
		
		
		
		
		
		

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
Instance Members
data
get(param:string)














