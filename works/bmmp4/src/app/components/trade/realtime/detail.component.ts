import { Component, ViewChild, ElementRef, Optional, Input, Output, EventEmitter } from '@angular/core';
import { CookieService } from 'angular2-cookie/services/cookies.service';
import { TabsetComponent } from 'ngx-bootstrap';

import { HttpService } from '@service/http-service';
import { regex } from '@service/regex';

@Component({
    selector: 'transaction-detail',
    templateUrl: 'detail.html',
    providers: [
        HttpService
    ]
})
export class DetailComponent {
    @Input() appModal;
    hide() {
        this.appModal.closeModal();
    }

    public items = {};
    public transmit: any;

    constructor(
        private http: HttpService
    ) { }

    public modalInit(transmit) {
        this.items = [];
        this.transmit = transmit;
        this.submit()
        console.log(transmit)
    }

    public submit() {
        window['loading']['open'](true);
        this.http.post('api/v1/transaction/queryRealTransactionDetail', { logNo: this.transmit }).subscribe(
            response => {
                window['loading']['close']();
                if (response['retCode'] === '000000') {
                    this.items = response['data'];
                    console.log(this.items)
                } else {
                    alert(response['retMsg']);
                }
            },
            error => {
                window['loading']['close']();
                alert("网络错误，请求数据失败");
            }
        )
    }

}
