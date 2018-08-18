import { Component } from '@angular/core';

@Component({
    selector: 'app-loading',
    templateUrl: 'app-loading.html',
    styleUrls: ['app-loading.css.less']
})
export class AppLoadingComponent {
    constructor() {
        this.open = this.open.bind(this);
        this.close = this.close.bind(this);
        window['loading'] = {
            open: this.open,
            close: this.close
        }
    }

    public visiable = false;
    public outseat: boolean;

    public open() {
        this.visiable = true;
    }

    public close() {
        this.visiable = false;
    }
}
