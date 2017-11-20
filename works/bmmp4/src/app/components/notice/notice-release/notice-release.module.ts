/*
    公告发布
*/
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from '@myCommon/share.module';

import { NoticeReleaseComponent } from './notice-release.component';

const delayingRortes: Routes = [
    { path: '', component: NoticeReleaseComponent }
]

@NgModule({
    imports: [
        RouterModule.forChild(delayingRortes),
        SharedModule
    ],
    declarations: [
        NoticeReleaseComponent
    ]
})
export class NoticeReleaseModule { }
