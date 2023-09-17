import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/shared/shared.module';
import { LayoutModule } from '../containers/layout/layout.module';
import { BrandComponent } from './brand.component';
import { CreateBrandDialogComponent } from './create-brand/create-brand-dialog.component';
import { EditBrandDialogComponent } from './edit-brand/edit-brand-dialog.component';
import { BrandsRoutingModule } from './brands-routing.module';


@NgModule({
  declarations: [
    BrandComponent,
    CreateBrandDialogComponent,
    EditBrandDialogComponent
  ],
  imports: [
      CommonModule,
      SharedModule,
      LayoutModule,
      BrandsRoutingModule


  ],
  schemas:[CUSTOM_ELEMENTS_SCHEMA]})
export class BrandModule { }
