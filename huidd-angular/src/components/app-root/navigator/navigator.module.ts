import { NgModule } from '@angular/core';
import { CommonModule } from "@angular/common";
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { NavigatorComponent } from './navigator.component';
import { NavigatorSubComponent } from '../navigator-sub/navigator-sub.component';
import { NavigatorTabComponent } from '../navigator-tab/navigator-tab.component';

@NgModule({
    imports: [
        CommonModule,
        BsDropdownModule.forRoot()
    ],
    declarations: [
        NavigatorComponent,
        NavigatorSubComponent,
        NavigatorTabComponent
    ],
    exports: [
        NavigatorComponent
    ]
})
export class NavigatorModule { }
