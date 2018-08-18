import { Component, Optional } from '@angular/core';
import { MyService } from 'src/services/my-service';
import { HttpService } from 'src/services/http-service';

@Component({
    templateUrl: './index.html',
    styleUrls: ['./index.css.less']
})
export class IndexComponent {
    constructor(
        @Optional() private myService: MyService,
        @Optional() private http: HttpService
    ) { }

    public preurl: string = process.env.NODE_ENV !== 'production' ? '/app.html#/' : '/';
    public mobile = navigator.userAgent.indexOf('Mobile') >= 0;

    // 用户信息
    public info = this.myService['userData']['info'];

    // 机构信息
    // public org = this.myService['userData']['org'];
}
