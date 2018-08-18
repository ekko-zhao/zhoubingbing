import { NgModule } from '@angular/core';
import { CommonModule } from "@angular/common";
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { PaginationModule } from 'ngx-bootstrap/pagination';

import { AppPaginationComponent } from './app-pagination.component';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        PaginationModule.forRoot(),
    ],
    declarations: [
        AppPaginationComponent
    ],
    exports: [
        AppPaginationComponent
    ]
})
export class AppPaginationModule { }
