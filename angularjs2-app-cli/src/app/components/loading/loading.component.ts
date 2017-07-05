import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

@Component({
    selector: 'app-loading',
    templateUrl: './loading.component.html',
    styleUrls: ['./loading.component.css']
})
export class LoadingComponent implements OnInit {
    @ViewChild('elementRef') elementRef: ElementRef;
    constructor() { }
    isShow: boolean = false;
    ngOnInit() {
        //this.loading = this.loading.bind(this);
        window['loading'] = this.loading;
        /*setTimeout(() => { (window as any).loading.open() }, 1000)
        setTimeout(() => { (window as any).loading.close() }, 3000)*/
    }
    loading = {
        open: () => {
            this.isShow = true;
        },
        close: () => {
            this.isShow = false;
        }
    }
}
