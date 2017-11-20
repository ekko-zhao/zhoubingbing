import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AddSuccessComponent } from './add-success.component';

const delayingRortes: Routes =[
    {path:'', component: AddSuccessComponent}
]

@NgModule({
	imports: [
        RouterModule.forChild(delayingRortes),
    ],
	declarations: [
        AddSuccessComponent
    ]
})
export class AddSuccessModule{}
