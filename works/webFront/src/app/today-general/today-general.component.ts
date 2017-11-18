import { Component, Optional, OnInit, Input, ElementRef } from '@angular/core';
import { Router } from '@angular/router';
import { DatePipe } from '@angular/common';
import { CookieService } from 'angular2-cookie/services/cookies.service';
import { MyService } from '@service/my-service';
import { HttpService } from '@service/http-service';

@Component({
    selector: 'today-general',
    templateUrl: './today-general.html',
    styleUrls: ['./today-general.css.less'],
    providers: [
        HttpService,
        DatePipe,
        CookieService
    ]
})

export class TodayGeneralComponent implements OnInit {
    public systodaysettlementmoney: boolean = false;
    public systodaytransfermoney: boolean = false;
    public systodaytransactiondata: boolean = false;

    public userData = {};
    public timeText: string;

    constructor(
        @Optional() private myService: MyService,
        private http: HttpService,
        private datePipe: DatePipe,
        private cookie: CookieService,
        private router: Router
    ) { }

    // 今日数据
    public settleCount: any;
    public getSettleCount() {
        let d = {}
        let date = new Date();
        d['liqStartDate'] = d['liqEndDate'] = this.datePipe.transform(date, 'yMMdd');

        this.http.post('api/v1/settlement/querySettlementDetailSum', d).subscribe(
            response => {
                if (response['retCode'] === '000000') {
                    this.settleCount = response['data']['liqAmount'];
                } else {
                    alert(response['retMsg']);
                }
            },
            error => {
                alert("网络错误，请求数据失败");
            }
        )
    }

    public transferCount: any;
    public getTransferCount() {
        let d = {}
        let date = new Date();
        d['startDate'] = d['endDate'] = this.datePipe.transform(date, 'yMMdd');

        this.http.post('api/v1/transferMoney/queryTransferMoneySum', d).subscribe(
            response => {
                if (response['retCode'] === '000000') {
                    this.transferCount = response['data']['transferMoneyAmount'];
                } else {
                    alert(response['retMsg']);
                }
            },
            error => {
                alert("网络错误，请求数据失败");
            }
        )
    }

    public tradeCount = {};
    public getTradeCount() {
        let d = {}
        let date = new Date();
        d['startClearDate'] = d['endClearDate'] = this.datePipe.transform(date, 'yMMdd');

        this.http.post('api/v1/transaction/queryTradesSum', d).subscribe(
            response => {
                if (response['retCode'] === '000000') {
                    this.tradeCount = response['data'];
                } else {
                    alert(response['retMsg']);
                }
            },
            error => {
                alert("网络错误，请求数据失败");
            }
        )
    }
    public todayInit() {
        let permissions: any = this.cookie.getObject('permissions');

        for (let item of permissions) {
            // 今日结算金额
            if (item === 'sys:today:settlement:money') {
                this.systodaysettlementmoney = true;
            }
            // 今日划款金额
            if (item === 'sys:today:transfer:money') {
                this.systodaytransfermoney = true;
            }
            // 今日交易数据
            if (item === 'sys:today:transaction:data') {
                this.systodaytransactiondata = true;
            }
        }
        if (this.systodaysettlementmoney)
            this.getSettleCount();

        if (this.systodaytransfermoney)
            this.getTransferCount();

        if (this.systodaytransactiondata)
            this.getTradeCount();
    }
    // 请求权限
    public getPermissions() {
        let data = {
            userId: this.userData['userId']
        }
        this.http.post('api/v1/permissions', data).subscribe(
            response => {
                if (response['retCode'] === '000000') {
                    this.cookie.putObject('permissions', response['data']);
                    sessionStorage.setItem('permissions', response['data']);
                    this.todayInit();
                } else {
                    alert(response['retMsg']);
                }
            },
            error => {
                alert("网络错误，请求权限数据失败");
            }
        )
    }
    // 处理时间
    public handleTime() {
        let date = new Date();
        let hour = date.getHours();
        if (hour > 18 || hour < 4) {
            this.timeText = '晚上好'
        } else if (hour > 12) {
            this.timeText = '下午好'
        } else if (hour > 8) {
            this.timeText = '上午好'
        } else {
            this.timeText = '早上好'
        }
    }

    ngOnInit() {
        let userData = this.myService.userData;
        if (!userData) return;

        this.userData = this.myService.userData;

        this.getPermissions()
        this.handleTime();
    }

