import { Component, OnInit } from '@angular/core';
import { Platform, LoadingController } from 'ionic-angular';

@Component({
    templateUrl: 'loading.component.html'
})
export class LoadingComponent {
    constructor(public loadingCtrl: LoadingController) { }

    presentLoading() {
        this.loadingCtrl.create({
            content: 'Please wait...',
            duration: 3000,
            dismissOnPageChange: true
        }).present();
    }
}
