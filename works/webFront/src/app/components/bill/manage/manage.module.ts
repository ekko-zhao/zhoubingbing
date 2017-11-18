import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ManageComponent } from './manage.component';
import {CommonModule} from "@angular/common";

const delayingRortes: Routes =[
    {path:'', component: ManageComponent}
]

@NgModule({
	imports: [ RouterModule.forChild(delayingRortes), CommonModule ],
	declarations: [
        ManageComponent
    ]
})
export class ManageModule{}
