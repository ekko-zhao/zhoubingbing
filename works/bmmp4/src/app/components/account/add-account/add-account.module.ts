import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from '@myCommon/share.module';

import { AddAccountComponent } from './add-account.component';

const delayingRortes: Routes =[
    {path:'', component: AddAccountComponent}
]


@NgModule({
	imports: [
        RouterModule.forChild(delayingRortes),
        SharedModule
    ],
	declarations: [
        AddAccountComponent
    ]
})
export class AddAccountModule{}
