import { Component, OnInit } from '@angular/core';
import { Platform, ActionSheetController } from 'ionic-angular';

@Component({
    templateUrl: 'checkbox.component.html'
})
export class CheckboxComponent {
    checkbox: boolean = true;
    constructor() {
        var t = this;
        setTimeout(function () {
            console.log(t.checkbox)
        }, 2000);

    }
}
