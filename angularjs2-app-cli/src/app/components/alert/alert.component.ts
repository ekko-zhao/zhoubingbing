import { Component, OnInit, ViewChild, Input } from '@angular/core';
import { ModalDirective } from 'ngx-bootstrap/modal';

@Component({
    selector: 'app-alert',
    templateUrl: './alert.component.html',
    styleUrls: ['./alert.component.css']
})
export class AlertComponent implements OnInit {
    @ViewChild('alertModal') public alertModal: ModalDirective;

    constructor() { }
    ngOnInit() {
        //改变浏览器默认的alert
        this.showModal = this.showModal.bind(this);
        window['alert'] = this.showModal;
        // setTimeout(()=>{ alert('3233')},2000)
    }

    private message: string;

    public showModal(msg: string = '提示信息'): void {
        this.message = msg;
        this.alertModal.show();
    }




}
