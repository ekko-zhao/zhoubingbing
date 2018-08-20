import { NgModule } from '@angular/core';
import { CommonModule } from "@angular/common";
import { UploadImgComponent } from './upload-img.component';

@NgModule({
    imports: [
        CommonModule,
    ],
    declarations: [
        UploadImgComponent
    ],
    exports: [
        UploadImgComponent
    ]
})
export class UploadImgModule { }
