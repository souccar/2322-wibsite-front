import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { ContextMenuModule } from 'ngx-contextmenu';
import { AbpModalHeaderComponent } from './modal/abp-modal-header.component';
import { AbpModalFooterComponent } from './modal/abp-modal-footer.component';
import { AbpValidationSummaryComponent } from './validations/abp-validation-summary.component';

@NgModule({
  declarations:
   [

    AbpModalHeaderComponent,
    AbpModalFooterComponent,
    AbpValidationSummaryComponent
  ]
  ,
  imports: [
    ContextMenuModule,
    // ContextMenuModule.forRoot({
    //   useBootstrap4: true,
    // }),
    RouterModule,
    TranslateModule,
    NgxDatatableModule,
  ],
  exports: [
    RouterModule,
    TranslateModule,
    AbpModalHeaderComponent,
    AbpModalFooterComponent,
    AbpValidationSummaryComponent
  ],

})
export class SharedModule {}
