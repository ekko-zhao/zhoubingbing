import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from '@myCommon/share.module';

import { CountSpecialComponent } from './count-special.component';
import { DetailModalComponent } from './detail-modal.component';

const delayingRortes: Routes = [
    { path: '', component: CountSpecialComponent }
]

@NgModule({
    imports: [
        RouterModule.forChild(delayingRortes),
        SharedModule
    ],
    declarations: [
        CountSpecialComponent,
        DetailModalComponent
    ]
})
export class CountSpecialModule { }
