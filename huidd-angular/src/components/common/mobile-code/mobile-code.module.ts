import { NgModule } from '@angular/core';
import { CommonModule } from "@angular/common";
import { MobileCodeComponent } from './mobile-code.component';

@NgModule({
    imports: [
        CommonModule,
    ],
    declarations: [
        MobileCodeComponent
    ],
    exports: [
        MobileCodeComponent
    ]
})
export class MobileCodeModule { }
