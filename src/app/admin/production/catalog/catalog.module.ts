import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreateCategoryDialogComponent } from './categories/create-category/create-category-dialog.component';
import { EditCategoryDialogComponent } from './categories/edit-category/edit-category-dialog.component';
import { CategoryComponent } from './categories/category.component';
import { LayoutModule } from 'src/app/admin/containers/layout/layout.module';
// import { ContextMenuModule, ContextMenuService } from 'ngx-contextmenu';
import { CatalogRoutingModule } from './catalog-routing.module';
import { CatalogComponent } from './catalog.component';
import { BsModalService } from 'ngx-bootstrap/modal';
import { SharedModule } from 'src/shared/shared.module';
import { TranslateService } from '@ngx-translate/core';
import { ProductsComponent } from './products/products.component';
import { CreateProductDialogComponent } from './products/create-product/create-product-dialog.component';
// import { ContextMenuModule } from 'ngx-contextmenu';




@NgModule({
  declarations: [
    CategoryComponent,
    CreateCategoryDialogComponent,
    EditCategoryDialogComponent,
    CatalogComponent,
    ProductsComponent,
    CreateProductDialogComponent,
  ],
  imports: [
    CommonModule,
    LayoutModule,
    // ContextMenuModule,
    CatalogRoutingModule,
    SharedModule


  ],
  schemas:[CUSTOM_ELEMENTS_SCHEMA,NO_ERRORS_SCHEMA],
  providers:[BsModalService,TranslateService  ]
// /,ContextMenuService
})
export class CatalogModule { }
