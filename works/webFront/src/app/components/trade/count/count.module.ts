import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from '@myCommon/share.module';

import { CountComponent } from './count.component';
import { DetailModalComponent } from './detail-modal.component';

const delayingRortes: Routes =[
    {path:'', component: CountComponent}
]

@NgModule({
	imports: [
        RouterModule.forChild(delayingRortes),
        SharedModule
    ],
	declarations: [
        CountComponent,
        DetailModalComponent
    ]
})
export class CountModule{}
