import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CreateCategoryDialogComponent } from './categories/create-category/create-category-dialog.component';
import { EditCategoryDialogComponent } from './categories/edit-category/edit-category-dialog.component';
import { CategoryComponent } from './categories/category.component';
import { LayoutModule } from 'src/app/admin/containers/layout/layout.module';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
// import { ContextMenuModule, ContextMenuService } from 'ngx-contextmenu';
import { NgxPaginationModule } from 'ngx-pagination';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CatalogRoutingModule } from './catalog-routing.module';
import { CatalogComponent } from './catalog.component';
import { BsModalService } from 'ngx-bootstrap/modal';
import { SharedModule } from 'src/shared/shared.module';
import { TranslateService } from '@ngx-translate/core';




@NgModule({
  declarations: [
    CategoryComponent,
    CreateCategoryDialogComponent,
    EditCategoryDialogComponent,
    CatalogComponent,
  ],
  imports: [
    CommonModule,
    LayoutModule,
    NgxDatatableModule,
    // ContextMenuModule,
    NgxPaginationModule,
    FormsModule,
    ReactiveFormsModule,
    CatalogRoutingModule,
    SharedModule


  ],
  schemas:[CUSTOM_ELEMENTS_SCHEMA,NO_ERRORS_SCHEMA],
  providers:[BsModalService,TranslateService  ]
// /,ContextMenuService
})
export class CatalogModule { }
