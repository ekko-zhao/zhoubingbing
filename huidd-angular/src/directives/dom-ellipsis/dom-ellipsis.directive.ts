import { Directive, Input, ElementRef } from '@angular/core';
@Directive({
    selector: '[domEllipsis]'
})
export class DomEllipsisDirectives {
    // 配置 | 可选
    @Input('options') options = {};

    // tip 是父组件储存 控制tiptool显示的对象 | 可选
    @Input('tip') tip;

    // tiptool对象中，属性名 | 可选
    @Input('proName') proName: string;

    constructor(el: ElementRef) {
        this.element = el.nativeElement;
    }

    // 当前元素
    public element: HTMLElement;

    // 默认配置
    public defaults = {
        maxWidth: 0,
        maxLine: 1,
        ellipsisChar: '...'
    };

    public string: string;
    public handler() {
        var pl = parseInt(document.defaultView.getComputedStyle(this.element)['padding-left']);
        var pr = parseInt(document.defaultView.getComputedStyle(this.element)['padding-right']);
        var w = this.element.clientWidth - pl - pr;

        // console.log(w)

        var options = Object.assign({}, this.defaults, this.options);
        var max = options.maxWidth,
            ellipsis_char = options.ellipsisChar;
        if (!max) {
            max = w;
        }
        max = max * options.maxLine;

        var wrapper = document.createElement('div'),
            temp_elem = document.createElement('p'),
            textnode = document.createTextNode(this.string);

        wrapper['style']['cssText'] = 'width:9999px; visibility: hidden;';
        temp_elem['style']['cssText'] = 'width:auto!important; display:inline-block;';

        temp_elem.appendChild(textnode);
        wrapper.appendChild(temp_elem);
        document.getElementsByTagName('body')[0].appendChild(wrapper);

        var stop = temp_elem['innerHTML']['length'],
            width = temp_elem['clientWidth'];

        if (width > max) {
            while (width > max) {
                temp_elem['innerHTML'] = this.string.slice(0, stop - 1);
                width = temp_elem['clientWidth'];
                stop--;
            }

            temp_elem['innerHTML'] = temp_elem['innerHTML'] + options.ellipsisChar;
            width = temp_elem['clientWidth'];
            while (width > max) {
                temp_elem['innerHTML'] = this.string.slice(0, stop - 2) + options.ellipsisChar;
                width = temp_elem['clientWidth'];
                stop--;
            }
            this.element['innerHTML'] = temp_elem['innerHTML'];
            setTimeout(() => {
                if (this.tip) this.tip[this.proName] = false;
            }, 100)

        } else {
            // ngAfterViewInit 不可改变监听属性的值， 需要延时处理
            setTimeout(() => {
                if (this.tip) this.tip[this.proName] = true;
            }, 100)
            this.element['innerHTML'] = this.string;
        }
        document.getElementsByTagName('body')[0].removeChild(wrapper);
    }

    // 添加剪贴板操作
    public dblclickHandler() {
        ; (window as any).clipboard.writeText(this.string);
        alert('已复制当前内容到剪贴板');
    }

    ngAfterViewInit() {
        this.string = this.element['innerHTML'];
        this.handler();
        this.handler = this.handler.bind(this);
        window.addEventListener('resize', this.handler);

        this.dblclickHandler = this.dblclickHandler.bind(this);
        this.element.addEventListener('dblclick', this.dblclickHandler);
    }

    ngOnDestroy() {
        window.removeEventListener('resize', this.handler);
        this.element.removeEventListener('dblclick', this.dblclickHandler);
    }
}

/*
    .thml
    <td domEllipsis>text</td>
    [tooltip]="item[td.key]" [isDisabled]="tip['isDisabled' + index + td.key]" container="body" [tip]='tip' [proName]="'isDisabled' + index + td.key"

    .ts
    public tip = {}
*/
