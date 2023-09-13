import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BsModalService } from 'ngx-bootstrap/modal';
import { TranslateService } from '@ngx-translate/core';





@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  providers:[
    BsModalService,
    TranslateService,
    
    ]
})
export class ServiceProxyModule { }
