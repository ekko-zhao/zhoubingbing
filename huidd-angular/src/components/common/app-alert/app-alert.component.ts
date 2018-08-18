import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-alert',
    templateUrl: './app-alert.html',
    styleUrls: ['./app-alert.css.less']
})
export class AppAlertComponent {
    constructor() {
        //改变浏览器默认的alert
        this.showModal = this.showModal.bind(this);
        window['alert'] = this.showModal;
    }

    public message: string;
    public visiable: boolean = false;
    public visiableCopy: boolean = false;
    public timer: any;

    public showModal(msg: string = '提示信息'): void {
        if (!msg) return;
        if (this.visiable) {
            clearTimeout(this.timer);
            this.visiable = this.visiableCopy = !this.visiable;
        }
        this.message = msg;
        this.visiable = true;

        // 多个 alert 重新执行动画
        setTimeout(() => {
            this.visiableCopy = true;
        }, 20);

        this.timer = setTimeout(() => {
            this.visiable = this.visiableCopy = false;
        }, 4000);
    }
    public closeModal() {
        this.visiable = this.visiableCopy = false;
        clearTimeout(this.timer);
    }
}
