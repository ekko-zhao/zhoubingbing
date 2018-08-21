import { NgModule } from '@angular/core';
import { CommonModule } from "@angular/common";
import { FormsModule } from '@angular/forms';

import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { defineLocale } from 'ngx-bootstrap/bs-moment';
import { zhCn } from 'ngx-bootstrap/locale';
defineLocale('zh-cn', zhCn);

// 公共模块
import { ButtonLoadingModule } from 'src/components/common/button-loading/button-loading.module';
import { GoBackModule } from 'src/components/common/go-back/go-back.module';
import { WrapFormModule } from 'src/components/common/wrap-form/wrap-form.module';
import { UploadImgModule } from 'src/components/common/upload-img/upload-img.module';
import { ProvinceCityModule } from 'src/components/common/province-city/province-city.module';

// directive
import { ZhnameModule } from 'src/directives/zhname/zhname.validator.module';

// 页面
import { DetailBowenComponent } from './detail-bowen.component';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        BsDatepickerModule.forRoot(),
        ButtonLoadingModule,
        GoBackModule,
        ZhnameModule,
        WrapFormModule,
        UploadImgModule,
        ProvinceCityModule
    ],
    declarations: [
        DetailBowenComponent
    ],
    exports: [
        DetailBowenComponent
    ]
})
export class DetailBowenModule { }
