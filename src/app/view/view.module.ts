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
     ProductDetailsComponent

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
    ComponentsCarouselModule,
    MatTreeModule,
     MatButtonModule,
     MatIconModule


  ],
  exports:[ViewFooterComponent],
  schemas:[
    NO_ERRORS_SCHEMA
  ],
  providers:[BsModalService],
})
export class ViewModule { }
