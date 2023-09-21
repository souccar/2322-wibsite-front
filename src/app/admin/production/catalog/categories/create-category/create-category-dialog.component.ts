import { Component, EventEmitter, Injector, OnInit, Output, ViewChild } from '@angular/core';
import { ContextMenuComponent } from '@perfectmemory/ngx-contextmenu';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { finalize } from 'rxjs';
import { AppComponentBase } from 'src/shared/app-component-base';
import { CreateUpdateCategoryDto } from 'src/shared/service-proxies/service-proxies';
import { CategoryService } from 'src/shared/services/category-service/category.service';
const MAX_SIZE: number = 1048576;
@Component({
  selector: 'app-create-category-dialog',
  templateUrl: './create-category-dialog.component.html',
})
export class CreateCategoryDialogComponent extends AppComponentBase implements OnInit {
  files: File[] = [];
  image:any;
  saving = false;
  category = new CreateUpdateCategoryDto();
  @Output() onSave = new EventEmitter<any>();
  imageSrc: any='assets/img/upload.png';
  emptySrc = 'assets/img/upload.png';
  // parentCategories: CategoryForDropdownDto[] = [];

  constructor(injector: Injector,
   public _categoryService: CategoryService,
    public bsModalRef: BsModalRef,

  ) {
    super(injector);
  }
  ngOnInit(): void {

  }

  uploadfile(event:Event)
  {
    this.category.image=(event.target as HTMLInputElement )?.files?.[0];


  }
	onSelect(event:any) {
    this.image=event.addedFiles[0];
    this.files.push(this.image);
	}

	onRemove(event:any) {
		this.files.splice(this.files.indexOf(event), 1);
	}
  save(): void {
    this.saving = true;
    const myFormData=new FormData();
    myFormData.append("name",this.category.name);
    myFormData.append("point",this.category.point.toString());
    myFormData.append("description",this.category.description);
    myFormData.append("image",this.image);
    console.log(this.category)
    this._categoryService
        .insert(
          myFormData
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

