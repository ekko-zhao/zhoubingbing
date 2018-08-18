
/* 页面左右结构 分布 */
import { Component, Input } from '@angular/core';

@Component({
    selector: 'left-right',
    templateUrl: './left-right.frame.html',
    styleUrls: ['./left-right.frame.css.less']
})
export class LeftRightFrameComponent {
    @Input('width') set setWidth(width: number) {
        if (width) {
            this.w = {
                width: width + 'px'
            }
            this.l = {
                left: width + 'px'
            }
        }
    }

    public w;
    public l;
    constructor() { }
}
