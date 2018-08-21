import { NgModule } from '@angular/core';
import { CommonModule } from "@angular/common";
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

// bootstrap
import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { defineLocale } from 'ngx-bootstrap/bs-moment';
import { zhCn } from 'ngx-bootstrap/locale';
defineLocale('zh-cn', zhCn);

// 公共模块
import { ButtonLoadingModule } from 'src/components/common/button-loading/button-loading.module';
import { AppPaginationModule } from 'src/components/common/app-pagination/app-pagination.module';
import { CheckbxAllModule } from 'src/components/common/checkbox-all/checkbox-all.module';

// directive
import { DomEllipsisModule } from 'src/directives/dom-ellipsis/auto-visible.module';

// 页面
import { UserMessageComponent } from './user-message.component';
import { AddBowenComponent } from './add-bowen/add-bowen.component';
import { AddBowenModule } from './add-bowen/add-bowen.module';
/* import { DetailComponent } from './detail/detail.component';
import { DetailModule } from './detail/detail.module';
import { ListComponent } from './list/list.component';
import { ListModule } from './list/list.module'; */

import { SortModule } from './sort/sort.module';

const delayingRortes: Routes = [
    { path: '', component: UserMessageComponent },
    { path: 'add-bowen', component: AddBowenComponent },
    /* { path: 'detail/:id', component: DetailComponent },
    { path: 'list/:id', component: ListComponent }, */
]

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        RouterModule.forChild(delayingRortes),
        TooltipModule.forRoot(),
        BsDatepickerModule.forRoot(),
        ButtonLoadingModule,
        AppPaginationModule,
        DomEllipsisModule,
        CheckbxAllModule,
        SortModule,
        AddBowenModule,
        /* AddModule,
        DetailModule,
        ListModule */
    ],
    declarations: [
        UserMessageComponent
    ]
})
export class UserMessageModule { }
