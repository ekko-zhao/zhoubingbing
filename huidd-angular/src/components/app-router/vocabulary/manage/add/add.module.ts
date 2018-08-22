import { NgModule } from '@angular/core';
import { CommonModule } from "@angular/common";
import { FormsModule } from '@angular/forms';


import { ButtonLoadingModule } from 'src/components/common/button-loading/button-loading.module';
import { AppPaginationModule } from 'src/components/common/app-pagination/app-pagination.module';
import { TitleInfoModule } from "src/components/common/title-info/title-info.module";
import { UploadFileModule } from 'src/components/common/upload-file/upload-file.module';

// bootstrap
import { ModalModule } from 'ngx-bootstrap/modal';
import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { DomEllipsisModule } from 'src/directives/dom-ellipsis/auto-visible.module';

import { AddComponent } from './add.component';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        ModalModule.forRoot(),
        TooltipModule.forRoot(),
        DomEllipsisModule,
        ButtonLoadingModule,
        AppPaginationModule,
        TitleInfoModule,
        UploadFileModule
    ],
    declarations: [
        AddComponent
    ],
    exports: [
        AddComponent
    ]
})
export class AddModule { }

