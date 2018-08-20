/* 银行卡列表 */
import { Component, Optional, ViewChild, Input } from '@angular/core';
import { ModalDirective } from 'ngx-bootstrap/modal';
import { HttpService } from 'src/services/http-service';
import { MyService } from 'src/services/my-service';
import { regex } from 'src/services/regex';

@Component({
    selector: "list-query",
    templateUrl: "./list.html"
})
export class ListQueryComponent {
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

    public item = {};
    public show(item) {
        this.reset();
        this.item = item;
        this.items = [];
        this.modal.show();
    }

    public shown() {
        this.search(true);
    }

    public hide() {
        this.modal.hide();
    }

    public tip = {};

    // 表单数据
    public form = <any>{};
    public payload = {
        example: <any>{},
        page: null,
        size: null,
    };
    public regex = regex;

    // 表格数据
    public items = [];
    public table = {
        th: [
            { key: 'key', text: '卡列表' }
        ]
    };

    // 初始化分页参数
    @ViewChild('appPagination') public appPagination;
    public paginationData: any = {
        target: this
    }

    // 查询
    public queryStatus = false;
    public search = this.myService.search;
    public searchCallback() {
        this.payload.example['id'] = this.item['id'];
        this['queryStatus'] = true;
        this.http.post('/api/corporation/v1/queryByPager', this.payload).subscribe(
            response => {
                this.queryStatus = false;
                if (response['code'] !== '000000') return;
                this.items = response['data'];
                this.paginationData = {
                    totalItems: response['total'],
                    currentPage: this.payload['page']
                };
            },
            error => { this.queryStatus = false; }
        )
    }

    // 重置表单 -----------------------------------------------------------------------
    public reset() {
        this.form = <any>{};
    }

}
