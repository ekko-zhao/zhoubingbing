import { NgModule } from '@angular/core';
import { CommonModule } from "@angular/common";
import { FormsModule } from '@angular/forms';
import { ButtonLoadingModule } from 'src/components/common/button-loading/button-loading.module';
import { AppPaginationModule } from 'src/components/common/app-pagination/app-pagination.module';

// bootstrap
import { ModalModule } from 'ngx-bootstrap/modal';
import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { DomEllipsisModule } from 'src/directives/dom-ellipsis/auto-visible.module';

import { ListQueryComponent } from './list.component';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        ModalModule.forRoot(),
        TooltipModule.forRoot(),
        DomEllipsisModule,
        ButtonLoadingModule,
        AppPaginationModule,
    ],
    declarations: [
        ListQueryComponent
    ],
    exports: [
        ListQueryComponent
    ]
})
export class ListQueryModule { }
