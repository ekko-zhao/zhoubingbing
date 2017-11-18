import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from '@myCommon/share.module';

import { DownloadComponent } from './download.component';
import { EmailModalComponent } from './email-modal.component';

const delayingRortes: Routes = [
    { path: '', component: DownloadComponent }
]

@NgModule({
    imports: [
        RouterModule.forChild(delayingRortes),
        SharedModule
    ],
    declarations: [
        DownloadComponent,
        EmailModalComponent
    ]
})
export class DownloadModule{}
