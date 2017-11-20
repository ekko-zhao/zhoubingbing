import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { SuccessComponent } from './success.component';

const delayingRortes: Routes = [
    { path: '', component: SuccessComponent }
]

@NgModule({
    imports: [
        RouterModule.forChild(delayingRortes),
    ],
    declarations: [
        SuccessComponent
    ]
})
export class SuccessModule { }
