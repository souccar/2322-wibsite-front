import { Component, NgModule } from '@angular/core';
import { HomeComponent } from './home/home.component';
import { environment } from 'src/environments/environment';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { ViewNewsComponent } from './view-news/view-news.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { NewsComponent } from './what-is-news/news.component';
import { ViewProductsComponent } from './view-products/view-products.component';
import { ProductDetailsComponent } from './product-details/product-details.component';

const adminRoot = environment.adminRoot.substr(1); // path cannot start with a slash

let routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    pathMatch: 'full',
  },

   { path: 'contactUs', component: ContactUsComponent },
   { path: 'GetNews/:id', component: NewsComponent },


  {
    path: 'admin',
    loadChildren: () => import('../admin/admin.module').then((m) => m.AdminModule),
  },
  {
    path:'about',
    component:AboutComponent
  },
  {
    path:'news',
    component:ViewNewsComponent
  },
  {
    path: 'viewProducts',
    component: ViewProductsComponent,
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
