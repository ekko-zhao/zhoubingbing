import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';

import { Dialogs } from '@ionic-native/dialogs';


@Component({
    templateUrl: 'test.component.html',
     providers:[Dialogs]
})
export class TestComponent  {
    constructor(private dialogs: Dialogs) { }

    getpic(){
        this.dialogs.alert('Hello world')
    .then(() => console.log('Dialog dismissed'))
    .catch(e => console.log('Error displaying dialog', e));

    }

}
