import { Component, EventEmitter, Injector, OnInit, Output } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { AppComponentBase } from 'src/shared/app-component-base';
const MAX_SIZE: number = 1048576;
@Component({
  selector: 'app-create-category-dialog',
  templateUrl: './create-category-dialog.component.html',
})
export class CreateCategoryDialogComponent extends AppComponentBase implements OnInit {


  saving = false;
  // category = new CreateCategoryDto();
  @Output() onSave = new EventEmitter<any>();
  imageSrc: any='assets/img/upload.png';
  emptySrc = 'assets/img/upload.png';
  // parentCategories: CategoryForDropdownDto[] = [];
  images: File[] = [];
  constructor(injector: Injector,
    // public _categoryService: CategoryServiceProxy,
    public bsModalRef: BsModalRef,
  ) {
    super(injector);
  }
  ngOnInit(): void {
    // this.category.images = [];
    this.initParentCategories();
  }

  initParentCategories(){
    // this._categoryService.getAllForDropdown()
    // .subscribe(result =>{
    //   this.parentCategories = result;
    // })
  }

  save(): void {
    this.saving = true;
    // this._categoryService
    //     .insert(
    //         this.category
    //     )
    //     .pipe(
    //         finalize(() => {
    //         this.saving = false;
    //         })
    //     )
    //     .subscribe(() => {
        //  this.notify.info('SavedSuccessfully');
    //       this.bsModalRef.hide();
    //       this.onSave.emit();
    //     });

  }



   onSelect(event:any) {
		this.images=event.addedFiles;
    for(var i=0;i<event.addedFiles.length;i++)
    {
      const file=event.addedFiles[i];
        console.log(file);
       console.log(event.addedFiles[i])
       if (file.size < MAX_SIZE) {
        const reader = new FileReader();
        reader.onload = e => {
            this.imageSrc = reader.result;

            // let dto = new FileBaseDto();
            // dto.fileName = file.name;
            // dto.fileSize = file.size;
            // dto.fileType = file.type;
            // dto.fileAsBase64 = reader.result.toString();
            // let product=new CreateCategoryImageDto();
            // product.image=dto;
            // this.category.images.push(product);
        }

        reader.readAsDataURL(file);
    }else{
       // this.notify.error("File: " + event.addedFiles.name + " is too large to upload.");
    }
    }
		// this.files.push(...event.addedFiles);
	}

  onRemove(event:any) {
		this.images .splice(this.images .indexOf(event), 1);
    // const index = this.category.images.findIndex(x=>x.image.fileName == event.name && x.image.fileType == event.type);
    // if(index > -1)
    // {
    //   this.category.images.splice(index, 1);
    // }
	}
}

