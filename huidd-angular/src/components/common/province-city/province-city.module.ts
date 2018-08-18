import { NgModule } from '@angular/core';
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { ProvinceCityComponent } from './province-city.component';

@NgModule({
    imports: [
        CommonModule,
        FormsModule
    ],
    declarations: [
        ProvinceCityComponent
    ],
    exports: [
        ProvinceCityComponent
    ]
})
export class ProvinceCityModule { }
