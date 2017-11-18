import { Component, OnInit, OnDestroy, Input, ViewChild, ElementRef } from '@angular/core';
import { HttpService } from '@service/http-service';
import { regex } from '@service/regex';

@Component({
    selector: 'list-terminal',
    templateUrl: './list-terminal.html',
    styleUrls: ['./list-terminal.css.less'],
    providers: [
        HttpService
    ]
})
export class ListTerminalComponent implements OnInit, OnDestroy {
    // 表单
    @Input('transmitinput') transmitinput: ViewChild;
    // form 对象
    @Input('transmitform') transmitform: any;

    // 字段名
    @Input('transmitName') transmitName: any;

    // 终端列表
    @Input('transmitlisttermlist') transmitlisttermlist: any;

    constructor(
        private http: HttpService,
        private elementRef: ElementRef
    ) { }

    // 表单验证
    public regex = regex;
    public visible: boolean = false;


    public inputfocus($event) {
        this.visible = !this.visible;
        document.querySelector('body')['addEventListener']('click', this.onBodyDown, false);
    }
    public onBodyDown(event) {
        // 当元素显示或点击表单时 return
        if (!this.visible || event.target === this.transmitinput) return;

        let el = event.target.parentNode;
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
        }
    }

    // 复选框----------------------------------------------------------------------
    public checkboxControl = false;
    public checkbox = [];
    public selectedTermlist = '';

    // 初始化 checkbox 数据变化时需要重新初始化
    public setCheckbox(length, termlist?) {
        this.checkboxControl = false;
        this.checkbox.length = length;
        for (let i = 0; i < length; i++) {
            this.checkbox[i] = false;
        }

        if (this.transmitform[this.transmitName]) {
            let list = this.transmitform[this.transmitName].split(',');
            for (let a of list) {
                for (var b = 0; b < termlist.length; b++) {
                    if (a === termlist[b]['terminalNo']) {
                        this.checkbox[b] = true;
                    }
                }
            }
        }

    }

    // 全选
    public checkboxAll(checked: boolean) {
        checked = checked === undefined ? false : checked;
        this.checkbox.forEach((value, index, items) => {
            this.checkbox[index] = checked;
        })
        // 表单赋值
        this.selectedTermlist = this.getCheckedData(this.transmitlisttermlist, 'terminalNo');
        this.transmitform[this.transmitName] = this.selectedTermlist;
    }
    public checkboxChange() {
        this.checkboxControl = this.checkbox.every((value, index, items) => {
            return items[index];
        });
        // 表单赋值
        this.selectedTermlist = this.getCheckedData(this.transmitlisttermlist, 'terminalNo');
        this.transmitform[this.transmitName] = this.selectedTermlist;
    }
    // 获取数据
    public getCheckedData(data, key) {
        let d = [];
        this.checkbox.forEach((value, index, items) => {
            if (value) {
                d.push(data[index][key])
            }
        });
        return d.join(',');
    }

    ngOnInit() {
        this.onBodyDown = this.onBodyDown.bind(this);
    }

    ngOnDestroy() {
        document.querySelector('body')['removeEventListener']('click', this.onBodyDown);
    }
}
