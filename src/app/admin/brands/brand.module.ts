import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/shared/shared.module';
import { LayoutModule } from '../containers/layout/layout.module';
import { BrandComponent } from './brand.component';
import { CreateBrandDialogComponent } from './create-brand/create-brand-dialog.component';


@NgModule({
  declarations: [
    BrandComponent,
    CreateBrandDialogComponent
  ],
  imports: [
      CommonModule,
      SharedModule,
      LayoutModule,

      
  ],
  schemas:[CUSTOM_ELEMENTS_SCHEMA]})
export class BrandModule { }
