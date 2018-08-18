/* 标题 */
import { Component, Input } from '@angular/core';

@Component({
    selector: 'caption-info',
    templateUrl: './caption-info.html',
    styleUrls: ['./caption-info.css.less']
})
export class CaptionInfoComponent {
    @Input() text: string;
    constructor() { }
}
/*
    <caption-info text="快捷菜单"></caption-info>
*/
