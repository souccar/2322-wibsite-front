import { Component, OnInit } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { environment } from 'src/environments/environment';
import { ReadPageDto } from 'src/shared/service-proxies/service-proxies';
import { PageService } from 'src/shared/services/page-service/page.service';

@Component({
  selector: 'app-view-page-dialog',
  templateUrl: './view-page-dialog.component.html',
})
export class ViewPageDialogComponent implements OnInit {
  baseUrl = environment.baseUrl;
  data = new ReadPageDto();
  id: number;
  loaded=false;
  editable: true;
  constructor(private _pageService:PageService,
    public bsModalRef: BsModalRef,

   ) { }

  ngOnInit(): void {

    this.displayPage();


  }
  displayPage()
  {

    this._pageService.getById(this.id).subscribe((result:any) => {

      this.data=result.result;
      this.loaded=true;


    });
  }
}
