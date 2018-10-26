import { Component, ViewChild } from '@angular/core';
import { HttpService } from 'src/services/http-service';
const crypto: NodeRequire = require('sha256');

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
    ) { }

    public form = <any>{};

    // 登录状态
    public submit() {
        this.http.post('/local/login', this.form).subscribe(
            response => {

            },
            error => { }
        )
    }
}
