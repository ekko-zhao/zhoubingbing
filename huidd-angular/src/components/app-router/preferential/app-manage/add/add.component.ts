/* app 用户管理 新增 */
import { Component, Optional, ViewChild } from '@angular/core';
import { HttpService } from 'src/services/http-service';
import { MyService } from 'src/services/my-service';
import { regex } from 'src/services/regex';

@Component({
    templateUrl: './add.html'
})

export class AddComponent {
    @ViewChild('goBack') public goBack;

    constructor(
        @Optional() private http: HttpService,
        @Optional() private myService: MyService,
    ) { }


    // 表单
    public form = <any>{};
    public regex = regex;

    // 提交
    public queryStatus = false;
    public submit() {
        this.queryStatus = true;
        let data = Object.assign({}, this.form);
        data.district = this.form.county.code;
        this.http.post('/api/corporation/v1/create', data).subscribe(
            response => {
                this.queryStatus = false;
                if (response['code'] !== '000000') return;
                this.goBack.back();
                alert('新增用户成功');
            },
            error => { this.queryStatus = false; }
        )
    }


}
