import { Component, OnInit } from '@angular/core';

@Component({
    template: `
<ion-header>
  <ion-navbar>
    <button ion-button menuToggle icon-only>
      <ion-icon name='menu'></ion-icon>
    </button>
    <ion-title>
      PageOne
    </ion-title>
  </ion-navbar>
</ion-header>
<ion-content padding>
  <button ion-button block menuToggle>Toggle Menu</button>
</ion-content>
`
})
export class PageOne { }
