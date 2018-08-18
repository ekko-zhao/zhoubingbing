/* 三级菜单 */
import { Component, Input, Optional } from '@angular/core';
import { MyService } from 'src/services/my-service';

@Component({
    selector: 'navigator-tab',
    templateUrl: './navigator-tab.html',
    styleUrls: ['./navigator-tab.css.less']
})
export class NavigatorTabComponent {
    @Input() navigator;
    @Input() nav;
    constructor(
        @Optional() private myService: MyService
    ) { }

    public preurl: string = process.env.NODE_ENV !== 'production' ? '/app.html#/' : '/';
}

