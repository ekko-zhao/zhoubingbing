import { Component, OnInit } from '@angular/core';
import { Platform, NavController, ViewController, NavParams } from 'ionic-angular';
import { OtherPage } from './other-page';

@Component({
     template: `
    <ion-header>
    <ion-navbar>
        <ion-title>
        OtherPage3
        </ion-title>
    </ion-navbar>
    </ion-header>

    <ion-content padding>
    OtherPage3
    <button type="button" ion-button block (click)="goBack()">button</button>
    </ion-content>
`

})
export class OtherPage3 {
    item;

    constructor(public viewCtrl: ViewController, public navCtrl: NavController, params: NavParams) {
        this.item = params.data.item;
    }
    goBack() {
        this.navCtrl.pop();
    }

   // ionViewDidEnter() {
    ionViewDidEnter(){

    }
    ionViewDidLeave(){
        console.log('leave2')
    }


}
