import { Component, Optional, ViewChild, OnInit } from '@angular/core';
import { HttpService } from 'src/services/http-service';
import { MyService } from 'src/services/my-service';
import { regex } from 'src/services/regex';

@Component({
    templateUrl: './app-manage.html'
})
export class AppManageComponent implements OnInit {
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
            { key: 'key', text: 'APP名称', width: '18%' },
            { key: 'key', text: 'APP ID', width: '18%' },
            { key: 'key', text: '关联优惠', width: '16%' },
            { key: 'key', text: '收录时间', width: '16%' }
        ]
    };

    // 设置存储缓存的键
    public formStorageKey: string = 'preferentialAppManageForm';

    // 初始化分页参数
    @ViewChild('appPagination') public appPagination;
    public paginationData: any = {
        target: this
    }

    // 查询
    public queryStatus = false;
    public search = this.myService.search;
    public searchCallback() {
        this.items = [{ key: 'test',id:'123' }];
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
        this.form.key1 = '';
        this.form.key2 = '';
    }

    ngOnInit() {
        this.myService.setPayload(this);
        this.search(true);
    }
}
