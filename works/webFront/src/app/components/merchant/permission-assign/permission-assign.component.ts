
import { Component, ViewChild, Optional, Input, Output, EventEmitter } from '@angular/core';
import { NgForm } from '@angular/forms';
import { CookieService } from 'angular2-cookie/services/cookies.service';

import { HttpService } from '@service/http-service';
import { MyService } from '@service/my-service';
import { regex } from '@service/regex';
import { env } from '@service/environment';

@Component({
    selector: 'permission-assign',
    templateUrl: 'permission-assign.html',
    providers: [
        HttpService
    ]
})
export class PermissionAssignComponent {
    @Input() appModal;
    public transmit: any = {};

    hide() {
        this.appModal.closeModal();
    }

    public modalInit(transmit) {
        this.reset();
        this.postForm = {};
        this.items = [];
        this.transmit = transmit;
        // this.search(true);

        if (transmit.type === '222') {
            this.table.storage = [
                { key: 'merchantNo', text: '商户号', require: true },
                { key: 'merchantName', text: '商户名称', require: true },
                { key: 'terminalNo', text: '终端号', require: true },
                { key: 'siteName', text: '网点名称', require: true }
            ]

        } else {
            this.table.storage = [
                { key: 'merchantNo', text: '商户号', require: true },
                { key: 'merchantName', text: '商户名称', require: true }

            ]
        }
        this.paginationData = {
            totalItems: 0,
            currentPage: 0
        };
    }

    // 表单验证
    public form = {
        merchantPerms: '0'
    };
    public postForm = {};
    public regex = regex;

    // 数据 list
    public items = [];

    // 设置 存储缓存的键
    public tableLocalKey: string = 'permissionAssignTable';

    public table = {
        th: [],
        storage: []
    };

    constructor(
        private http: HttpService,
        @Optional() private myService: MyService,
        private cookie: CookieService
    ) {
        // 权限
        /* let type = cookie.getObject('userData')['type'];
        if (type === '300') {
            this.table.th.splice(-1, 0, { key: 'terminalNo', text: '终端号', require: true }, { key: 'siteName', text: '网点名称', require: true })
        } */

        // 表格缓存
        /* let tableSession = myService.getStorage('local', this.tableLocalKey);
        this.table.storage = tableSession ? tableSession : this.table.th; */
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

        this.postForm['userId'] = this.transmit['userId'];
        this.postForm['type'] = this.transmit['type'];

        // 阻止查询两次
        if (e && this.appPagination['data']['currentPage'] > 1) {
            this.stopSearch = true;
        }

        window['loading']['open'](true);
        this.http.post('api/v1/merchantUser/queryAccountMertPerms', this.postForm).subscribe(
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
    @ViewChild('searchForm') searchForm: NgForm;
    public reset() {
        this.form = {
            merchantPerms: '0'
        };

        this.searchForm.controls['form.merchantNo'].reset();

        // 清空商户号 选择
        this.listMerchant['rest']();
    }

    // 添加权限
    public addAssign() {
        var items = this.getCheckedData(this.items);
        if (!items.length) {
            alert('请选择操作数据');
            return;
        }
        let data = {
            userId: this.transmit['userId'],
            type: this.transmit['type'],
            data: items
        }

        window['loading']['open'](true);
        this.http.post('api/v1/merchantUser/addAccountMertPerms', data).subscribe(
            response => {
                window['loading']['close']();
                if (response['retCode'] === '000000') {
                    this.search();
                    alert('添加权限成功')
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

    // 删除权限
    public delAssign() {
        var items = this.getCheckedData(this.items, 'id');
        if (!items.length) {
            alert('请选择操作数据');
            return;
        }
        let data = {
            userId: this.transmit['userId'],
            type: this.transmit['type'],
            data: items
        }

        window['loading']['open'](true);
        this.http.post('api/v1/merchantUser/deleteAccountMertPerms', data).subscribe(
            response => {
                window['loading']['close']();
                if (response['retCode'] === '000000') {
                    this.search();
                    alert('删除权限成功')
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
    public getCheckedData(data, key?) {
        let d = [];
        this.checkbox.forEach((value, index, items) => {
            if (value) {
                if (key) {
                    d.push({ "id": data[index][key] })
                } else {
                    d.push(data[index])
                }

            }
        });
        return d;
    }

}
