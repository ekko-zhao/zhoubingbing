/* 用户管理 新增用户 */
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
        @Optional() private myService: MyService
    ) {
        this.form.role = "";
        myService.getSelectList(this, 'selectList', 'role', '/api/url');
    }

    public selectList = {};

    // 表单
    public form = <any>{};
    public regex = regex;

    // 提交
    public queryStatus = false;
    public submit() {
        this.queryStatus = true;
        this.http.post('/api/user/v1/create', this.form).subscribe(
            response => {
                this.queryStatus = false;
                if (response['code'] !== '000000') return;
                this.goBack.back();
                alert('新增用户成功');
            },
            error => { this.queryStatus = false; }
        )
    }

    ngOnInit() { }
}
