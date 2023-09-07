import { SharedModule } from './../../shared/shared.module';
import { NO_ERRORS_SCHEMA, NgModule } from '@angular/core';
import { HomeComponent } from './home/home.component';
import { ViewRoutingModule } from './view-routing.module';
import { TabsModule } from 'ngx-bootstrap/tabs';
import { ScrollToModule } from '@nicky-lenaers/ngx-scroll-to';
import { HeadroomModule } from '@ctrl/ngx-headroom';
import { LayoutModule } from '../admin/containers/layout/layout.module';
import { CommonModule } from '@angular/common';
import { BasicComponentModule } from '../admin/components/basic-component.module';
@NgModule({
  declarations: [
     HomeComponent,
  ],
  imports: [
    ViewRoutingModule,
    // SharedModule,
    CommonModule,
    TabsModule.forRoot(),
    ScrollToModule.forRoot(),
    HeadroomModule,
    LayoutModule,
    BasicComponentModule,


  ],
  schemas:[
    NO_ERRORS_SCHEMA
  ]
})
export class ViewModule { }
