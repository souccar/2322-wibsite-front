import { Component, NgModule } from '@angular/core';
import { HomeComponent } from './home/home.component';
import { environment } from 'src/environments/environment';
import { RouterModule, Routes } from '@angular/router';
import { MainImageComponent } from '../admin/components/main-image/main-image.component';
import { ProductComponent } from '../admin/components/product/product.component';
import { AboutComponent } from './about/about.component';
import { ViewNewsComponent } from './view-news/view-news.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
const adminRoot = environment.adminRoot.substr(1); // path cannot start with a slash

let routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    pathMatch: 'full',
  },
   
   { path: 'contactUs', component: ContactUsComponent },

  
  {
    path: 'app',
    loadChildren: () => import('../admin/app.module').then((m) => m.AppModule),
  },
  {
    path:'about',
    component:AboutComponent
  },
  {
    path:'news',
    component:ViewNewsComponent
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ViewRoutingModule { }
