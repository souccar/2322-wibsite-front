import { Component, OnInit } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { ReadChildTemplateDto } from 'src/shared/service-proxies/service-proxies';
import { TemplateService } from 'src/shared/services/template/template.service';

@Component({
  selector: 'app-view-template-dialog',
  templateUrl: './view-template-dialog.component.html',
})
export class ViewTemplateDialogComponent implements OnInit {
  data = new ReadChildTemplateDto();
  id: number;
  editable: true;
  constructor(private _templateService: TemplateService,
    public bsModalRef: BsModalRef,

   ) { }

  ngOnInit(): void {

    this.displayChildTemplate();


  }
  displayChildTemplate()
  {

    // this._templateService.getIncluding(this.id).subscribe((result) => {

    //   this.data = result;


    // });
  }




}
