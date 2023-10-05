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
  image: any;
  base64: any;
  files: File[] = [];
  tempImage: string[];
  pathImage: any;

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
    this._PageService.getById(this.id).subscribe((result:any) => {
       console.log(result)
      this.page=result.result;
      this.base64 = result.result.base64;
      this.image = result.result.imagePath;
      this.tempImage = this.image.split("/");
      this.initImage();
      this.loaded=true;
    })
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
  onSelect(event:any) {
    this.image=event.addedFiles[0];
    this.files.push(this.image);
     const file=new FormData();
     file.append("image",this.image);
    this._PageService.uploadImage(file).subscribe((response:any)=>{
      console.log(response);
     this.page.imagePath=response
    })
	}

	onRemove(event:any) {
		this.files.splice(this.files.indexOf(event), 1);
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
