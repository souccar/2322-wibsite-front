import { Component, ElementRef, EventEmitter, Injector, OnInit, Output, ViewChild } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { ToastrService } from 'ngx-toastr';
import { finalize } from 'rxjs';
import { AppComponentBase } from 'src/shared/app-component-base';
import { CreateUpdatePageDto } from 'src/shared/service-proxies/service-proxies';
import { PageService } from 'src/shared/services/page-service/page.service';

@Component({
  selector: 'app-create-page-dialog',
  templateUrl: './create-page-dialog.component.html',

})
export class CreatePageDialogComponent extends AppComponentBase implements OnInit {
  saving = false;
  page = new CreateUpdatePageDto();
  files: File[] = [];
  image:any;
  imagePath='';
  @Output() onSave = new EventEmitter<any>();
  @ViewChild("imageCategoryNews") imageCategoryNews : ElementRef;
  constructor(
    injector: Injector,
    public _PageService: PageService,
    public bsModalRef: BsModalRef,
    private toastr: ToastrService


  ) {
    super(injector);
  }


  ngOnInit(): void {
  }
  onSelect(event:any) {
    this.image=event.addedFiles[0];
    this.files.push(this.image);
     const file=new FormData();
     file.append("image",this.image);
    this._PageService.uploadImage(file).subscribe((response:any)=>{
     this.page.imagePath=response
    })
	}

	onRemove(event:any) {
		this.files.splice(this.files.indexOf(event), 1);
	}

  save(): void {

    this.saving = true;

    this._PageService
    .insert(
        this.page
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

