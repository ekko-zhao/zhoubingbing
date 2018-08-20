/* APP管理 优惠列表 */
import { Component, Optional, ViewChild, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpService } from 'src/services/http-service';
import { MyService } from 'src/services/my-service';
import { regex } from 'src/services/regex';

@Component({
    templateUrl: './list.html'
})

export class ListComponent implements OnInit {
    constructor(
        private activatedRoute: ActivatedRoute,
        @Optional() private http: HttpService,
        @Optional() private myService: MyService
    ) {
        this.form['key6'] = '';
        this.form['key7'] = '';
        myService.getSelectList(this, 'selectList', 'key6', '/api/url');
        myService.getSelectList(this, 'selectList', 'key7', '/api/url');
    }

    public id = this.activatedRoute.snapshot.params['id'];
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
            { key: 'key', text: '博文/规则ID' },
            { key: 'key', text: '用户' },
            { key: 'key', text: '优惠标题' },
            { key: 'key', text: '门店ID' },
            { key: 'key', text: '门店名称' },
            { key: 'key', text: '经度' },
            { key: 'key', text: '纬度' },
            { key: 'key', text: '优惠方' },
            { key: 'key', text: '活动时间' },
            { key: 'key', text: '上传时间' },
            { key: 'key', text: '博文/规则' },
            { key: 'key', text: '点击量' },
            { key: 'key', text: '点赞数' },
            { key: 'key', text: '评论数' },
            { key: 'key', text: '地区' }

        ]
    };

    // 设置存储缓存的键
    public formStorageKey: string = 'preferentialAppManageListForm';

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
    // 重置表单 -----------------------------------------------------------------------
    public reset() {
        this.form = {};
        this.form['key6'] = '';
        this.form['key7'] = '';
    }

    ngOnInit() {
        this.myService.setPayload(this);
        this.search(true);
    }
}
