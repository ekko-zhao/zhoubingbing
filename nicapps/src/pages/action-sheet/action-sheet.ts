import { Component } from '@angular/core';
import { Platform, ActionSheetController } from 'ionic-angular';

@Component({
    templateUrl: 'action-sheet.html'
})
export class ActionSheet {
    constructor(
        public platform: Platform,
        public actionsheetCtrl: ActionSheetController
    ) { }

    openMenu() {
        let actionSheet = this.actionsheetCtrl.create({
            title: 'Albums',
            //subTitle: 'subTitle',
            cssClass: 'action-sheets-basic-page',
            // 用户点击背景是关闭 actionSheet
            //enableBackdropDismiss: true,
            buttons: [
                {
                    text: 'Delete',

                    icon: !this.platform.is('ios') ? 'trash' : null,
                    handler: () => {
                        console.log('Delete clicked');
                    },
                    cssClass: '',
                    // destructive or cancel 提供特别的样式  cancel 单独在actionSheet 底部
                    role: 'destructive'
                },
                {
                    text: 'Share',
                    icon: !this.platform.is('ios') ? 'share' : null,
                    handler: () => {
                        console.log('Share clicked');
                    }
                },
                {
                    text: 'Play',
                    icon: !this.platform.is('ios') ? 'arrow-dropright-circle' : null,
                    handler: () => {
                        console.log('Play clicked');
                    }
                },
                {
                    text: 'Favorite',
                    icon: !this.platform.is('ios') ? 'heart-outline' : null,
                    handler: () => {
                        console.log('Favorite clicked');
                    }
                },
                {
                    text: 'Cancel',
                    role: 'cancel', // will always sort to be on the bottom
                    icon: !this.platform.is('ios') ? 'close' : null,
                    handler: () => {
                        console.log('Cancel clicked');
                    }
                }
            ]
        });
        actionSheet.present();
    }
}
