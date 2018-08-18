import { Component } from '@angular/core';

// 设置全局 服务
import { HttpService } from 'src/services/http-service';
import { MyService } from 'src/services/my-service';

@Component({
    selector: 'app-root',
    templateUrl: './app.html',
    styleUrls: ['./app.css.less'],
    providers: [
        HttpService,
        MyService
    ]
})
export class AppComponent {
    constructor(
        private myService: MyService,
        private http: HttpService
    ) { }
}
