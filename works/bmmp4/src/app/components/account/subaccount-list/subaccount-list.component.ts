import { Component, ViewChild, Optional, Input, Output, EventEmitter } from '@angular/core';
import { CookieService } from 'angular2-cookie/services/cookies.service';

import { HttpService } from '@service/http-service';
import { MyService } from '@service/my-service';
import { regex } from '@service/regex';
import { env } from '@service/environment';

@Component({
    selector: 'subaccount-list',
    templateUrl: 'subaccount-list.html',
    providers: [
        HttpService
    ]
})
export class SubaccountListComponent {
    @Input() appModal;
    public transmit;

    hide() {
        this.appModal.closeModal();
    }
    public modalInit(transmit) {
        this.searchForm.resetForm();
        this.postForm = {};
        this.items = [];
        this.transmit = transmit;
        this.search(true);
    }

    // 表单验证
    public form = {};
    public postForm = {};
    public regex = regex;

    // 数据 list
    public items = [];

    // 设置 存储缓存的键
    public tableLocalKey: string = 'terminalListTable';

    public table = {
        th: [
            { key: 'name', text: '子账号用户名', require: true },
            { key: 'contactName', text: '联系人', require: true },
            { key: 'cellPhone', text: '手机号', require: true },
            { key: 'typeName', text: '子账号类型', require: true },
            { key: 'createTime', text: '创建时间', require: true },
            { key: 'statusName', text: '账号状态', require: true }
        ],
        storage: []
    };

    constructor(
        private http: HttpService,
        @Optional() private myService: MyService,
        private cookie: CookieService
    ) {
        // 表格缓存
        let tableSession = myService.getStorage('local', this.tableLocalKey);
        this.table.storage = tableSession ? tableSession : this.table.th;
    }

    // 初始化 分页参数
    @ViewChild('appPagination') public appPagination;
    public stopSearch = false;
    public paginationData: any = {
        pageChanged: ($event) => {
            // 阻止查询两次
            if (this.stopSearch) {
                this.stopSearch = false;
                return;
            }
            // 查询
            this.search(null, $event.page, $event.itemsPerPage);
        }
    }

    // 查询
    public search(e?, page?: number, size: number = env['itemsPerPage']) {
        // 回归第一页
        if (e) page = 1;
        if (!page && this.postForm['page']) {
            // 用于 手动执行search方法， 保留当前页（删除数据， 新增）
            page = this.postForm['page'];
        } else if (!page) {
            // 默认查询
            page = 1;
        }

        // 设置分页
        this.postForm['page'] = page;
        this.postForm['size'] = size;
        // 如果是由查询按钮触发的更新缓存 和 提交对象
        if (e && e !== true) {
            this.postForm = Object.assign({}, this.form);
        }
        this.postForm['parentId'] = this.transmit;

        // 阻止查询两次
        if (e && this.appPagination['data']['currentPage'] > 1) {
            this.stopSearch = true;
        }

        window['loading']['open'](true);
        this.http.post('api/v1/user/querySubAccount', this.postForm).subscribe(
            response => {
                window['loading']['close']();
                if (response['retCode'] === '000000') {
                    this.items = response['data']
                    this.paginationData = {
                        totalItems: response['total'],
                        currentPage: e ? 1 : 0
                    };
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

    // 重置表单
    @ViewChild('searchForm') public searchForm;
    public reset() {
        this.searchForm.resetForm();
    }
}
