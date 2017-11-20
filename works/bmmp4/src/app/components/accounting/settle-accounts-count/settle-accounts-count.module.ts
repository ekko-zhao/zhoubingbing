import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from '@myCommon/share.module';

import { SettleAccountsCountComponent } from './settle-accounts-count.component';
import { DetailModalComponent } from './detail-modal.component';
import { DetailD0ModalComponent } from './detail-d0-modal.component';

const delayingRortes: Routes = [
    { path: '', component: SettleAccountsCountComponent }
]

@NgModule({
    imports: [
        RouterModule.forChild(delayingRortes),
        SharedModule
    ],
    declarations: [
        SettleAccountsCountComponent,
        DetailModalComponent,
        DetailD0ModalComponent
    ]
})
export class SettleAccountsCountModule { }
