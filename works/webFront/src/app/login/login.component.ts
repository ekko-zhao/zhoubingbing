import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { CookieService } from 'angular2-cookie/services/cookies.service';
import { KSSwiperContainer, KSSwiperSlide } from 'angular2-swiper';
import { HttpService } from '@service/http-service';
import { regex } from '@service/regex';

@Component({
    selector: 'login-root',
    templateUrl: 'login.html',
    styleUrls: ['login.css.less'],
    providers: [
        CookieService,
        HttpService
    ]
})

export class LoginComponent {
    @ViewChild(KSSwiperContainer) swiperContainer: KSSwiperContainer;
    example1SwipeOptions: any;

    constructor(
        private http: HttpService,
        private cookie: CookieService
    ) {
        this.example1SwipeOptions = {
            autoplay: false,
            loop: false,
            autoHeight: true,
            /*effect: 'fade',
             fade: {
                crossFade: true,
            }, */
            simulateTouch: true,
            pagination: '.swiper-pagination',
            paginationClickable: true,
            uniqueNavElements: false,
            paginationBulletRender: function (swiper, index, className) {
                let name = '';
                switch (index) {
                    case 0:
                        name = '新版上线'
                        break;
                    case 1:
                        name = '微商服'
                        break;
                    case 2:
                        name = '商户通'
                        break;
                    case 3:
                        name = '全渠道'
                        break;
                }
                return '<li class="' + className + '"><i></i>' + name + '</li>';
            }
        };
    }
    public slideTo(index) {
        this.swiperContainer.swiper.slideTo(index);
    }


    public form = {};
    public regex = regex;
    public loginCache: boolean;
    public codeSrc: string;
    public ipchange: boolean;

    public user: {};
    public transmit = {
        text: '获取短信'
    }
    public getVCode() {
        this.codeSrc = "api/v1/captcha.jpg?" + Math.random();
    }

    // 发送验证码
    public setCode(flag: boolean) {
        if (!flag) return;
        this.http.get('api/v1/user/signCode/' + this.user['data']).subscribe(
            response => {
                if (response['retCode'] === '000000') {
                    console.log('手机验证码发送成功');
                } else {
                    alert(response['retMsg']);
                }
            },
            error => {
                alert("网络错误，请求数据失败");
            }
        )
    }

    // 登陆
    public submitflag = true;
    public submit() {
        // 阻止二次点击
        if (!this.submitflag) return;
        this.submitflag = !this.submitflag;

        if (this.form['proxyMerchant']) {
            this.form['proxyMerchant'] = 1;
        } else {
            this.form['proxyMerchant'] = 0;
        }
        this.http.post('api/v1/login', this.form).subscribe(
            response => {
                this.submitflag = !this.submitflag;

                // 用户超过90天未登录或者IP改变，请输入手机验证码
                if (response['retCode'] === '100016') {
                    this.getVCode();
                    this.user = response;
                    this.ipchange = true;
                    return;
                }

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
                        this.cookie.put('loginCache', this.form['name'], {
                            expires: new Date(date.getTime() + 7 * 24 * 60 * 60 * 1000)
                        });
                    } else {
                        this.cookie.remove('loginCache');
                    }

                    // 传递参数
                    response.data['token'] = response['token'];
                    let userData = response.data;
                    this.cookie.putObject('userData', userData);

                    /* 跳转页面 */
                    let url = sessionStorage.getItem('url');

                    // 清除 sessionStorage
                    sessionStorage.clear();
                    if (url) {
                        window.location.href = url;
                    } else {
                        window.location.href = './app.html';
                    }
                } else if (response['retCode'] === '100027') {
                    window.location.href = response['data'];
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

    // 请求登陆状态------------------------------------------------------------
    public appVisible: boolean;
    public userStatus() {
        let userData = this.cookie.getObject('userData');
        if (!userData) {
            this.appVisible = true;
            return
        };
        this.http.get('api/v1/user/userStatus').subscribe(
            response => {
                // 登陆成功 跳转页面
                if (response['retCode'] === '000000' && response['data'] === 1 && userData['type'] !== '100') {
                    window.location.href = './app.html';
                } else {
                    this.appVisible = true;
                }
            },
            error => {
                this.appVisible = true;
            }
        )
    }

    @ViewChild('editForm') public editForm: NgForm;
    ngOnInit() {
        this.userStatus();
        this.getVCode();

        let cache = this.cookie.get('loginCache');
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

