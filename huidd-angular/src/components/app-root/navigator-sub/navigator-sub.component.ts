/* 二级菜单 */
import { Component, Input, Optional } from '@angular/core';
import { MyService } from 'src/services/my-service';

@Component({
    selector: 'navigator-sub',
    templateUrl: './navigator-sub.html',
    styleUrls: ['./navigator-sub.css.less']
})
export class NavigatorSubComponent {
    @Input() navigator;
    @Input() nav;
    constructor(
        @Optional() private myService: MyService
    ) { }

    public preurl: string = process.env.NODE_ENV !== 'production' ? '/app.html#/' : '/';
}
