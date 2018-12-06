import { Component, OnInit } from '@angular/core';
import { Platform, ActionSheetController } from 'ionic-angular';

@Component({
    templateUrl: 'lists.component.html'
})
export class ListsComponent {
    items = [
        'Pokémon Yellow',
        'Super Metroid',
        'Mega Man X',
        'The Legend of Zelda',
        'Pac-Man'
    ];

    itemSelected(item: string) {
        console.log("Selected Item", item);
    }
}
