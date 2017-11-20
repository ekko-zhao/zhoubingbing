import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from '@myCommon/share.module';

import { ChangePasswordComponent } from './change-password.component';

const delayingRortes: Routes = [
    { path: '', component: ChangePasswordComponent }
]

@NgModule({
    imports: [
        RouterModule.forChild(delayingRortes),
        SharedModule
    ],
    declarations: [
        ChangePasswordComponent
    ]
})
export class ChangePasswordModule { }
