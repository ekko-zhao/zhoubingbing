import { NgModule } from '@angular/core';
import { CommonModule } from "@angular/common";

import { LeftRightFrameComponent } from './left-right.frame.component';

@NgModule({
    imports: [
        CommonModule
    ],
    declarations: [
        LeftRightFrameComponent
    ],
    exports: [
        LeftRightFrameComponent
    ]
})
export class LeftRightFrameModule { }
