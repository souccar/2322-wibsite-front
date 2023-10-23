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
import { ContactUsComponent } from './contact-us/contact-us.component';
import { NewsComponent } from './what-is-news/news.component';
import { ComponentsCarouselModule } from '../admin/components/carousel/components.carousel.module';
import { ViewFooterComponent } from './view-footer/view-footer.component';
import { AboutComponent } from './about/about.component';
import { ViewNewsComponent } from './view-news/view-news.component';
import { ListOfProductsComponent } from './list-of-products/list-of-products.component';
import { MainImageComponent } from './main-image/main-image.component';
import { AccordionOfProductComponent } from './accordion-of-product/accordion-of-product.component';
import { MatTreeModule } from '@angular/material/tree';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { ViewProductsComponent } from './view-products/view-products.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { PaginationModule } from 'ngx-bootstrap/pagination';
import { ProductDetailInfoComponent } from './product-detail-info/product-detail-info.component';
import { ProductDetailTabsComponent } from './product-detail-tabs/product-detail-tabs.component';
import { ProfilePhotosComponent } from './profile-photos/profile-photos.component';
import { Lightbox, LightboxConfig, LightboxEvent } from 'ngx-lightbox';
import { LightboxModule } from 'ngx-lightbox';
import { GlideProductComponent } from './glide-product/glide-product.component';
import { CommonModule } from '@angular/common';
import { ViewNavbarComponent } from './view-navbar/view-navbar.component';
import { ViewMainComponent } from './view-main/view-main.component';
import { CarouselModule } from 'ngx-bootstrap/carousel';

@NgModule({
  declarations: [
     HomeComponent,
     ContactUsComponent,
     NewsComponent,
     ViewFooterComponent,
     ContactUsComponent,
     AboutComponent,
     ViewNewsComponent,
     ListOfProductsComponent,
     MainImageComponent,
     AccordionOfProductComponent,
     ViewProductsComponent,
     ProductDetailsComponent,
     ProductDetailInfoComponent,
     ProductDetailTabsComponent,
     ProfilePhotosComponent,
     ViewNavbarComponent,
     ViewMainComponent,


  ],
  imports: [
    ViewRoutingModule,
    SharedModule,
    SharedModule,
    FormsModule,
    TabsModule.forRoot(),
    ScrollToModule.forRoot(),
    PaginationModule.forRoot(),
    PaginationModule.forRoot(),
    TranslateModule,
    LayoutModule,
    CommonModule,
    CommonModule,
    BasicComponentModule,
    ComponentsCarouselModule,
    MatTreeModule,
     MatButtonModule,
     MatIconModule,
     PaginationModule,
     LightboxModule,
     CarouselModule.forRoot()
  ],
  exports:[ViewFooterComponent,ViewNavbarComponent],
  schemas:[
    NO_ERRORS_SCHEMA,

  ],

  providers:[BsModalService],
})
export class ViewModule { }
