/* 文档上传 */
import { Component, OnInit, ChangeDetectorRef, Input } from '@angular/core';

@Component({
    selector: 'upload-file',
    templateUrl: './upload-file.html'
})
export class UploadFileComponent implements OnInit {
    // 需要在父组件中配置
    @Input('config') config = {
        container: '',
        browse_button: '',
        queueLimit: 1,
        url: '',
        multi_selection: false,
        size: '',
        title: 'file',
        extensions: '',
    };

    constructor(
        public changeDetectorRef: ChangeDetectorRef
    ) { }

    public uploader = <any>{};
    public uploaderConfig() {
        let config = {
            runtimes: 'html5,flash,silverlight,html4',
            browse_button: this.config.browse_button, // you can pass an id...
            container: document.getElementById(this.config.container), // ... or DOM Element itself
            url: (process.env.origin ? process.env.origin : '') + this.config.url,
            flash_swf_url: '/static/vendor/plupload/Moxie.swf',
            silverlight_xap_url: '/static/vendor/plupload/Moxie.xap',
            multi_selection: this.config.multi_selection,
            filters: {
                max_file_size: this.config.size,
                mime_types: [
                    { title: this.config.title, extensions: this.config.extensions }
                ],
                prevent_duplicates: true
            },
            init: {
                FilesAdded: (uploader, files) => {
                    let length = uploader.files.length;
                    if (length > this.config.queueLimit) {
                        let pops = uploader.files.slice(0, length - this.config.queueLimit);
                        for (let file of pops) {
                            uploader.removeFile(file);
                        }
                    }
                    uploader.start();
                    this.changeDetectorRef.markForCheck();
                    this.changeDetectorRef.detectChanges();
                },
                UploadProgress: (uploader, file) => { },
                FileUploaded: (uploader, file, responseObject) => {
                    var response = JSON.parse(responseObject.response);
                    if (response.code = '000000') {
                        file.fid = response.data;
                        alert('上传成功');
                    } else {
                        uploader.removeFile(file);
                        alert('上传文件失败，请重新上传');
                    }
                },
                UploadComplete: (uploader, files) => { },
                Error: (up, err) => {
                    switch (err.code) {
                        case -602:
                            alert('不能重复添加相同附件！')
                            break;
                        case -600:
                            alert('单个附件大小不能大于500KB！')
                            break;
                    }
                }
            }
        }
        this.uploader = new window['plupload']['Uploader'](config);
        this.uploader.init();
    }
    ngOnInit() {
        this.uploaderConfig();
    }
}


// url: 'http://10.7.34.122:8087/file/v1/uploadFiles',
