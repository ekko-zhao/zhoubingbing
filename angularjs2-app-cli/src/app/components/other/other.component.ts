import { Component, OnInit, ViewChild } from '@angular/core';
import { AppComponent } from '../../app.component';

@Component({
    selector: 'app-other',
    templateUrl: './other.component.html',
    styleUrls: ['./other.component.css']
})
export class OtherComponent implements OnInit {
    //constructor(private _appComponent: AppComponent) { }

    public open() {
        //console.log(this._appComponent)
        //this._appComponent.alert('1233')

    }
    ngOnInit() {
    }

}
