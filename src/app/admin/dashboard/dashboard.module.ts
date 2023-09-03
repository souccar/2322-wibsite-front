import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { DefaultComponent } from './default/default.component';
import { SharedModule } from 'src/shared/shared.module';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { LayoutModule } from '../containers/layout/layout.module';
import { DashboardComponent } from './dashboard.component';
@NgModule({
  declarations: [
    DefaultComponent,
    DashboardComponent
  ],
  imports: [
    SharedModule,
    DashboardRoutingModule,
    LayoutModule,



  ],
  exports:[
    DashboardComponent,
  ],

})
export class DashboardModule { }
