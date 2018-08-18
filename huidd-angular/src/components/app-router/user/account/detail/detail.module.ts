import { NgModule } from '@angular/core';
import { CommonModule } from "@angular/common";
import { FormsModule } from '@angular/forms';

// 公共模块
import { LeftRightFrameModule } from "src/components/common/left-right.frame/left-right.frame.module";
import { TitleInfoModule } from "src/components/common/title-info/title-info.module";
import { ButtonLoadingModule } from 'src/components/common/button-loading/button-loading.module';
import { GoBackModule } from 'src/components/common/go-back/go-back.module';

// 页面
import { DetailComponent } from './detail.component';

// directive
import { ZhnameModule } from 'src/directives/zhname/zhname.validator.module';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        LeftRightFrameModule,
        TitleInfoModule,
        ButtonLoadingModule,
        GoBackModule,
        ZhnameModule,
    ],
    declarations: [
        DetailComponent
    ],
    exports: [
        DetailComponent
    ]
})
export class DetailModule { }
