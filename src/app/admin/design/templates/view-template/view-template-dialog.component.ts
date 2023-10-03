import { HttpParams } from '@angular/common/http';
import { AfterViewInit, Component, ElementRef, OnInit, Renderer2, ViewChild } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { environment } from 'src/environments/environment';
import { ReadChildTemplateDto, ReadTemplateDto } from 'src/shared/service-proxies/service-proxies';
import { PageService } from 'src/shared/services/page-service/page.service';
import { TemplateService } from 'src/shared/services/template/template.service';

@Component({
  selector: 'app-view-template-dialog',
  templateUrl: './view-template-dialog.component.html',
})
export class ViewTemplateDialogComponent implements OnInit  {
  baseUrl=environment.baseUrl;
  videoId="";
  videoPath="";
  template = new ReadTemplateDto();
  childTemplate = new ReadChildTemplateDto();
  @ViewChild('video') video: ElementRef;
  slugs :any=[]
  id: number;
  editable: true;
  saving: boolean;

  constructor(private _templateService: TemplateService,
    private _pageService:PageService,
    public bsModalRef: BsModalRef,
    private renderer: Renderer2,


   ) { }
  

  ngOnInit(): void {

 

    this.initTemplate();
    this.initSlug();

  }
  initTemplate()
  {
    let params = new HttpParams().set('id', this.id) ;
    this._templateService.getById(params).subscribe((res:any)=>{
      this.template=res.result;

    })
  }
  initSlug(){
    this._pageService.getSlugs().subscribe((res:any)=>{
      this.slugs=res.result;
    })
  }


  save(): void {
    this.saving = true;
    this.bsModalRef.hide();
    this._templateService

  }




}
