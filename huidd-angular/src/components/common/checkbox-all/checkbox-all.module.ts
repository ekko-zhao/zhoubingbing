import { NgModule } from '@angular/core';
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { CheckbxAllComponent } from './checkbox-all.component';

@NgModule({
    imports: [
        CommonModule,
        FormsModule
    ],
    declarations: [
        CheckbxAllComponent
    ],
    exports: [
        CheckbxAllComponent
    ]
})
export class CheckbxAllModule { }
