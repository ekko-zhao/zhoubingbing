import { Routes } from '@angular/router';
import { HeaderComponent } from '../component/header.component';
import { FooterComponent } from '../component/footer.component';
import { RouterChildComponent } from '../component/router.child';
import { RouterChild2Component } from '../component/router.child2';
import { RouterCCViewComponent } from '../component/router.cc.view';
import { CanActivateGuard } from '../services/can.activate.guard';
import { CanActivateChildGuard } from '../services/can.activate.child.guard';
import { CanDeactivateGuard } from '../services/can.deactivate.guard';
import { ResolveGuard } from '../services/resolve.guard';

//console.log(DelayingModule)

export const rootRouterConfig: Routes =[
	{path: '', redirectTo: 'footer', pathMatch: "full" },
	{path:'header/:id', component: HeaderComponent, canActivateChild: [CanActivateChildGuard], children:[
		{path: 'child', component: RouterChildComponent,
			children:[
				{path: '', component: RouterCCViewComponent},
				{path: 'view', component: RouterCCViewComponent, outlet:'aux'}
			]
		},
		{path: 'child2', component: RouterChild2Component, canActivate:[CanActivateGuard]},
		{path: 'view', component: RouterCCViewComponent, outlet:'aux'}
	]},
	{path:'footer', component: FooterComponent},
	{path:'delay', loadChildren:'../delaying.module/delaying.module.ts#DelayingModule'}
	//{path:'footer', component: FooterComponent, canDeactivate:[CanDeactivateGuard]}
]

/*children:[
				{path: 'view', component: RouterCCViewComponent, outlet:'aux'}
			]*/