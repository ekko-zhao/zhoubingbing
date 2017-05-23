import { Routes } from '@angular/router';
import { HeaderComponent } from '../component/header.component';
import { FooterComponent } from '../component/footer.component';

export const rootRouterConfig: Routes =[
	{path: '', redirectTo: 'header', pathMatch: "full" },
	{path:'header', component: HeaderComponent},
	{path:'footer', component: FooterComponent}
]

