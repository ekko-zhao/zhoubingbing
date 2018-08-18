import { Component, Input, Optional } from "@angular/core"
import { Router } from '@angular/router';
import { MyService } from 'src/services/my-service';

@Component({
    selector: 'go-back',
    templateUrl: './go-back.html',
    styleUrls: ['./go-back.css.less']
})
export class GoBackComponent {
    @Input() url: string;
    @Input() name: boolean;
    @Input() top0: boolean = false;

    constructor(
        private router: Router,
        @Optional() private myService: MyService,
    ) { }

    public back() {
        this.myService.back = true;
        // window.history.back();
        this.router.navigate([this.url]);
    }
}
