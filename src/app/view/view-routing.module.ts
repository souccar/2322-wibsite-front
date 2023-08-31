import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { environment } from 'src/environments/environment';
import { RouterModule, Routes } from '@angular/router';
const adminRoot = environment.adminRoot.substr(1); // path cannot start with a slash

let routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    pathMatch: 'full',
  },
  {
    path: adminRoot,
    loadChildren: () => import('../admin/app.module').then((m) => m.AppModule),
    // data: { roles: [UserRole.Admin, UserRole.Editor] },
    // canActivate: [AuthGuard],
    // canActivateChild: [AuthGuard],
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ViewRoutingModule { }
