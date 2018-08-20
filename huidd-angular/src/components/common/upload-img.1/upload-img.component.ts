/* 上传图片 */
import { Component, Input, ViewChild, OnInit, ElementRef, ChangeDetectorRef } from '@angular/core';

@Component({
    selector: 'upload-img',
    templateUrl: './upload-img.html',
    styleUrls: ['./upload-img.css.less']
})
export class UploadImgComponent implements OnInit {
    // 是否可编辑
    @Input('edit') edit: boolean = true;

    // 回填的图片
    /* {
        fid:''
        src:''
    } */
    @Input('src') src = [];

    constructor(
        public changeDetectorRef: ChangeDetectorRef
    ) {
        this.onWindowSize = this.onWindowSize.bind(this);
    }

    public srcCopy = [];
    public reset() {
        this.srcCopy = this.src.slice(0);
    }

    public delSrc(index) {
        this.srcCopy.splice(index, 1);
    }

    public delSelect(file) {
        this.uploader.removeFile(file);
    }

    public queueLimit = 5;
    public uploader = <any>{
        files: []
    };
    public uploaderConfig(el) {
        let config = {
            runtimes: 'html5,flash,silverlight,html4',
            browse_button: 'uploader', // you can pass an id...
            container: document.getElementById(el), // ... or DOM Element itself
            url: (process.env.origin ? process.env.origin : '') + '/api/terminal/v1/upload',
            flash_swf_url: '/static/vendor/plupload/Moxie.swf',
            silverlight_xap_url: '/static/vendor/plupload/Moxie.xap',
            multi_selection: true,
            filters: {
                max_file_size: '300kb',
                mime_types: [
                    { title: "Image files", extensions: "jpeg,jpg,png" }
                ],
                prevent_duplicates: true
            },
            init: {
                FilesAdded: (uploader, files) => {
                    // 图片预览
                    let mydata = {};
                    let $this = this;
                    for (let i = 0; i < files.length; i++) {
                        mydata['data' + i] = {};
                        mydata['data' + i].file = files[i];
                        mydata['data' + i].reads = new window['mOxie'].FileReader();
                        mydata['data' + i].start = function () {
                            this.reads.onload = () => {
                                this.file.src = this.reads.result;
                                this.reads.destroy();

                                $this.changeDetectorRef.markForCheck();
                                $this.changeDetectorRef.detectChanges();
                            }
                            this.reads.readAsDataURL(this.file.getSource());
                        }
                        mydata['data' + i].start();
                    }

                    // 删除超出图片
                    let length = uploader.files.length
                    let srcCopyLength = this.srcCopy.length;
                    if ((length + srcCopyLength) > this.queueLimit) {
                        let minus = length + srcCopyLength - this.queueLimit;
                        if (minus > srcCopyLength) {
                            this.srcCopy.length = 0;
                            let pops = uploader.files.slice(0, minus - srcCopyLength);
                            for (let file of pops) {
                                uploader.removeFile(file);
                            }
                        } else {
                            this.srcCopy = this.srcCopy.slice(minus);
                        }
                    }
                    uploader.start();
                },
                UploadProgress: (uploader, file) => { },
                FileUploaded: (uploader, file, responseObject) => {
                    var response = JSON.parse(responseObject.response);
                    if (response.code = '000000') {
                        response.fid = response.data;
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
                            alert('单个附件大小不能大于300KB！')
                            break;
                    }
                }
            }
        }
        this.uploader = new window['plupload']['Uploader'](config);
        this.uploader.init();
    }

    // 大图预览
    public viewFlag = false;
    @ViewChild('imgView') imgView: ElementRef;
    public imgview(index) {
        this.viewFlag = true;
        this.onWindowSize();
        window.addEventListener('resize', this.onWindowSize, false);
    }

    public onWindowSize(event?) {
        let el = this.imgView.nativeElement;
        let h = document.documentElement.clientHeight;
        el.style.height = h + 'px';

        let body = document.getElementsByTagName('body')[0];
        body.classList.add('overflow-hidden');
    }

    public closeView() {
        this.viewFlag = false;
        let body = document.getElementsByTagName('body')[0];
        body.classList.remove('overflow-hidden');
        window.removeEventListener('resize', this.onWindowSize);
    }

    ngOnDestroy() {
        this.closeView();
    }

    ngOnInit() {
        // this.reset();
        if (this.edit) this.uploaderConfig('wrap-uploader');

        // this.imgview(1)
    }
}
