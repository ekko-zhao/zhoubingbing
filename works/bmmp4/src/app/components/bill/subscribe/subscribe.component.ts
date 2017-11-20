import { Component, OnInit, ViewChild, Optional } from '@angular/core';
import { CookieService } from 'angular2-cookie/services/cookies.service';
import { HttpService } from '@service/http-service';
import { regex } from '@service/regex';
import { env } from '@service/environment';

@Component({
    templateUrl: 'subscribe.html',
    providers: [
        HttpService
    ]
})
export class SubscribeComponent implements OnInit {
    // 表单验证
    public form = {};
    public postForm = {};
    public regex = regex;

    constructor(
        private http: HttpService,
        private cookie: CookieService
    ) {

    }

    public subscribe: boolean = false;
    public subscribeSuccess: boolean = false;

    @ViewChild('editForm') public editForm;
    public updateState() {
        window['loading']['open']();
        this.http.get('api/v1/subscription/updateState').subscribe(
            response => {
                window['loading']['close']();
                if (response['retCode'] === '000000') {
                    alert('取消订阅成功');
                    this.subscribe = false;
                    this.subscribeSuccess = false;

                    this.editForm.reset();
                    setTimeout(() => {
                        this.form['cellPhone'] = this.cookie.getObject('userData')['cellPhone'];
                    }, 50);

                } else {
                    alert(response['retMsg']);
                }
            },
            error => {
                window['loading']['close']();
                alert("网络错误，请求数据失败");
            }
        )
    }
    @ViewChild('cellPhone') cellPhone;

    ngOnInit() {
        window['loading']['open']();
        this.http.get('api/v1/subscription/querySubscription').subscribe(
            response => {
                window['loading']['close']();
                if (response['retCode'] === '000000') {
                    if (response['data']['status'] === 1) {
                        this.subscribe = true;
                        Object.assign(this.form, response['data']);
                    } else {
                        this.form['cellPhone'] = this.cookie.getObject('userData')['cellPhone'];
                    }
                } else {
                    alert(response['retMsg']);
                }
            },
            error => {
                window['loading']['close']();
                alert("网络错误，请求数据失败");
            }
        )
    }

    // 订阅
    public submit() {
        window['loading']['open']();
        this.http.post('api/v1/subscription/createSubscription', this.form).subscribe(
            response => {
                window['loading']['close']();
                if (response['retCode'] === '000000') {
                    if (response['data']['status'] === 1) {
                        alert('订阅成功');
                        this.subscribeSuccess = true;
                    }
                } else {
                    alert(response['retMsg']);
                }
            },
            error => {
                window['loading']['close']();
                alert("网络错误，请求数据失败");
            }
        )
    }

}
