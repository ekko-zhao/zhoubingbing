import { NgModule } from '@angular/core';
import { CommonModule } from "@angular/common";
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

// bootstrap
import { TooltipModule } from 'ngx-bootstrap/tooltip';

// 公共模块
import { ButtonLoadingModule } from 'src/components/common/button-loading/button-loading.module';
import { AppPaginationModule } from 'src/components/common/app-pagination/app-pagination.module';

// directive
import { DomEllipsisModule } from 'src/directives/dom-ellipsis/auto-visible.module';

// 页面
import { AccountComponent } from './account.component';
import { AddComponent } from './add/add.component';
import { AddModule } from './add/add.module';
import { DetailComponent } from './detail/detail.component';
import { DetailModule } from './detail/detail.module';


const delayingRortes: Routes = [
    { path: '', component: AccountComponent },
    { path: 'add', component: AddComponent },
    { path: 'config/:id', component: DetailComponent }
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
        AddModule,
        DetailModule
    ],
    declarations: [
        AccountComponent
    ]
})
export class AccountModule { }
