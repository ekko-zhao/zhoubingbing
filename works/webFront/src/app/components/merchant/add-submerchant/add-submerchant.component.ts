import { Component, ViewChild, Optional, Input, Output, EventEmitter } from '@angular/core';
import { HttpService } from '@service/http-service';
import { regex } from '@service/regex';

import { TabsetComponent } from 'ngx-bootstrap';

@Component({
    selector: 'add-submerchant',
    templateUrl: './add-submerchant.html',
    providers: [
        HttpService
    ]
})
export class AddSubmerchantComponent {
    @Input() appModal;
    hide() {
        this.appModal.closeModal();
    }

    @Output() onListen = new EventEmitter<any>();
    public listen() {
        this.onListen.emit(true);
    }

    // 表单验证
    public form = {};
    public regex = regex;


    constructor(
        private http: HttpService
    ) { }

    // 初始化状态
    @ViewChild('editForm') public editForm;
    public modalInit() {
        this.editForm.resetForm();
    }

    // 新增
    public submit() {
        window['loading']['open'](true);
        this.http.post('api/v1/user/createSubAccount', this.form).subscribe(
            response => {
                window['loading']['close']();
                if (response['retCode'] === '000000') {
                    alert('新增子帐号成功');
                    this.hide();
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
