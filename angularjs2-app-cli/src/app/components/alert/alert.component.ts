import { Component, OnInit, ViewChild, Input } from '@angular/core';
import { ModalDirective } from 'ngx-bootstrap/modal';

@Component({
    selector: 'app-alert',
    templateUrl: './alert.component.html'
})
export class AlertComponent implements OnInit {
    @ViewChild('alertModal') public alertModal: ModalDirective;

    constructor() { }

    private message: String;

    public showModal(msg: String = '提示信息'): void {
        this.message = msg;
        this.alertModal.show();
    }

    ngOnInit() { }


}
