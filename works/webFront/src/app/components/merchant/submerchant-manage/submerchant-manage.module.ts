import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from '@myCommon/share.module';

import { SubmerchantManageComponent } from './submerchant-manage.component';
import { AddSubmerchantComponent } from '../add-submerchant/add-submerchant.component';
import { PermissionAssignComponent } from '../permission-assign/permission-assign.component';
import { ModifyMobileComponent } from '../modify-mobile/modify-mobile.component';

import { UsernameValidator } from '@myDirective/username.directive';

const delayingRortes: Routes = [
    { path: '', component: SubmerchantManageComponent }
]

@NgModule({
    imports: [
        RouterModule.forChild(delayingRortes),
        SharedModule
    ],
    declarations: [
        SubmerchantManageComponent,
        AddSubmerchantComponent,
        PermissionAssignComponent,
        ModifyMobileComponent,
        UsernameValidator
    ]
})
export class SubmerchantManageModule { }
