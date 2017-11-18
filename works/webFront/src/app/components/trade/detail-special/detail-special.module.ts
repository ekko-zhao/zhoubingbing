import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from '@myCommon/share.module';

import { DetailSpecialComponent } from './detail-special.component';


const delayingRortes: Routes = [
    { path: '', component: DetailSpecialComponent }
]

@NgModule({
    imports: [
        RouterModule.forChild(delayingRortes),
        SharedModule
    ],
    declarations: [
        DetailSpecialComponent
    ]
})
export class DetailSpecialModule { }
