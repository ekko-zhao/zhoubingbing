import { Component } from '@angular/core';
import { CookieService } from 'angular2-cookie/services/cookies.service';
import { HttpService } from 'src/services/http-service';

@Component({
    selector: 'login-root',
    templateUrl: './login.html',
    styleUrls: ['./login.css.less'],
    providers: [
        HttpService
    ]
})
export class LoginComponent {
    constructor(
        private http: HttpService,
        private cookie: CookieService
    ) {
        this.getVCode();
        let cache = this.cookie.get('atlasWebUsernameCache');
        if (cache) {
            this.form['username'] = cache;
            this.loginCache = true;
        }
    }

    public form = {};
    public loginCache: boolean;
    public verifyCodeFlag: boolean = false;
    public codeSrc: string;
    public getVCode() {
        this.verifyCodeFlag = false;
        this.form['captcha'] = '';
        this.codeSrc = this.http.origin + "/api/code/v1/getCaptcha?v=" + Math.random();
    }
    public captchaChange(value) {
        if (value.length === 4) {
            this.http.get('/api/code/v1/verifyCaptcha?verifyCode=' + value).subscribe(
                response => {
                    if (response) {
                        this.verifyCodeFlag = true;
                    } else {
                        this.getVCode();
                        ; (window as any).confirm({
                            text: '请输入正确的验证码',
                            type: 2
                        })
                    }
                },
                error => { }
            )
        } else {
            this.verifyCodeFlag = false;
        }
    }
    // 登录状态
    public queryStatus = false;
    public submit() {
        if (this.queryStatus || !this.verifyCodeFlag) return;
        this.queryStatus = true;
        this.http.post('/api/user/v1/login', this.form).subscribe(
            response => {
                if (response['code'] === '000000') {
                    // 清除 sessionStorage
                    sessionStorage.clear();

                    // 记录用户名
                    let date = new Date();
                    if (this.loginCache) {
                        this.cookie.put('atlasWebUsernameCache', this.form['username'], {
                            expires: new Date(date.getTime() + 7 * 24 * 60 * 60 * 1000)
                        });
                    } else {
                        this.cookie.remove('atlasWebUsernameCache');
                    }

                    this.localLogin(response.data);
                } else {
                    this.queryStatus = false;
                    this.getVCode();
                    ; (window as any).confirm({
                        text: '用户名密码不匹配',
                        type: 2
                    })
                }
            },
            error => {
                this.getVCode();
                this.queryStatus = false;
            }
        )
    }

    // 本地登录
    public localLogin(data) {
        this.http.post('/local/login', this.form)
            .subscribe(
                response => {
                    if (response.code !== '000000') return;
                    this.getUserinfo(data);
                },
                error => { }
            )
    }

    // 请求用户信息
    public getUserinfo(data) {
        this.http.post('/api/user/v1/load', { id: data.id })
            .subscribe(
                response => {
                    if (response.code !== '000000') return;
                    data.info = response.data;

                    this.cookie.putObject('atlasWebUserData', data);
                    // 跳转页面
                    window.location.href = process.env.NODE_ENV === 'production' ? '/app' : './app.html';
                    /* this.http.post('/api/corporation/v1/query', { example: { corporation: data.info.corporation } }).subscribe(
                        response => {
                            if (response.code !== '000000') return;
                            data.org = (response.data && response.data[0]) ? response.data[0] : {};
                            this.cookie.putObject('atlasWebUserData', data);
                            // 跳转页面
                            window.location.href = process.env.NODE_ENV === 'production' ? '/app' : './app.html';
                        },
                        error => { }
                    ) */
                },
                error => { }
            )
    }
}
