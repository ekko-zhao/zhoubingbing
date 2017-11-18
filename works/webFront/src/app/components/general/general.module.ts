import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GeneralComponent } from './general.component';
import {CommonModule} from "@angular/common";

const delayingRortes: Routes =[
    {path:'', component: GeneralComponent}
]

@NgModule({
	imports: [ RouterModule.forChild(delayingRortes), CommonModule ],
	declarations: [
        GeneralComponent
    ]
})
export class GeneralModule{}
