/* 一级菜单 */
import { Component, Optional, OnInit } from '@angular/core';
import { Router, NavigationEnd, NavigationError, ActivatedRoute } from '@angular/router';
import { PlatformLocation } from '@angular/common';
import { MyService } from 'src/services/my-service';
import { HttpService } from 'src/services/http-service';

@Component({
    selector: 'navigator',
    templateUrl: './navigator.html',
    styleUrls: ['./navigator.css.less']
})
export class NavigatorComponent implements OnInit {
    constructor(
        private router: Router,
        private activatedRoute: ActivatedRoute,
        private platformLocation: PlatformLocation,
        @Optional() private http: HttpService,
        @Optional() private myService: MyService
    ) { }

    public preurl: string = process.env.NODE_ENV !== 'production' ? '/app.html#/' : '/';
    public togger: boolean;

    // 菜单
    public items = <any>[];

    // 子级菜单
    public navigator = {
        b: [],
        c: []
    };

    // 当前路径
    public path: string;

    // 菜单匹配
    public nav: any = {
        a: -1,
        b: -1,
        c: -1
    }

    // 响应式导航
    public changeTogger() {
        this.togger = !this.togger;
    }

    // 获取当前路径
    public setPath(): string {
        // url 路径中匹配 router 的起始位置， http://localhost:8080/app.html#/index， 生产地址 http://localhost:8080/index
        let count = process.env.NODE_ENV === 'production' ? 3 : 4;
        let path = this.platformLocation['location']['href'];
        let start: number = 0;
        let sitSing = 0;
        for (let sit of path) {
            if (sitSing === count) break;
            start++;
            if (sit === '/') sitSing++;
        }

        let url = path.substring(start);
        let anchor = url.indexOf('#');
        let query = url.indexOf('?');
        let semicolon = url.indexOf(';');
        let array = [anchor, query, semicolon].filter(function (v, i, arr) {
            return v > -1;
        });

        let sit = array.length > 0 ? Math.min(...array) : 0;
        this.path = sit > 0 ? url.slice(0, sit) : url;
        return sit ? url.slice(0, sit) : url;
    }

    // 菜单匹配
    public searchPath(path: string) {
        // 查找位置
        let sign = [],
            loopStop = false;
        var loop = (items) => {
            for (let i = 0; i < items.length; i++) {
                if (loopStop) break;
                if (items[i]['children'].length > 0) {
                    loop(items[i]['children']);
                    if (loopStop) {
                        sign.push(i);
                        break;
                    }
                } else {
                    /* if (path === items[i]['url']) {} */
                    if (path.indexOf(items[i]['url']) > -1) {
                        sign.push(i);
                        loopStop = true;
                    }
                }
            }
        }

        loop(this.items);
        sign = sign.reverse();
        [this.nav.a = -1, this.nav.b = -1, this.nav.c = -1] = sign;

        if (this.nav.b > -1) {
            this.navigator.b = this.items[this.nav['a']]['children'];
        } else {
            this.navigator.b = []
        }

        if (this.nav.c > -1) {
            this.navigator.c = this.navigator.b[this.nav['b']]['children']
        } else {
            this.navigator.c = []
        }
    }

    // 请求菜单
    public getNav(data) {
        this.items = [
            {
                name: "系统管理", url: "app/system/log", children: [
                    { name: "日志管理", url: "app/system/log", children: [] }
                ]
            },
            {
                name: "用户管理", url: "app/user/account", children: [
                    { name: "用户账号管理", url: "app/user/account", children: [] },
                    { name: "APP用户管理", url: "app/user/app-account", children: [] }
                ]
            }
            /* {
                name: "终端管理", url: "app/terminal/query", children: [
                    { name: "终端查询", url: "app/terminal/query", children: [] },
                    {
                        name: "终端任务管理", url: "app/terminal/task/query", children: [
                            { name: "终端任务", url: "app/terminal/task/query", children: [] },
                            { name: "终端监控", url: "app/terminal/task/rmon", children: [] }
                        ]
                    },
                    { name: "终端日志", url: "app/terminal/log", children: [] },
                    {
                        name: "终端固件管理", url: "app/terminal/firmware/ask", children: [
                            { name: "固件申请", url: "app/terminal/firmware/ask", children: [] },
                            { name: "固件审核", url: "app/terminal/firmware/auditing", children: [] },
                            { name: "固件发布", url: "app/terminal/firmware/release", children: [] }
                        ]
                    }
                ]
            }, */
        ]
        let path = this.setPath();
        this.searchPath(path);
        return;
        /* let navigation = sessionStorage.getItem('navigation');
        if (navigation) {
            this.items = JSON.parse(navigation);
        } else {
            this.http.post('/api/v1/menus', data).subscribe(
                response => {
                    if (response['code'] !== '000000') return;
                    this.items = response['data'];
                    sessionStorage.setItem('navigation', JSON.stringify(response['data']));
                     // ...
                    let path = this.setPath();
                    this.searchPath(path);
                },
                error => { }
            )
        } */
    }

    ngOnInit() {
        this.getNav({});

        //监听路由变化
        this.router.events
            .filter(event => {
                if (event instanceof NavigationError) {
                    // 错误页面跳转
                    let path = 'app';
                    this.router.navigate([path]);
                }
                return event instanceof NavigationEnd;
            })
            .map(() => this.activatedRoute)
            .subscribe((event) => {
                if (this.items.length === 0) return;
                let path = this.setPath();
                this.searchPath(path);
            });
    }
}
