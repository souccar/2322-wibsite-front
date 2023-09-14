import { Component, EventEmitter, Injector, OnInit, Output } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { finalize } from 'rxjs';
import { AppComponentBase } from 'src/shared/app-component-base';
import { CategoryForDropdownDto, CreateUpdateCategoryDto } from 'src/shared/service-proxies/service-proxies';
import { CategoryService } from 'src/shared/services/category-service/category.service';

@Component({
  selector: 'app-edit-category-dialog',
  templateUrl: './edit-category-dialog.component.html',

})
export class EditCategoryDialogComponent extends AppComponentBase implements OnInit {
  saving = false;
  category = new CreateUpdateCategoryDto();
  id: number;
  files: File[] = [];
  image:any[]=[];
  @Output() onSave = new EventEmitter<any>();
  constructor(
    injector: Injector,
    public bsModalRef: BsModalRef,
    public _categoryService: CategoryService) {

    super(injector);
  }

  ngOnInit(): void {

    this.initialCategory();
  }



  initialCategory(){
    this._categoryService.getById(this.id)
    .subscribe((result: any) => {

      this.category = result.result;
      console.log(this.category);
      this.image=result.result.imagePath;
    });
  }


  save(): void {
    this.saving = true;
    this._categoryService.edit(this.id,this.category).subscribe(
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
	onSelect(event:any) {
    this.image=event.addedFiles;
    this.files.push(this.image[0]);
	}

	onRemove(event:any) {
		this.files.splice(this.files.indexOf(event), 1);
	}
}
