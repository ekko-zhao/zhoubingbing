/* app 用户管理 新增 */
import { Component, Optional, ViewChild } from '@angular/core';
import { HttpService } from 'src/services/http-service';
import { MyService } from 'src/services/my-service';
import { regex } from 'src/services/regex';

@Component({
    templateUrl: './add-bowen.html'
})

export class AddBowenComponent {
    @ViewChild('goBack') public goBack;
    @ViewChild('uploadImg') public uploadImg;

    constructor(
        @Optional() private http: HttpService,
        @Optional() private myService: MyService,
    ) { }

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


}
