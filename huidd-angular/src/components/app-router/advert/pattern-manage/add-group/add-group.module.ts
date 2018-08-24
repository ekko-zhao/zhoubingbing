import { NgModule } from '@angular/core';
import { CommonModule } from "@angular/common";
import { FormsModule } from '@angular/forms';

import { ButtonLoadingModule } from 'src/components/common/button-loading/button-loading.module';

// bootstrap
import { ModalModule } from 'ngx-bootstrap/modal';

import { AddGroupComponent } from './add-group.component';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        ModalModule.forRoot(),
        ButtonLoadingModule
    ],
    declarations: [
        AddGroupComponent
    ],
    exports: [
        AddGroupComponent
    ]
})
export class AddGroupModule { }

