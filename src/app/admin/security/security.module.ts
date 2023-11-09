import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SecurityRoutingModule } from './security-routing.module';
import { RoleComponent } from './role/role.component';
import { UserModule } from './user/user.module';



@NgModule({
  declarations: [
   
    RoleComponent
  ],
  imports: [
    CommonModule,
    UserModule,
    SecurityRoutingModule
  ]
})
export class SecurityModule { }
