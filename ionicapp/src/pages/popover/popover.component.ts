import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Platform, ActionSheetController, NavParams, PopoverController } from 'ionic-angular';
import { PopoverPage } from './popover-page';

@Component({
    templateUrl: 'popover.component.html'
})
export class PopoverComponent {
    @ViewChild('popoverContent', { read: ElementRef }) content: ElementRef;
    @ViewChild('popoverText', { read: ElementRef }) text: ElementRef;

    constructor(private popoverCtrl: PopoverController) {

    }

    presentPopover(ev) {

        let popover = this.popoverCtrl.create(PopoverPage, {
            contentEle: this.content.nativeElement,
            textEle: this.text.nativeElement
        });

        popover.present({
            ev: ev // ev 用于指定 popover 位置
        });
    }
}
