import { Component, OnInit, ViewChild, Optional, ElementRef } from '@angular/core';
import { Router } from '@angular/router';
import { HttpService } from '@service/http-service';
import { CookieService } from 'angular2-cookie/services/cookies.service';

import { MyService } from '@service/my-service';
import { regex } from '@service/regex';
import { env } from '@service/environment';

@Component({
    templateUrl: 'merchant-manage.html',
    providers: [
        HttpService,
        CookieService
    ]
})
export class MerchantManageComponent implements OnInit {
    // 权限
    public sysaddmerchant: boolean = false;
    public sysdeletemerchant: boolean = false;
    public sysmerchantdetail: boolean = false;
    public sysbatchDeletemerchant: boolean = false;

    public systype: string;

    // 表单
    public form = {};
    public postForm = {};
    public regex = regex;

    // 数据 list
    public items = [];

    // 设置 存储缓存的键
    public formStorageKey: string = 'merchantManageForm';
    public tableLocalKey: string = 'merchantManageTable';

    // 配置表格
    public table = {
        th: [
            { key: 'merchantNo', text: '商户号', require: true },
            { key: 'merchantName', text: '商户名称', require: true }
        ],
        storage: []
    };

    constructor(
        private http: HttpService,
        @Optional() private myService: MyService,
        private router: Router,
        private cookie: CookieService

    ) {
        // 权限
        let permissions: any = this.cookie.getObject('permissions');
        this.systype = cookie.getObject('userData')['type'];


        for (let item of permissions) {
            // 添加商户号
            if (item === 'sys:add:merchant') {
                this.sysaddmerchant = true;
            }

            // 删除商户号
            if (item === 'sys:delete:merchant') {
                this.sysdeletemerchant = true;
            }

            // 一键删除
            if (item === 'sys:batchDelete:merchant') {
                this.sysbatchDeletemerchant = true;
            }

            // 查看终端列表
            if (item === 'sys:merchant:detail') {
                this.sysmerchantdetail = true;
            }
        }

        if (!this.sysmerchantdetail) {
            this.table.th = [
                { key: 'merchantNo', text: '商户号', require: true },
                { key: 'merchantName', text: '商户名称', require: true },
                { key: 'terminalNo', text: '终端号', require: true },
                { key: 'siteName', text: '网点名称', require: true },
                { key: 'directConnText', text: '是否为直联终端', require: true },
                { key: 'closingPeriod', text: '结算周期', require: true }
            ]
        }

        // 表单缓存
        let formStorage = myService.getStorage('session', this.formStorageKey);
        this.form = formStorage ? formStorage : this.form;

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
            this.myService.setStorage('session', this.formStorageKey, this.form);
        }

        // 阻止查询两次
        if (e && this.appPagination['data']['currentPage'] > 1) {
            this.stopSearch = true;
        }

        window['loading']['open']();
        let url = this.sysmerchantdetail ? 'api/v1/merchantUser/pageList' : 'api/v1/terminalMerchant/pageList';
        this.http.post(url, this.postForm).subscribe(
            response => {
                window['loading']['close']();
                if (response['retCode'] === '000000') {
                    this.items = response['data']
                    this.paginationData = {
                        totalItems: response['total'],
                        currentPage: e ? 1 : 0
                    };
                    // 初始化复选框
                    this.setCheckbox(this.items.length);
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

    // 商户号选择
    @ViewChild('listMerchant') listMerchant: ViewChild;

    // 重置表单 -----------------------------------------------------------------------
    // @ViewChild('searchForm') public searchForm;
    public reset() {
        this.myService.removeStorage('session', this.formStorageKey);
        //this.searchForm.resetForm();
        this.form = {};
        // 清空商户号 选择
        this.listMerchant['rest']();
    }

    // 新增 -----------------------------------------------------------------------
    @ViewChild('addModal') public addModal;
    @ViewChild('addMerchant') public addMerchant;

    public addData() {
        this.addMerchant.modalInit();
        this.addModal.showModal();
    }
    public addDataDone() {
        // 重新拉取商户号
        this.listMerchant['getListMerchantForInput'](true);
        this.search(true);
    }

    // 删除-----------------------------------------------------------------------
    public deleteData() {
        var postData = this.getCheckedData(this.items, 'id');
        if (postData.length == 0) {
            alert('请选择要删除的数据！');
            return;
        }
        ; (window as any).confirm({
            text: '您确定要删除当前选择的数据吗？',
            done: (data) => {
                // 这里执行删除操作
                window['loading']['open']();
                this.http.post('api/v1/merchantUser/delete', postData).subscribe(
                    response => {
                        window['loading']['close']();
                        if (response['retCode'] === '000000') {
                            this.search();

                            // 重新拉取商户号
                            this.listMerchant['getListMerchantForInput'](true);
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
        })
    }
    // 一键删除-------------------------------------------------------
    public batchDelete() {
        ; (window as any).confirm({
            text: '您确定要删除所有的数据吗？',
            done: (data) => {
                window['loading']['open']();
                this.http.get('api/v1/merchantUser/deleteAll').subscribe(
                    response => {
                        window['loading']['close']();
                        if (response['retCode'] === '000000') {
                            this.search();

                            // 重新拉取商户号
                            this.listMerchant['getListMerchantForInput'](true);
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
        })
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

    // 查看终端列表-----------------------------------------------------------------------

    // 获取 modal
    @ViewChild('appModal') public appModal;
    @ViewChild('terminalList') public terminalList;

    public transmit: any;
    public terminalListStart(transmit) {
        this.terminalList.modalInit(transmit);
        this.appModal.showModal();
    }

    // 组件初始化完成-----------------------------------------------------------------------
    ngOnInit() {

        // 查询 数据
        let formStorage = this.myService.getStorage('session', this.formStorageKey);
        if (formStorage) {
            this.postForm = formStorage;
        }
        this.search();

        // 设置下载 查询符
        this.setTableSearch(this.table.storage);
    }

    // 复选框----------------------------------------------------------------------
    public checkboxControl = false;
    public checkbox = [];

    // 初始化 checkbox 数据变化时需要重新初始化
    public setCheckbox(length) {
        this.checkboxControl = false;
        this.checkbox.length = length;
        for (let i = 0; i < length; i++) {
            this.checkbox[i] = false;
        }
    }

    // 全选
    public checkboxAll(checked: boolean) {
        checked = checked === undefined ? false : checked;
        this.checkbox.forEach((value, index, items) => {
            this.checkbox[index] = checked;
        })
    }
    public checkboxChange() {
        this.checkboxControl = this.checkbox.every((value, index, items) => {
            return items[index];
        });
    }
    // 获取数据
    public getCheckedData(data, key) {
        let d = [];
        this.checkbox.forEach((value, index, items) => {
            if (value) {
                d.push({ "id": data[index][key] })
            }
        });
        return d;
    }

}
