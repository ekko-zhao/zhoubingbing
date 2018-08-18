import { Injectable } from "@angular/core";
import { CookieService } from 'angular2-cookie/services/cookies.service';
import { HttpService } from 'src/services/http-service';
import { env } from 'src/services/environment';

@Injectable()
export class MyService {
    constructor(
        private cookie: CookieService,
        private http: HttpService
    ) {
        let data = cookie.getObject('atlasWebUserData') || {};
        data['info'] = data['info'] || {};
        this.userData = data;
    }

    // 用户信息
    public userData: any;

    // 格式化时间格式-----------------------------------------------------------------
    public formatymd(date, concat?: boolean, split?: string) {
        if (typeof date !== 'object') date = new Date(date);
        // webkit 49 不兼容  this.datePipe.transform
        // 转换字符串 兼容 ie9 '2017-11-07', 不支持 new Date('2017-11-7')
        let year = date.getFullYear() + '';

        let mouth = (date.getMonth() + 1) + '';
        if (mouth.length === 1) {
            mouth = '0' + mouth;
        }

        let day = date.getDate() + '';
        if (day.length === 1) {
            day = '0' + day;
        }
        if (!split) split = '-';
        return concat ? year + mouth + day : year + split + mouth + split + day;
    }

    // 处理图表日期 月份/日期
    public formatmd(date, split: string = '') {
        if (typeof date !== 'object') date = new Date(date);
        // webkit 49 不兼容  this.datePipe.transform
        // 转换字符串 兼容 ie9 '2017-11-07', 不支持 new Date('2017-11-7')
        let year = date.getFullYear() + '';

        let mouth = (date.getMonth() + 1) + '';
        if (mouth.length === 1) {
            mouth = '0' + mouth;
        }

        let day = date.getDate() + '';
        if (day.length === 1) {
            day = '0' + day;
        }

        return mouth + split + day;
    }

    public formatTime(context, before?) {
        // 开始时间
        let start0 = context.postForm[context.timeStart];
        let start = new Date(this.formatymd(start0));

        // 结束时间
        let end0 = context.postForm[context.timeEnd];
        let end = new Date(this.formatymd(end0));

        if (start && end) {
            if (before) {
                // 不能选择当前日期
                let newdate = new Date(this.formatymd(new Date()));
                if (start.getTime() >= newdate.getTime() || end.getTime() >= newdate.getTime()) {
                    alert('查询日期为当天之前的时间');
                    return false;
                }
            }
            if (end.getTime() - start.getTime() < 0) {
                alert('查询终止日期必须大于起始日期');
                return false;
            }
            let d = (end.getTime() - start.getTime()) / (1000 * 60 * 60 * 24);
            if ((d + 1) > 31) {
                alert('查询日期，最多为31天');
                return false;
            }
            context.postForm[context.timeStart] = this.formatymd(start, true);
            context.postForm[context.timeEnd] = this.formatymd(end, true);
        }

        return true;
    }

    // 获取下拉列表-----------------------------------------------------------------
    private selectList = {};
    public getSelectList(context, property, type, url) {
        /* let selectList = sessionStorage.getItem('selectList');
        if (selectList) {
            this.selectList = JSON.parse(selectList);
            Object.assign(context[property], this.selectList);
        }
        if (!this.selectList[type]) { */
            this.http.get(url).subscribe(
                response => {
                    if (response['code'] !== '000000') return;
                    this.selectList[type] = response['data'];
                    Object.assign(context[property], this.selectList);
                    // sessionStorage.setItem('selectList', JSON.stringify(this.selectList));
                },
                error => { }
            )
        // }
    }

    // 分页数据查询 ---------------------------------------------------------------------
    // 默认查询 search(true),  保留当前查询条件 分页 search()
    public search(e?, page: number = 1, size: number = env['itemsPerPage']) {
        //  保留当前页（删除数据、新增、编辑
        if (e === undefined) page = this['payload']['page'] || page;

        // 阻止查询两次
        if ((e && this['appPagination']['data']['currentPage'] > 1) || (e === undefined && page > 1)) this['appPagination']['data']['stopSearch'] = true;

        // 设置分页
        this['payload']['page'] = page;
        this['payload']['size'] = size;

        // 如果是由查询按钮触发的更新提交对象 || 点击分页时保存分页
        if (e || e === null) {
            if (e) this['payload']['example'] = Object.assign({}, this['form']);
            if (this['formStorageKey']) sessionStorage.setItem(this['formStorageKey'], JSON.stringify(this['payload']));
        }
        this['searchCallback']();
    }


    // 页面返回状态
    public back: boolean = false;

    // 返回时回填数据
    public setPayload(context) {
        if (this.back) {
            this.back = false;
            let payload = sessionStorage.getItem(context.formStorageKey);
            if (payload) {
                context.payload = JSON.parse(payload);
                context.form = Object.assign({}, context.payload['example']);
            }
        } else {
            sessionStorage.removeItem(context.formStorageKey);
        }
    }

    // 退出系统 -----------------------------------------------------------------
    public quit() {
        this.http.get('/local/logout').subscribe(
            response => { },
            error => { }
        )
        this.http.post('/api/user/v1/logout', null).subscribe(
            response => { },
            error => { }
        )
    }

}
