import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from '@myCommon/share.module';

import { DetailDirectComponent } from './detail-direct.component';

const delayingRortes: Routes = [
    { path: '', component: DetailDirectComponent }
]

@NgModule({
    imports: [
        RouterModule.forChild(delayingRortes),
        SharedModule
    ],
    declarations: [
        DetailDirectComponent
    ]
})
export class DetailDirectModule { }
