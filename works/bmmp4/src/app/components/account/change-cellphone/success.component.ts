import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
    templateUrl: './success.html',
})
export class SuccessComponent {
    public transmit: any;
    constructor(
        private activatedRoute: ActivatedRoute
    ) {
        this.transmit = activatedRoute.params['value'];
    }
}
