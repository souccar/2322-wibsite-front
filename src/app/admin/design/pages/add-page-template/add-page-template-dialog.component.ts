import { TemplateService } from './../../../../../shared/services/template/template.service';
import { PageTemplateService } from './../../../../../shared/services/page-template-service/page-template.service';
import { Component, ElementRef, EventEmitter, Injector, OnInit, Output, ViewChild } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { finalize } from 'rxjs';
import { AppComponentBase } from 'src/shared/app-component-base';
import { CreateUpdatePageTemplateDto, CreateUpdateTemplateDto, PreviousTamplatesDto, ReadTemplateDto } from 'src/shared/service-proxies/service-proxies';
import { PageService } from 'src/shared/services/page-service/page.service';

@Component({
  selector: 'app-add-page-template-dialog',
  templateUrl: './add-page-template-dialog.component.html',

})
export class AddPageTemplateDialogComponent extends AppComponentBase implements OnInit {
  id: number;
  saving = false;
  pageTamplate = new CreateUpdatePageTemplateDto();
  pageTemplates: CreateUpdatePageTemplateDto[] = [];
  previousTamplates: PreviousTamplatesDto[]=[]
  tamplates: ReadTemplateDto[] = [];
  image: any;
  imagePath = '';
  editable: true;
  addTemplatebuttonClicked=false;
  @Output() onSave = new EventEmitter<any>();
  @ViewChild("imageCategoryNews") imageCategoryNews: ElementRef;
  constructor(
    injector: Injector,
    public _pageTemplateService: PageTemplateService,
    public _templateService: TemplateService,
    public _pageService: PageService,
    public bsModalRef: BsModalRef,
    // public _sizeService:ProductSizeServiceProxy,
  ) {
    super(injector);
  }


  ngOnInit(): void {
    this.pageTemplates = []
    this.data.pageTemplates = [];
    this.initTamplats();
    // this. getTemplateForPage(this.id);
  }

  addTemplate() {
    this.addTemplatebuttonClicked=true
    let pageTemplate = new CreateUpdatePageTemplateDto();

    pageTemplate.pageId = this.id;

    this.pageTemplates.push(pageTemplate);
  }


  getTemplateForPage(id:number){
    this._pageService.getTemplateForPage(id).subscribe((res:any)=>{
      this.previousTamplates=res.result
      console.log(this.previousTamplates);
    })
  }
  removeTemplate(i: number) {
    this.pageTemplates.splice(i, 1);

  }

  initTamplats() {
    this._templateService.getTemplates().subscribe((response: any) => {
      this.tamplates = response.result;

    });
  }

  data: Data = new Data();

  save(): void {
    this.saving = true;


    this.data.pageTemplates = this.pageTemplates;


    this._pageTemplateService
      .insert(
        this.data
      )
      .pipe(
        finalize(() => {
          this.saving = false;
        })
      )
      .subscribe((response: any) => {

        // this.notify.info(this.l('SavedSuccessfully'));
        this.bsModalRef.hide();
        this.onSave.emit();

      });
  }






}

export class Data {
  pageTemplates: CreateUpdatePageTemplateDto[];
}


