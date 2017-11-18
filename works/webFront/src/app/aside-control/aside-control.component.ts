import { Component, Optional } from '@angular/core';
import { MyService } from '@service/my-service';

@Component({
    selector: 'aside-control',
    templateUrl: 'aside-control.html',
    styleUrls: [
        './aside-control.css.less'
    ]
})
export class AsideControlComponent {

    constructor(
        @Optional() private myService: MyService
    ) { }

}
