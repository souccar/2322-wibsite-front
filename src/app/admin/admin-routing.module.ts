import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin.component';

const routes: Routes = [
  {
    path: '',
    component: AdminComponent,
    children: [
      { path: '', pathMatch: 'full', redirectTo: 'production' },

      { path: 'production', loadChildren: () => import('../admin/production/production.module').then(m => m.ProductionModule) },
      { path: 'design', loadChildren: () => import('./design/design.module').then(m => m.DesignModule) }

    ],
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminRoutingModule { }
