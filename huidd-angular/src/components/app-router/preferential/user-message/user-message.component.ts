/* 优惠信息管理 用户提交信息管理 */
import { Component, Optional, ViewChild, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpService } from 'src/services/http-service';
import { MyService } from 'src/services/my-service';
import { regex } from 'src/services/regex';

@Component({
    templateUrl: './user-message.html'
})

export class UserMessageComponent implements OnInit {
    // 复选框
    @ViewChild('checkboxAll') checkboxAll;
    constructor(
        private router: Router,
        @Optional() private http: HttpService,
        @Optional() private myService: MyService
    ) {
        this.form.key5 = '';
        this.form.key8 = '';
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
            { key: 'key', text: 'ID' },
            { key: 'key', text: '博文/规则ID' },
            { key: 'key', text: '用户昵称' },
            { key: 'key', text: '优惠标题' },
            { key: 'key', text: '门店ID' },
            { key: 'key', text: '门店名称' },
            { key: 'key', text: '经度' },
            { key: 'key', text: '纬度' },
            { key: 'key', text: '优惠方' },
            { key: 'key', text: '有效期' },
            { key: 'key', text: '上传时间' },
            { key: 'key', text: '博文规则' },
            { key: 'key', text: '审核状态' },
            { key: 'key', text: '点击量' },
            { key: 'key', text: '点赞数' },
            { key: 'key', text: '评论数' },
            { key: 'key', text: '地区' },
            { key: 'key', text: '编辑人' },
            { key: 'key', text: '编辑时间' }
        ]
    };
    // 设置存储缓存的键
    public formStorageKey: string = 'preferentialUserMessageManageForm';

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

    // 新增博文
    public addBowen() {
        this.router.navigate(['app/preferential/user-message/add-bowen']);
    }

    // 博文详情
    public detailBowen(item) {
        this.router.navigate(['app/preferential/user-message/detail-bowen', item.id]);
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

    // 排序
    @ViewChild('sortModal') public sortModal;
    public sortModalStart(item) {
        this.sortModal.show(item);
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
