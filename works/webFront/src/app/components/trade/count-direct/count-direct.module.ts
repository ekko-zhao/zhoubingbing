import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from '@myCommon/share.module';

import { CountDirectComponent } from './count-direct.component';
import { DetailModalComponent } from './detail-modal.component';

const delayingRortes: Routes =[
    {path:'', component: CountDirectComponent}
]

@NgModule({
	imports: [
        RouterModule.forChild(delayingRortes),
        SharedModule
    ],
	declarations: [
        CountDirectComponent,
        DetailModalComponent
    ]
})
export class CountDirectModule{}
