import { Component, EventEmitter, Injector, OnInit, Output } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { AppComponentBase } from 'src/shared/app-component-base';
import { CreateUpdateBrandDto } from 'src/shared/service-proxies/service-proxies';
import { BrandService } from 'src/shared/services/brand-service/brand.service';

@Component({
  selector: 'app-edit-brand-dialog',
  templateUrl: './edit-brand-dialog.component.html',
})
export class EditBrandDialogComponent extends AppComponentBase  implements OnInit {
  saving = false;
  brand = new CreateUpdateBrandDto();
  id: number;
  @Output() onSave = new EventEmitter<any>();
  constructor(
    injector: Injector,
    public _brandService: BrandService,
    public bsModalRef: BsModalRef,
  ) {
    super(injector);
  }

  ngOnInit(): void {
    this.initialSkinType();
  }

  initialSkinType() {
    this._brandService.getById(this.id).subscribe((result:any) => {
      this.brand=result.result;
    });
  }

  save(): void {
    this.saving = true;
    console.log(this.brand);
    this._brandService.edit(this.id,this.brand).subscribe(
      () => {
        // this.notify.info(this.l('SavedSuccessfully'));
        this.bsModalRef.hide();
        this.onSave.emit();

      },
      () => {
        this.saving = false;
      }
    );
  }
}
