import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainImageComponent } from './main-image/main-image.component';
import { ComponentsCarouselModule } from './carousel/components.carousel.module';
import { ProductComponent } from './product/product.component';
import { CarouselModule } from 'ngx-bootstrap/carousel';
import { SharedModule } from 'src/shared/shared.module';
import { FormsModule, FormsModule as FormsModuleAngular } from '@angular/forms';
import { RatingModule } from 'ngx-bootstrap/rating';
import { RatingComponent } from './rating/rating.component';
import { NgxImageZoomModule } from 'ngx-image-zoom';


@NgModule({
  declarations: [
    MainImageComponent,
    ProductComponent,
    RatingComponent,

  ],
  imports: [

    NgxImageZoomModule,
    RatingModule.forRoot(),
    FormsModuleAngular,
    CarouselModule,
    CommonModule,
    ComponentsCarouselModule,
    FormsModule

  ],
  exports:[
    MainImageComponent,
    ProductComponent,


  ],
  schemas:[NO_ERRORS_SCHEMA,CUSTOM_ELEMENTS_SCHEMA]
})
export class BasicComponentModule { }
