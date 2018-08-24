/* 分类 编辑 */
import { Component, Optional, ViewChild } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { HttpService } from 'src/services/http-service';
import { MyService } from 'src/services/my-service';
import { regex } from 'src/services/regex';

@Component({
    templateUrl: './edit.html'
})

export class EditComponent {
    @ViewChild('goBack') public goBack;
    @ViewChild('uploadImg') public uploadImg;

    constructor(
        private activatedRoute: ActivatedRoute,
        @Optional() private http: HttpService,
        @Optional() private myService: MyService,
    ) { }

    public id = this.activatedRoute.snapshot.params['id'];

    // 表单
    public formInfo = <any>{};
    public form = <any>{};
    public regex = regex;

    // 获取信息
    public getInfoFlag = false;
    public getInfo() {
        this.getInfoFlag = true;
        this.http.post('/api/url', {}).subscribe(
            response => {
                if (response['code'] !== '000000') return;
                this.getInfoFlag = false;
                this.formInfo = Object.assign({}, response.data[0]);
            },
            error => { }
        )
    }

    // 编辑
    public saveFlag: boolean = false;
    public edit() {
        this.form = Object.assign({}, this.formInfo);
        this.saveFlag = !this.saveFlag;
    }

    // 提交
    public queryStatus = false;
    public submit() {
        this.queryStatus = true;
        this.http.post('/api/corporation/v1/create', this.form).subscribe(
            response => {
                this.queryStatus = false;
                if (response['code'] !== '000000') return;
                this.goBack.back();
                alert('保存分类成功');
            },
            error => { this.queryStatus = false; }
        )
    }

    ngOnInit() {
        this.getInfo();
    }
}
