/* 快捷菜单 */
import { Component, OnInit, Optional, Input, ElementRef } from '@angular/core';
import { PlatformLocation } from '@angular/common';
import { Router, NavigationEnd, ActivatedRoute } from '@angular/router';
import { trigger, state, style, animate, transition, group } from '@angular/animations';
import { Collapse } from '../animations/Collapse';
import { HttpService } from '@service/http-service';
import { MyService } from '@service/my-service';
import { CookieService } from 'angular2-cookie/services/cookies.service';

@Component({
    selector: 'nav-aside-custom',
    templateUrl: `./nav-aside-custom.html`,
    styleUrls: ['./nav-aside-custom.css.less'],
    animations: [
        Collapse.slideInOut
    ],
    providers: [
        HttpService
    ]
})
export class NavAsideCustomComponent implements OnInit {


    constructor(
        private http: HttpService,
        @Optional() private myService: MyService
    ) { }
    public items: any = [];
    public collapsed: any = {};

    // 菜单折叠监听
    public toggleEvent(condition: boolean) {
        //console.log(condition)
    }

    // 控制菜单折叠展开
    public changeCollapsed(str: string) {
        //console.log(str)
        this.collapsed[str] = !this.collapsed[str];
    }

    @Input('transmit') transmit: ElementRef;
    ngOnInit() {
        let userData = this.myService.userData;
        if (!userData) return;

        // 获取菜单信息
        let data = {};
        data['userId'] = this.myService.userData['userId'];

        let navigation = sessionStorage.getItem('navigation');
        if (navigation) {
            this.items = JSON.parse(navigation);
            // 快捷菜单
            this.transmit['getMenuCustom'](this.items);
        } else {
            this.http.post('api/v1/menus', data).subscribe(
                response => {
                    if (response['retCode'] === '000000') {
                        this.items = response['data'];
                        sessionStorage.setItem('navigation', JSON.stringify(response['data']));
                        // 快捷菜单
                        this.transmit['getMenuCustom'](this.items);
                    } else {
                        alert(response['retMsg']);
                    }
                },
                error => {
                    alert("网络错误，请求数据失败");
                }
            )
        }

    }

    // 表单选择--------------------------------------------------------
    // 关闭
    public close() {
        this.myService.menuCustomVisible = false;
        this.transmit['callBackClose']();
    }

    // 点击checkbox
    public checkboxChange(flag, item, pro) {
        if (this.transmit['customItems'].length >= 6 && flag) {
            alert('最多只能添加6条快捷菜单');
        }

        let list = {
            name: item['name'],
            url: item['url'],
            permissionId: item['permissionId'],
        }
        if (flag) {
            this.transmit['customItems'].push(list);
        } else {
            for (let i = 0; i < this.transmit['customItems']['length']; i++) {
                if (this.transmit['customItems'][i]['permissionId'] === item['permissionId']) {
                    this.transmit['customItems'].splice(i, 1);
                }
            }
        }
    }

    // 填充表单
    public customModel = {};
    public fillCustomModel(items) {
        for (let item of items) {
            this.customModel['nameCustom' + item] = true;
        }
    }

    // 保存编辑
    public customSave() {
        if (this.transmit['customItems'].length > 6) {
            alert('最多只能添加6条快捷菜单');
            return;
        }
        this.myService.menuCustomVisible = false;
        this.transmit['saveMenuCustom']();
    }

}
