import { Component, EventEmitter, Injector, OnInit, Output } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { ToastrService } from 'ngx-toastr';
import { finalize } from 'rxjs';
import { AppComponentBase } from 'src/shared/app-component-base';
import { CreateUpdateBrandDto } from 'src/shared/service-proxies/service-proxies';
import { BrandService } from 'src/shared/services/brand-service/brand.service';

@Component({
  selector: 'app-create-brand-dialog',
  templateUrl: './create-brand-dialog.component.html',

})
export class CreateBrandDialogComponent  extends AppComponentBase implements OnInit {
  saving = false;
  brand = new CreateUpdateBrandDto();
  @Output() onSave = new EventEmitter<any>();
  constructor(injector: Injector,
    public _brandService: BrandService,
    public bsModalRef: BsModalRef,
    private toastr: ToastrService
  ) {
    super(injector);
  }
  ngOnInit(): void {
  }
  save(): void {
    this.saving = true;
    this._brandService
      .insert(
        this.brand
      )
      .pipe(
        finalize(() => {
          this.saving = false;
        })
      )
      .subscribe((response:any) => {
        if(response.success){  
          this.toastr.success('Add Successfully');
          this.bsModalRef.hide();
          this.onSave.emit();}
      });

  }

}

