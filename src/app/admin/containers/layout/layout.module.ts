import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { SidebarComponent } from './sidebar/sidebar.component';
import { BreadcrumbComponent } from './breadcrumb/breadcrumb.component';
import { RouterModule } from '@angular/router';
import { TopnavComponent } from './topnav/topnav.component';
import { FormsModule } from '@angular/forms';
import { CollapseModule } from 'ngx-bootstrap/collapse';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { HeadingComponent } from './heading/heading.component';
import { HeadroomModule } from '@ctrl/ngx-headroom';
import { ListPageHeaderComponent } from './list-page-header/list-page-header.component';
import { BsModalService } from 'ngx-bootstrap/modal';
import { AdminHeaderComponent } from './admin-header/admin-header.component';
import { SharedModule } from 'src/shared/shared.module';
import { AdminHeadingComponent } from './admin-heading/admin-heading.component';
import { FooterComponent } from './footer/footer.component';
import { AdminFooterComponent } from './admin-footer/admin-footer.component';


@NgModule({
  declarations: [
    FooterComponent,
    SidebarComponent,
    BreadcrumbComponent,
    TopnavComponent,
    HeadingComponent,
    ListPageHeaderComponent,
    AdminHeaderComponent,
    AdminHeadingComponent,
    AdminFooterComponent
  ],
  imports: [
    RouterModule,
    HeadroomModule,
    PerfectScrollbarModule,
    CollapseModule,
    BsDropdownModule.forRoot(),
    TooltipModule.forRoot(),
    SharedModule


  ],
  exports: [
    FooterComponent,
    SidebarComponent,
    TopnavComponent,
    TopnavComponent,
    BreadcrumbComponent,
    HeadingComponent,
    ListPageHeaderComponent,
    AdminHeaderComponent,
    AdminHeadingComponent,
    AdminFooterComponent

  ]


})
export class LayoutModule { }
