import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from '@myCommon/share.module';

import { RealtimeComponent } from './realtime.component';
import { DetailComponent } from './detail.component';

const delayingRortes: Routes = [
    { path: '', component: RealtimeComponent }
]

@NgModule({
    imports: [
        RouterModule.forChild(delayingRortes),
        SharedModule
    ],
    declarations: [
        RealtimeComponent,
        DetailComponent
    ]
})
export class RealtimeModule { }
