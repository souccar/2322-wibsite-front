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
import { SummaryPipe } from 'src/app/pipes/summary.pipe';
import { ComponentsCarouselModule } from 'src/app/admin/components/carousel/components.carousel.module';
import { CommonModule } from '@angular/common';
import { ComponentsPlayerModule } from 'src/app/admin/components/player/components.player.module';
import { StateButtonComponent } from './state-button/state-button.component';
import { ComponentsStateButtonModule } from './state-button/components.state-button.module';




@NgModule({
  declarations: [
    AbpModalHeaderComponent,
    AbpModalFooterComponent,
    AbpValidationSummaryComponent,
    SummaryPipe,

  ],

  imports: [
    RouterModule,
    CommonModule,
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
    NgxDropzoneModule,
    NgxDropzoneModule,
    TabsModule.forRoot(),
    ComponentsCarouselModule,
    ComponentsPlayerModule,
    ComponentsStateButtonModule
  ],
  exports: [
    RouterModule,
    TranslateModule,
    AbpModalHeaderComponent,
    AbpModalFooterComponent,
    AbpValidationSummaryComponent,
    NgxDropzoneModule,
    ComponentsPlayerModule,
    ReactiveFormsModule,
    NgxDatatableModule,
    NgxPaginationModule,
    FormsModule,
    ReactiveFormsModule,
    TabsModule,
    ContextMenuModule,
    SummaryPipe,
    ComponentsStateButtonModule,
  ],

  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class SharedModule {}

