import { Component, EventEmitter, Injector, OnInit, Output } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { ToastrService } from 'ngx-toastr';
import { finalize } from 'rxjs';
import { environment } from 'src/environments/environment';
import { AppComponentBase } from 'src/shared/app-component-base';
import { CategoryForDropdownDto, CreateUpdateCategoryDto } from 'src/shared/service-proxies/service-proxies';
import { CategoryService } from 'src/shared/services/category-service/category.service';

@Component({
  selector: 'app-edit-category-dialog',
  templateUrl: './edit-category-dialog.component.html',

})
export class EditCategoryDialogComponent extends AppComponentBase implements OnInit {
  saving = false;
  baseUrl = environment.baseUrl;
  category = new CreateUpdateCategoryDto();
  id: number;
  files: File[] = [];
  image: any;
  tempImage: string[];
  base64: any;
  @Output() onSave = new EventEmitter<any>();
  constructor(
    injector: Injector,
    public bsModalRef: BsModalRef,
    public _categoryService: CategoryService,
    private toastr: ToastrService) {
    super(injector);
  }

  ngOnInit(): void {

    this.initialCategory();

  }
  initialCategory() {
    this._categoryService.getById(this.id)
      .subscribe((result: any) => {

        this.category = result.result;
        this.base64 = result.result.base64;
        // this.image = result.result.imagePath;
        this.tempImage = result.result.imagePath.split("/");
        this.initImage();
      });


  }
  initImage() {
    const imageName = this.tempImage[1];
    const imageBlob = this.dataURItoBlob_new(this.base64);
    const imageFile = new File([imageBlob], imageName, { type: "image/jpg" });
    this.files.push(imageFile);
  }
  dataURItoBlob_new(dataURI) {
    var byteString;
    byteString = atob(dataURI);
    var mimeString = dataURI;
    var ia = new Uint8Array(byteString.length);
    for (var i = 0; i < byteString.length; i++) {
      ia[i] = byteString.charCodeAt(i);
    }

    return new Blob([ia], { type: mimeString });
  }

  save(): void {
    this.saving = true;
    const myFormData = new FormData();
    myFormData.append("name", this.category.name);
    myFormData.append("point", this.category.point.toString());
    myFormData.append("description", this.category.description);
    if(this.image!=undefined)
      myFormData.append("image",this.image);
    this._categoryService.edit(this.id, myFormData).subscribe((response:any)=>{

      if(response.success){
        this.toastr.success('Edit Successfully');
        this.bsModalRef.hide();
        this.onSave.emit();}

    },

      // () => {
      //   this.saving = false;
      // }
    );
  }
  onSelect(event: any) {
    this.image = event.addedFiles[0];
    this.files.push(this.image);
  }

  onRemove(event: any) {
    this.files.splice(this.files.indexOf(event), 1);
  }
}
