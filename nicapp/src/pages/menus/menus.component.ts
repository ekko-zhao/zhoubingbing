import { Component, OnInit } from '@angular/core';
import { App, MenuController } from 'ionic-angular';

@Component({
    templateUrl: 'menus.component.html'
})
export class MenusComponent {

    constructor(app: App, menu: MenuController) {
        menu.enable(true);
    }
}

