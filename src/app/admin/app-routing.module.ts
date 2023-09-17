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
      { path: 'SkinType', loadChildren: () => import('../admin/skin-type/skin-type.module').then(m => m.SkinTypeModule) },
      { path: 'Brand', loadChildren: () => import('../admin/brands/brand.module').then(m => m.BrandModule) },
      { path: 'News', loadChildren: () => import('../admin/news/news.module').then(m => m.NewsModule) },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
