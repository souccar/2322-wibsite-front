import { Component, EventEmitter, Injector, OnInit, Output } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { ToastrService } from 'ngx-toastr';
import { finalize } from 'rxjs';
import { AppComponentBase } from 'src/shared/app-component-base';
import { CreateUpdateSkinTypeDto } from 'src/shared/service-proxies/service-proxies';
import { SkinTypeService } from 'src/shared/services/skinType-service/skinType.service';

@Component({
  selector: 'app-create-skin-type-dialog',
  templateUrl: './create-skin-type-dialog.component.html',

})
export class CreateSkinTypeDialogComponent extends AppComponentBase implements OnInit {


  saving = false;
  skinType = new CreateUpdateSkinTypeDto();
  @Output() onSave = new EventEmitter<any>();
  constructor(injector: Injector,
    public _skinTypeService: SkinTypeService,
    public bsModalRef: BsModalRef,private toastr: ToastrService
  ) {
    super(injector);
  }
  ngOnInit(): void {
  }




  save(): void {
    this.saving = true;

    this._skinTypeService
      .insert(
        this.skinType
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

