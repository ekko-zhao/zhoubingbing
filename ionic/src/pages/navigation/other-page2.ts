import { Component, OnInit } from '@angular/core';
import { Platform, NavController, ViewController, NavParams, IonicPage } from 'ionic-angular';
import { OtherPage } from './other-page';
import { OtherPage3 } from './other-page3';

@IonicPage({

})
@Component({
     template: `
    <ion-header>
    <ion-navbar>
        <ion-title>
        OtherPage2
        </ion-title>
    </ion-navbar>
    </ion-header>

    <ion-content padding>
    OtherPage2
    <button type="button" ion-button block (click)="goBack()">button</button>
    </ion-content>
`

})
export class OtherPage2 {
    item;

    constructor(public viewCtrl: ViewController, public navCtrl: NavController, params: NavParams) {
        this.item = params.data.item;
    }
    goBack() {
        this.navCtrl.pop();
    }

   // ionViewDidEnter() {
    ionViewDidEnter(){
         console.log(this.navCtrl)
        console.log(this.viewCtrl)
        console.log(this.viewCtrl['parent'])
        console.log(this.navCtrl.getViews())


        //this.navCtrl.removeView( this.navCtrl.getViews()[0] );

       setTimeout(()=>{
           /* this.navCtrl.insert(2, OtherPage);
           this.navCtrl.insert(3, OtherPage3); */

            //this.navCtrl.insertPages(2, [ {page:OtherPage}, {paged:OtherPage3} ]);
           console.log(this.navCtrl)
       },2000)
       //this.navCtrl.pop();

        console.log(this.navCtrl.getViews())
    }
    ionViewDidLeave(){
        console.log('leave2')
    }


}
