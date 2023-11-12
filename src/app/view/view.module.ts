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
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { HomeMainImageComponent } from './home-main-image/home-main-image.component';
import { CategoryCardComponent } from './category-card/category-card.component';
import { NewsHomeCardComponent } from './news-home-card/news-home-card.component';
import { ProductsHomeCardComponent } from './products-home-card/products-home-card.component';
import { RecommendedProductsHomeCardComponent } from './recommended-products-home-card/recommended-products-home-card.component';
import { ContactUsHomeCardComponent } from './contact-us-home-card/contact-us-home-card.component';
import { ContactNumbersHomeCardComponent } from './contact-numbers-home-card/contact-numbers-home-card.component';
import { VideoHomeCardComponent } from './video-home-card/video-home-card.component';
import { FooterComponent } from '../admin/containers/layout/footer/footer.component';

@NgModule({
  declarations: [
     HomeComponent,
     NewsComponent,
     ViewFooterComponent,
     AboutComponent,
     ViewNewsComponent,
     ListOfProductsComponent,
     MainImageComponent,
     AccordionOfProductComponent,
     ProductDetailsComponent,
     ProductDetailInfoComponent,
     ProductDetailTabsComponent,
     ProfilePhotosComponent,
     ViewNavbarComponent,
     ViewMainComponent,
     HomeMainImageComponent,
     CategoryCardComponent,
     NewsHomeCardComponent,
     ProductsHomeCardComponent,
     RecommendedProductsHomeCardComponent,
     ContactUsHomeCardComponent,
     ContactNumbersHomeCardComponent,
     VideoHomeCardComponent,
    


  ],
  imports: [
    ViewRoutingModule,
    SharedModule,
    FormsModule,
    TabsModule.forRoot(),
    ScrollToModule.forRoot(),
    PaginationModule.forRoot(),
    BsDropdownModule.forRoot(),
    TranslateModule,
    LayoutModule,
    CommonModule,
    BasicComponentModule,
    ComponentsCarouselModule,
    MatTreeModule,
     MatButtonModule,
     MatIconModule,
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
