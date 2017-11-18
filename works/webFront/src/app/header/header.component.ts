import { Component } from '@angular/core';
import { trigger, state, style, animate, transition, group } from '@angular/animations';
import { Collapse } from '../animations/Collapse';

@Component({
    selector: 'header',
    templateUrl: `./header.html`,
    styleUrls: ['./header.css.less'],
    animations: [
        Collapse.slideInOut
    ]
})
export class HeaderComponent {

}
