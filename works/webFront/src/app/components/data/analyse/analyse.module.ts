import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from '@myCommon/share.module';

import { AnalyseComponent } from './analyse.component';

const delayingRortes: Routes = [
    { path: '', component: AnalyseComponent }
]

@NgModule({
    imports: [
        RouterModule.forChild(delayingRortes),
        SharedModule
    ],
    declarations: [
        AnalyseComponent
    ]
})
export class AnalyseModule { }
