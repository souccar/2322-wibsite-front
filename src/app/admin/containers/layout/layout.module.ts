import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';

import { FooterComponent } from './footer/footer.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { BreadcrumbComponent } from './breadcrumb/breadcrumb.component';
import { RouterModule } from '@angular/router';
import { TopnavComponent } from './topnav/topnav.component';
import { FormsModule } from '@angular/forms';
import { CollapseModule } from 'ngx-bootstrap/collapse';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar';
import { TranslateModule } from '@ngx-translate/core';
import { HeadingComponent } from './heading/heading.component';
import { ListPageHeaderComponent } from './list-page-header/list-page-header.component';


@NgModule({
  declarations: [
    FooterComponent,
    SidebarComponent,
    BreadcrumbComponent,
    TopnavComponent,
    HeadingComponent,
    ListPageHeaderComponent
  ],
  imports: [
    RouterModule,
    FormsModule,
    PerfectScrollbarModule,
    CollapseModule,
    BsDropdownModule.forRoot(),
    TooltipModule.forRoot(),
    TranslateModule
  ],
  exports: [
    FooterComponent,
    SidebarComponent,
    TopnavComponent,
    TranslateModule,
    TopnavComponent,
    BreadcrumbComponent,
    HeadingComponent,
    ListPageHeaderComponent

  ],


})
export class LayoutModule { }
