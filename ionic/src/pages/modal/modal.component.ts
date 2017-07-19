import { Component, OnInit } from '@angular/core';
import { Platform, ModalController } from 'ionic-angular';
import { ModalContentPage } from './modal-content'

@Component({
    templateUrl: 'modal.component.html'
})
export class ModalComponent {
    constructor(public modalCtrl: ModalController) { }

    openModal(characterNum) {
        let modal = this.modalCtrl.create(ModalContentPage, characterNum,
            {
                showBackdrop: false,
                enableBackdropDismiss: false,
                cssClass: ''
            }
        );
        modal.present();
    }
}
