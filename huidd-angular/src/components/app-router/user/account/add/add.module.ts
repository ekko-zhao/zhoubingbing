import { NgModule } from '@angular/core';
import { CommonModule } from "@angular/common";
import { FormsModule } from '@angular/forms';

// 公共模块
import { LeftRightFrameModule } from "src/components/common/left-right.frame/left-right.frame.module";
import { TitleInfoModule } from "src/components/common/title-info/title-info.module";
import { ButtonLoadingModule } from 'src/components/common/button-loading/button-loading.module';
import { GoBackModule } from 'src/components/common/go-back/go-back.module';
import { WrapFormModule } from 'src/components/common/wrap-form/wrap-form.module';

// directive
import { ZhnameModule } from 'src/directives/zhname/zhname.validator.module';

// 页面
import { AddComponent } from './add.component';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        LeftRightFrameModule,
        TitleInfoModule,
        ButtonLoadingModule,
        GoBackModule,
        ZhnameModule,
        WrapFormModule,
    ],
    declarations: [
        AddComponent
    ],
    exports: [
        AddComponent
    ]
})
export class AddModule { }
