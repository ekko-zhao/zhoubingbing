import { Component } from '@angular/core';
import { trigger, state, style, animate, transition, group } from '@angular/animations';
import { Collapse } from '../animations/Collapse';

@Component({
    selector: 'header-index',
    templateUrl: `./header-index.html`,
    styleUrls: ['./header-index.css.less'],
    animations: [
        Collapse.slideInOut
    ]
})
export class HeaderIndexComponent {

}
