import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FileUploadModule } from 'ng2-file-upload';
import { SharedModule } from '@myCommon/share.module';

import { AccountQueryComponent } from './account-query.component';
import { SubaccountListComponent } from '../subaccount-list/subaccount-list.component';
import { ChangeCellphoneModalComponent } from '../change-cellphone-modal/change-cellphone-modal.component';
import { MerchantListComponent } from '../merchant-list/merchant-list.component';
import { BatchAddComponent } from '../batch-add/batch-add.component';


const delayingRortes: Routes =[
    {path:'', component: AccountQueryComponent}
]

@NgModule({
	imports: [
        RouterModule.forChild(delayingRortes),
        SharedModule,
        FileUploadModule
    ],
	declarations: [
        AccountQueryComponent,
        SubaccountListComponent,
        ChangeCellphoneModalComponent,
        MerchantListComponent,
        BatchAddComponent
    ]
})
export class AccountQueryModule{}
