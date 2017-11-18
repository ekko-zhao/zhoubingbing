import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from '@myCommon/share.module';

import { SubscribeComponent } from './subscribe.component';

const delayingRortes: Routes = [
    { path: '', component: SubscribeComponent }
]

@NgModule({
    imports: [
        RouterModule.forChild(delayingRortes),
        SharedModule
    ],
    declarations: [
        SubscribeComponent
    ]
})
export class SubscribeModule { }
