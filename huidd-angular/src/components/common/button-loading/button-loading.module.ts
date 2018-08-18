import { NgModule } from '@angular/core';
import { CommonModule } from "@angular/common";

import { ButtonLoadingComponent } from './button-loading.component';

@NgModule({
    imports: [
        CommonModule
    ],
    declarations: [
        ButtonLoadingComponent
    ],
    exports: [
        ButtonLoadingComponent
    ]
})
export class ButtonLoadingModule { }
