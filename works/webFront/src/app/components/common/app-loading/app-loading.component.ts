import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-loading',
    templateUrl: 'app-loading.html',
    styleUrls: ['app-loading.css.less']
})
export class AppLoadingComponent {
    public visiable = false;
    public outseat: boolean;
    public open(place: boolean = false) {
        this.outseat = place;
        this.visiable = true;
    }
    public close() {
        this.visiable = false;
    }
    ngOnInit() {
        this.open = this.open.bind(this);
        this.close = this.close.bind(this);
        window['loading'] = {
            open: this.open,
            close: this.close
        }
    }
}
