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
  url: any;
  constructor(private _templateService: TemplateService,
    private _pageService:PageService,
    public bsModalRef: BsModalRef,
    private renderer: Renderer2,
    private sanitizer:DomSanitizer

   ) { }
  

  ngOnInit(): void {

 
    this.template.childTemplates=[]
    this.initTemplate();
    this.initSlug();

  }
  initTemplate()
  {
    let params = new HttpParams().set('id', this.id) ;
    this._templateService.getById(params).subscribe((res:any)=>{
      this.template=res.result;
      this.template.childTemplates=res.result.child_templates;
      console.log( this.template);
     
      this.videoId = this.template.videoPath.split("=")[1];
      this.videoPath="https://www.youtube.com/embed/"+this.videoId ;
      this.url = this.sanitizer.bypassSecurityTrustResourceUrl(this.videoPath);
      console.log(this.videoPath);

    })
  }
  initSlug(){
    this._pageService.getSlugs().subscribe((res:any)=>{
      this.slugs=res.result;
    })
  }
  displayChildTemplate()
  {

    // this._templateService.getIncluding(this.id).subscribe((result) => {

    //   this.data = result;


    // });
  }

  save(): void {
    this.saving = true;
    this.bsModalRef.hide();
    this._templateService

  }




}
