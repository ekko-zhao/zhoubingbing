import { Component, ViewChild, ElementRef } from '@angular/core';
import { CookieService } from 'angular2-cookie/services/cookies.service';
import { HttpService } from '@service/http-service';
import { regex } from '@service/regex';

@Component({
    selector: 'register-root',
    templateUrl: 'register.html',
    styleUrls: ['register.css.less'],
    providers: [
        CookieService,
        HttpService
    ]
})

export class RegisterComponent {
    @ViewChild('thinputname') thinputname: ElementRef;
    constructor(
        private http: HttpService,
        private cookie: CookieService
    ) {
    }

    public form = {};
    public regex = regex;
    public transmit = {
        text: '获取短信'
    }

    // 发送验证码
    public setCode(flag: boolean) {
        if (!flag) return;
        this.http.get('api/v1/user/signCode/' + this.form['cellPhone']).subscribe(
            response => {
                if (response['retCode'] === '000000') {
                    console.log('手机验证码发送成功')
                } else {
                    alert(response['retMsg']);
                }
            },
            error => {
                alert("网络错误，请求数据失败");
            }
        )
    }

    // 校验注册填写的手机号是否存在于BMCP中
    public cellPMsg: string;
    public checkCellPhone() {
        var f = regex['mobile'].test(this.form['cellPhone']);
        if (!f) return;
        this.http.get('api/v1/user/checkCellPhone/' + this.form['cellPhone']).subscribe(
            response => {
                if (response['retCode'] === '000000') {
                    this.cellPMsg = response['retMsg'];
                } else {
                    alert(response['retMsg']);
                }
            },
            error => { }
        )
    }

    // 提交
    public submitflag = true;
    public submit() {
        // 阻止二次点击
        if (!this.submitflag) return;
        this.submitflag = !this.submitflag;

        this.http.post('api/v1/user/sign', this.form).subscribe(
            response => {
                if (response['retCode'] === '000000') {
                    // 登陆
                    this.http.post('api/v1/login', { name: this.form['name'], password: this.form['password'] }).subscribe(
                        response => {
                            this.submitflag = !this.submitflag;
                            // 传递参数
                            response.data['token'] = response['token'];
                            let userData = response.data;
                            this.cookie.putObject('userData', userData);

                            // 清除 sessionStorage
                            sessionStorage.clear();
                            // 10s 跳转app页面
                            this.regsuccess();
                        },
                        error => {
                            this.submitflag = !this.submitflag;
                            alert("网络错误，请求数据失败");
                        }
                    )

                } else {
                    this.submitflag = !this.submitflag;
                    alert(response['retMsg']);
                }
            },
            error => {
                this.submitflag = !this.submitflag;
                alert("网络错误，请求数据失败");
            }
        )
    }

    ngOnInit() { }

    // 注册成功
    public countdown = 10;
    public regsuccessFlag = false;
    public regsuccess() {
        this.regsuccessFlag = true;
        var timer = setInterval(() => {
            if (this.countdown === 0) {
                clearInterval(timer);
                window.location.href = './app.html';
                return;
            }
            this.countdown--;
        }, 1000)
    }
}
