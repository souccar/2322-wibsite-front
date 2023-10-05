import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainImageComponent } from './main-image/main-image.component';
import { ComponentsCarouselModule } from './carousel/components.carousel.module';
import { ProductComponent } from './product/product.component';
import { CarouselModule } from 'ngx-bootstrap/carousel';
import { FormsModule, FormsModule as FormsModuleAngular } from '@angular/forms';
import { RatingModule } from 'ngx-bootstrap/rating';
import { RatingComponent } from './rating/rating.component';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { BsModalService } from 'ngx-bootstrap/modal';
import { ListOfProductsComponent } from './list-of-products/list-of-products.component';
import { BasicRoutingModule } from './basic-routing.module';
import { LayoutModule } from '../containers/layout/layout.module';
import { AccordionModule } from 'ngx-bootstrap/accordion';
import { SliderComponent } from './slider/slider.component';

@NgModule({
  declarations: [
    MainImageComponent,
    ProductComponent,
    RatingComponent,
    ListOfProductsComponent,
    SliderComponent,

  ],
  imports: [
    LayoutModule,
    BasicRoutingModule,
    RatingModule.forRoot(),
    FormsModuleAngular,
    CarouselModule,
    CommonModule,
    ComponentsCarouselModule,
    FormsModule,
    TranslateModule.forRoot(),
    AccordionModule

  ],
  exports:[
    MainImageComponent,
    ProductComponent,
    RatingComponent,
    SliderComponent



  ],
  providers:[BsModalService,TranslateService  ],
  schemas:[NO_ERRORS_SCHEMA,CUSTOM_ELEMENTS_SCHEMA]
})
export class BasicComponentModule { }
