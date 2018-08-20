import { NgModule } from '@angular/core';
import { CommonModule } from "@angular/common";
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

// bootstrap
import { TooltipModule } from 'ngx-bootstrap/tooltip';

// 公共模块
import { ButtonLoadingModule } from 'src/components/common/button-loading/button-loading.module';
import { AppPaginationModule } from 'src/components/common/app-pagination/app-pagination.module';
import { CheckbxAllModule } from 'src/components/common/checkbox-all/checkbox-all.module';

// directive
import { DomEllipsisModule } from 'src/directives/dom-ellipsis/auto-visible.module';

// 页面
import { BankManageComponent } from './bank-manage.component';
import { AddComponent } from './add/add.component';
import { AddModule } from './add/add.module';
import { DetailComponent } from './detail/detail.component';
import { DetailModule } from './detail/detail.module';
/* import { ListComponent } from './list/list.component';
import { ListModule } from './list/list.module'; */

const delayingRortes: Routes = [
    { path: '', component: BankManageComponent },
    { path: 'add', component: AddComponent },
    { path: 'detail/:id', component: DetailComponent },
    /*{ path: 'list/:id', component: ListComponent } */
]

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        RouterModule.forChild(delayingRortes),
        TooltipModule.forRoot(),
        ButtonLoadingModule,
        AppPaginationModule,
        DomEllipsisModule,
        CheckbxAllModule,
        AddModule,
        DetailModule
    ],
    declarations: [
        BankManageComponent
    ]
})
export class BankManageModule { }
