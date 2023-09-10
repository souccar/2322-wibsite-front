import { SharedModule } from './../../shared/shared.module';
import { NO_ERRORS_SCHEMA, NgModule } from '@angular/core';
import { HomeComponent } from './home/home.component';
import { ViewRoutingModule } from './view-routing.module';
import { TabsModule } from 'ngx-bootstrap/tabs';
import { ScrollToModule } from '@nicky-lenaers/ngx-scroll-to';

import { LayoutModule } from '../admin/containers/layout/layout.module';


import { FormsModule } from '@angular/forms';
import { BasicComponentModule } from '../admin/components/basic-component.module';
import { BsModalService } from 'ngx-bootstrap/modal';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
@NgModule({
  declarations: [
     HomeComponent,

  ],
  imports: [
    ViewRoutingModule,
    // SharedModule,
    FormsModule,
    TabsModule.forRoot(),
    ScrollToModule.forRoot(),
    TranslateModule,
    LayoutModule,
    BasicComponentModule,
    // TranslateModule.forRoot(),

  ],
  schemas:[
    NO_ERRORS_SCHEMA
  ],
  providers:[BsModalService],
})
export class ViewModule { }
