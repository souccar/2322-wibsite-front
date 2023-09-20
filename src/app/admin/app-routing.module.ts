import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from '../admin/app.component';

const routes: Routes = [
  {
    path: '',
    component: AppComponent,
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
export class AppRoutingModule { }
