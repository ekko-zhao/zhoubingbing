import { Component, Optional } from '@angular/core';
import { MyService } from '@service/my-service';

@Component({
    selector: 'sub-title',
    templateUrl: `./sub-title.html`,
    styleUrls: ['./sub-title.css.less']
})
export class SubTitleComponent {
    constructor(
        @Optional() private myService: MyService
    ) { }
}