    // 退出
    public quit() {
        this.myService.quit(true);
    }

    // 快捷功能 -----------------------------------------------------------------------------
    public routerUrl(url) {
        if (this.myService.menuCustomVisible) return;
        this.router.navigate([url]);
    }

    public customItems = [];
    public customItemsCopy = [];

    public trackByfn(index, contact) {
        return contact.permissionId;
    }

    public menuList = [];
    public getMenuCustom(data) {
        this.menuList = data
        // 判断是否编辑过 没有则默认
        if (this.userData['quickFunc'] === '1') {
            this.http.get('api/v1/quickFunc/list').subscribe(
                response => {
                    if (response['retCode'] === '000000') {
                        let d = [];
                        for (let list of response['data']) {
                            var loop = (items, item) => {
                                for (let i = 0; i < items.length; i++) {
                                    if (items[i]['children'].length > 0) {
                                        loop(items[i]['children'], item);
                                    } else {
                                        if (items[i]['permissionId'] === item['permissionId']) {
                                            d.push(items[i]);
                                            break;
                                        }
                                    }
                                }
                            }
                            loop(data, list);
                        }
                        this.customItems = d;

                    } else {
                        alert(response['retMsg']);
                    }
                },
                error => {
                    alert("网络错误，请求权限数据失败");
                }
            )
        } else {
            // 初始化快捷功能
            var loop = (items) => {
                for (let i = 0; i < items.length; i++) {
                    if (items[i]['children'].length > 0) {
                        loop(items[i]['children']);
                    } else {
                        if (items[i]['url'] === 'trade/realtime' || items[i]['url'] === 'trade/count' || items[i]['url'] === 'trade/detail') {
                            this.customItems.push({
                                'permissionId': items[i]['permissionId'],
                                'url': items[i]['url'],
                                'name': items[i]['name']
                            });
                        }
                    }
                }
            }
            loop(data);
        }
    }


    public saveMenuCustom(index?) {
        let customItems = this.customItems.slice(0);
        if (index !== undefined) {
            customItems.splice(index, 1);
        }

        this.http.post('api/v1/quickFunc/save', customItems).subscribe(
            response => {

                if (response['retCode'] === '000000') {
                    this.customItems = customItems;

                    // 更新用户缓存
                    if (!this.userData['quickFunc']) {
                        this.http.get('api/v1/user/users/currentUser').subscribe(
                            response => {
                                if (response['retCode'] === '000000') {
                                    response['data']['token'] = this.userData['token'];
                                    // console.log(response['data'])
                                    let userData = response['data'];
                                    this.userData = userData;
                                    this.cookie.putObject('userData', userData);
                                } else {
                                    alert(response['retMsg']);
                                }
                            },
                            error => {
                                alert("网络错误，请求权限数据失败");
                            }
                        );
                    }

                } else {
                    this.customItems = this.customItemsCopy;
                    alert(response['retMsg']);
                }
            },
            error => {
                alert("网络错误，请求权限数据失败");
            }
        );

    }
    // 关闭回调
    public callBackClose() {
        this.customItems = this.customItemsCopy;
    }

    // 编辑
    @Input('transmit') transmit: ElementRef;
    public editMenuCustom() {
        this.myService.menuCustomVisible = true;
        this.customItemsCopy = this.customItems.slice(0);
        this.customItems = this.customItemsCopy.slice(0);

        // 填充today-general 表单
        let sign = [];
        let signs = [];
        let count = 0;

        let loopStop = false;
        var loop = (items, item) => {
            for (let i = 0; i < items.length; i++) {
                if (loopStop) break;
                if (items[i]['children'].length > 0) {
                    sign.push(i);
                    loop(items[i]['children'], item);
                    if (loopStop) break;
                    sign.push('point');
                } else {
                    if (item['permissionId'] === items[i]['permissionId']) {
                        sign.push(i);
                        loopStop = true;
                    }
                }
            }
        }

        for (let item of this.customItems) {
            loopStop = false;
            count = 0;
            loop(this.menuList, item);
            let d = sign.slice(0);
            signs.push(d);
            sign = [];
        }

        // 找出在数组中的当前位置
        let strList = []
        for (let item of signs) {
            let index = item.lastIndexOf('point');
            item.splice(0, index + 1);
            let str = item.join('');
            strList.push(str);
        }
        this.transmit['customModel'] = {};
        this.transmit['fillCustomModel'](strList);
    }



}
