/* 用户管理 权限配置 */
import { Component, Optional, ViewChild } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { HttpService } from 'src/services/http-service';
import { MyService } from 'src/services/my-service';
import { regex } from 'src/services/regex';

@Component({
    templateUrl: './detail.html'
})
export class DetailComponent {
    @ViewChild('goBack') public goBack;

    constructor(
        private router: Router,
        private activatedRoute: ActivatedRoute,
        @Optional() private http: HttpService,
        @Optional() private myService: MyService
    ) {
        this.form.role = "";
        myService.getSelectList(this, 'selectList', 'role_loadAll', '/api/role/v1/loadAll');
    }

    // 下拉列表
    public selectList = {};
    public id = this.activatedRoute.snapshot.params['id'];

    // 表单
    public form = <any>{};
    public regex = regex;

    public item = <any>{};
    public table = {
        tr: [
            { key: 'key', name: '账号' },
            { key: 'key', name: '姓名' },
            { key: 'key', name: '状态' },
            { key: 'key', name: '角色权限' },
            { key: 'key', name: '注册时间' }
        ]
    }

    // 配置信息
    public info = [
        { name: '系统管理', manager: true, operator: false, developer: true },
        { name: '数据埋点管理', manager: true, operator: true, developer: false },
        { name: '用户管理', manager: true, operator: false, developer: true },
        { name: '优惠信息管理', manager: true, operator: true, developer: false },
        { name: '爬虫管理', manager: true, operator: true, developer: true },
        { name: '敏感词汇管理', manager: true, operator: true, developer: false },
        { name: '广告管理', manager: true, operator: true, developer: false },
        { name: '推送消息管理', manager: true, operator: true, developer: false }
    ];
    // 编辑
    public width = null;
    public saveFlag: boolean = false;
    public edit() {
        this.saveFlag = !this.saveFlag;
        this.width = 400;
        Object.assign(this.form, this.item);
    }

    // 取消编辑
    public cancel() {
        this.saveFlag = !this.saveFlag;
        this.width = 240;
        this.form.role = this.item['role'];
    }

    // 请求用户信息
    public queryUserStatus = false;
    public getUserinfo(id: string) {
        this.queryUserStatus = true;
        this.http.post('/api/user/v1/load', { id: id })
            .subscribe(
                response => {
                    if (response.code !== '000000') return;
                    this.queryUserStatus = false;
                    this.item = response['data'];
                    this.form.role = response['data']['role'];
                },
                error => { }
            )
    }

    // 提交
    public queryStatus = false;
    public submit() {
        this.queryStatus = true;
        this.http.post('/api/user/v1/modify', this.form).subscribe(
            response => {
                this.queryStatus = false;
                if (response['code'] !== '000000') return;
                this.goBack.back();
                alert('权限修改成功');
            },
            error => { this.queryStatus = false; }
        )
    }

    // 重置编辑
    public reset() {
        Object.assign(this.form, this.item);
    }

    ngOnInit() {
        this.getUserinfo(this.id);
    }
}
