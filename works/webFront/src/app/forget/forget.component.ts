import { Component, Optional, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { CookieService } from 'angular2-cookie/services/cookies.service';
import { HttpService } from '@service/http-service';
import { regex } from '@service/regex';

@Component({
    selector: 'forget-root',
    templateUrl: 'forget.html',
    styleUrls: ['forget.css.less'],
    providers: [
        CookieService,
        HttpService
    ]
})

export class ForgetComponent {
    constructor(
        private http: HttpService,
        private cookie: CookieService
    ) {

    }
    public regex = regex;
    public form = {};
    public codeSrc: string;

    public getVCode() {
        this.codeSrc = "api/v1/captcha.jpg?" + Math.random();
    }

    // 提交
    public submitflag = true;
    public submit() {
        // 阻止二次点击
        if (!this.submitflag) return;
        this.submitflag = !this.submitflag;

        this.http.post('api/v1/user/resetUserPwd', this.form).subscribe(
            response => {
                this.submitflag = !this.submitflag;
                if (response['retCode'] === '000000') {
                    // 跳转页面
                    window.location.href = './index.html';
                } else {
                    alert(response['retMsg']);
                }
            },
            error => {
                this.submitflag = !this.submitflag;
                alert("网络错误，请求数据失败");
            }
        )
    }

    @ViewChild('editForm') public editForm: NgForm;
    ngOnInit() {
        this.getVCode();
        // 兼容 ie10+ placeholder
        if ("ActiveXObject" in window) {
            setTimeout(() => {
                this.editForm.resetForm();
            }, 100);
        }

    }

}
