/* 爬虫管理 */
import { Component, Optional, ViewChild, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpService } from 'src/services/http-service';
import { MyService } from 'src/services/my-service';
import { regex } from 'src/services/regex';

@Component({
    templateUrl: './reptile-manage.html'
})

export class ReptileManageComponent implements OnInit {
    // 复选框
    @ViewChild('checkboxAll') checkboxAll;
    constructor(
        private router: Router,
        @Optional() private http: HttpService,
        @Optional() private myService: MyService
    ) {
        this.form.key6 = '';
        this.form.key7 = '';
        myService.getSelectList(this, 'selectList', 'key6', '/api/url');
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
            { key: 'key', text: 'ID' },
            { key: 'key', text: '标题' },
            { key: 'key', text: '起始时间' },
            { key: 'key', text: '结束时间' },
            { key: 'key', text: '商户名地址' },
            { key: 'key', text: '经度' },
            { key: 'key', text: '纬度' },
            { key: 'key', text: '优惠方' },
            { key: 'key', text: '分类' },
            { key: 'key', text: '小分类' },
            { key: 'key', text: '原始地址' },
            { key: 'key', text: '是否提交优惠' }
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

                // 初始化复选框
                this.checkboxAll['init'](this.items);
            },
            error => { this.queryStatus = false; }
        )
    }

    // 复制到博文
    public toBowen(id) {
        this.router.navigate(['app/preferential/user-message/add-bowen'], { queryParams: { reptile: id } });
    }
    // 复制到博文
    public toGuize(id) {
        this.router.navigate(['app/preferential/user-message/add-guize'], { queryParams: { reptile: id } });
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
                this.http.post('/api/user/v1/updateStatus', payload).subscribe(
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

    // 重置表单 -----------------------------------------------------------------------
    public reset() {
        this.form = {};
        this.form.key6 = '';
        this.form.key7 = '';
    }

    ngOnInit() {
        this.myService.setPayload(this);
        this.search(true);
    }
}
