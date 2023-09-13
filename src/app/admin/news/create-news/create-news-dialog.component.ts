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
  save(): void {
    this.saving = true;
    console.log(this.news)
    this._newsService
      .insert(
        this.news
      )
      .pipe(
        finalize(() => {
          this.saving = false;
        })
      )
      .subscribe((responce) => {
        console.log(responce);
        //  this.notify.info('SavedSuccessfully');
        this.bsModalRef.hide();
        this.onSave.emit();
      });

  }

}

