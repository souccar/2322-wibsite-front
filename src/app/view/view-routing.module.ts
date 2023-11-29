import { Component, NgModule } from '@angular/core';
import { HomeComponent } from './home/home.component';
import { environment } from 'src/environments/environment';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { ViewNewsComponent } from './view-news/view-news.component';
import { NewsComponent } from './what-is-news/news.component';

import { ProductDetailsComponent } from './product-details/product-details.component';
import { ViewMainComponent } from './view-main/view-main.component';
import { ListOfProductsComponent } from './list-of-products/list-of-products.component';
import { ContactUsHomeCardComponent } from './contact-us-home-card/contact-us-home-card.component';

const adminRoot = environment.adminRoot.substr(1); // path cannot start with a slash

let routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    pathMatch: 'full',
  },


   { path: 'GetNews/:id', component: NewsComponent },


  {
    path: 'admin',
    loadChildren: () => import('../admin/admin.module').then((m) => m.AdminModule),
  },

  {
    path:'news',
    component:ViewNewsComponent
  },
  {
    path:'contactus',
    component:ContactUsHomeCardComponent
  },

  {
    path:'viewProduct/:id/:type',
    component:ListOfProductsComponent
  },

  {
    path:'viewProduct',
    component:ListOfProductsComponent
  },
  {
    path: 'product-details/:id',
    component: ProductDetailsComponent,
  },




];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ViewRoutingModule { }
