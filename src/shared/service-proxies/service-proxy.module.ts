import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BsModalService } from 'ngx-bootstrap/modal';
import { TranslateService } from '@ngx-translate/core';
import { SidebarComponent } from 'src/app/admin/containers/layout/sidebar/sidebar.component';







@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  providers:[
    BsModalService,
    TranslateService,
    SidebarComponent

    ]
})
export class ServiceProxyModule { }
