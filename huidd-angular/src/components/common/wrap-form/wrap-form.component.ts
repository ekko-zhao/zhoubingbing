/* 页面表单 */
import { Component, Input } from '@angular/core';

@Component({
    selector: 'wrap-form',
    templateUrl: './wrap-form.html',
    styleUrls: ['./wrap-form.css.less']
})
export class WrapFormComponent {
    @Input() width: string = '400px';
    constructor() { }
}
/*
    <wrap-form></wrap-form>
    <wrap-form width="400px"></wrap-form>
*/
