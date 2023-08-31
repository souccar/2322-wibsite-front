import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard.component';
import { DefaultComponent } from './default/default.component';



const routes: Routes = [
  {
    path: '/dashboard',
    component: DashboardComponent,
    children: [
      { path: '', pathMatch: 'full' },
      {
        path: 'default',
        component: DefaultComponent,
        // data: { roles: [UserRole.Admin] },
      },

    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DashboardRoutingModule { }
