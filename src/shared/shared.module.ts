
import { NgModule } from '@angular/core';
import {  ReactiveFormsModule } from '@angular/forms';

import { RouterModule } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { CollapseModule } from 'ngx-bootstrap/collapse';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { ModalModule } from 'ngx-bootstrap/modal';

@NgModule({
  declarations:
   [
    // ErrorComponent
   ]
  ,
  imports: [
    RouterModule,
    TranslateModule,
    BsDropdownModule.forRoot(),
    CollapseModule.forRoot(),
    ModalModule.forRoot(),
    ReactiveFormsModule,
    
  ],
  exports: [
    RouterModule,
    TranslateModule,
    // ErrorComponent,
    BsDropdownModule,
    CollapseModule,
  ],
})
export class SharedModule {}
