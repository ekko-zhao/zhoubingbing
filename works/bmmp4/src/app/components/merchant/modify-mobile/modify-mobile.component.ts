import { Component, ViewChild, Optional, Input, Output, EventEmitter } from '@angular/core';
import { HttpService } from '@service/http-service';
import { MyService } from '@service/my-service';
import { regex } from '@service/regex';

@Component({
    selector: 'modify-mobile',
    templateUrl: 'modify-mobile.html',
    providers: [
        HttpService
    ]
})
export class ModifyMobileComponent {
    @Input() appModal;
    public transmit = {};

    hide() {
        this.appModal.closeModal();
    }

    @Output() onListen = new EventEmitter<any>();
    public listen() {
        this.onListen.emit(true);
    }

    public modalInit(transmit) {
        this.editForm.resetForm();
        this.transmit = transmit;
    }

    // 用于重置表单
    @ViewChild('editForm') public editForm;

    // 表单验证
    public form = {};
    public regex = regex;

    constructor(
        private http: HttpService,
        @Optional() private myService: MyService
    ) { }

    // 提交修改
    public submit() {
        if (this.form['cellPhone'] == this.transmit['cellPhone']) {
            alert('变更号码与原手机号一致，请重新填写！');
            return;
        }
        this.form['userId'] = this.transmit['userId'];
        this.http.post('api/v1/user/updateCellPhone', this.form).subscribe(
            response => {
                window['loading']['close']();
                if (response['retCode'] === '000000') {
                    alert('修改手机号成功');
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
