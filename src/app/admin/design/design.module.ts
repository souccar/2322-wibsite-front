import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DesignComponent } from './design.component';
import { DesignRoutingModule } from './design-routing.module';
import { PageComponent } from './pages/page.component';
import { TemplateComponent } from './templates/template.component';
import { CreatePageDialogComponent } from './pages/create-page/create-page-dialog.component';
import { SharedModule } from 'src/shared/shared.module';
import { LayoutModule } from '../containers/layout/layout.module';
import { CreateTemplateDialogComponent } from './templates/create-template/create-template-dialog.component';
import { AddPageTemplateDialogComponent } from './pages/add-page-template/add-page-template-dialog.component';



@NgModule({
  declarations: [
    DesignComponent,
    PageComponent,
    TemplateComponent,
    CreatePageDialogComponent,
    CreateTemplateDialogComponent,
    AddPageTemplateDialogComponent,

  ],
  imports: [
    CommonModule,
    DesignRoutingModule,
    SharedModule,
    LayoutModule
  ],
  schemas:[CUSTOM_ELEMENTS_SCHEMA]
})
export class DesignModule { }
