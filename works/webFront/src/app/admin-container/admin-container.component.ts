import { Component, Optional } from '@angular/core';
import { MyService } from '@service/my-service';

@Component({
    selector: 'admin-container',
    templateUrl: 'admin-container.html',
    styleUrls: [
        './admin-container.css.less'
    ]
})
export class AdminContainerComponent {
    constructor(
        @Optional() private myService: MyService
    ) {
    }
}
