import { Component, EventEmitter, Injector, OnInit, Output } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { finalize } from 'rxjs';
import { AppComponentBase } from 'src/shared/app-component-base';
import { CreateCategoryDto } from 'src/shared/service-proxies/service-proxies';
import { CategoryService } from 'src/shared/services/category-service/category.service';
const MAX_SIZE: number = 1048576;
@Component({
  selector: 'app-create-category-dialog',
  templateUrl: './create-category-dialog.component.html',
})
export class CreateCategoryDialogComponent extends AppComponentBase implements OnInit {


  saving = false;
  category = new CreateCategoryDto();
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



  save(): void {
    this.saving = true;
    console.log(this.category)
    this._categoryService
        .insert(
            this.category
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

