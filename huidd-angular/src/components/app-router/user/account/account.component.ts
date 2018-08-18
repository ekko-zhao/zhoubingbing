/* 用户管理 用户账号管理 */
import { Component, Optional, ViewChild, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpService } from 'src/services/http-service';
import { MyService } from 'src/services/my-service';
import { regex } from 'src/services/regex';

@Component({
    templateUrl: './account.html'
})
export class AccountComponent implements OnInit {
    constructor(
        private router: Router,
        @Optional() private http: HttpService,
        @Optional() private myService: MyService
    ) {
        this.form.key3 = '';
        this.form.key4 = '';
        myService.getSelectList(this, 'selectList', 'role', '/api/url');
    }

    public tip = {};
    public selectList = <any>{};

    // 表单数据
    public regex = regex;
    public form = <any>{};
    public payload = {
        example: <any>{},
        page: null,
        size: null,
    };

    // 表格数据
    public items = [];
    public table = {
        th: [
            { key: 'key', text: '账号', width: '14%' },
            { key: 'key', text: '姓名', width: '14%' },
            { key: 'key', text: '状态', width: '12%' },
            { key: 'key', text: '权限角色', width: '14%' },
            { key: 'key', text: '注册时间', width: '14%' }
        ]
    };

    // 设置存储缓存的键
    public formStorageKey: string = 'userAccountForm';

    // 初始化分页参数
    @ViewChild('appPagination') public appPagination;
    public paginationData: any = {
        target: this
    }

    // 查询
    public queryStatus = false;
    public search = this.myService.search;
    public searchCallback() {
        this.items = [{ key: 'test', id: '123' }];
        return;
        this['queryStatus'] = true;
        this.http.post('/api/url', this.payload).subscribe(
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

    // 权限配置
    public config(item) {
        this.router.navigate(['app/user/account/config', item.id]);
    }

    // 新增用户
    public addItem() {
        this.router.navigate(['app/user/account/add']);
    }

    // 删除
    public delItem(item, status) {
        ; (window as any).confirm({
            text: '您确认要删除账号为“' + item.username + '”的信息吗？',
            done: (data) => {
                let payload = {
                    id: item.id,
                    statusCode: status
                }

                this.http.post('/api/user/v1/updateStatus', payload).subscribe(
                    response => {
                        if (response['code'] !== '000000') return;
                        this.search();
                        alert(item.username + '账号已删除');
                    },
                    error => { }
                )
            }
        })
    }

    // 停用
    public lockItem(item, status) {
        ; (window as any).confirm({
            text: '您确认要停用账号为“' + item.username + '”的信息吗？',
            done: (data) => {
                let payload = {
                    id: item.id,
                    statusCode: status
                }

                this.http.post('/api/user/v1/updateStatus', payload).subscribe(
                    response => {
                        if (response['code'] !== '000000') return;
                        this.search();
                        alert(item.username + '账号已停用');
                    },
                    error => { }
                )
            }
        })
    }

    // 启用
    public startItem(item, status) {
        ; (window as any).confirm({
            text: '您确认要启用账号为“' + item.username + '”的信息吗？',
            done: (data) => {
                let payload = {
                    id: item.id,
                    statusCode: status
                }

                this.http.post('/api/user/v1/updateStatus', payload).subscribe(
                    response => {
                        if (response['code'] !== '000000') return;
                        this.search();
                        alert(item.username + '账号已启用');
                    },
                    error => { }
                )
            }
        })
    }

    // 重置密码
    public resetPassword(item) {
        ; (window as any).confirm({
            text: '您确认要重置账号“' + item.username + '”的密码为111111吗？',
            done: (data) => {
                let payload = {
                    id: item.id
                }

                this.http.post('/api/url', payload).subscribe(
                    response => {
                        if (response['code'] !== '000000') return;
                        this.search();
                        ; (window as any).confirm({
                            text: item.username + '的账号密码已重置为：111111',
                        })
                    },
                    error => { }
                )
            }
        })
    }

    // 重置表单 -----------------------------------------------------------------------
    public reset() {
        this.form = {};
        this.form.key3 = '';
        this.form.key4 = '';
    }

    ngOnInit() {
        this.myService.setPayload(this);
        this.search(true);
    }
}
