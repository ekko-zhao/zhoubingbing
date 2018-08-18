import { NgModule } from '@angular/core';
import { CommonModule } from "@angular/common";
import { FormsModule } from '@angular/forms';
import { AppConfirmComponent } from './app-confirm.component';

@NgModule({
    imports: [
        CommonModule,
        FormsModule
    ],
    declarations: [
        AppConfirmComponent
    ],
    exports: [
        AppConfirmComponent
    ]
})
export class AppConfirmModule { }
