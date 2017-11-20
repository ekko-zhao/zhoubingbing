import { Component, OnInit, ViewChild, Optional } from '@angular/core';
import { DatePipe } from '@angular/common';

import { HttpService } from '@service/http-service';
import { regex } from '@service/regex';
import { env } from '@service/environment';

@Component({
    templateUrl: './download.html',
    providers: [
        HttpService,
        DatePipe
    ]
})
export class DownloadComponent {
    // 表单验证
    public form = {};
    public postForm = {};
    public regex = regex;

    // 查询时间
    public timeStart = 'startDate';
    public timeEnd = 'endDate';

    constructor(
        private http: HttpService,
        private datePipe: DatePipe
    ) { }

    ngOnInit() {
        let date = new Date();
        // 初始化表单
        this.form[this.timeStart] = date;
        this.form[this.timeEnd] = date;
    }

    // 填写电子邮件
    @ViewChild('emailModal') public emailModal;
    @ViewChild('appEmailModal') public appEmailModal;
    public emailModalStart(transmit) {
        this.emailModal.modalInit(transmit)
        this.appEmailModal.showModal();
    }
    public formatTime() {
        let date = new Date();
        // 转换字符串
        let year = date.getFullYear() + '';
        let mouth = (date.getMonth() + 1) + '';
        if (mouth.length === 1) {
            mouth = '0' + mouth;
        }
        let day = date.getDate() + '';
        if (day.length === 1) {
            day = '0' + day;
        }
        let newdate = new Date(year + '-' + mouth + '-' + day);

        let startDate = this.form['startDate'];
        let yearStart = startDate.getFullYear() + '';
        let mouthStart = (startDate.getMonth() + 1) + '';
        if (mouthStart.length === 1) {
            mouthStart = '0' + mouthStart;
        }
        let dayStart = startDate.getDate() + '';
        if (dayStart.length === 1) {
            dayStart = '0' + dayStart;
        }
        let newdateStart = new Date(yearStart + '-' + mouthStart + '-' + dayStart);

        let endDate = this.form['endDate'];
        let yearEnd = endDate.getFullYear() + '';
        let mouthEnd = (endDate.getMonth() + 1) + '';
        if (mouthEnd.length === 1) {
            mouthEnd = '0' + mouthEnd;
        }
        let dayEnd = endDate.getDate() + '';
        if (dayEnd.length === 1) {
            dayEnd = '0' + dayEnd;
        }
        let newdateEnd = new Date(yearEnd + '-' + mouthEnd + '-' + dayEnd);

        let between = (newdateEnd.getTime() - newdateStart.getTime()) / (1000 * 60 * 60 * 24);
        if ((between + 1) > 31) {
            alert('每次查询下载的日期跨度不能超过31天');
            return false;
        };

        let d = (newdate.getTime() - newdateStart.getTime()) / (1000 * 60 * 60 * 24);
        if ((d + 1) > 365) {
            alert('只提供最近一年的对账文件下载');
            return false;
        };
        return true;
    }
    // 提交
    public submit() {
        let f = this.formatTime();
        if (!f) return;

        Object.assign(this.postForm, this.form);
        this.postForm['startDate'] = this.datePipe.transform(this.postForm['startDate'], env['format']);
        this.postForm['endDate'] = this.datePipe.transform(this.postForm['endDate'], env['format']);

        window['loading']['open']();
        this.http.post('api/v1/statementTemplate/sendStatementByEmail', this.postForm).subscribe(
            response => {
                window['loading']['close']();
                if (response['retCode'] === '000000') {
                    alert('对账单已经下载到您的邮箱');
                } else {
                    this.emailModalStart(this.postForm);
                    // alert(response['retMsg']);
                }
            },
            error => {
                window['loading']['close']();
                alert("网络错误，请求数据失败");
            }
        )
    }

    // 本地下载
    public download() {
        let f = this.formatTime();
        if (!f) return;

        let url = 'api/v1/statementTemplate/downloadStatement?mercId=' + this.form['mercId'] + '&startDate=' + this.datePipe.transform(this.form['startDate'], 'yMMdd') + '&endDate=' + this.datePipe.transform(this.form['endDate'], 'yMMdd');
        window.open(url, '_target');
    }
}
