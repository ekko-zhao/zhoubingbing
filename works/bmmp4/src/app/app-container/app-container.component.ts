import { Component, Optional } from '@angular/core';
import { MyService } from '@service/my-service';

@Component({
    selector: 'app-container',
    templateUrl: 'app-container.html',
    styleUrls: [
        './app-container.css.less'
    ]
})
export class AppContainerComponent {
    constructor(
        @Optional() private myService: MyService
    ) {
    }
}
