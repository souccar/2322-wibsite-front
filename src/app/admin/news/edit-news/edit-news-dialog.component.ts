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
    this.initialSkinType();
  }
  
  initialSkinType() {
    this._newsService.getById(this.id).subscribe((result:any) => {
      this.news=result.result;
    });
  }
  
  save(): void {
    this.saving = true;
    console.log(this.news);
    this._newsService.edit(this.id,this.news).subscribe(
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