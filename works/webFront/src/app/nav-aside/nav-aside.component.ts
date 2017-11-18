import { Component, OnInit, Optional } from '@angular/core';
import { PlatformLocation } from '@angular/common';
import { Router, NavigationEnd, ActivatedRoute } from '@angular/router';
import { trigger, state, style, animate, transition, group } from '@angular/animations';
import { Collapse } from '../animations/Collapse';
import { HttpService } from '@service/http-service';
import { MyService } from '@service/my-service';
import { CookieService } from 'angular2-cookie/services/cookies.service';

@Component({
    selector: 'nav-aside',
    templateUrl: `./nav-aside.html`,
    styleUrls: ['./nav-aside.css.less'],
    animations: [
        Collapse.slideInOut
    ],
    providers: [
        HttpService
    ]
})
export class NavAsideComponent implements OnInit {

    constructor(
        private http: HttpService,
        private platformLocation: PlatformLocation,
        private router: Router,
        private activatedRoute: ActivatedRoute,
        private cookie: CookieService,
        @Optional() private myService: MyService
    ) { }
    public type: string;
    public items: any = [];
    public collapsed: any = {};
    public path: string;
    public nav: any = {
        a: 0,
        b: -1,
        c: -1
    }

    // 获取当前 路由
    public setPath() {
        let path = this.platformLocation['location']['href'];
        let start = path.indexOf('#/') + 2;
        let end = path.lastIndexOf('?') > 0 ? path.lastIndexOf('?') : path.length;
        if (start) {
            this.path = path.slice(start, end);
        } else {
            this.path = 'general'
        };
    }

    // 菜单折叠监听
    public toggleEvent(condition: boolean) {
        //console.log(condition)
    }

    // 控制菜单折叠展开
    public changeCollapsed(str: string) {
        //console.log(str)
        this.collapsed[str] = !this.collapsed[str];
    }

    // 获取菜单位置
    public searchPath(path: string) {
        // 重置 菜单
        this.nav.a = 0;
        this.nav.b = -1;
        this.nav.c = -1;

        let stop = false;
        var loop = (items, index) => {
            if (stop) return;

            for (let i = 0; i < items.length; i++) {
                if (stop) return;
                if (items[i]['children'].length > 0) {
                    if (items[i]['parentId'] === 0) {
                        this.nav.a = i;
                    }
                    loop(items[i]['children'], i);
                } else {
                    if (items[i]['url'] === path) {

                        let parentId = items[i]['parentId'];
                        // 当前 为一级菜单
                        if (this.items[this.nav.a]['url'] !== null) {

                        } else if (this.items[this.nav.a]['permissionId'] === parentId) {
                            // 当前 为二级菜单
                            this.nav.b = i;
                            this.nav.c = -1;
                        } else {
                            // 当前 为三级级菜单
                            this.nav.b = index;
                            this.nav.c = i;
                        }

                        // sub-title
                        let title = '';

                        // 当前菜单展开
                        if (this.nav.c !== -1 && this.nav.b !== -1) {
                            // 三级
                            this.collapsed['pro' + this.nav.a] = true;
                            this.collapsed['pro' + this.nav.a + this.nav.b] = true;

                            title = this.items[this.nav.a]['children'][this.nav.b]['children'][this.nav.c]['name'];
                        } else if (this.nav.b !== -1) {
                            // 二级
                            this.collapsed['pro' + this.nav.a] = true;

                            title = this.items[this.nav.a]['children'][this.nav.b]['name'];
                        } else {
                            //一级
                            title = this.items[this.nav.a]['name'];
                        }

                        // sub-title
                        this.myService.title = title;
                        this.myService.path = this.path;

                        stop = true;
                        break;
                    } else {
                        // 非系统管理员
                        if (this.type !== '100') {
                            let addUrl = [{ name: '公告', url: 'notice/notice-list' }]
                            for (let list of addUrl) {
                                if (path === list['url']) {
                                    // sub-title
                                    this.myService.title = list['name'];
                                    this.myService.path = list['url'];
                                    stop = true;
                                    break;
                                }
                            }
                        }

                    }
                }
            }
        }
        loop(this.items, 0);
    }

    ngOnInit() {
        let userData = this.cookie.getObject('userData');
        if (!userData) return;
        this.type = userData['type'];

        //监听路由变化
        this.router.events
            .filter(event => event instanceof NavigationEnd)
            .map(() => this.activatedRoute)
            .subscribe((event) => {
                if (this.items.length > 0) {
                    this.setPath();
                    this.searchPath(this.path);
                }
            });

        // 获取菜单信息
        let data = {};
        data['userId'] = this.myService.userData['userId'];
        if (this.type === '100') {
            // 系统管理员
            this.http.get('./static/json/nav.admin.json').subscribe(
                response => {
                    this.items = response;
                    this.setPath();
                    this.searchPath(this.path);
                },
                error => {
                    alert("网络错误，请求数据失败");
                }
            )
        } else {
            // 机构账号
            let navigation = sessionStorage.getItem('navigation');
            if (navigation) {
                this.items = JSON.parse(navigation);
                this.setPath();
                this.searchPath(this.path);
            } else {
                this.http.post('api/v1/menus', data).subscribe(
                    response => {
                        if (response['retCode'] === '000000') {
                            this.items = response['data'];
                            this.setPath();
                            this.searchPath(this.path);
                            sessionStorage.setItem('navigation', JSON.stringify(response['data']));
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

    }
}
