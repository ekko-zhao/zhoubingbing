import { Component, Optional } from '@angular/core';
import { HttpService } from '@service/http-service';
import { MyService } from '@service/my-service'


@Component({
    selector: 'top-bar',
    templateUrl: 'top-bar.html',
    styleUrls: ['top-bar.css.less'],
    providers: [
        HttpService
    ]
})

export class TopBarComponent {

    constructor(
        @Optional() private myService: MyService,
        private http: HttpService,
    ) { }

    public quit() {
        this.myService.quit(true);
    }
}
