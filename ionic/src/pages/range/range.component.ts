import { Component, ViewChild } from '@angular/core';
import { Platform } from 'ionic-angular';
import { TabBasicContentPage2 } from './range.component2';
import { TabBasicContentPage3 } from './range.component3';

@Component({
    templateUrl: 'range.component.html'
})
export class RangeComponent {

    rootPage = TabBasicContentPage2;
    rootPage2 = TabBasicContentPage2;
    rootPage3 = TabBasicContentPage3;
    ngOnInit(){
        /* console.log( this.ionslide )
        this.ionslide.enableKeyboardControl(true) */
    }
}


