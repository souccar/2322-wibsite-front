import {  NgModule } from '@angular/core';
import { DefaultComponent } from './default/default.component';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { LayoutModule } from '../containers/layout/layout.module';
import { DashboardComponent } from './dashboard.component';
import { BasicComponentModule } from '../components/basic-component.module';
import { BsModalService } from 'ngx-bootstrap/modal';


@NgModule({
  declarations: [
    DefaultComponent,
    DashboardComponent
  ],
  imports: [
    DashboardRoutingModule,
    LayoutModule,
    BasicComponentModule,



  ],
  exports:[
    DashboardComponent,
  ],
  providers:[BsModalService ]

})
export class DashboardModule { }
