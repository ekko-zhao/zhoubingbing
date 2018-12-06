import { Component, OnInit } from '@angular/core';
import { Platform, ActionSheetController } from 'ionic-angular';

@Component({
    templateUrl: 'icons.component.html'
})
export class IconsComponent {
    /*
        Set the isActive attribute to true or false to change the state of the icon.
        <ion-icon name="heart"></ion-icon>
        <ion-icon name="heart" isActive="false"></ion-icon>
        <ion-icon ios="logo-apple" md="logo-android"></ion-icon>

        <ion-icon [name]="myIcon"></ion-icon>

        myIcon: string = "home";

    */
    items;
    doInfinite(infiniteScroll) {
        console.log('Begin async operation');

        setTimeout(() => {
        for (let i = 0; i < 30; i++) {
            this.items.push( this.items.length );
        }

        console.log('Async operation has ended');
        infiniteScroll.complete();
        }, 500);
    }
}
