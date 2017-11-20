import { Component, ViewChild, ElementRef, Optional, Input, Output, EventEmitter } from '@angular/core';
import { CookieService } from 'angular2-cookie/services/cookies.service';
import { TabsetComponent } from 'ngx-bootstrap';

import { HttpService } from '@service/http-service';
import { regex } from '@service/regex';

@Component({
    selector: 'email-modal',
    templateUrl: 'email-modal.html',
    providers: [
        HttpService
    ]
})
export class EmailModalComponent {
    @Input() appModal;
    hide() {
        this.appModal.closeModal();
    }
    public form = {};
    public transmit: any;
    public regex = regex;

    constructor(
        private http: HttpService
    ) { }

    public modalInit(transmit) {
        this.transmit = transmit;
        this.form = {}
    }

    public submit() {
        this.transmit['email'] = this.form['email'];

        window['loading']['open'](true);
        this.http.post('api/v1/statementTemplate/sendStatementByEmail', this.transmit).subscribe(
            response => {
                window['loading']['close']();
                if (response['retCode'] === '000000') {
                    alert('对账单已经下载到您的邮箱');
                    this.hide();
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
