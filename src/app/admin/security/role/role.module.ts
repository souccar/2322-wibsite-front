import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreateRoleDialogComponent } from './create-role/create-role-dialog.component';
import { EditRoleDialogComponent } from './edit-role/edit-role-dialog.component';



@NgModule({
  declarations: [
    CreateRoleDialogComponent,
    EditRoleDialogComponent
  ],
  imports: [
    CommonModule
  ]
})
export class RoleModule { }
