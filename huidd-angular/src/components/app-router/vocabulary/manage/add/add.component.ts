import { Component, Optional, ElementRef, ViewChild, Input, Output, EventEmitter } from '@angular/core';
import { ModalDirective } from 'ngx-bootstrap/modal';
import { HttpService } from 'src/services/http-service';
import { MyService } from 'src/services/my-service';
import { regex } from 'src/services/regex';

@Component({
    selector: "add-modal",
    templateUrl: "./add.html"
})
export class AddComponent {
    @Output() onListen = new EventEmitter<any>();

    constructor(
        @Optional() private http: HttpService,
        @Optional() private myService: MyService
    ) { }

    // modal
    @ViewChild(ModalDirective) modal: ModalDirective;

    public config = {
        backdrop: 'static',
        keyboard: true
    };

    public show() {
        // 删除上传文件
        for (let file of this.fileUploader.uploader.files) {
            this.fileUploader.uploader.removeFile(file);
        };
        this.modal.show();
    }

    public shown() { }

    public hide() {
        this.modal.hide();
    }

    public formUpload = <any>{};

    public downloadTemplata() {
        window.open('/static/template/batch.template.xlsx', '_blank');
    }

    /* 文件上传 */
    public fid = [];
    @ViewChild('fileUploader') fileUploader;
    public fileConfig = {
        container: 'warp-uploader',
        browse_button: 'uploader',
        queueLimit: 1,
        url: '/api/terminal/v1/upload',
        multi_selection: false,
        size: '500kb',
        title: 'xlsx,xls files',
        extensions: 'xlsx,xls',
    };

    // 确定
    public uploadStatus: boolean = false;
    public submit() {
        //  验证上传文件
        if (this.fileUploader.uploader.files.length <= 0) {
            alert('请上传您要添加的模板');
            return;
        }
        for (let file of this.fileUploader.uploader.files) {
            if (!file['fid']) {
                alert('文件正在上传中，请耐心等待');
                this.fid = [];
                return;
            } else {
                this.fid.push(file['fid']);
            }
        }

        // 发送请求
        let payload = {
            fid: this.fid
        }
        this.uploadStatus = true;
        this.http.post('/api/url', payload).subscribe(
            response => {
                this.uploadStatus = false;
                if (response['code'] !== '000000') return;
                this.hide();
                this.onListen.emit();
                alert('批量操作成功！')
            },
            error => { this.uploadStatus = false; }
        )
    }

}
