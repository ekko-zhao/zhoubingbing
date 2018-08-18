
/* 全选 */
import { Component, Input } from '@angular/core';

@Component({
    selector: 'checkbox-all',
    templateUrl: './checkbox-all.html'
})
export class CheckbxAllComponent {
    @Input('name') name: string = '全选';

    constructor() { }
    public data = [];
    public control = false;
    public checkbox = [];

    // 初始化
    public init(data) {
        this.control = false;
        this.data = data;
        this.checkbox.length = data.length;
        for (let i = 0; i < data.length; i++) {
            this.checkbox[i] = false;
        }
    }

    // 全选
    public select(checked: boolean) {
        this.checkbox.forEach((value, index, items) => {
            this.checkbox[index] = checked;
        })
    }

    public change() {
        this.control = this.checkbox.every((value, index, items) => {
            return items[index];
        });
    }

    // 获取数据
    public getData(key, objFlag = false) {
        let d = [];
        this.checkbox.forEach((value, index, items) => {
            if (value) {
                if (objFlag) {
                    d.push({ [key]: this.data[index][key] })
                } else {
                    d.push(this.data[index][key]);
                }
            }
        });
        return d;
    }
}
/*
    .html file
    <checkbox-all #checkboxAll name="全选"></checkbox-all>

    <label class="i-checks">
        <input type="checkbox" [name]="'checkbox'+index" [(ngModel)]="checkboxAll.checkbox[index]" (ngModelChange)="checkboxAll.change()">
        <i></i>
    </label>

    .ts file
    @ViewChild('checkboxAll') checkboxAll;
*/
