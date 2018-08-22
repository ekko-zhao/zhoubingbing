/* 新增博文 */
import { Component, Optional, ViewChild, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpService } from 'src/services/http-service';
import { MyService } from 'src/services/my-service';
import { regex } from 'src/services/regex';

@Component({
    templateUrl: './add-bowen.html'
})

export class AddBowenComponent implements OnInit {
    @ViewChild('goBack') public goBack;
    @ViewChild('uploadImg') public uploadImg;

    constructor(
        private activatedRoute: ActivatedRoute,
        @Optional() private http: HttpService,
        @Optional() private myService: MyService,
    ) { }
    public url = 'app/preferential/user-message';

    // 爬虫填充
    public reptile = this.activatedRoute.snapshot.queryParams['reptile'];

    // 表单
    public form = <any>{
        province: {},
        city: {},
        county: {}
    };
    public regex = regex;

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
                alert('新增APP用户成功');
            },
            error => { this.queryStatus = false; }
        )
    }

    // 爬虫填充
    public fill() {
        this.queryStatus = true;
        this.http.post('/api/url', this.reptile).subscribe(
            response => {
                this.queryStatus = false;
                if (response['code'] !== '000000') return;
                Object.assign(this.form, response.data);
            },
            error => { this.queryStatus = false; }
        )
    }

    ngOnInit() {
        if (this.reptile) {
            this.fill();
            this.url = 'app/reptile/reptile-manage'
        }
    }
}
