import { Component, EventEmitter, Injector, OnInit, Output } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { ToastrService } from 'ngx-toastr';
import { finalize } from 'rxjs';
import { AppComponentBase } from 'src/shared/app-component-base';
import { CreateUpdateUserDto } from 'src/shared/service-proxies/service-proxies';
import { UserService } from 'src/shared/services/user/user.service';

@Component({
  selector: 'app-create-user-dialog',
  templateUrl: './create-user-dialog.component.html',
  
})
export class CreateUserDialogComponent  implements OnInit {
  saving = false;
  user = new CreateUpdateUserDto();
  @Output() onSave = new EventEmitter<any>();
  constructor(
    public _userService: UserService,
    public bsModalRef: BsModalRef,private toastr: ToastrService
  ) {
    
  }
  ngOnInit(): void {
  }




  save(): void {
    this.saving = true;
    console.log(this.user)
    this._userService
      .insert(
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

