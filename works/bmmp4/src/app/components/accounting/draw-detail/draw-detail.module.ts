import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from '@myCommon/share.module';

import { DrawDetailComponent } from './draw-detail.component';

const delayingRortes: Routes = [
    { path: '', component: DrawDetailComponent }
]

@NgModule({
    imports: [
        RouterModule.forChild(delayingRortes),
        SharedModule
    ],
    declarations: [
        DrawDetailComponent
    ]
})


export class DrawDetailModule { }
