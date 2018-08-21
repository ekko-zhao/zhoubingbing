/* 热门排序 */
import { Component, Optional, ViewChild, OnInit, EventEmitter, Output } from '@angular/core';
import { ModalDirective } from 'ngx-bootstrap/modal';
import { NgForm } from '@angular/forms';
import { HttpService } from 'src/services/http-service';
import { MyService } from 'src/services/my-service';
import { regex } from 'src/services/regex';

@Component({
    selector: "sort-modal",
    templateUrl: "./sort.html"
})

export class SortComponent {
    @Output() onListen = new EventEmitter<any>();
    // modal
    @ViewChild(ModalDirective) modal: ModalDirective;
    @ViewChild('editForm') editForm: NgForm;

    constructor(
        @Optional() private http: HttpService,
        @Optional() private myService: MyService
    ) { }

    public config = {
        backdrop: 'static',
        keyboard: true
    };

    public show(item) {
        this.editForm.reset();
        this.form = Object.assign({}, item);
        this.modal.show();
    }

    public shown() { }

    public hide() {
        this.modal.hide();
    }

    // 表单数据
    public form = <any>{};
    public regex = regex;

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
                alert('修改排序成功');
            },
            error => { this.saveFlag = false; }
        )
    }
}
