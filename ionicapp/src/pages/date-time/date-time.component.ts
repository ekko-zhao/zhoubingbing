import { Component, OnInit } from '@angular/core';
import { Platform, ActionSheetController } from 'ionic-angular';

@Component({
    templateUrl: 'date-time.component.html'
})
export class DateTimeComponent {
    public event = {
        month: '1990-02-19',
        timeStarts: '07:43',
        timeEnds: '1990-02-20'
    }
}
