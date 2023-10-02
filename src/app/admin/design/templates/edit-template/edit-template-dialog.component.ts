import { HttpParams } from '@angular/common/http';
import { Component, Injector, OnInit } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { AppComponentBase } from 'src/shared/app-component-base';
import { TemplateService } from 'src/shared/services/template/template.service';

@Component({
  selector: 'app-edit-teamplate-dialog',
  templateUrl: './edit-template-dialog.component.html',

})
export class EditTemplateDialogComponent extends AppComponentBase  implements OnInit{
  id:number;

  constructor(
    injector: Injector,
    public _templateService: TemplateService,
    public bsModalRef: BsModalRef,
  ){
    super(injector);
  }
  ngOnInit(): void {
  
  }

  initTemplate()
  {
    let params = new HttpParams().set('id', this.id) ;
   
    this._templateService.getById(params).subscribe((res:any)=>{
      console.log(res)

    })
  }
}
