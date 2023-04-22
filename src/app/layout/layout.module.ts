import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LayoutRoutingModule } from './layout-routing.module';
import { NavbarComponent } from './home/navbar/navbar.component';

import { MainComponent } from './home/main/main.component';
import { CarouselComponent } from './home/carousel/carousel.component';
import { CardMissionComponent } from './home/card-mission/card-mission.component';
import { CardBriefcaseComponent } from './home/card-briefcase/card-briefcase.component';
import { SharedRoutingModule } from '../shared/shared-routing.module';
import { FooterComponent } from '../shared/footer/footer.component';
import { DashboardComponent } from './home/dashboard/dashboard.component';



@NgModule({
  declarations: [
    MainComponent,
    NavbarComponent,
    MainComponent,
    CarouselComponent,
    CardMissionComponent,
    CardBriefcaseComponent,
    FooterComponent,
    DashboardComponent
  ],
  imports: [
    CommonModule,
    LayoutRoutingModule,
    SharedRoutingModule,
  ]
})
export class LayoutModule { }
