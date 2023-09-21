import {
  CUSTOM_ELEMENTS_SCHEMA,
  NO_ERRORS_SCHEMA,
  NgModule,
} from '@angular/core';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { CollapseModule } from 'ngx-bootstrap/collapse';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { BsModalService, ModalModule } from 'ngx-bootstrap/modal';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { AbpModalHeaderComponent } from './modal/abp-modal-header.component';
import { AbpModalFooterComponent } from './modal/abp-modal-footer.component';
import { AbpValidationSummaryComponent } from './validations/abp-validation-summary.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { PaginationModule } from 'ngx-bootstrap/pagination';
import { NgxDropzoneModule } from 'ngx-dropzone';
import { TabsModule } from 'ngx-bootstrap/tabs';
import { ContextMenuModule } from '@perfectmemory/ngx-contextmenu';



@NgModule({
  declarations: [
    AbpModalHeaderComponent,
    AbpModalFooterComponent,
    AbpValidationSummaryComponent,
  ],

  imports: [
    RouterModule,
    ContextMenuModule.forRoot({
      useBootstrap4: true,
    }),
    TranslateModule.forRoot(),
    BsDropdownModule.forRoot(),
    CollapseModule.forRoot(),
    ModalModule.forRoot(),
    ReactiveFormsModule,
    NgxDatatableModule,
    NgxPaginationModule,
    PaginationModule.forRoot(),
    FormsModule,
    ReactiveFormsModule,
    NgxDatatableModule,
    NgxDropzoneModule,
    NgxDatatableModule,
    NgxDropzoneModule,
    TabsModule.forRoot(),
  ],
  exports: [
    RouterModule,
    TranslateModule,
    AbpModalHeaderComponent,
    AbpModalFooterComponent,
    AbpValidationSummaryComponent,
    NgxDropzoneModule,
    NgxDropzoneModule,
    ReactiveFormsModule,
    NgxDatatableModule,
    NgxPaginationModule,
    FormsModule,
    ReactiveFormsModule,
    TabsModule,
    ContextMenuModule
  ],

  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class SharedModule {}

