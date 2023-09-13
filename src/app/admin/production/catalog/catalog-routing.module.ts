import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { CatalogComponent } from './catalog.component';
import { CategoryComponent } from './categories/category.component';
import { ProductComponent } from 'src/app/admin/components/product/product.component';
import { SkinTypeComponent } from 'src/app/admin/skin-type/skin-type.component';
import { BrandComponent } from '../../brands/brand.component';
import { NewsComponent } from '../../news/news.component';
const routes: Routes = [{
  path: '', component: CatalogComponent ,
  children:[

    {
      path: 'category',
      component: CategoryComponent,
      //data: { permission : 'Pages.Categories' },
      // canActivate: [AppRouteGuard]
    },
    {
      path: 'product',
      component: ProductComponent,
      //data: { permission : 'Pages.Categories' },
      // canActivate: [AppRouteGuard]
    },
    {
      path: 'skintype',
      component: SkinTypeComponent,
      //data: { permission : 'Pages.Categories' },
      // canActivate: [AppRouteGuard]
    },
    
    {
      path: 'brand',
      component: BrandComponent,
      //data: { permission : 'Pages.Categories' },
      // canActivate: [AppRouteGuard]
    },   
    {
      path: 'news',
      component: NewsComponent,
      //data: { permission : 'Pages.Categories' },
      // canActivate: [AppRouteGuard]
    },
  ]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CatalogRoutingModule { }
