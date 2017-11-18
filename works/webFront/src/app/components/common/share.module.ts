import { NgModule } from '@angular/core';
import { CommonModule } from "@angular/common";
import { FormsModule } from '@angular/forms';

import { ModalModule } from 'ngx-bootstrap/modal';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { PaginationModule } from 'ngx-bootstrap/pagination';
import { TabsModule } from 'ngx-bootstrap/tabs';
import { PopoverModule } from 'ngx-bootstrap/popover';

import { AppPaginationComponent } from '@myCommon/app-pagination/app-pagination.component';
import { AppModalComponent } from '@myCommon/app-modal/app-modal.component';
import { TableCustomComponent } from '@myCommon/table-custom/table-custom.component';
import { MobileCodeComponent } from '@myCommon/mobile-code/mobile-code.component';
import { ListMerchantComponent } from '@myCommon/list-merchant/list-merchant.component';
import { ListTerminalComponent } from '@myCommon/list-terminal/list-terminal.component';
import { TranTypeComponent } from '@myCommon/tran-type/tran-type.component';


// 初始化日期语言
import { defineLocale } from 'ngx-bootstrap/bs-moment';
import { zhCn } from 'ngx-bootstrap/locale';
defineLocale('zh-cn', zhCn);

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        ModalModule.forRoot(),
        BsDropdownModule.forRoot(),
        BsDatepickerModule.forRoot(),
        PaginationModule.forRoot(),
        TabsModule.forRoot(),
        PopoverModule.forRoot(),
    ],
    declarations: [
        AppPaginationComponent,
        AppModalComponent,
        TableCustomComponent,
        MobileCodeComponent,
        ListMerchantComponent,
        ListTerminalComponent,
        TranTypeComponent
    ],
    exports: [
        CommonModule,
        FormsModule,
        ModalModule,
        BsDropdownModule,
        BsDatepickerModule,
        PaginationModule,
        TabsModule,
        PopoverModule,
        AppPaginationComponent,
        AppModalComponent,
        TableCustomComponent,
        MobileCodeComponent,
        ListMerchantComponent,
        ListTerminalComponent,
        TranTypeComponent
    ]
})
export class SharedModule { }
