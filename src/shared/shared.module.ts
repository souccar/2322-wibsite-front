
import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA, NgModule } from '@angular/core';
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

@NgModule({
  declarations:
    [

      AbpModalHeaderComponent,
      AbpModalFooterComponent,
      AbpValidationSummaryComponent,
    ]
  ,
  imports: [
    RouterModule,
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
   NgxDropzoneModule
  ],
  exports: [
    RouterModule,
    TranslateModule,
    AbpModalHeaderComponent,
    AbpModalFooterComponent,
    AbpValidationSummaryComponent,
    NgxDropzoneModule,
,
    ReactiveFormsModule,
    NgxDatatableModule,
    NgxPaginationModule,
    FormsModule,
    ReactiveFormsModule,

  ],
schemas:[
  CUSTOM_ELEMENTS_SCHEMA
]
})
export class SharedModule { }
