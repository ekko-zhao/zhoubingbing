import { Component, ViewChild, ElementRef, Optional, Input, Output, EventEmitter } from '@angular/core';
import { DatePipe } from '@angular/common';
import { HttpService } from '@service/http-service';
import { MyService } from '@service/my-service';
import { env } from '@service/environment';

@Component({
    selector: 'detail-modal',
    templateUrl: './detail-modal.html',
    providers: [
        HttpService
    ]
})
export class DetailModalComponent {
    @Input() appModal;
    hide() {
        this.appModal.closeModal();
    }

    public modalInit(transmit) {
        this.items = [];
        this.postForm = {};
        this.postForm['startClearDate'] = this.postForm['endClearDate'] = this.datePipe.transform(transmit['clearDate'], env['format']);
        this.postForm['mercId'] = transmit['mercId'];
        this.postForm['termId'] = transmit['termId'];

        // 设置下载 查询符
        this.setTableSearch(this.table.storage);
        this.search(true);
    }

    // 表单
    public form = {};
    public postForm = {};

    // 数据 list
    public items = [];

    // 设置 存储缓存的键
    public formStorageKey: string = 'countDirectModalCountForm';
    public tableLocalKey: string = 'countDirectModalTable';

    // 配置表格
    public table = {
        th: [
            { key: 'clearDate', text: '清算日期', require: true },
            { key: 'mercId', text: '商户号', require: true },
            { key: 'mercName', text: '商户名称', require: false },
            { key: 'termId', text: '终端号', require: true },
            { key: 'siteName', text: '网点名称', require: false },
            { key: 'tranTime', text: '交易日期时间', require: true },
            { key: 'tranTypeName', text: '交易类型', require: true },
            { key: 'tranAmount', text: '交易金额', require: true },
            { key: 'fee', text: '手续费', require: true },
            { key: 'liqAmount', text: '应结算金额', require: false },
            { key: 'cardNo', text: '卡号', require: false },
            { key: 'debitInfoName', text: '借贷标志', require: false },
            { key: 'srefNo', text: '系统参考号', require: true }
        ],
        storage: []
    };

    constructor(
        private http: HttpService,
        @Optional() private myService: MyService,
        private datePipe: DatePipe
    ) {
        // 表单缓存
        /*  let formStorage = myService.getStorage('session', this.formStorageKey);
         this.form = formStorage ? formStorage : this.form; */

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

        // 阻止查询两次
        if (e && this.appPagination['data']['currentPage'] > 1) {
            this.stopSearch = true;
        }

        window['loading']['open'](true);
        this.http.post('api/v1/directTransaction/queryTransDetail', this.postForm).subscribe(
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
        this.tableCustom.modalInit()
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
}
