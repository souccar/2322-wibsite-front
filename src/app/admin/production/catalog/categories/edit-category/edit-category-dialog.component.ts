import { Component, EventEmitter, Injector, OnInit, Output } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { finalize } from 'rxjs';
import { AppComponentBase } from 'src/shared/app-component-base';
import { CategoryForDropdownDto, CreateUpdateCategoryDto, FileBaseDto } from 'src/shared/service-proxies/service-proxies';
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
      const separator = "_";
      const filename = result.result.imagePath.split(separator)[1];


      // const imgFile = new File([result.result.base64],filename);
      // const full_path='D:/Projects/AHC-Laravel/ahc-laravel/public/categoryImages/'+imgFile.name
      // this.image.push(full_path);
      // console.log(full_path);
      // this.category.image.push(imgFile)


    });
  }


  initialImages(item:FileBaseDto) {

    const type = this.getFileType(item.fileType);
    const name = item.fileName;
    const dataBase64 = item.fileAsBase64;
    const imageBlob = this.dataBase64toBlob(dataBase64, type);
    const imageFile = new File([imageBlob], name, { type: type });
    this.image.push(imageFile);

}
getFileType(value: string){
  switch(value){
    case 'jpg': return 'image/jpg';
    case 'jpeg': return 'image/jpeg';
    default: return 'image/jpeg';
  }
}
dataBase64toBlob(dataBase64:any, type:any) {
  const byteString = window.atob(dataBase64);
  const arrayBuffer = new ArrayBuffer(byteString.length);
  const int8Array = new Uint8Array(arrayBuffer);
  for (let i = 0; i < byteString.length; i++) {
    int8Array[i] = byteString.charCodeAt(i);
  }
  const blob = new Blob([int8Array], { type: type });
  return blob;
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
