import { Component, EventEmitter, Injector, OnInit, Output } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { CreateUpdateNewsDto } from 'src/shared/service-proxies/service-proxies';
import { NewsService } from 'src/shared/services/news-service/news.service';

@Component({
  selector: 'app-edit-news-dialog',
  templateUrl: './edit-news-dialog.component.html',
})
export class EditNewsDialogComponent  implements OnInit {
  saving = false;
  news = new CreateUpdateNewsDto();
  id: number;
  files: File[] = [];
  image:any;
  test:string;
  @Output() onSave = new EventEmitter<any>();
  
  
  sizekeys = [];
  constructor(
    injector: Injector,
    public _newsService: NewsService,
    public bsModalRef: BsModalRef,
  ) {
    // super(injector);
  }
  
  ngOnInit(): void {
    this.initialNews();
  }

  onSelect(event:any) {
    this.image=event.addedFiles[0];
    this.files.push(this.image);
	}

	onRemove(event:any) {
		this.files.splice(this.files.indexOf(event), 1);
	}
  initialNews() {
    this._newsService.getById(this.id).subscribe((result:any) => {
      this.news=result.result;
      // this.test=result.result.imagePath;
      console.log(this.news);

    });
  }
  
  save(): void {
    this.saving = true;
    const myFormData=new FormData();
    myFormData.append("title",this.news.title);
    myFormData.append("description",this.news.description);
    myFormData.append("image",this.image);
    
    this._newsService.edit(this.id,myFormData).subscribe(
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
}