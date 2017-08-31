import { Routes } from '@angular/router';
import { HeaderComponent } from '../components/header.component';
import { FooterComponent } from '../components/footer.component';

//console.log(DelayingModule)

export const rootRouterConfig: Routes =[
	{path: '', redirectTo: 'footer', pathMatch: "full" },
	{path:'header', component: HeaderComponent},
	{path:'footer', component: FooterComponent},
]
