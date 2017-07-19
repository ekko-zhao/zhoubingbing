
// 安装
$ npm install -g ionic cordova

// 新建项目
$ ionic start projectName

// 在浏览器中启动
ionic serve


@Component({})
	class MyPage {
	constructor(public componentNameCtrl: ComponentNameController) {}

	presentPopover(myEvent) {
		let componentName = this.componentNameCtrl.create(PopoverPage, data, options);
		/*
			data 传向 PopoverPage组件 NavParams 属性中
			options{
				Param					Type		Description
				cssClass				string 		Additional classes for custom styles, separated by spaces.
				showBackdrop			boolean 	Whether to show the backdrop. Default true.
				enableBackdropDismiss	boolean		Whether the popover should be dismissed by tapping the backdrop. Default true.
			}
		*/
		
		componentName.present({
			ev: myEvent // 如果 Ctrl 需要依据点击的元素来定位，则需要传入 $event ( PopoverController )
		});
	}
}

获取组件的 Instance

import { ViewChild } from '@angular/core';

@ViewChild('#instanceName') instanceName; 该实例有 Instance Members 等方法
 
 