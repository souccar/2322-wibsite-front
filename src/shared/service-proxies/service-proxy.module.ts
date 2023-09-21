import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BsModalService } from 'ngx-bootstrap/modal';
import { TranslateService } from '@ngx-translate/core';
import { SidebarComponent } from 'src/app/admin/containers/layout/sidebar/sidebar.component';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  providers:[
    BsModalService,
    TranslateService,
    SidebarComponent,
    // { provide: HTTP_INTERCEPTORS, useClass: AbpHttpInterceptor, multi: true }

    ]
})
export class ServiceProxyModule { }
