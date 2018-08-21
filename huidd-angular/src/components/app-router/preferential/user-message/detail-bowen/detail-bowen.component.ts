/* 博文 详情 编辑 */
import { Component, Optional, ViewChild } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { HttpService } from 'src/services/http-service';
import { MyService } from 'src/services/my-service';
import { regex } from 'src/services/regex';

@Component({
    templateUrl: './detail-bowen.html'
})

export class DetailBowenComponent {
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
    public form = <any>{
        province: {},
        city: {},
        county: {}
    };
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
        let fid = [];
        if (this.uploadImg['uploader']['files'].length === 0) {
            alert('请添加APP logo');
            return;
        }
        for (let file of this.uploadImg['uploader']['files']) {
            if (!file.fid) {
                alert('正在上传文件，请耐心等待');
                return;
            } else {
                fid.push(file.fid);
            }
        }
        let data = Object.assign({}, this.form);
        data.fid = fid;
        this.queryStatus = true;
        this.http.post('/api/corporation/v1/create', data).subscribe(
            response => {
                this.queryStatus = false;
                if (response['code'] !== '000000') return;
                this.goBack.back();
                alert('保存博文成功');
            },
            error => { this.queryStatus = false; }
        )
    }

    ngOnInit() {
        this.getInfo();
    }
}
