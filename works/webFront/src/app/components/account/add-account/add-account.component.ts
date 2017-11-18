import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { HttpService } from '@service/http-service';
import { regex } from '@service/regex';

@Component({
    templateUrl: './add-account.html',
    providers: [
        HttpService
    ]
})
export class AddAccountComponent {
    // 表单验证
    public form = {};
    public regex = regex;

    constructor(
        private router: Router,
        private http: HttpService
    ) { }

    // 提交
    public submit() {
        window['loading']['open']();
        this.http.post('api/v1/user/admin/createOrgUser', this.form).subscribe(
            response => {
                window['loading']['close']();
                if (response['retCode'] === '000000') {
                    this.router.navigate(['account/add-success', { transmit: 'ok', name: response['data'], email: this.form['email'] }], { skipLocationChange: true });
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
