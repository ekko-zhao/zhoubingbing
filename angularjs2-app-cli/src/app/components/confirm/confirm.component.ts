import { Component, OnInit, ViewChild} from '@angular/core';
import { ModalDirective } from 'ngx-bootstrap/modal';

@Component({
    selector: 'app-confirm',
    templateUrl: './confirm.component.html',
    styleUrls: ['./confirm.component.css']
})
export class ConfirmComponent implements OnInit {
    @ViewChild('confirmModal') confirmModal: ModalDirective;
    constructor() { }

    ngOnInit() {
        //改变浏览器默认的confirm
        this.showModal = this.showModal.bind(this);
        window['confirm'] = this.showModal;
        //setTimeout(() => { (window as any).confirm({}) }, 2000)
    }

    //默认数据
    defaultObj: object = {
        text: '提示信息',
        doneText: '确定',
        failText: '取消',
        note: null,
        textarea: null,
        done: null,
        fail: null
    }

    //页面填充
    obj: object = {}
    textarea: string = '';

    public showModal(obj: any): boolean {
        this.textarea = '';
        this.obj = Object.assign({}, this.defaultObj, obj);
        this.confirmModal.show();
        return null;
    }

    //确定
    done() {
        this.confirmModal.hide();
        let data = {
            reason: this.textarea
        }
        if (this.obj['done']) {
            this.obj['done'](data);
        }
    }

    //取消
    fail() {
        this.confirmModal.hide();
        if (this.obj['fail']) {
            this.obj['fail']();
        }
    }
}
/*
    用法：
    (window as any).confirm({})
*/
/*confirm({
    text: '您确定要删除改信息吗？',
    done: function(data){
        console.log(data);
    },
    fail: function(data){
        console.log(data);
    },
    note:"这里是附带的描述信息",
    textarea:true,// textarea:"placeholder", 为字符串时会被 赋值 placeholder属性
    type:2, //可以没有type; 默认值为1 添加俩个按钮， 为2 时 一个按钮
    doneText:''// buttonText 默认‘确定’
    failText:''//buttonText 默认‘取消’
})*/
