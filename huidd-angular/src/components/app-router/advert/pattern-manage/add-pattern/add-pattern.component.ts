/* 添加分组 */
import { Component, Optional, ViewChild, EventEmitter, Output } from '@angular/core';
import { ModalDirective } from 'ngx-bootstrap/modal';
import { HttpService } from 'src/services/http-service';
import { MyService } from 'src/services/my-service';
import { regex } from 'src/services/regex';

@Component({
    selector: "add-pattern",
    templateUrl: "./add-pattern.html"
})

export class AddPatternComponent {
    @Output() onListen = new EventEmitter<any>();
    // modal
    @ViewChild(ModalDirective) modal: ModalDirective;

    constructor(
        @Optional() private http: HttpService,
        @Optional() private myService: MyService
    ) { }

    public config = {
        backdrop: 'static',
        keyboard: true
    };

    public show() {
        this.form['key1'] = '';
        this.modal.show();
    }

    public shown() { }

    public hide() {
        this.modal.hide();
    }

    // 表单数据
    public form = <any>{};
    public regex = regex;
    public selectList = <any>{};

    // 提交
    public saveFlag = false;
    public submit() {
        this['saveFlag'] = true;
        this.http.post('/api/url', this.form).subscribe(
            response => {
                this.saveFlag = false;
                if (response['code'] !== '000000') return;
                this.hide();
                this.onListen.emit();
                alert('添加图片成功');
            },
            error => { this.saveFlag = false; }
        )
    }
}
