import { NgModule } from '@angular/core';
import { CommonModule } from "@angular/common";
import { AppAlertComponent } from './app-alert.component';

@NgModule({
    imports: [
        CommonModule
    ],
    declarations: [
        AppAlertComponent
    ],
    exports: [
        AppAlertComponent
    ]
})
export class AppAlertModule { }
