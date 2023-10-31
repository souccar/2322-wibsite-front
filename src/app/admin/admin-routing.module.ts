import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin.component';
import { LoginComponent } from './auth/login.component';

const routes: Routes = [
  {
    path: '',
    component: AdminComponent,
    children: [
      { path: '', pathMatch: 'full', redirectTo: 'production' },

      { path: 'production', loadChildren: () => import('../admin/production/production.module').then(m => m.ProductionModule) },
      { path: 'design', loadChildren: () => import('./design/design.module').then(m => m.DesignModule) },
      { path: 'mainPage', loadChildren: () => import('./main-page/main-page.module').then(m => m.MainPageModule) }

    ],
  },


];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminRoutingModule { }
