import { Component, EventEmitter, Injector, OnInit, Output } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { finalize } from 'rxjs';
import { AppComponentBase } from 'src/shared/app-component-base';
import { CreateUpdateNewsDto } from 'src/shared/service-proxies/service-proxies';
import { NewsService } from 'src/shared/services/news-service/news.service';

@Component({
  selector: 'app-create-news-dialog',
  templateUrl: './create-news-dialog.component.html',

})
export class CreateNewsDialogComponent extends AppComponentBase implements OnInit {
  files: File[] = [];
  image:any;
  saving = false;
  news = new CreateUpdateNewsDto();
  @Output() onSave = new EventEmitter<any>();
  constructor(injector: Injector,
    public _newsService: NewsService,
    public bsModalRef: BsModalRef,
  ) {
    super(injector);
  }
  ngOnInit(): void {
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
    myFormData.append("title",this.news.title);
    myFormData.append("description",this.news.description);
    myFormData.append("image",this.image);
    if(this.news.displayInHome!=undefined)
      myFormData.append("displayInHome",this.news.displayInHome.toString());
    else
     myFormData.append("displayInHome",'0');


    this._newsService
      .insert(
        myFormData
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

}

