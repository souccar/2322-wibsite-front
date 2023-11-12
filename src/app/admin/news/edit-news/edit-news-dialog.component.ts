import { Component, EventEmitter, Injector, OnInit, Output } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { ToastrService } from 'ngx-toastr';
import { AppComponentBase } from 'src/shared/app-component-base';
import { CreateUpdateNewsDto } from 'src/shared/service-proxies/service-proxies';
import { NewsService } from 'src/shared/services/news-service/news.service';

@Component({
  selector: 'app-edit-news-dialog',
  templateUrl: './edit-news-dialog.component.html',
})
export class EditNewsDialogComponent  extends AppComponentBase implements OnInit {
  saving = false;
  news = new CreateUpdateNewsDto();
  id: number;
  files: File[] = [];
  image:any;
  test:string;
  tempImage: string[];
  pathImage: any;
  base64: any;
  @Output() onSave = new EventEmitter<any>();
  constructor(
    injector: Injector,
    public _newsService: NewsService,
    public bsModalRef: BsModalRef,
    private toastr: ToastrService
  ) {
    super(injector);
  }

  ngOnInit(): void {

    this.initialNews();
  }


  initialNews() {
    this._newsService.getById(this.id).subscribe((result:any) => {
      this.news=result.result;
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
  onSelect(event: any) {
    this.image = event.addedFiles[0];
    this.files.push(this.image);
  }

  onRemove(event: any) {
    this.files.splice(this.files.indexOf(event), 1);
  }
  save(): void {

    this.saving = true;
    const myFormData=new FormData();
    myFormData.append("title",this.news.title);
    myFormData.append("description",this.news.description);
    myFormData.append("displayInHome",this.news.displayInHome.toString());
    if(this.image!=undefined)
      myFormData.append("image",this.image);
    this._newsService.edit(this.id,myFormData).subscribe((response:any)=>{
      if(response.success){  
        this.toastr.success('Edit Successfully');
        this.bsModalRef.hide();
        this.onSave.emit();}

    })

  }
}
