import { Component, EventEmitter, Injector, OnInit, Output } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { finalize } from 'rxjs';
import { environment } from 'src/environments/environment';
import { AppComponentBase } from 'src/shared/app-component-base';
import { CreateUpdatePageDto } from 'src/shared/service-proxies/service-proxies';
import { PageService } from 'src/shared/services/page-service/page.service';

@Component({
  selector: 'app-edit-page-dialog',
  templateUrl: './edit-page-dialog.component.html',

})
export class EditPageDialogComponent extends AppComponentBase implements OnInit {
  baseUrl=environment.baseUrl;
  id: number;
  page = new CreateUpdatePageDto();
  saving: boolean;
  loaded=false;
  @Output() onSave = new EventEmitter<any>();
  ngOnInit(): void {
    this.initPage();
  }
  constructor(
    injector: Injector,
    public _PageService: PageService,
    public bsModalRef: BsModalRef,
  ) {
    super(injector);
  }
  initPage() {
    this._PageService.getById(this.id).subscribe((res:any) => {

      this.page=res.result;
      this.loaded=true;
    })
  }

  save(): void {
    this.saving = true;

    this._PageService
      .edit(this.id,
        this.page
      )
      .pipe(
        finalize(() => {
          this.saving = false;
        })
      )
      .subscribe((response: any) => {
        console.log(response);
        // this.notify.info(this.l('SavedSuccessfully'));
        this.bsModalRef.hide();
        this.onSave.emit();

      });
  }


}
