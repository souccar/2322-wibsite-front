import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA, NgModule } from '@angular/core';

import { LayoutModule } from './containers/layout/layout.module';
import { SharedModule } from 'src/shared/shared.module';
import { HttpClientModule } from '@angular/common/http';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { AppRoutingModule } from '../admin/app-routing.module';
import { DashboardModule } from './dashboard/dashboard.module';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { ProductionModule } from './dashboard/default/production/production.module';
import { BsModalService } from 'ngx-bootstrap/modal';


@NgModule({
  declarations: [
    AppComponent,
    

  ],
  imports: [
     LayoutModule,
    RouterModule,
    SharedModule,
    HttpClientModule,
    HttpClientModule,
    TranslateModule.forRoot(),
     AppRoutingModule,
     DashboardModule,
     ProductionModule

  ],
  exports:[
    RouterModule
  ],
  schemas:[
    NO_ERRORS_SCHEMA,
    CUSTOM_ELEMENTS_SCHEMA
  ],
  providers:[BsModalService,TranslateService]

})
export class AppModule { }
