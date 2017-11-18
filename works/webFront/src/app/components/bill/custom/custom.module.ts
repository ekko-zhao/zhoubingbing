import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CustomComponent } from './custom.component';
import {CommonModule} from "@angular/common";

const delayingRortes: Routes =[
    {path:'', component: CustomComponent}
]

@NgModule({
	imports: [ RouterModule.forChild(delayingRortes), CommonModule ],
	declarations: [
        CustomComponent
    ]
})
export class CustomModule{}
