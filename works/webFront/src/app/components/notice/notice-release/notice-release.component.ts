
/*
    admin 发布公告
*/
import { Component, ViewChild, Optional, Input, Output, EventEmitter, ElementRef } from '@angular/core';
import { UEditorModule, UEditorComponent } from 'ngx-ueditor';

import { HttpService } from '@service/http-service';

import { FileUploader, FileItem, ParsedResponseHeaders, FileLikeObject } from 'ng2-file-upload';

@Component({
    selector: 'notice-release',
    templateUrl: './notice-release.html',
    providers: [
        HttpService
    ]
})
export class NoticeReleaseComponent {
    @Input() appModal;
    public transmit = {};

    hide() {
        this.appModal.closeModal();
    }

    @Output() onListen = new EventEmitter<any>();
    public listen() {
        this.onListen.emit(true);
    }

    // 是否编辑
    public editFlag = false;

    // 已上传附件列表
    public attachmentEntityList = [];

    // 删除已上传附件列表
    public deleteFile(index) {
        this.attachmentEntityList.splice(index, 1);
    }

    public modalInit(transmit) {
        this.reset();
        this.full.Instance.setContent('');

        // 删除上传文件
        this.uploader.clearQueue();
        this.inputuploader.nativeElement['value'] = '';

        this.uuid = [];
        this.editFlag = false;
        this.transmit = {};
        // 判断是否编辑
        //this.attachmentId = [];
        this.attachmentEntityList = [];
        if (transmit) {
            this.transmit = transmit;
            this.editFlag = true;
            this.form['noticeName'] = transmit['noticeName'];
            this.full.Instance.setContent(transmit['noticeContent']);
            this.attachmentEntityList = transmit['attachmentEntityList'];
        }
    }

    // 表单
    public form = {}

    // 重置表单 -----------------------------------------------------------------------
    @ViewChild('editForm') public editForm;
    public reset() {
        this.editForm.resetForm();
    }

    @ViewChild('full') full: UEditorComponent;

    // 文件上传 ----------------------------------
    @ViewChild('inputuploader') inputuploader: ElementRef;
    public queueLimit = 5;
    public uuid = [];

    public uploader: FileUploader = new FileUploader({
        url: 'api/v1/notice/uploadFile',
        autoUpload: true,
        method: 'POST',
        maxFileSize: 10 * 1024 * 1024,
        //queueLimit: 5,
    });

    public delFile(file: FileItem, index) {
        this.uploader.removeFromQueue(file);
        if (file.progress < 100) {
            this.uploader.cancelItem(file);
        }
        // getIndexOfItem
    }

    constructor(
        private http: HttpService
    ) {

        this.uploader.onAfterAddingAll = (files: any): any => {
            //console.log('onAfterAddingAll')this.attachmentEntityList.length
            let len = this.queueLimit - this.attachmentEntityList.length;
            if (this.uploader.queue.length > len) {
                let pops = this.uploader.queue.slice(len);
                for (let file of pops) {
                    this.uploader.removeFromQueue(file);
                }
                alert('最多上传' + this.queueLimit + '个文件');
            }
        }

        this.uploader.onAfterAddingFile = (file: any): any => {
            /* console.log(file) */
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
            // console.log('onProgressAll')
        }

        this.uploader.onSuccessItem = (file: FileItem, response: string, status: number, headers: ParsedResponseHeaders): any => {
            let resp = JSON.parse(response);
            if (resp['retCode'] === '000000') {
                file['uuid'] = resp['data'];
            } else {
                this.uploader.removeFromQueue(file);
                alert(resp['retMsg'] + ',请重新选择文件');
            }
        }
    }

    // 初始化编辑器
    public fullConfig = {
        toolbars: [[
            /* 'fullscreen', */'source', '|', 'undo', 'redo', '|',
            'bold', 'italic', 'underline', 'fontborder', 'strikethrough', 'superscript', 'subscript', 'removeformat', 'formatmatch', 'autotypeset', 'blockquote', 'pasteplain', '|', 'forecolor', 'backcolor', 'insertorderedlist', 'insertunorderedlist', 'selectall', 'cleardoc', '|',
            'rowspacingtop', 'rowspacingbottom', 'lineheight', '|',
            'customstyle', 'paragraph', 'fontfamily', 'fontsize', '|',
            'directionalityltr', 'directionalityrtl', 'indent', '|',
            'justifyleft', 'justifycenter', 'justifyright', 'justifyjustify', '|', 'touppercase', 'tolowercase', '|',
            'link', 'unlink', 'anchor', '|', 'imagenone', 'imageleft', 'imageright', 'imagecenter', '|',
            'simpleupload', 'insertimage',/*  'emotion', 'scrawl', 'insertvideo', 'music', 'attachment', 'map', 'gmap', 'insertframe', 'insertcode', 'webapp', 'pagebreak', 'template', 'background',  */'|',
            'horizontal', 'date', 'time', 'spechars', 'snapscreen', 'wordimage', '|',
            'inserttable', 'deletetable', 'insertparagraphbeforetable', 'insertrow', 'deleterow', 'insertcol', 'deletecol', 'mergecells', 'mergeright', 'mergedown', 'splittocells', 'splittorows', 'splittocols', 'charts', '|',
            'print', 'preview', 'searchreplace', 'drafts', 'help'
        ]]
        , lang: "zh-cn"
        , zIndex: 1100
        , charset: "utf-8"
        , initialFrameHeight: 320
        , maximumWords: 2000
        , enableAutoSave: false
        , saveInterval: 50000000
    }

    // 发布 ----------------------------------
    public submit() {
        //  验证上传文件
        this.uuid = [];
        for (let file of this.uploader.queue) {
            if (!file['uuid']) {
                alert('文件正在上传中，请耐心等待');
                return;
            } else {
                this.uuid.push(file['uuid']);
            }
        }

        // 已上传文件 uuid
        for (let file of this.attachmentEntityList) {
            this.uuid.push(file['id']);
        }

        //  验证 文本编辑器
        let noticeContent = this.full.Instance.getContent();
        let noticeName = this.form['noticeName'];
        if (!noticeName) {
            alert('请填写公告标题！');
            return;
        }
        if (noticeContent === '') {
            alert('请填写公告内容！');
            return;
        }

        var data = {
            noticeContent: noticeContent,
            noticeName: noticeName,
            noticeAttachmentIds: this.uuid,

        }

        if (!this.editFlag) {
            // 新增
            window['loading']['open'](true);
            this.http.post('api/v1/notice/add', data).subscribe(
                response => {
                    window['loading']['close']();
                    if (response['retCode'] === '000000') {
                        alert('发布成功！');
                        this.hide();
                        this.listen();
                    } else {
                        alert(response['retMsg']);
                    }
                },
                error => {
                    window['loading']['close']();
                    alert("网络错误，请求数据失败");
                }
            )
        } else {
            // 编辑
            data['noticeId'] = this.transmit['noticeId'];
            window['loading']['open'](true);
            this.http.post('api/v1/notice/update', data).subscribe(
                response => {
                    window['loading']['close']();
                    if (response['retCode'] === '000000') {
                        alert('修改成功！');
                        this.hide();
                        this.listen();
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
}

