import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from '@myCommon/share.module';

import { ChangeCellphoneComponent } from './change-cellphone.component';


const delayingRortes: Routes = [
    { path: '', component: ChangeCellphoneComponent }
]

@NgModule({
    imports: [
        RouterModule.forChild(delayingRortes),
        SharedModule
    ],
    declarations: [
        ChangeCellphoneComponent

    ]
})
export class ChangeCellphoneModule { }
