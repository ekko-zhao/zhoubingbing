import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from '@myCommon/share.module';

import { InfoComponent } from './info.component';

const delayingRortes: Routes = [
    { path: '', component: InfoComponent }
]

@NgModule({
    imports: [
        RouterModule.forChild(delayingRortes),
        SharedModule
    ],
    declarations: [
        InfoComponent
    ]
})
export class InfoModule { }
