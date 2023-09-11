import { Component, EventEmitter, Injector, OnInit, Output } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { finalize } from 'rxjs';
import { AppComponentBase } from 'src/shared/app-component-base';
import { CreateSkinTypeDto } from 'src/shared/service-proxies/service-proxies';
import { SkinTypeService } from 'src/shared/services/skinType-service/skinType.service';

@Component({
  selector: 'app-create-skin-type-dialog',
  templateUrl: './create-skin-type-dialog.component.html',

})
export class CreateSkinTypeDialogComponent extends AppComponentBase implements OnInit {


  saving = false;
  skinType = new CreateSkinTypeDto();
  @Output() onSave = new EventEmitter<any>();
  constructor(injector: Injector,
    public _skinTypeService: SkinTypeService,
    public bsModalRef: BsModalRef,
  ) {
    super(injector);
  }
  ngOnInit(): void {
  }




  save(): void {
    this.saving = true;
    console.log(this.skinType)
    this._skinTypeService
      .insert(
        this.skinType
      )
      .pipe(
        finalize(() => {
          this.saving = false;
        })
      )
      .subscribe((responce) => {
        console.log(responce);
        //  this.notify.info('SavedSuccessfully');
        this.bsModalRef.hide();
        this.onSave.emit();
      });

  }

}

