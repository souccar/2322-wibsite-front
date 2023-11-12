import { Component, EventEmitter, Injector, OnInit, Output } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { ToastrService } from 'ngx-toastr';
import { finalize } from 'rxjs';
import { AppComponentBase } from 'src/shared/app-component-base';
import { CreateUpdateSliderDto } from 'src/shared/service-proxies/service-proxies';
import { SliderService } from 'src/shared/services/slider/slider.service';

@Component({
  selector: 'app-edit-slider-dialog',
  templateUrl: './edit-slider-dialog.component.html',

})
export class EditSliderDialogComponent extends AppComponentBase    implements OnInit {
  saving = false;
  slider = new CreateUpdateSliderDto();
  id: number;
  files: File[] = [];
  image: any;
  base64: any;
  tempImage: string[];
  pathImage: any;
  loaded:boolean=false;
  @Output() onSave = new EventEmitter<any>();
  constructor(
    injector: Injector,
    public _sliderService: SliderService,
    public bsModalRef: BsModalRef,
    private toastr: ToastrService
  ) {
    super(injector);
  }

  ngOnInit(): void {
    this.initialSlider();
  }



  save(): void {
    this.saving = true;
    console.log(this.slider)
    this._sliderService.edit(this.id,this.slider).pipe(
      finalize(() => {
        this.saving = false;
      })
    )
    .subscribe((response:any) => {
      if(response.success){  
        this.toastr.success('Edit Successfully');
        this.bsModalRef.hide();
        this.onSave.emit();}
    });
  }

  initImage() {
    const imageName = this.tempImage[1];
    const imageBlob = this.dataURItoBlob_new(this.base64);
    const imageFile = new File([imageBlob], imageName, { type: "image/jpg" });
    this.files.push(imageFile);
  }
  initialSlider() {

    this._sliderService.getById(this.id).subscribe((result:any) => {
      this.slider=result.result;
      console.log(result)
      this.base64 = result.result.imageBase64;
      this.image = result.result.imagePath;
      this.tempImage = this.image.split("/");
      this.initImage();
      this.loaded=true;
    });
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
    this._sliderService.uploadImage(file).subscribe((response:any)=>{
   
     this.slider.imagePath=response
    })
	}

	onRemove(event:any) {
		this.files.splice(this.files.indexOf(event), 1);
	}

  }
