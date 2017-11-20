import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
    templateUrl: './add-success.html',
})
export class AddSuccessComponent {
    public transmit: any;
    constructor(
        private activatedRoute: ActivatedRoute
    ) {
        this.transmit = activatedRoute.params['value'];
    }
}
