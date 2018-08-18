/* 标题 */
import { Component, Input } from '@angular/core';

@Component({
    selector: 'title-info',
    templateUrl: './title-info.html',
    styleUrls: ['./title-info.css.less']
})
export class TitleInfoComponent {
    @Input() text: string;
    @Input() noBorder: string;
    constructor() { }
}
/*
    <title-info text="快捷菜单"></title-info>
    <title-info text="快捷菜单" [noBorder]="true"></title-info>
*/
