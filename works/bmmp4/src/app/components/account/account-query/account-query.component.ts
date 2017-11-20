import { Component, OnInit, ViewChild, Optional } from '@angular/core';
import { HttpService } from '@service/http-service';
import { MyService } from '@service/my-service';
import { regex } from '@service/regex';
import { env } from '@service/environment';

@Component({
    templateUrl: './account-query.html',
    providers: [
        HttpService
    ]
})
export class AccountQueryComponent implements OnInit {
    // 表单
    public form = {};
    public postForm = {};
    public regex = regex;

    // 数据 list
    public items = [];

    // 设置 存储缓存的键
    public formStorageKey: string = 'submerchantManageForm';
    public tableLocalKey: string = 'submerchantManageTable';

    // 配置表格
    public table = {
        th: [
            { key: 'name', text: '用户名', require: true },
            { key: 'contactName', text: '联系人', require: true },
            { key: 'cellPhone', text: '手机号', require: true },
            { key: 'typeName', text: '账号类型', require: true },
            { key: 'receiveOrderType', text: '收单形式', require: false },
            { key: 'parentName', text: '所属主账号', require: true },
            { key: 'orgNo', text: '所属机构号', require: true },
            { key: 'orgName', text: '所属机构名称', require: true },
            { key: 'createTime', text: '注册/创建时间', require: true },
            { key: 'statusName', text: '账号状态', require: true },
            { key: 'lastLoginTime', text: '最后登录时间', require: true }
        ],
        storage: []
    };

    // 下拉列表
    public selectList = {};

    constructor(
        private http: HttpService,
        @Optional() private myService: MyService
    ) {
        // 表单缓存
        let formStorage = myService.getStorage('session', this.formStorageKey);
        this.form = formStorage ? formStorage : this.form;

        // 表格缓存
        let tableSession = myService.getStorage('local', this.tableLocalKey);
        this.table.storage = tableSession ? tableSession : this.table.th;

        // 下拉列表
        myService.getSelectList(this, 'selectList', 'USER_TYPE');
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

            // 重置下载 查询符
            this.setTableSearch(this.table.storage);
        }

        // 阻止查询两次
        if (e && this.appPagination['data']['currentPage'] > 1) {
            this.stopSearch = true;
        }

        window['loading']['open']();
        this.http.post('api/v1/user/admin/queryUsers', this.postForm).subscribe(
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

    // 重置表单 -----------------------------------------------------------------------
    // @ViewChild('searchForm') public searchForm;
    public reset() {
        this.myService.removeStorage('session', this.formStorageKey);
        // this.searchForm.resetForm();
        this.form = {};
    }

    // 注销 -----------------------------------------------------------------------
    public deleteData() {
        var postData = this.getCheckedData(this.items);
        if (postData.length == 0) {
            alert('请选择要注销的机构账号！');
            return;
        }
        for (let item of postData) {
            if (item['status'] === '0') {
                alert('只能选择未注销的机构账号');
                return;
            }
        }
        ; (window as any).confirm({
            text: '您确定要注销当前选择的机构账号吗？',
            done: (data) => {
                // 这里执行注销操作
                window['loading']['open']();
                this.http.post('api/v1/user/admin/unRegisterOrgUser', postData).subscribe(
                    response => {
                        window['loading']['close']();
                        if (response['retCode'] === '000000') {
                            this.search();
                            alert('注销成功');
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


    // 激活-------------------------------------------------------------------------
    public activateData() {
        var postData = this.getCheckedData(this.items);
        if (postData.length == 0) {
            alert('请选择要激活的子账号！');
            return;
        } else if (postData.length > 1) {
            alert('最多只能选择一条数据激活');
            return;
        } else {
            if (postData[0]['status'] === '1') {
                alert('您选择的子帐号已经激活');
                return;
            }
        }

        window['loading']['open']();
        this.http.post('api/v1/user/admin/activeOrgUser', postData).subscribe(
            response => {
                window['loading']['close']();
                if (response['retCode'] === '000000') {
                    this.search();
                    alert('激活成功');
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

    // 子帐号列表 -----------------------------------------------------------------------
    @ViewChild('appModalAccount') public appModalAccount;
    @ViewChild('subaccountList') public subaccountList;
    public subaccountListStart(transmit) {
        this.subaccountList.modalInit(transmit)
        this.appModalAccount.showModal();
    }

    // 修改手机号 --------------------------------------------------------------------------
    @ViewChild('modifyMobileModal') public modifyMobileModal;
    @ViewChild('modifyMobile') public modifyMobile;
    public modifyMobileStart(transmit) {
        this.modifyMobile.modalInit(transmit);
        this.modifyMobileModal.showModal();
    }

    // 查看商终 --------------------------------------------------------------------------
    @ViewChild('merchantListModal') public merchantListModal;
    @ViewChild('merchantList') public merchantList;
    public merchantListStart(transmit) {
        this.merchantList.modalInit(transmit);
        this.merchantListModal.showModal();
    }

    // 批量添加 --------------------------------------------------------------------------
    @ViewChild('batchAddModal') public batchAddModal;
    @ViewChild('batchAdd') public batchAdd;
    public batchAddStart(transmit) {
        this.batchAdd.modalInit(transmit);
        this.batchAddModal.showModal();
    }

    // 组件初始化完成-----------------------------------------------------------------------
    ngOnInit() {
        // 查询 数据
        let formStorage = this.myService.getStorage('session', this.formStorageKey);
        if (formStorage) {
            this.postForm = formStorage;
        } else {
            this.form['type'] = null;
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
    /* public getCheckedData(data, key) {
        let d = [];
        this.checkbox.forEach((value, index, items) => {
            if (value) {
                d.push({ "userId": data[index][key] })
            }
        });
        return d;
    } */
    // 获取数据
    public getCheckedData(data, key?) {
        let d = [];
        this.checkbox.forEach((value, index, items) => {
            if (value) {
                if (key) {
                    d.push({ userId: data[index][key] })
                } else {
                    d.push(data[index])
                }

            }
        });
        return d;
    }

}
