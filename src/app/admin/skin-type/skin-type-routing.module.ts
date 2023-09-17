import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { SkinTypeComponent } from './skin-type.component';
const routes: Routes = [{

  path: 'skin-type', component: SkinTypeComponent ,




 } ];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SkinTypeRoutingModule { }
