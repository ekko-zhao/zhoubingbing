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
import { GenreManageComponent } from './genre-manage.component';
import { AddComponent } from './add/add.component';
import { AddModule } from './add/add.module';
import { EditComponent } from './edit/edit.component';
import { EditModule } from './edit/edit.module';

const delayingRortes: Routes = [
    { path: '', component: GenreManageComponent },
    { path: 'add', component: AddComponent },
    { path: 'edit/:id', component: EditComponent }
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
        EditModule
    ],
    declarations: [
        GenreManageComponent
    ]
})
export class GenreManageModule { }
