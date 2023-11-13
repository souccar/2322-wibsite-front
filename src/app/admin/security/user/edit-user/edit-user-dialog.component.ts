import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { ToastrService } from 'ngx-toastr';
import { finalize } from 'rxjs';
import { AppComponentBase } from 'src/shared/app-component-base';
import { CreateUpdateUserDto } from 'src/shared/service-proxies/service-proxies';
import { UserService } from 'src/shared/services/user/user.service';

@Component({
  selector: 'app-edit-user-dialog',
  templateUrl: './edit-user-dialog.component.html',

})
export class EditUserDialogComponent implements OnInit {
  id:number;
  saving = false;
  user = new CreateUpdateUserDto();
  @Output() onSave = new EventEmitter<any>();
  constructor(
    public _userService: UserService,
    public bsModalRef: BsModalRef,private toastr: ToastrService
  ) {
    
  }
  ngOnInit(): void {
    this.initUser();
  }

  initUser(){
    this._userService.getById(this.id).subscribe((result:any) => {
      console.log(result)
      this.user=result.result;
    });
  }




  save(): void {
    this.saving = true;
    console.log(this.user)
    this._userService
      .edit(this.id,
        this.user
      )
      .pipe(
        finalize(() => {
          this.saving = false;
        })
      )
      .subscribe((responce:any) => {
        if(responce.success){  
          this.toastr.success('Add Successfully');
          this.bsModalRef.hide();
          this.onSave.emit();}
      });

  }

}

