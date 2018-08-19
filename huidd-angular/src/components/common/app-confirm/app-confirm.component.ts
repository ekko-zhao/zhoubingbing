import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
    selector: 'app-confirm',
    templateUrl: './app-confirm.html',
    styleUrls: ['./app-confirm.css.less']
})
export class AppConfirmComponent {
    constructor() {
        // 改变浏览器默认的confirm
        this.showModal = this.showModal.bind(this);
        window['confirm'] = this.showModal;
        this.onkeydown = this.onkeydown.bind(this);
    }

    public visible = false;
    //默认数据
    defaultObj: object = {
        text: '提示信息',
        doneText: '确定',
        failText: '取消',
        note: null,
        textarea: null,
        done: null,
        fail: null,
        regex: /^[\s\S]*$/,
        required: true
    }
    //页面填充
    obj: object = {}
    textarea: string = '';

    // 当只有确定按钮是 回车即可关闭
    public onkeydown(event) {
        var e = event || window.event;
        if (e && e['keyCode'] == 13) {
            this.done();
        }
    }

    public showModal(obj: any): boolean {
        if (obj.type == 2) document.addEventListener('keydown', this.onkeydown, false);
        this.textarea = '';
        this.obj = Object.assign({}, this.defaultObj, obj);
        this.visible = true;
        return false;
    }

    //确定
    done() {
        let data = {
            reason: this.textarea.trim()
        }

        if (this.obj['required'] && this.obj['textarea'] !== null && this.textarea.trim().length === 0) {
            alert('输入信息为空，请重新填写');
            return;
        }

        this.visible = !this.visible;
        if (this.obj['done']) {
            this.obj['done'](data);
        }
        document.removeEventListener('keydown', this.onkeydown);
    }

    //取消
    fail() {
        this.visible = !this.visible;
        if (this.obj['fail']) {
            this.obj['fail']();
        }
    }

}
/*
    用法：
    ;(window as any).confirm({})
*/
/* ;(window as any).confirm({
    text: '您确定要删除改信息吗？',
    done: (data)=>{
        console.log('ok');

    },
    fail: (data)=>{
        console.log('cancel');
    },
    note:"这里是附带的描述信息",
    textarea:'',// textarea:"placeholder", 为字符串时会被 赋值 placeholder属性
    type:2, //可以没有type; 默认值为1 添加俩个按钮， 为2 时 一个按钮
    doneText:'',// buttonText 默认‘确定’
    failText:''//buttonText 默认‘取消’,
    required: true,
    regex:/^*$/
})*/