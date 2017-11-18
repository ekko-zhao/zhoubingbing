import { Injectable } from "@angular/core";
import { CookieService } from 'angular2-cookie/services/cookies.service';
import { DatePipe } from '@angular/common';
import { HttpService } from '@service/http-service';

@Injectable()
export class MyService {
    public userData: any;

    // 设置用户名 key:username  用于依据不同的用户记录cookie， 操作可删除的对象 和 需要保留的对象
    private username: string;
    public getUsername() {
        return this.username;
    };

    constructor(
        private cookie: CookieService,
        private datePipe: DatePipe,
        private http: HttpService
    ) {
        this.userData = cookie.getObject('userData');
        if (!this.userData) return;

        this.username = cookie.getObject('userData')['name'];
        this.storageInit();
    }

    // 初始化用户缓存
    /*
        local 用于 储存用户个性化配置
        session 用于 储存用户临时信息
    */
    public storageInit() {
        if (!this.cookie.getObject(this.username)) {
            let data = {
                local: {},
                session: {}
            }
            this.cookie.putObject(this.username, data);
        }
    }

    // 用于设置用户表单缓存 重新登陆时需要清空 username{ session }
    public setStorage(type: string, key: string, obj: Object) {
        let data = this.cookie.getObject(this.username);
        data[type][key] = obj;
        let date = new Date();
        this.cookie.putObject(this.username, data, {
            expires: new Date(date.getTime() + 7 * 24 * 60 * 60 * 1000)
        });
    }

    public getStorage(type: string, key?: string) {
        return key ? this.cookie.getObject(this.username)[type][key]
            : this.cookie.getObject(this.username)[type];
    }

    public removeStorage(type: string, key?: string) {
        let data = this.cookie.getObject(this.username);
        if (key) {
            delete data[type][key];
        } else {
            data[type] = {};
        }
        this.cookie.putObject(this.username, data);
    }

    // 导航标题
    public title: string;

    // 当前路由
    public path: string;

    //菜单折叠
    public folded: boolean = false;
    public setFolded() {
        this.folded = !this.folded;
    }

    // 快捷功能显示
    public menuCustomVisible: boolean = false;

    // 格式化时间格式-----------------------------------------------------------------
    public formatTime(context, before?) {
        let start0 = context.postForm[context.timeStart];
        // 转换字符串 兼容ie9 '2017-11-07' 不支持 new Date('2017-11-7')
        let year = start0.getFullYear() + '';
        let mouth = (start0.getMonth() + 1) + '';
        if (mouth.length === 1) {
            mouth = '0' + mouth;
        }
        let day = start0.getDate() + '';
        if (day.length === 1) {
            day = '0' + day;
        }
        let start = new Date(year + '-' + mouth + '-' + day);


        let end0 = context.postForm[context.timeEnd];
        // 转换字符串
        let yearend = end0.getFullYear() + '';
        let mouthend = (end0.getMonth() + 1) + '';
        if (mouthend.length === 1) {
            mouthend = '0' + mouthend;
        }
        let dayend = end0.getDate() + '';
        if (dayend.length === 1) {
            dayend = '0' + dayend;
        }
        let end = new Date(yearend + '-' + mouthend + '-' + dayend);

        if (start && end) {
            if (before) {
                // 不能选择当前日期
                let date = new Date();
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
                if (start.getTime() >= newdate.getTime() || end.getTime() >= newdate.getTime()) {
                    alert('查询日期为当天之前的时间');
                    return false;
                }
            }

            if (end.getTime() - start.getTime() < 0) {
                alert('查询终止日期必须大于起始日期');
                return false;
            }
            // let d = Math.floor((end.getTime() - start.getTime()) / (1000 * 60 * 60 * 24));
            let d = (end.getTime() - start.getTime()) / (1000 * 60 * 60 * 24);
            if ((d + 1) > 31) {
                alert('查询日期，最多为31天');
                return false;
            }

            context.postForm[context.timeStart] = this.datePipe.transform(start, 'yMMdd');
            context.postForm[context.timeEnd] = this.datePipe.transform(end, 'yMMdd');
        }
        return true;
    }

    // 下载表格-----------------------------------------------------------------------
    public tableSearch(context, data) {
        let head = [];
        for (let item of data) {
            head.push(item['key'])
        }

        let search = ''
        if (context.postForm) {
            let keys = Object.keys(context.postForm);
            for (let key of keys) {
                if (context.postForm[key] && key !== 'page' && key !== 'size') {
                    search += (key + '=' + context.postForm[key] + '&');
                }
            }
        }
        search += 'head=' + head.join(',');
        context.tableSearch = search;
    }

    // 获取下拉列表-----------------------------------------------------------------
    private selectList = {};
    public getSelectList(context, property, type) {
        let selectList = sessionStorage.getItem('selectList');
        if (selectList) {
            this.selectList = JSON.parse(selectList);
            Object.assign(context[property], this.selectList);
        }
        if (!this.selectList[type]) {
            // 异步请求
            this.http.post('api/v1/parameter/queryParam', { "paramKind": type }).subscribe(
                response => {
                    this.selectList[type] = response['data'];
                    Object.assign(context[property], this.selectList);
                    sessionStorage.setItem('selectList', JSON.stringify(this.selectList));
                },
                error => {
                    alert("网络错误，请求下拉列表数据失败");
                }
            )
        }
    }

    // 退出系统
    public quit(error?) {
        if (!error) return;
        this.http.get('api/v1/user/userStatus').subscribe(
            response => {
                if (response['retCode'] === '000000' && response['data'] === 1) {

                    // 请求退出

                    this.http.get('api/v1/logout').subscribe(
                        response => {
                            sessionStorage.clear();
                            this.cookie.remove('userData');
                            window.location.href = this.userData['type'] !== '100' ? './index.html' : './adminLogin.html';
                        },
                        error => {
                            alert("网络错误，请求数据失败");
                        }
                    )

                } else if (response['retCode'] === '000000' && response['data'] === 0) {
                    window.location.href = this.userData['type'] !== '100' ? './index.html' : './adminLogin.html';
                } else {
                    alert(response['retMsg']);
                }
            },
            error => {
                alert("网络错误，请求数据失败");
            }
        )
    }

}
