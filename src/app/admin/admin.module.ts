import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA, NgModule } from '@angular/core';

import { LayoutModule } from './containers/layout/layout.module';
import { SharedModule } from 'src/shared/shared.module';
import { HttpClientModule } from '@angular/common/http';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { RouterModule } from '@angular/router';
import { BsModalService } from 'ngx-bootstrap/modal';
import { ProductionModule } from './production/production.module';
import { SkinTypeModule } from './skin-type/skin-type.module';
import { BrandModule } from './brands/brand.module';
import { NewsModule } from './news/news.module';
import { DesignModule } from './design/design.module';
import { AdminComponent } from './admin.component';
import { AdminRoutingModule } from './admin-routing.module';
import { SummaryPipe } from '../pipes/summary.pipe';
import { LoginComponent } from './auth/login.component';
import { AdminHeaderComponent } from './containers/layout/admin-header/admin-header.component';
import { MainPageComponent } from './main-page/main-page.component';
import { MainPageModule } from './main-page/main-page.module';



@NgModule({
  declarations: [

    AdminComponent,
    LoginComponent,
    MainPageComponent,



  ],
  imports: [
    LayoutModule,
    RouterModule,
    SkinTypeModule,
    SharedModule,
    HttpClientModule,
    HttpClientModule,
    TranslateModule.forRoot(),
    AdminRoutingModule,
    ProductionModule,
    BrandModule,
    NewsModule,
    DesignModule,
    MainPageModule


  ],
  exports: [
    RouterModule,
    AdminHeaderComponent
  ],
  schemas: [
    NO_ERRORS_SCHEMA,
    CUSTOM_ELEMENTS_SCHEMA
  ],
  providers: [BsModalService, TranslateService,

  ]

})
export class AdminModule { }
