import { NgModule } from '@angular/core';
import { CommonModule } from "@angular/common";
import { FormsModule } from '@angular/forms';

import { ButtonLoadingModule } from 'src/components/common/button-loading/button-loading.module';

// bootstrap
import { ModalModule } from 'ngx-bootstrap/modal';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { defineLocale } from 'ngx-bootstrap/bs-moment';
import { zhCn } from 'ngx-bootstrap/locale';
defineLocale('zh-cn', zhCn);


import { SortComponent } from './sort.component';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        ModalModule.forRoot(),
        BsDatepickerModule.forRoot(),
        ButtonLoadingModule
    ],
    declarations: [
        SortComponent
    ],
    exports: [
        SortComponent
    ]
})
export class SortModule { }

