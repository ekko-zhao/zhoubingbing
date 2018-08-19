/* 用户管理 app用户管理 */
import { Component, Optional, ViewChild, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpService } from 'src/services/http-service';
import { MyService } from 'src/services/my-service';
import { regex } from 'src/services/regex';

@Component({
    templateUrl: './app-account.html'
})
export class AppAccountComponent implements OnInit {
    constructor(
        private router: Router,
        @Optional() private http: HttpService,
        @Optional() private myService: MyService
    ) {
        this.form.key4 = '';
        this.form.key3 = '';
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
            { key: 'key', text: '手机号', width: '10%' },
            { key: 'key', text: '昵称', width: '8%' },
            { key: 'key', text: '性别', width: '8%' },
            { key: 'key', text: '常住地', width: '12%' },
            { key: 'key', text: '生日', width: '12%' },
            { key: 'key', text: '注册时间', width: '12%' },
            { key: 'key', text: '状态', width: '8%' }
        ]
    };

    // 设置存储缓存的键
    public formStorageKey: string = 'userAppAccountForm';

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

    // 新增用户
    public addItem() {
        this.router.navigate(['app/user/app-account/add']);
    }
    // 编辑
    public editItem(item) {
        this.router.navigate(['app/user/app-account/edit', item.id]);
    }

    // 解禁
    public unforbiddenItem(item) {
        ; (window as any).confirm({
            text: '您确认要解禁昵称为“' + item.username + '”的信息吗？',
            done: (data) => {
                let payload = {
                    id: item.id,
                    statusCode: status
                }
                this.http.post('/api/user/v1/updateStatus', payload).subscribe(
                    response => {
                        if (response['code'] !== '000000') return;
                        this.search();
                        alert('解禁成功');
                    },
                    error => { }
                )
            }
        })
    }

    // 禁言
    public forbiddenItem(item) {
        ; (window as any).confirm({
            text: '您确认要禁言昵称为“' + item.username + '”的信息吗？',
            done: (data) => {
                let payload = {
                    id: item.id,
                    statusCode: status
                }
                this.http.post('/api/user/v1/updateStatus', payload).subscribe(
                    response => {
                        if (response['code'] !== '000000') return;
                        this.search();
                        alert('禁言成功');
                    },
                    error => { }
                )
            }
        })
    }

    // 解封
    public openItem(item) {
        ; (window as any).confirm({
            text: '您确认要解封昵称为“' + item.username + '”的信息吗？',
            done: (data) => {
                let payload = {
                    id: item.id,
                    statusCode: status
                }
                this.http.post('/api/user/v1/updateStatus', payload).subscribe(
                    response => {
                        if (response['code'] !== '000000') return;
                        this.search();
                        alert('解封成功');
                    },
                    error => { }
                )
            }
        })
    }

    // 封号
    public closeItem(item) {
        ; (window as any).confirm({
            text: '您确认要封号昵称为“' + item.username + '”的信息吗？',
            done: (data) => {
                let payload = {
                    id: item.id,
                    statusCode: status
                }
                this.http.post('/api/user/v1/updateStatus', payload).subscribe(
                    response => {
                        if (response['code'] !== '000000') return;
                        this.search();
                        alert('封号成功');
                    },
                    error => { }
                )
            }
        })
    }

    // 删除
    public delItem(item) {
        ; (window as any).confirm({
            text: '您确认要删除昵称为“' + item.username + '”的信息吗？',
            done: (data) => {
                let payload = {
                    id: item.id
                }
                this.http.post('/api/user/v1/updateStatus', payload).subscribe(
                    response => {
                        if (response['code'] !== '000000') return;
                        this.search();
                        alert('删除成功');
                    },
                    error => { }
                )
            }
        })
    }




    // 重置表单 -----------------------------------------------------------------------
    public reset() {
        this.form = {};
        this.form.key4 = '';
        this.form.key3 = '';
    }

    ngOnInit() {
        this.myService.setPayload(this);
        this.search(true);
    }
}
