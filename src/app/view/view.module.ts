import { NO_ERRORS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { ViewRoutingModule } from './view-routing.module';
import { TabsModule } from 'ngx-bootstrap/tabs';
import { ScrollToModule } from '@nicky-lenaers/ngx-scroll-to';
import { HeadroomModule } from '@ctrl/ngx-headroom';


@NgModule({
  declarations: [
     HomeComponent,
  ],
  imports: [
    CommonModule,
    ViewRoutingModule,
    TabsModule.forRoot(),
    ScrollToModule.forRoot(),
    HeadroomModule

    // ComponentsCarouselModule,
  ],
  schemas:[
    NO_ERRORS_SCHEMA
  ]
})
export class ViewModule { }
