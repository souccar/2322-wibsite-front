import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/shared/shared.module';
import { LayoutModule } from '../../containers/layout/layout.module';
import { UserComponent } from './user.component';
import { CreateUserDialogComponent } from './create-user/create-user-dialog.component';
import { EditUserDialogComponent } from './edit-user/edit-user-dialog.component';



@NgModule({
  declarations: [
     UserComponent,
    CreateUserDialogComponent,
    EditUserDialogComponent,],
  imports: [
    CommonModule,
    SharedModule,
    LayoutModule,
  ]
  ,schemas:[CUSTOM_ELEMENTS_SCHEMA]
})
export class UserModule { }
