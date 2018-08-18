import { NgModule } from '@angular/core';
import { CommonModule } from "@angular/common";
import { ZTreeComponent } from './z-tree.component';

@NgModule({
    imports: [
        CommonModule
    ],
    declarations: [
        ZTreeComponent
    ],
    exports: [
        ZTreeComponent
    ]
})
export class ZTreeModule { }
