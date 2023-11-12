import { Component, OnInit } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { ToastrService } from 'ngx-toastr';
import { AppComponentBase } from 'src/shared/app-component-base';
import { UserService } from 'src/shared/services/user/user.service';

@Component({
  selector: 'app-edit-user-dialog',
  templateUrl: './edit-user-dialog.component.html',

})
export class EditUserDialogComponent implements OnInit  {
  id:number;
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
 
 constructor(  public _userService: UserService,
  public bsModalRef: BsModalRef,private toastr: ToastrService){

  }
}
