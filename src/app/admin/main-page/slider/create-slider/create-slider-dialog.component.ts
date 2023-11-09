import { Component, EventEmitter, Injector, OnInit, Output } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { finalize } from 'rxjs';
import { AppComponentBase } from 'src/shared/app-component-base';
import { CreateUpdateSliderDto } from 'src/shared/service-proxies/service-proxies';
import { SliderService } from 'src/shared/services/slider/slider.service';

@Component({
  selector: 'app-create-slider-dialog',
  templateUrl: './create-slider-dialog.component.html',

})
export class CreateSliderDialogComponent extends AppComponentBase implements OnInit {

  image:any;
  files: File[] = [];
  saving = false;
  IsUploaded:boolean=false;
  slider = new CreateUpdateSliderDto();
  @Output() onSave = new EventEmitter<any>();
  constructor(injector: Injector,
    public _sliderService: SliderService,
    public bsModalRef: BsModalRef,
  ) {
    super(injector);
  }
  ngOnInit(): void {
 
  }
  save(): void {
    this.saving = true;

    this._sliderService
      .insert(
        this.slider
      )
      .pipe(
        finalize(() => {
          this.saving = false;
        })
      )
      .subscribe((responce) => {

        //  this.notify.info('SavedSuccessfully');
        this.bsModalRef.hide();
        this.onSave.emit();
      });

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

