/*
    安全设置 修改密码
*/

import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { HttpService } from '@service/http-service';
import { CookieService } from 'angular2-cookie/services/cookies.service';

import { regex } from '@service/regex';

@Component({
    templateUrl: 'change-password.html',
    providers: [
        HttpService,
        CookieService
    ]
})
export class ChangePasswordComponent {
    // 表单验证
    public form = {};
    public regex = regex;

    constructor(
        private http: HttpService,
        private cookie: CookieService,
        private router: Router
    ) { }

    public transmit = {
        text: '获取短信'
    }

    // 发送验证码
    public setCode(flag: boolean) {
        let cellPhone = this.cookie.getObject('userData')['cellPhone'];
        if (!flag) return;
        this.http.get('api/v1/user/signCode/' + cellPhone).subscribe(
            response => {
                if (response['retCode'] === '000000') {
                    alert('验证码已发送手机');
                } else {
                    alert(response['retMsg']);
                }
            },
            error => {
                alert("网络错误，请求数据失败");
            }
        )
    }

    // 提交
    public submit() {
        this.http.post('api/v1/user/updateSelfPwd', this.form).subscribe(
            response => {
                if (response['retCode'] === '000000') {
                    this.router.navigate(['account/change-password-success', { transmit: 'ok'}], { skipLocationChange: true });
                    // alert('密码修改成功');
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
