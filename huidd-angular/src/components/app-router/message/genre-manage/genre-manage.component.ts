/* 反馈消息 */
import { Component, Optional, ViewChild, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpService } from 'src/services/http-service';
import { MyService } from 'src/services/my-service';
import { regex } from 'src/services/regex';

@Component({
    templateUrl: './genre-manage.html'
})

export class GenreManageComponent implements OnInit {
    // 复选框
    @ViewChild('checkboxAll') checkboxAll;
    constructor(
        private router: Router,
        @Optional() private http: HttpService,
        @Optional() private myService: MyService
    ) {

    }

    public tip = {};

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
            { key: 'key', text: '分类', width: '16%' },
            { key: 'key', text: '数量', width: '14%' },
            { key: 'key', text: '描述', width: '14%' },
            { key: 'key', text: '加入时间', width: '12%' },
            { key: 'key', text: '状态', width: '12%' }
        ]
    };
    // 设置存储缓存的键
    public formStorageKey: string = 'GenreFeedbackManageForm';

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

                // 初始化复选框
                this.checkboxAll['init'](this.items);
            },
            error => { this.queryStatus = false; }
        )
    }

    // 新增分类
    public addItem() {
        this.router.navigate(['app/message/genre-manage/add']);
    }

    // 编辑
    public editItem(id) {
        this.router.navigate(['app/message/genre-manage/edit', id]);
    }

    // 批量启用
    public startItems() {
        var payload = {
            vBoxes: this.checkboxAll['getData']('corporation')
        };
        if (payload.vBoxes.length == 0) {
            alert('请选择要启用的数据！');
            return;
        }

        ; (window as any).confirm({
            text: '您确认要启用当前选择的信息吗？',
            done: (data) => {
                this.http.post('/api/url', payload).subscribe(
                    response => {
                        if (response['code'] !== '000000') return;
                        this.search();
                        alert('启用信息成功');
                    },
                    error => { }
                )
            }
        })
    }

    // 批量停用
    public bloclupItems() {
        var payload = {
            vBoxes: this.checkboxAll['getData']('corporation')
        };
        if (payload.vBoxes.length == 0) {
            alert('请选择要停用的数据！');
            return;
        }

        ; (window as any).confirm({
            text: '您确认要停用当前选择的信息吗？',
            done: (data) => {
                this.http.post('/api/url', payload).subscribe(
                    response => {
                        if (response['code'] !== '000000') return;
                        this.search();
                        alert('停用信息成功');
                    },
                    error => { }
                )
            }
        })
    }

    // 批量删除
    public delItems() {
        var payload = {
            vBoxes: this.checkboxAll['getData']('corporation')
        };
        if (payload.vBoxes.length == 0) {
            alert('请选择要删除的数据！');
            return;
        }

        ; (window as any).confirm({
            text: '您确认要删除当前选择的信息吗？',
            done: (data) => {
                this.http.post('/api/url', payload).subscribe(
                    response => {
                        if (response['code'] !== '000000') return;
                        this.search();
                        alert('删除信息成功');
                    },
                    error => { }
                )
            }
        })
    }

    // 处理
    public handler(item) {
        ; (window as any).confirm({
            text: '您确认要处理ID为 ' + item.id + ' 的消息吗？',
            done: (data) => {
                this.http.post('/api/url', { id: item.id }).subscribe(
                    response => {
                        if (response['code'] !== '000000') return;
                        this.search();
                        ; (window as any).confirm({
                            text: ' 您好，您提交的反馈信息已在处理途中，十分感谢您的反馈！',
                            type: 2
                        })
                    },
                    error => { }
                )
            }
        })
    }

    // 列表
    @ViewChild('listQuery') public listQuery;
    public listQueryModalStart(item) {
        this.listQuery.show(item);
    }

    // 重置表单 -----------------------------------------------------------------------
    public reset() {
        this.form = {};
    }

    ngOnInit() {
        this.myService.setPayload(this);
        this.search(true);
    }
}
