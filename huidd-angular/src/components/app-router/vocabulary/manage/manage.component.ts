/* 爬虫管理 */
import { Component, Optional, ViewChild, OnInit } from '@angular/core';
import { HttpService } from 'src/services/http-service';
import { MyService } from 'src/services/my-service';
import { regex } from 'src/services/regex';

@Component({
    templateUrl: './manage.html'
})

export class ManageComponent implements OnInit {
    constructor(
        @Optional() private http: HttpService,
        @Optional() private myService: MyService
    ) { }

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
            { key: 'key', text: '模板文件名称', width: '16%' },
            { key: 'key', text: '创建时间', width: '16%' },
            { key: 'key', text: '状态', width: '16%' },
            { key: 'key', text: '生效时间', width: '16%' }
        ]
    };
    // 设置存储缓存的键
    public formStorageKey: string = 'reptileReptileManageForm';

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

    public blockup(item) {
        ; (window as any).confirm({
            text: "您确定要停用文件名为 " + item.name + " 的词汇模板吗？",
            done: () => {
                this.http.post('/api/url', item).subscribe(
                    response => {
                        if (response['code'] !== '000000') return;
                        alert("停用信息成功");
                    },
                    error => { }
                )
            }
        })
    }

    public delItem(item) {
        ; (window as any).confirm({
            text: "您确定要删除文件名为 " + item.name + " 的词汇模板吗？",
            done: () => {
                this.http.post('/api/url', item).subscribe(
                    response => {
                        if (response['code'] !== '000000') return;
                        alert("删除信息成功");
                    },
                    error => { }
                )
            }
        })
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
