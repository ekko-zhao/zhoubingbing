import { Component, OnInit, OnDestroy, Input, ViewChild, ElementRef } from '@angular/core';
import { HttpService } from '@service/http-service';
import { regex } from '@service/regex';

@Component({
    selector: 'list-merchant',
    templateUrl: './list-merchant.html',
    styleUrls: ['./list-merchant.css.less'],
    providers: [
        HttpService
    ]
})
export class ListMerchantComponent implements OnInit, OnDestroy {
    // 表单
    @Input('transmitinput') transmitinput: ViewChild;
    // form 对象
    @Input('transmitform') transmitform: any;

    // 字段名
    @Input('transmitName') transmitName: any;
    @Input('transmitTerm') transmitTerm: any;

    // 终端实例
    @Input('transmitlistterminal') transmitlistterminal: any;


    constructor(
        private http: HttpService,
        private elementRef: ElementRef
    ) {
    }

    // 表单验证
    public regex = regex;

    // 终端号
    public termList = []

    public listMerchant = [];
    public listMerchantCopy = [];
    public listMerchantValue: any;
    public visible: boolean = false;

    public inputChange($event) {
        this.transmitform[this.transmitName] = this.listMerchantValue;
        // 清空终端号
        this.queryTermList();
        if (this.transmitTerm)
            this.transmitform[this.transmitTerm] = null;
    }

    // 获取商户号-----------------------------------------------------------------
    public getListMerchantForInput(refresh?) {
        let list = sessionStorage.getItem('listMerchantForInput');
        if (list && !refresh) {
            this.listMerchant = JSON.parse(list);
            this.listMerchantCopy = JSON.parse(list);
        } else {
            if (refresh) {
                this.listMerchant = this.listMerchantCopy = [];
                sessionStorage.removeItem('listMerchantForInput');
            }
            this.http.post('api/v1/merchantUser/listMerchantForInput', {}).subscribe(
                response => {
                    let data = response['data'];
                    if (!data) {
                        data = [];
                    }
                    this.listMerchant = data;
                    this.listMerchantCopy = data;
                    sessionStorage.setItem('listMerchantForInput', JSON.stringify(data));
                },
                error => {
                    console.log('listMerchantForInput 请求失败');
                    alert("网络错误，请求下拉列表数据失败");
                }
            )
        }
    }

    public keyup(event) {
        let value = event.target.value.trim();
        if (value !== '') {
            this.listMerchantCopy = this.listMerchant.filter((v, i, items) => {
                if (v['merchantNo'].indexOf(value) > -1) {
                    if (this.regex['merchantNo'].test(value)) {
                        // 赋值
                        this.listMerchantValue = v['merchantNo'];
                        this.queryTermList();
                        // 清空终端号
                        if (this.transmitTerm)
                            this.transmitform[this.transmitTerm] = null;
                    } else {
                        this.listMerchantValue = '';
                    }
                    return v;
                }
            })
        } else {
            this.listMerchantCopy = this.listMerchant;
            this.listMerchantValue = '';
            this.termList = [];
            if (this.transmitTerm)
                this.transmitform[this.transmitTerm] = null;
        }
    }

    public inputfocus($event) {
        this.visible = !this.visible;
        this.listMerchantCopy = this.listMerchant;
        document.querySelector('body')['addEventListener']('click', this.onBodyDown, false);
    }

    public onBodyDown(event) {
        // 当元素显示或点击表单时 return
        if (!this.visible || event.target === this.transmitinput) return;
        this.visible = !this.visible;
        document.querySelector('body')['removeEventListener']('click', this.onBodyDown);

        /* let el = event.target.parentNode;
        let flag = false;
        while (el) {
            if (el.parentNode === this.elementRef.nativeElement) {
                el = null;
                flag = true;
            } else {
                el = el.parentNode;
            }
        }

        if (!flag) {
            this.visible = !this.visible;
            document.querySelector('body')['removeEventListener']('click', this.onBodyDown);
        } */
    }

    public inputInit() {
        // 赋值
        if (this.transmitform[this.transmitName]) {
            this.listMerchantValue = this.transmitform[this.transmitName];
            this.queryTermList();
        }
        this.transmitinput['addEventListener']('keyup', this.keyup, false);
    }

    // 重置
    public rest() {
        this.listMerchantValue = '';
        this.termList = [];
    }


    // 查询终端号 termList
    public queryTermList() {
        if (!this.transmitlistterminal) return;
        this.termList = [];
        this.http.post('api/v1/terminalMerchant/listTerminalForInput', { 'merchantNo': this.listMerchantValue }).subscribe(
            response => {
                this.termList = response['data'];
                this.transmitlistterminal['setCheckbox'](response['data']['length'], this.termList);
            },
            error => {
                console.log('listTerminalForInput 请求失败');
                alert("网络错误，请求下拉列表数据失败");
            }
        )
    }


    ngOnInit() {
        this.keyup = this.keyup.bind(this);
        this.getListMerchantForInput();
        this.inputInit();

        this.onBodyDown = this.onBodyDown.bind(this);
    }

    ngOnDestroy() {
        this.transmitinput['removeEventListener']('keyup', this.keyup);
        document.querySelector('body')['removeEventListener']('click', this.onBodyDown);
    }
}
