import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from '../app.component';
import { ListOfProductsComponent } from './list-of-products/list-of-products.component';
const routes: Routes = [
  {
    path: 'listOfProduct',
    component: ListOfProductsComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BasicRoutingModule { }
