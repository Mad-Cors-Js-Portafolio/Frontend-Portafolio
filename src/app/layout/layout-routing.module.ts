import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ContactUsComponent } from '../pages/contact-us/contact-us.component';
import { MainComponent } from './home/main/main.component';
import { DashboardComponent } from './home/dashboard/dashboard.component';

const routes: Routes = [
   {path:'', component:MainComponent,

    children:[ 
      {path: '',component:DashboardComponent},
      {path: 'contact',component:ContactUsComponent}]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [
    RouterModule,
  ]
})
export class LayoutRoutingModule { }
