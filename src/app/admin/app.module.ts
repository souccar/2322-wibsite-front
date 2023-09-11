import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA, NgModule } from '@angular/core';

import { LayoutModule } from './containers/layout/layout.module';
import { SharedModule } from 'src/shared/shared.module';
import { HttpClientModule } from '@angular/common/http';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { AppRoutingModule } from '../admin/app-routing.module';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';

import { BsModalService } from 'ngx-bootstrap/modal';
import { ProductionModule } from './production/production.module';
import { SkinTypeModule } from './skin-type/skin-type.module';


@NgModule({
  declarations: [
    AppComponent,
    

  ],
  imports: [
     LayoutModule,
    RouterModule,
    SkinTypeModule,
    SharedModule,
    HttpClientModule,
    HttpClientModule,
    TranslateModule.forRoot(),
     AppRoutingModule,
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
