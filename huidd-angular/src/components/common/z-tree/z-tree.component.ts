/* 异步加载树 */
import 'src/static/vendor/zTree_v3/js/jquery-1.4.4.min.js';
import 'src/static/vendor/zTree_v3/js/jquery.ztree.core-3.5.min.js';
import 'src/static/vendor/zTree_v3/js/jquery.ztree.excheck-3.5.min.js';
import { Component, Input, ViewChild, ElementRef } from '@angular/core';

@Component({
    selector: 'z-tree',
    templateUrl: './z-tree.html',
    styleUrls: ['./z-tree.css.less']
})
export class ZTreeComponent {
    // 必须-表单 input
    @Input('transmitinput') transmitinput: ViewChild;
    @Input('idName') id: string;
    @Input('setting') setting = <any>{};

    constructor(
        private elementRef: ElementRef,
    ) {
        this.onBodyDown = this.onBodyDown.bind(this);
    }

    public visible: boolean = false;
    public zNodes = <any>[];
    public target = null;
    public isFirst = true;

    public inputfocus($event) {
        if (this.visible) return;
        this.visible = !this.visible;
        document.querySelector('body')['addEventListener']('click', this.onBodyDown, false);
        if (this.isFirst) {
            this.isFirst = !this.isFirst;
            this.init();
        };
    }

    // 初始化 ztree
    public init() {
        // 外部调用 init() 方法
        this.isFirst = false;

        if (this.target) this.target.destroy();
        let $ = (window as any).$;
        this.setting['async']['url'] = (process.env.origin ? process.env.origin : '') + this.setting['async']['url'];
        this.target = $.fn.zTree.init($('#' + this.id), this.setting, this.zNodes);
    }

    // 重置
    public reset(corporations: Array<any>) {
        if (!this.target) return;
        let nodes = this.target.getCheckedNodes(true);
        for (let node of nodes) {
            node.checked = false;
            this.target.updateNode(node);
        }
        for (let corporation of corporations) {
            let node = this.target.getNodeByParam("corporation", corporation, null);
            node.checked = true;
            this.target.updateNode(node);
        }
    }

    public onBodyDown(event) {
        // 点击表单本身 或 组件自身
        if (!this.visible || event.target === this.transmitinput) return;

        let el = event.target;
        let flag = false;
        while (el) {
            if (el.parentNode === this.elementRef.nativeElement) {
                el = null;
                flag = true;
            } else {
                el = el.parentNode;
            }
        }
        if (flag) return;
        this.visible = !this.visible;
        document.querySelector('body')['removeEventListener']('click', this.onBodyDown);
    }

    ngOnDestroy() {
        document.querySelector('body')['removeEventListener']('click', this.onBodyDown);
        if (this.target) this.target.destroy();
    }
}

/*
    <div class="col-md-8 col-xs-9 px-0">
        <input class="form-control rounded-0 text-sm  bg-white" type="text" name="form.corporationName" id="form.corporationName"
            [(ngModel)]="form.corporationName" [pattern]="regex.corporationName" (focus)="zTree['inputfocus']($event)"
            [ngClass]="{'border-danger': theinputorporation.invalid && zTreeStartFlag }" #formcorporationName
            readonly required>
        <div class="position-relative">
            <z-tree [transmitinput]="formcorporationName" [setting]="setting" idName="ztree" #zTree></z-tree>
        </div>
        <div class="d-none">
            <input type="text" name="form.corporation" [(ngModel)]="form.corporation" #theinputorporation="ngModel" required>
        </div>
    </div>
*/
