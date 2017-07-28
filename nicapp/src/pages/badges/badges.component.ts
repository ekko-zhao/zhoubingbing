import { Component, OnInit } from '@angular/core';
import { Platform, ActionSheetController } from 'ionic-angular';

@Component({
    templateUrl: 'badges.component.html'
})
export class BadgesComponent implements OnInit {
    items: any[] = [{}, {}];

    /*
        <ion-badge item-end color="danger">260k</ion-badge>

        color="light"
        color="default"
        color="secondary"
        color="danger"
        color="dark"
    */

    ngOnInit() {
        setTimeout(() => {
            this.items.push({})
            //this.items = [{},{},{}]
        }, 2000)
    }
}
