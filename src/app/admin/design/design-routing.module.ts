import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { DesignComponent } from './design.component';
import { TemplateComponent } from './templates/template.component';
import { PageComponent } from './pages/page.component';
const routes: Routes = [
  {
    path: '', component: DesignComponent ,
    children:[

      {
        path: 'template',
        component: TemplateComponent,
        //data: { permission : 'Pages.Categories' },
        // canActivate: [AppRouteGuard]
      },
      {
        path: 'page',
        component: PageComponent,
        //data: { permission : 'Pages.Categories' },
        // canActivate: [AppRouteGuard]
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DesignRoutingModule { }
