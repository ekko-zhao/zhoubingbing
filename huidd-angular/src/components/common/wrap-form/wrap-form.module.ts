import { NgModule } from '@angular/core';
import { CommonModule } from "@angular/common";
import { WrapFormComponent } from './wrap-form.component';

@NgModule({
    imports: [
        CommonModule
    ],
    declarations: [
        WrapFormComponent
    ],
    exports: [
        WrapFormComponent
    ]
})
export class WrapFormModule { }
