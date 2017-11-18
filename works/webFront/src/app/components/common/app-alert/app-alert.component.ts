import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-alert',
    templateUrl: './app-alert.html',
    styleUrls: ['./app-alert.css.less']
})
export class AppAlertComponent implements OnInit {
    constructor() { }
    ngOnInit() {
        //改变浏览器默认的alert
        this.showModal = this.showModal.bind(this);
        window['alert'] = this.showModal;
    }

    public message: string;
    public visiable: boolean = false;
    public timer: any;

    public showModal(msg: string = '提示信息'): void {
        if (!msg) return;
        if (this.visiable) {
            // this.visiable = !this.visiable;
            clearTimeout(this.timer);
        }

        this.message = msg;
        this.visiable = true;
        this.timer = setTimeout(() => {
            this.visiable = false;
        }, 4000);
    }
    public closeModal() {
        this.visiable = false;
        clearTimeout(this.timer);
    }




}
