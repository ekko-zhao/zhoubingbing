import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from '@myCommon/share.module';

import { SettleAccountsDetailComponent } from './settle-accounts-detail.component';

const delayingRortes: Routes = [
    { path: '', component: SettleAccountsDetailComponent }
]

@NgModule({
    imports: [
        RouterModule.forChild(delayingRortes),
        SharedModule
    ],
    declarations: [
        SettleAccountsDetailComponent
    ]
})
export class SettleAccountsDetailModule{}
