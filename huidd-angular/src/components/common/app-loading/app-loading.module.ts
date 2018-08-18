import { NgModule } from '@angular/core';
import { CommonModule } from "@angular/common";
import { AppLoadingComponent } from './app-loading.component';

@NgModule({
    imports: [
        CommonModule
    ],
    declarations: [
        AppLoadingComponent
    ],
    exports: [
        AppLoadingComponent
    ]
})
export class AppLoadingModule { }
