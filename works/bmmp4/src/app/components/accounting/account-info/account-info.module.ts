import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from '@myCommon/share.module';

import { AccountInfoComponent } from './account-info.component';

const delayingRortes: Routes = [
    { path: '', component: AccountInfoComponent }
]

@NgModule({
    imports: [
        RouterModule.forChild(delayingRortes),
        SharedModule
    ],
    declarations: [
        AccountInfoComponent
    ]
})
export class AccountInfoModule{}
