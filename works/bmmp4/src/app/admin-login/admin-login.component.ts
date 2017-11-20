import { Component, ViewChild } from '@angular/core';
import { CookieService } from 'angular2-cookie/services/cookies.service';
import { HttpService } from '@service/http-service';
import { regex } from '@service/regex';

@Component({
    selector: 'adminlogin-root',
    templateUrl: './admin-login.html',
    styleUrls: ['./admin-login.css.less'],
    providers: [
        CookieService,
        HttpService
    ]
})
export class AdminLoginComponent {
    constructor(
        private http: HttpService,
        private cookie: CookieService
    ) { }

    public form = {};
    public regex = regex;
    public loginCache: boolean;
    public codeSrc: string;

    public getVCode() {
        this.codeSrc = "api/v1/captcha.jpg?" + Math.random();
    }

    // 登陆
    public submitflag = true;
    public submit() {
        // 阻止二次点击
        if (!this.submitflag) return;
        this.submitflag = !this.submitflag;

        this.http.post('api/v1/admin/login', this.form).subscribe(
            response => {
                this.submitflag = !this.submitflag;
                if (response['retCode'] === '000000') {

                    // 清除 用户session
                    let name = response['data']['name'];
                    let cookie = this.cookie.getObject(name);
                    if (cookie) {
                        cookie['session'] = {};
                        let date = new Date();
                        this.cookie.putObject(name, cookie, {
                            expires: new Date(date.getTime() + 7 * 24 * 60 * 60 * 1000)
                        });
                    }

                    // 记录用户名
                    if (this.loginCache) {
                        let date = new Date();
                        this.cookie.put('adminLoginCache', this.form['name'], {
                            expires: new Date(date.getTime() + 7 * 24 * 60 * 60 * 1000)
                        });
                    } else {
                        this.cookie.remove('adminLoginCache');
                    }

                    // 传递参数
                    response.data['token'] = response['token'];
                    let userData = response.data;
                    this.cookie.putObject('userData', userData);

                    /* 跳转页面 */
                    let url = sessionStorage.getItem('adminUrl');

                    // 清除 sessionStorage
                    sessionStorage.clear();
                    if (url) {
                        window.location.href = url;
                    } else {
                        window.location.href = './admin.html';
                    }

                } else {
                    this.getVCode();
                    alert(response['retMsg']);
                }
            },
            error => {
                this.submitflag = !this.submitflag;
                alert("网络错误，请求数据失败");
            }
        )
    }

    @ViewChild('editForm') public editForm;
    ngOnInit() {
        this.getVCode();

        let cache = this.cookie.get('adminLoginCache');
        // 兼容 ie10+ placeholder
        if ("ActiveXObject" in window) {
            setTimeout(() => {
                this.editForm.resetForm();
                setTimeout(() => {
                    if (cache) {
                        this.form['name'] = cache;
                        this.loginCache = true;
                    }
                }, 50);
            }, 100);
        } else if (cache) {
            this.form['name'] = cache;
            this.loginCache = true;
        }
    }
}
