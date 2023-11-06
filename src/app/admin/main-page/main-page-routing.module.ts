import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainPageComponent } from './main-page.component';
import { SliderComponent } from './slider/slider.component';


const routes: Routes = [{
  path: '', component: MainPageComponent ,
  children:[

    {
      path: 'images',
      component: SliderComponent,
      //data: { permission : 'Pages.Categories' },
      // canActivate: [AppRouteGuard]
    },
    
  ]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainPageRoutingModule { }
