/* 素材管理 */
import { Component, Optional, ViewChild, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpService } from 'src/services/http-service';
import { MyService } from 'src/services/my-service';
import { regex } from 'src/services/regex';

@Component({
    templateUrl: './pattern-manage.html',
    styleUrls: ['./pattern-manage.css.less']
})

export class PatternManageComponent implements OnInit {
    // 复选框
    @ViewChild('checkboxAll') checkboxAll;
    constructor(
        private router: Router,
        @Optional() private http: HttpService,
        @Optional() private myService: MyService
    ) {
        this.form.key1 = '';
        myService.getSelectList(this, 'selectList', 'role', '/api/url');
    }

    public tip = {};
    public selectList = <any>{};

    // 表单数据
    public regex = regex;
    public form = <any>{};
    public payload = {};

    // 表格数据
    public items = [];

    // 设置存储缓存的键
    public formStorageKey: string = 'advertPatternManageForm';

    // 初始化分页参数
    @ViewChild('appPagination') public appPagination;
    public paginationData: any = {
        target: this
    }

    // 查询
    public queryStatus = false;
    public search = this.myService.search;
    public searchCallback() {
        this.items = [{
            name: '1.png',
            fid: 'fid111',
            url: '/static/images/test/1.png'
        }];
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
        this.router.navigate(['app/advert/manage/add']);
    }

    // 编辑
    public editItem(id) {
        this.router.navigate(['app/advert/manage/edit', id]);
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

    // 复制链接
    public copylick(url) {
        ; (window as any).clipboard.writeText(url);
    }
    // 重命名
    public rename(item) {
        ; (window as any).confirm({
            text: '请输入图片名称',
            note: '图片名称最大长度为32位,大小写字母或数字',
            textarea: '',
            fill: item.name,
            regex: regex.imgname,
            done: (data) => {
                ; (window as any).loading.open();
                this.http.post('/api/url', { name: data.reason }).subscribe(
                    response => {
                        ; (window as any).loading.close();
                        if (response['code'] !== '000000') return;
                        item.name = data.reason;
                        alert('修改名称成功');
                    },
                    error => { ; (window as any).loading.close() }
                )

            }
        });
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
