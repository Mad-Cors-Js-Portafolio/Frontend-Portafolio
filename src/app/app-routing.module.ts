import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NopagesfoundComponent } from './pages/nopagesfound/nopagesfound.component';


const routes: Routes = [
  {path:'', redirectTo: '/dashboard', pathMatch: 'full'},
  {path: 'dashboard', loadChildren:() => import('./layout/layout.module').then(m => m.LayoutModule)},
  {path: 'pages', loadChildren:() => import('./pages/pages.module').then(m => m.PagesModule)},
  {path: '**', component:NopagesfoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes),
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
