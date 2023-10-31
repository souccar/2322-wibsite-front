import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/shared/shared.module';
import { BsModalService } from 'ngx-bootstrap/modal';
import { TranslateService } from '@ngx-translate/core';
import { MainPageRoutingModule } from './main-page-routing.module';
import { LayoutModule } from '../containers/layout/layout.module';
import { SliderComponent } from './slider/slider.component';
import { CreateSliderDialogComponent } from './slider/create-slider/create-slider-dialog.component';
import { EditSliderDialogComponent } from './slider/edit-slider/edit-slider-dialog.component';



@NgModule({
  declarations: [
  
  
       SliderComponent,
       CreateSliderDialogComponent,
       EditSliderDialogComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    MainPageRoutingModule,
    LayoutModule,
  ],
  schemas:[CUSTOM_ELEMENTS_SCHEMA,NO_ERRORS_SCHEMA],
  providers:[BsModalService,TranslateService  ]
})
export class MainPageModule { }
