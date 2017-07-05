import { Component, OnInit } from '@angular/core';
import { AppComponent } from '../../app.component';
@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {

  constructor(private _appComponent: AppComponent) {

  }
  public open(mes: string) {

  }
  ngOnInit() {
  }

}
