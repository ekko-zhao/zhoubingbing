import { Component, ViewChild, Optional, Input, Output, EventEmitter } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { HttpService } from '@service/http-service';

@Component({
    selector: 'notice-content',
    templateUrl: 'notice-content.html',
    styleUrls: ['notice-content.css.less'],
    providers: [
        HttpService
    ]
})
export class NoticeContentComponent {
    @Input() appModal;
    public transmit: any;
    hide() {
        this.appModal.closeModal();
    }
    public modalInit(transmit) {
        this.item = {};
        this.content = '';
        this.transmit = transmit;
        this.search();
    }

    // 数据 list
    public item = {};
    public content: any;

    constructor(
        private http: HttpService,
        private sanitizer: DomSanitizer
    ) { }

    // 查询
    public search() {
        window['loading']['open'](true);
        this.http.get('api/v1/notice/detail/' + this.transmit).subscribe(
            response => {
                console.log(response);
                window['loading']['close']();
                if (response['retCode'] === '000000') {
                    this.item = response['data'];
                    this.content = this.sanitizer.bypassSecurityTrustHtml(response['data']['noticeContent']);
                    //this.sanitizer.bypassSecurityTrustUrl()
                    /* for (let path of this.item['attachmentEntityList']){

                    } */
                    for (let i = 0; i < this.item['attachmentEntityList']['length']; i++) {
                        // console.log(this.sanitizer.bypassSecurityTrustUrl(this.item['attachmentEntityList'][i]['filePath']));
                        // this.item['attachmentEntityList'][i]['filePath'] = this.sanitizer.bypassSecurityTrustUrl(this.item['attachmentEntityList'][i]['filePath']);
                    }

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
