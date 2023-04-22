import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesRoutingModule } from './pages-routing.module';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { LayoutRoutingModule } from '../layout/layout-routing.module';
import { NopagesfoundComponent } from './nopagesfound/nopagesfound.component';


@NgModule({
  declarations: [
    ContactUsComponent,
    NopagesfoundComponent
  ],
  imports: [
    CommonModule,
    PagesRoutingModule,
    LayoutRoutingModule,
  ]
})
export class PagesModule { }
