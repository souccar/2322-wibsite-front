import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComponentsCarouselModule } from './carousel/components.carousel.module';
import { CarouselModule } from 'ngx-bootstrap/carousel';
import { FormsModule, FormsModule as FormsModuleAngular } from '@angular/forms';
import { RatingModule } from 'ngx-bootstrap/rating';
import { RatingComponent } from './rating/rating.component';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { BsModalService } from 'ngx-bootstrap/modal';
import { BasicRoutingModule } from './basic-routing.module';
import { LayoutModule } from '../containers/layout/layout.module';
import { AccordionModule } from 'ngx-bootstrap/accordion';


@NgModule({
  declarations: [

    RatingComponent,



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

    RatingComponent,
    ComponentsCarouselModule
  ],
  providers:[BsModalService,TranslateService  ],
  schemas:[NO_ERRORS_SCHEMA,CUSTOM_ELEMENTS_SCHEMA]
})
export class BasicComponentModule { }
