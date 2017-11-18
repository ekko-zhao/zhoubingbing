import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from '@myCommon/share.module';

import { MerchantManageComponent } from './merchant-manage.component';
import { TerminalListComponent } from '../terminal-list/terminal-list.component';
import { AddMerchantComponent } from '../add-merchant/add-merchant.component';


const delayingRortes: Routes = [
    { path: '', component: MerchantManageComponent }
]

@NgModule({
    imports: [
        RouterModule.forChild(delayingRortes),
        SharedModule
    ],
    declarations: [
        MerchantManageComponent,
        TerminalListComponent,
        AddMerchantComponent
    ]
})
export class MerchantManageModule { }
