import { Component, ViewChild } from '@angular/core';
import { Platform } from 'ionic-angular';

@Component({
  template: `
    <ion-header>
      <ion-navbar>
        <ion-title>Tabs3</ion-title>
      </ion-navbar>
    </ion-header>
    <ion-content>
        3
    </ion-content>
`})

export class TabBasicContentPage3 {
  isAndroid: boolean = false;

  constructor(platform: Platform) {
    this.isAndroid = platform.is('android');
  }
}

