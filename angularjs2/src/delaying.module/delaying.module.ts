import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DelayingComponent } from './delaying.component';
import { Delaying2Component } from './delaying2.component';

const delayingRortes: Routes = [
	{path:'', component: DelayingComponent},
	{path:'id', component: Delaying2Component}
]

@NgModule({
	imports: [ RouterModule.forChild(delayingRortes)],
	declarations: [DelayingComponent, Delaying2Component]
	
})
export class DelayingModule{}