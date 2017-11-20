/*
    admin 批量添加 商户
*/

import { Component, ViewChild, ElementRef, Optional, Input, Output, EventEmitter } from '@angular/core';
import { CookieService } from 'angular2-cookie/services/cookies.service';
import { FileUploader, FileItem, ParsedResponseHeaders, FileLikeObject } from 'ng2-file-upload';

import { HttpService } from '@service/http-service';
import { regex } from '@service/regex';

@Component({
    selector: 'batch-add',
    templateUrl: 'batch-add.html',
    providers: [
        HttpService
    ]
})
export class BatchAddComponent {
    @Input() appModal;
    public transmit = {};

    hide() {
        this.appModal.closeModal();
    }

    /* @Output() onListen = new EventEmitter<any>();
    public listen() {
        this.appModal.closeModal();
        this.onListen.emit(true);
    } */

    // 表单验证
    public regex = regex;

    // 文件上传 ----------------------------------
    @ViewChild('inputuploader') inputuploader: ElementRef;
    public queueLimit = 1;
    public uuid = [];

    public uploader: FileUploader = new FileUploader({
        url: 'api/v1/merchantUser/admin/uploadBatchMerchantFile',
        autoUpload: true,
        method: 'POST',
        maxFileSize: 10 * 1024 * 1024,
        //queueLimit: 5,
    });

    /* public uploader: Transfer;
    public hasFiles: boolean; */

    constructor(
        private http: HttpService,
        private cookie: CookieService
    ) {
        this.uploader.onAfterAddingAll = (files: any): any => {
            if (this.uploader.queue.length > this.queueLimit) {
                let pops = this.uploader.queue.slice(this.queueLimit);
                for (let file of pops) {
                    this.uploader.removeFromQueue(file);
                }
                alert('最多上传' + this.queueLimit + '个文件');
            }
        }

        this.uploader.onAfterAddingFile = (file: any): any => {
            /* console.log(this.uploader) */
        }

        this.uploader.onWhenAddingFileFailed = (item: FileLikeObject, filter: any, options: any): any => {
            if (filter.name === 'fileSize') {
                alert('附件大小不能大于10mb');
            }
        };

        this.uploader.onProgressItem = (file: any, progress: any): any => {
            // console.log('progress')
        }
        this.uploader.onProgressAll = (progress: any): any => {
            //console.log('onProgressAll')
        }

        this.uploader.onSuccessItem = (file: FileItem, response: string, status: number, headers: ParsedResponseHeaders): any => {
            let resp = JSON.parse(response);
            if (resp['retCode'] === '000000') {
                file['uuid'] = resp['data'];
                alert('上传成功');
            } else {
                this.uploader.removeFromQueue(file);
                alert(resp['retMsg'] + ',请重新选择文件');
            }
        }
    }

    public modalInit(transmit) {
        this.transmit = transmit;
        // 删除上传文件
        this.uploader.clearQueue();
        this.inputuploader.nativeElement['value'] = '';
    }

    // 批量添加 - 提交 - 主账号
    public submitAuto() {
        //  验证上传文件
        if (this.uploader.queue.length <= 0) {
            alert('请上传您要添加的模板');
            return;
        }

        for (let file of this.uploader.queue) {
            if (!file['uuid']) {
                alert('文件正在上传中，请耐心等待');
                this.uuid = [];
                return;
            } else {
                this.uuid.push(file['uuid']);
            }
        }

        // 发送请求
        let uuid = this.uploader.queue[0]['uuid'];
        window['loading']['open'](true);
        this.http.post('api/v1/merchantUser/admin/batchMerchantByPrimUser', { 'tempFileId': uuid, userId: this.transmit['userId'] }).subscribe(
            response => {
                window['loading']['close']();
                if (response['retCode'] === '000000') {
                    this.hide();
                    alert("批量添加成功");
                } else {
                    alert(response['retMsg']);
                }
            },
            error => {
                window['loading']['close']();
                alert("网络错误，请求数据失败");
            }
        )

    }

}
