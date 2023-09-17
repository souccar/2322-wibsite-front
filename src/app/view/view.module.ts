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
import { MainImageComponent } from './main-image/main-image.component';
import { ProductComponent } from './product/product.component';
import { ListOfProductsComponent } from './list-of-products/list-of-products.component';
import { DisplayNewsComponent } from './display-news/display-news.component';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
@NgModule({
  declarations: [
     HomeComponent,
     MainImageComponent,
     ProductComponent,
     ListOfProductsComponent,
     DisplayNewsComponent,

  ],
  imports: [
    ViewRoutingModule,
    // SharedModule,
    CommonModule,
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
  exports:[   MainImageComponent,
    ProductComponent,
    ListOfProductsComponent,],
  providers:[BsModalService],
})
export class ViewModule { }
