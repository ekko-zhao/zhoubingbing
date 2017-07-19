import { Component, OnInit } from '@angular/core';
import { App, Platform, NavController, ViewController, NavParams } from 'ionic-angular';
import { OtherPage2 } from './other-page2';

@Component({
    template: `
    <ion-header>
    <ion-navbar>
        <ion-title>
            OtherPage
        </ion-title>
    </ion-navbar>
    </ion-header>

    <ion-content padding>
        OtherPage
    <button type="button" ion-button block (click)="goBack()">button</button>
    </ion-content>
`
})
export class OtherPage {
    item;
    constructor(public viewCtrl: ViewController, public navCtrl: NavController, public appCtrl: App, params: NavParams) {
        this.item = params.data.item;
    }
    goBack() {
        //this.navCtrl.pop();
        this.navCtrl.push(OtherPage2,{});
        //this.appCtrl.getRootNav().push(OtherPage2);
    }
    ionViewDidEnter(){
        console.log(this.navCtrl)
        console.log(this.viewCtrl)
        console.log(this.viewCtrl['parent'])
        console.log(this.navCtrl.getViews())
    }

}
