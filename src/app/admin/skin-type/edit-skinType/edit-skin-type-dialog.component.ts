import { Component, EventEmitter, Injector, OnInit, Output } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { ToastrService } from 'ngx-toastr';
import { AppComponentBase } from 'src/shared/app-component-base';
import { CreateUpdateSkinTypeDto } from 'src/shared/service-proxies/service-proxies';
import { SkinTypeService } from 'src/shared/services/skinType-service/skinType.service';

@Component({
  selector: 'app-edit-skin-type-dialog',
  templateUrl: './edit-skin-type-dialog.component.html',
})
export class EditSkinTypeDialogComponent  extends AppComponentBase    implements OnInit {
  saving = false;
  skinType = new CreateUpdateSkinTypeDto();
  id: number;

  @Output() onSave = new EventEmitter<any>();


  sizekeys = [];
  constructor(
    injector: Injector,
    public _skinTypeService: SkinTypeService,
    public bsModalRef: BsModalRef,private toastr: ToastrService
  ) {
    super(injector);
  }

  ngOnInit(): void {
    this.initialSkinType();
  }

  initialSkinType() {
    this._skinTypeService.getById(this.id).subscribe((result:any) => {
      this.skinType=result.result;
    });
  }

  save(): void {
    this.saving = true;
    this._skinTypeService.edit(this.id,this.skinType).subscribe(
      () => {
        this.toastr.success('Edit Successfully');
        this.bsModalRef.hide();
        this.onSave.emit();

      },
      () => {
        this.saving = false;
      }
    );
  }


  }
