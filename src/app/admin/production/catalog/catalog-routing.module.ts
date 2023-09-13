import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { CatalogComponent } from './catalog.component';
import { CategoryComponent } from './categories/category.component';
import { ProductComponent } from 'src/app/admin/components/product/product.component';
import { ProductsComponent } from './products/products.component';
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
      component: ProductsComponent,
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
