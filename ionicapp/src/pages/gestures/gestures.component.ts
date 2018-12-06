import { Component, OnInit } from '@angular/core';
import { Platform, ActionSheetController } from 'ionic-angular';

@Component({
    templateUrl: 'gestures.component.html'
})
export class GesturesComponent {
    public press: number = 0;
    public pan: number = 0;
    public swipe: number = 0;
    public tap: number = 0;
    constructor() {

    }
    pressEvent(e) {
        this.press++
    }
    panEvent(e) {
        this.pan++
    }
    swipeEvent(e) {
        this.swipe++
    }
    tapEvent(e) {
        this.tap++
    }
}
