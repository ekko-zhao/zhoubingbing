import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from "@angular/common";

import { LeftRightFrameModule } from "src/components/common/left-right.frame/left-right.frame.module";
import { TitleInfoModule } from "src/components/common/title-info/title-info.module";

import { IndexComponent } from './index.component';

const delayingRortes: Routes = [
    { path: '', component: IndexComponent }
]

@NgModule({
    imports: [
        RouterModule.forChild(delayingRortes),
        CommonModule,
        LeftRightFrameModule,
        TitleInfoModule
    ],
    declarations: [
        IndexComponent
    ]
})
export class IndexModule { }
