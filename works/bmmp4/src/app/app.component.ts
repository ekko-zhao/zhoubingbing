import { Component } from '@angular/core';
import { CookieService } from 'angular2-cookie/services/cookies.service';
import { HttpService } from '@service/http-service';

// 设置全局变量
import { MyService } from '@service/my-service';

@Component({
    selector: 'app-root',
    templateUrl: 'app.html',
    styles: [],
    providers: [
        MyService,
        CookieService,
        HttpService
    ]
})

export class AppComponent {
    public appVisible: boolean;
    constructor(
        private myService: MyService,
        private cookie: CookieService,
        private http: HttpService
    ) {
        // 登陆状态
        let url = window.location.href;
        if (!myService.userData) {
            sessionStorage.setItem('url', url);
            window.location.href = './index.html';
        } else {
            http.get('api/v1/user/userStatus').subscribe(
                response => {
                    if (response['retCode'] !== '000000' || response['data'] !== 1) {
                        sessionStorage.setItem('url', url);
                        window.location.href = './index.html';
                    } else {
                        if (myService.userData['type'] !== '100') {
                            this.appVisible = true;
                        } else {
                            window.location.href = './admin.html';
                        }
                    }
                },
                error => {
                    alert("网络错误，请求数据失败");
                }
            )

        }

    }
}
