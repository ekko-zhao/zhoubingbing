import { Component, OnInit, ViewChild, Optional } from '@angular/core';
import { HttpService } from '@service/http-service';
import { CookieService } from 'angular2-cookie/services/cookies.service';

import { MyService } from '@service/my-service';
import { regex } from '@service/regex';
import { env } from '@service/environment';

@Component({
    templateUrl: `notice-list.html`,
    providers: [
        HttpService,
        CookieService
    ]
})
export class NoticeListComponent implements OnInit {
    // 用户类型
    public systype: string;

    // 表单
    public form = {};
    public postForm = {};
    public regex = regex;

    // 数据 list
    public items = [];

    // 设置 存储缓存的键
    public formStorageKey: string = 'noticeListForm';
    public tableLocalKey: string = 'noticeListTable';

    // 配置表格
    public table = {
        th: [
            { key: 'noticeName', text: '标题', require: true },
            { key: 'createTime', text: '发布时间', require: true },
            { key: 'failureDate', text: '失效时间', require: true },
            { key: 'noticeStatusText', text: '公告状态', require: true }
        ],
        storage: []
    };

    constructor(
        private http: HttpService,
        @Optional() private myService: MyService,
        private cookie: CookieService
    ) {
        // 表单缓存
        let formStorage = myService.getStorage('session', this.formStorageKey);
        this.form = formStorage ? formStorage : this.form;

        // 表格缓存
        let tableSession = myService.getStorage('local', this.tableLocalKey);
        this.table.storage = tableSession ? tableSession : this.table.th;

        // 权限
        this.systype = cookie.getObject('userData')['type'];
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
        this.http.post('api/v1/notice/queryNotice', this.postForm).subscribe(
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


    // 组件初始化完成 -----------------------------------------------------------------------
    ngOnInit() {
        // 查询 数据
        let formStorage = this.myService.getStorage('session', this.formStorageKey);
        if (formStorage) {
            this.postForm = formStorage;
        }
        this.search();
    }

    // 公告内容 -----------------------------------------------------------------------
    @ViewChild('appModal') public appModal;
    @ViewChild('noticeContent') public noticeContent;
    public noticeContentStart(item) {
        this.noticeContent.modalInit(item);
        this.appModal.showModal();
    }

    // 发布公告 -----------------------------------------------------------------------
    @ViewChild('noticeReleaseModal') public noticeReleaseModal;
    @ViewChild('noticeRelease') public noticeRelease;
    public noticeReleaseStart() {
        this.noticeRelease.modalInit();
        this.noticeReleaseModal.showModal();
    }

    // 编辑公告
    public editNoticeStart(transmit) {
        window['loading']['open'](true);
        this.http.get('api/v1/notice/detail/' + transmit).subscribe(
            response => {
                window['loading']['close']();
                if (response['retCode'] === '000000') {
                    this.noticeRelease.modalInit(response['data']);
                    this.noticeReleaseModal.showModal();
                    //this.content = this.sanitizer.bypassSecurityTrustHtml(response['data']['noticeContent']);
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


    // 删除公告 -----------------------------------------------------------------------
    public deleteData() {
        var postData = this.getCheckedData(this.items, 'noticeId');
        if (postData.length == 0) {
            alert('请选择要删除的公告！');
            return;
        }
        ; (window as any).confirm({
            text: '您确定要删除当前选择的公告吗？',
            done: (data) => {
                // 这里执行注销操作
                window['loading']['open']();
                this.http.post('api/v1/notice/delete', postData).subscribe(
                    response => {
                        window['loading']['close']();
                        if (response['retCode'] === '000000') {
                            this.search();
                            alert('删除成功');
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
                d.push({ noticeId: data[index][key] })
            }
        });
        return d;
    }
}
