import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './footer/footer.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { BreadcrumbComponent } from './breadcrumb/breadcrumb.component';
import { RouterModule } from '@angular/router';
import { TopnavComponent } from './topnav/topnav.component';

import { FormsModule } from '@angular/forms';
import { CollapseModule } from 'ngx-bootstrap/collapse';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar';
import { TranslateModule } from '@ngx-translate/core';


@NgModule({
  declarations: [
    FooterComponent,
    SidebarComponent,
    BreadcrumbComponent,
    TopnavComponent,
  ],
  imports: [
    RouterModule,
    CommonModule,
    FormsModule,
    PerfectScrollbarModule,
    CollapseModule,
    BsDropdownModule.forRoot(),
    TooltipModule.forRoot(),
    BrowserAnimationsModule,
    TranslateModule
  ],
  exports: [
    FooterComponent,
    SidebarComponent,
    TopnavComponent,
    TranslateModule,
    TopnavComponent
  ],
  schemas:[
    CUSTOM_ELEMENTS_SCHEMA
  ]

})
export class LayoutModule { }
