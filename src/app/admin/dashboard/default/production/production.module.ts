import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CatalogModule } from './catalog/catalog.module';
import { SharedModule } from 'src/shared/shared.module';
import { ProductionRoutingModule } from './production-routing.module';
import { ProductionComponent } from './production.component';
import { TranslateService } from '@ngx-translate/core';
// import { ContextMenuService } from 'ngx-contextmenu';
import { BsModalService } from 'ngx-bootstrap/modal';




@NgModule({
  declarations: [ProductionComponent],
  imports: [
    CommonModule,
    CatalogModule,
    //  SharedModule,
    ProductionRoutingModule,
   

  ],
  schemas:[CUSTOM_ELEMENTS_SCHEMA,NO_ERRORS_SCHEMA],
  providers:[BsModalService,TranslateService  ]
})
export class ProductionModule { }
