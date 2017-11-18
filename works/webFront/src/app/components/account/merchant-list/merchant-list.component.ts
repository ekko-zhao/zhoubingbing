/*
    admin 商户列表
*/
import { Component, ViewChild, Optional, Input, Output, EventEmitter } from '@angular/core';
import { CookieService } from 'angular2-cookie/services/cookies.service';

import { HttpService } from '@service/http-service';
import { MyService } from '@service/my-service';
import { regex } from '@service/regex';
import { env } from '@service/environment';

@Component({
    selector: 'merchant-list',
    templateUrl: 'merchant-list.html',
    providers: [
        HttpService
    ]
})
export class MerchantListComponent {
    @Input() appModal;
    public transmit = {};

    hide() {
        this.appModal.closeModal();
    }

    public modalInit(transmit) {
        this.searchForm.resetForm();
        this.postForm = {};
        this.items = [];
        this.transmit = transmit;
        this.search(true);

        if (this.transmit['type'] === '222') {
            this.table.storage = [
                { key: 'merchantNo', text: '商户号', require: true },
                { key: 'merchantName', text: '商户名称', require: true },
                { key: 'terminalNo', text: '终端号', require: true },
                { key: 'siteName', text: '网点名称', require: true },
                { key: 'directConnText', text: '是否为直联终端', require: true },
                { key: 'closingPeriod', text: '结算周期', require: true }
            ]
        } else {
            this.table.storage = [
                { key: 'merchantNo', text: '商户号', require: true },
                { key: 'merchantName', text: '商户名称', require: true }
            ]
        }
    }

    // 用于重置表单
    @ViewChild('searchForm') public searchForm;

    // 表单验证
    public form = {};
    public postForm = {};
    public regex = regex;

    // 数据 list
    public items = [];

    // 设置 存储缓存的键
    public tableLocalKey: string = 'terminalListTable';

    public table = {
        th: [],
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
    public search(e?, page: number = 1, size: number = env['itemsPerPage']) {
        // 如果是由查询按钮触发的更新缓存 和 提交对象
        if (e && e !== true) {
            this.postForm = Object.assign({}, this.form);
        }

        this.postForm['page'] = page;
        this.postForm['size'] = size;
        if (this.transmit['type'] !== '222') {
            this.postForm['user'] = {};
            this.postForm['user']['userId'] = this.transmit['userId'];
        } else {
            this.postForm['userId'] = this.transmit['userId'];
        }

        // 阻止查询两次
        if (e && this.appPagination['data']['currentPage'] > 1) {
            this.stopSearch = true;
        }

        window['loading']['open'](true);

        let url = this.transmit['type'] !== '222' ? 'api/v1/merchantUser/pageList' : 'api/v1/terminalMerchant/pageList';
        this.http.post(url, this.postForm).subscribe(
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

    // 重置
    public reset() {
        this.searchForm.resetForm();
    }
}
