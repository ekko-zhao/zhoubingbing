import { NgModule } from '@angular/core';
import { CommonModule } from "@angular/common";
import { TitleInfoComponent } from './title-info.component';

@NgModule({
    imports: [
        CommonModule
    ],
    declarations: [
        TitleInfoComponent
    ],
    exports: [
        TitleInfoComponent
    ]
})
export class TitleInfoModule { }
