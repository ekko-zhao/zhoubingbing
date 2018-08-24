import { NgModule } from '@angular/core';
import { CommonModule } from "@angular/common";
import { FormsModule } from '@angular/forms';

import { ButtonLoadingModule } from 'src/components/common/button-loading/button-loading.module';

// bootstrap
import { ModalModule } from 'ngx-bootstrap/modal';

import { AddPatternComponent } from './add-pattern.component';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        ModalModule.forRoot(),
        ButtonLoadingModule
    ],
    declarations: [
        AddPatternComponent
    ],
    exports: [
        AddPatternComponent
    ]
})
export class AddPatternModule { }

