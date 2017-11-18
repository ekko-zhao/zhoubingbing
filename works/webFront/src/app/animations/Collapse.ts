import { Directive, ElementRef, Input, HostListener, ViewChild, TemplateRef, ViewContainerRef } from '@angular/core';
import { trigger, state, transition, animate, style } from '@angular/core';

@Directive({
    selector: '[slideInOutToggle]'
})
export class Collapse {
    constructor() {
    }
    public static slideInOut = trigger('slideInOut', [
        state('true', style({ height: '0px', overflow: 'hidden' })),
        state('false', style({ height: '*', overflow: 'hidden' })),
        transition('1 => 0', animate('200ms ease-in-out')),
        transition('0 => 1', animate('200ms ease-in-out'))
    ]);

    @Input('toggleEvent') toggleEvent(a: boolean) { }

    @Input('slideInOutToggle') set condition(newCondition: boolean) {
        if(newCondition === undefined) newCondition = false;
        setTimeout(() => {
            this.toggleEvent(newCondition);
        }, 200)
    }

    @HostListener('click') onClick() {
        // 获取 click 事件
    }
}

/*
     parent-html
    <ul class="nav-sub" [@slideInOut]="isCollapsed1?false:true" [slideInOutToggle]="isCollapsed1" [toggleEvent]="toggleEvent">
*/

/*
    parent-component.ts

    import { Collapse } from '../animations/Collapse'
    @Component({
        selector: 'nav-side',
        templateUrl: `./nav.side.html`,
        styleUrls: ['./nav.side.css.less'],
        animations: [
            Collapse.slideInOut
        ]
    })
    export class NavSideComponent {
        constructor() {
        }

        //获取 Collapse 关闭和展开 回调
        public toggleEvent(condition: boolean){
            console.log(condition)
            true 关闭
        false 展开
        }

    }

*/
