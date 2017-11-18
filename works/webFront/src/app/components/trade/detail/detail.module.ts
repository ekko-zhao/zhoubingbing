import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from '@myCommon/share.module';

import { DetailComponent } from './detail.component';

const delayingRortes: Routes = [
    { path: '', component: DetailComponent }
]

@NgModule({
    imports: [
        RouterModule.forChild(delayingRortes),
        SharedModule
    ],
    declarations: [
        DetailComponent
    ]
})
export class DetailModule { }
