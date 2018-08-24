import { NgModule } from '@angular/core';
import { CommonModule } from "@angular/common";
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

// bootstrap
import { TooltipModule } from 'ngx-bootstrap/tooltip';

// 公共模块
import { ButtonLoadingModule } from 'src/components/common/button-loading/button-loading.module';
import { AppPaginationModule } from 'src/components/common/app-pagination/app-pagination.module';

// 页面
import { PatternManageComponent } from './pattern-manage.component';
import { AddGroupModule } from './add-group/add-group.module';
import { AddPatternModule } from './add-pattern/add-pattern.module';

const delayingRortes: Routes = [
    { path: '', component: PatternManageComponent }
]

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        RouterModule.forChild(delayingRortes),
        TooltipModule.forRoot(),
        ButtonLoadingModule,
        AppPaginationModule,
        AddGroupModule,
        AddPatternModule
    ],
    declarations: [
        PatternManageComponent
    ]
})
export class PatternManageModule { }
