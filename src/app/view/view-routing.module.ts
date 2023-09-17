import { Component, NgModule } from '@angular/core';
import { HomeComponent } from './home/home.component';
import { environment } from 'src/environments/environment';
import { RouterModule, Routes } from '@angular/router';
import { ListOfProductsComponent } from './list-of-products/list-of-products.component';
import { ProductComponent } from './product/product.component';
import { DisplayNewsComponent } from './display-news/display-news.component';
const adminRoot = environment.adminRoot.substr(1); // path cannot start with a slash

let routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    pathMatch: 'full',
  },
  {
    path: 'app',
    loadChildren: () => import('../admin/app.module').then((m) => m.AppModule),
  },
  {
    path: 'listOfProduct',
    component: ListOfProductsComponent,
  },
  {
    path: 'product',
    component: ProductComponent,
  },
  {
    path: 'displaynews',
    component: DisplayNewsComponent,
  },
  // {
  //   path:'product',
  //   component:ProductComponent
  // }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ViewRoutingModule { }
