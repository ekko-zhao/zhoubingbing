import { Component, ViewChild, ElementRef, Optional, Input, Output, EventEmitter } from '@angular/core';
import { CookieService } from 'angular2-cookie/services/cookies.service';
import { TabsetComponent } from 'ngx-bootstrap';

import { HttpService } from '@service/http-service';
import { regex } from '@service/regex';

@Component({
    selector: 'add-merchant',
    templateUrl: 'add-merchant.html',
    providers: [
        HttpService
    ]
})
export class AddMerchantComponent {
    // 用户类型
    public systype: string;

    @Input() appModal;
    hide() {
        this.appModal.closeModal();
    }

    @Output() onListen = new EventEmitter<any>();
    public listen() {
        this.appModal.closeModal();
        this.onListen.emit(true);
    }

    // 表单验证
    public regex = regex;

    constructor(
        private http: HttpService,
        private cookie: CookieService
    ) {
        // 权限
        this.systype = cookie.getObject('userData')['type'];
    }

    // 添加商户 ----------------------------
    public data = [];
    public addManual = true;
    public addData() {
        let d = {
            merchantNo: '',
            closingNo: ''
        }
        this.data.push(d);
        this.validate();
    };
    public delData(index) {
        this.data.splice(index, 1);
        this.validate();
    }

    // 验证
    public validateFlag: boolean;
    public validate() {
        this.validateFlag = false;
        for (let item of this.data) {
            if (!regex['merchantNo'].test(item['merchantNo']) || !regex['closingNo'].test(item['closingNo'])) {
                this.validateFlag = true;
                break;
            }
        }
    }

    // 初始化状态
    @ViewChild('staticTabs') staticTabs: TabsetComponent;
    @ViewChild('editForm') editForm;

    public modalInit() {
        this.staticTabs.tabs[0].active = true;

        // 重置手动添加
        this.data = [];
        this.addData();
        this.validateFlag = true;

        // 重置表单
        this.editForm.resetForm();
    }

    // 手动添加 - 提交
    public submit() {
        window['loading']['open'](true);
        this.http.post('api/v1/merchantUser/addMerchant', this.data).subscribe(
            response => {
                window['loading']['close']();
                if (response['retCode'] === '000000') {
                    this.listen();
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

    // 批量添加 - 提交 - 机构账号
    public form = {};
    public submitAutoOrg() {
        window['loading']['open'](true);
        this.http.post('api/v1/merchantUser/batchMerchantByOrg', this.form).subscribe(
            response => {
                window['loading']['close']();
                if (response['retCode'] === '000000') {
                    this.listen();
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
