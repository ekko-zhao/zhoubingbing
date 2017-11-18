/*
    安全设置 修改手机号
*/

import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { HttpService } from '@service/http-service';

import { regex } from '@service/regex';

@Component({
    templateUrl: 'change-cellphone.html',
    providers: [
        HttpService
    ]
})
export class ChangeCellphoneComponent {
    // 表单验证
    public form = {};
    public regex = regex;

    constructor(
        private http: HttpService,
        private router: Router
    ) { }


    public transmit = {
        text: '获取短信'
    }

    // 发送验证码
    public setCode(flag: boolean) {
        if (!flag) return;
        this.http.get('api/v1/user/signCode/' + this.form['cellPhone']).subscribe(
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
        this.http.post('api/v1/user/updateSelfCellPhone', this.form).subscribe(
            response => {
                if (response['retCode'] === '000000') {
                    this.router.navigate(['account/change-cellphone-success', { transmit: 'ok' }], { skipLocationChange: true });
                    // alert('手机号码修改成功');
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
