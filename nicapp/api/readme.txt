
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
	
# IonicPageModule 
	@NgModule({
	  declarations: [
		MyPage
	  ],
	  imports: [
		IonicPageModule.forChild(MyPage)
	  ],
	  entryComponents: [
		MyPage
	  ]
	})
	export class MyPageModule {}


#IonicPage
	@IonicPage(
		name: 'my-page',
		segment:'my-page',
		priority: 'high | low | off'
		defaultHistory: ['list']
	)
	@Component({
	  templateUrl: 'main.html'
	})
	export class MyPage {}








