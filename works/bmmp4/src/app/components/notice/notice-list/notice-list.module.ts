import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UEditorModule } from 'ngx-ueditor';
import { FileUploadModule } from 'ng2-file-upload';
import { SharedModule } from '@myCommon/share.module';

import { NoticeListComponent } from './notice-list.component';
import { NoticeContentComponent } from '../notice-content/notice-content.component';
import { NoticeReleaseComponent } from '../notice-release/notice-release.component';

const delayingRortes: Routes = [
    { path: '', component: NoticeListComponent }
]

@NgModule({
    imports: [
        RouterModule.forChild(delayingRortes),
        UEditorModule.forRoot({
            // 指定ueditor.js路径目录
            path: './static/vendor/ueditor1.4.3.3.utf8.jsp/',
            // 默认全局配置项
            options: {
                themePath: './static/vendor/ueditor1.4.3.3.utf8.jsp/themes/'
            }
        }),
        FileUploadModule,
        SharedModule
    ],
    declarations: [
        NoticeListComponent,
        NoticeContentComponent,
        NoticeReleaseComponent
    ]
})
export class NoticeListModule { }
