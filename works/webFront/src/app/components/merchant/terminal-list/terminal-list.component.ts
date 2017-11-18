import { Component, ViewChild, Optional, Input, Output, EventEmitter } from '@angular/core';
import { CookieService } from 'angular2-cookie/services/cookies.service';

import { HttpService } from '@service/http-service';
import { MyService } from '@service/my-service';
import { regex } from '@service/regex';
import { env } from '@service/environment';

@Component({
    selector: 'terminal-list',
    templateUrl: 'terminal-list.html',
    providers: [
        HttpService
    ]
})
export class TerminalListComponent {
    @Input() appModal;
    hide() {
        this.appModal.closeModal();
    }

    public modalInit(transmit) {
        // this.searchForm.resetForm();
        this.form = {};
        this.postForm = {};
        this.postForm['merchantNo'] = transmit;
        this.items = [];
        this.search(true);

        // 查询终端
        //this.queryTermList();

        // 设置下载 查询符
        this.setTableSearch(this.table.storage);
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
            { key: 'merchantNo', text: '商户号', require: true },
            { key: 'merchantName', text: '商户名称', require: true },
            { key: 'terminalNo', text: '终端号', require: true },
            { key: 'siteName', text: '网点名称', require: true },
            { key: 'directConnText', text: '是否为直联终端', require: false },
            { key: 'closingPeriod', text: '结算周期', require: false },
            { key: 'accountNo', text: '入款账号', require: true },
            { key: 'accountName', text: '入款账户名称', require: true }
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

            // 重置下载 查询符
            this.setTableSearch(this.table.storage);
        }

        // 阻止查询两次
        if (e && this.appPagination['data']['currentPage'] > 1) {
            this.stopSearch = true;
        }

        window['loading']['open'](true);
        this.http.post('api/v1/terminalMerchant/terminalMerchantList', this.postForm).subscribe(
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
    // 表头定制-----------------------------------------------------------------------
    @ViewChild('appModalCustom') public appModalCustom;
    @ViewChild('tableCustom') public tableCustom;
    public tableCustomStart() {
        this.tableCustom.modalInit();
        this.appModalCustom.showModal();
    }
    public tableDone(data) {
        this.myService.setStorage('local', this.tableLocalKey, data);
        this.table.storage = data;

        // 重置下载查询符
        this.setTableSearch(data);
    }

    // 下载表格-----------------------------------------------------------------------
    public tableSearch: string;
    public setTableSearch(data) {
        this.myService.tableSearch(this, data);
    }

    // 重置表单
    // @ViewChild('searchForm') public searchForm;
    public reset() {
        // this.searchForm.resetForm();
        this.form = {}
    }

    /* // 查询终端---------------------------------------------------------------------
    @ViewChild('listTerminal') listTerminal: any;

    public termList = [];
    public queryTermList() {
        this.termList = [];
        this.http.post('api/v1/terminalMerchant/listTerminalForInput', { 'merchantNo': this.postForm['merchantNo'] }).subscribe(
            response => {
                this.termList = response['data'];
                this.listTerminal['setCheckbox'](response['data']['length'], this.termList);
            },
            error => {
                console.log('listTerminalForInput 请求失败');
                alert("网络错误，请求下拉列表数据失败");
            }
        )
    } */

}

/*
    @Output() onListen = new EventEmitter<boolean>();

    public listen() {
        this.onListen.emit(true);
    }
*/
