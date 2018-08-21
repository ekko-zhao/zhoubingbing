import { NgModule } from '@angular/core';
import { CommonModule } from "@angular/common";
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

// bootstrap
import { TooltipModule } from 'ngx-bootstrap/tooltip';

// 公共模块
import { GoBackModule } from 'src/components/common/go-back/go-back.module';
import { ButtonLoadingModule } from 'src/components/common/button-loading/button-loading.module';
import { AppPaginationModule } from 'src/components/common/app-pagination/app-pagination.module';

// directive
import { DomEllipsisModule } from 'src/directives/dom-ellipsis/auto-visible.module';

// 页面
import { ListComponent } from './list.component';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        TooltipModule.forRoot(),
        GoBackModule,
        ButtonLoadingModule,
        AppPaginationModule,
        DomEllipsisModule
    ],
    declarations: [
        ListComponent
    ],
    exports: [
        ListComponent
    ]
})
export class ListModule { }
