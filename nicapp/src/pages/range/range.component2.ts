import { Component, ViewChild } from '@angular/core';
import { Platform } from 'ionic-angular';

@Component({
  template: `
    <ion-header>
      <ion-navbar>
        <ion-title>Tabs2</ion-title>
      </ion-navbar>
    </ion-header>
    <ion-content>
        2
    </ion-content>
`})

export class TabBasicContentPage2 {
  isAndroid: boolean = false;

  constructor(platform: Platform) {
    this.isAndroid = platform.is('android');
  }
}

