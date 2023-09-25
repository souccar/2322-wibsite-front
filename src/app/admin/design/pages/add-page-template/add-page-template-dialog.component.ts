import { TemplateService } from './../../../../../shared/services/template/template.service';
import { PageTemplateService } from './../../../../../shared/services/page-template-service/page-template.service';
import { Component, ElementRef, EventEmitter, Injector, OnInit, Output, ViewChild } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { finalize } from 'rxjs';
import { AppComponentBase } from 'src/shared/app-component-base';
import { CreateUpdatePageTemplateDto, CreateUpdateTemplateDto, ReadTemplateDto } from 'src/shared/service-proxies/service-proxies';

@Component({
  selector: 'app-add-page-template-dialog',
  templateUrl: './add-page-template-dialog.component.html',

})
export class AddPageTemplateDialogComponent extends AppComponentBase implements OnInit {
  id: number;
  saving = false;
  pageTamplate = new CreateUpdatePageTemplateDto();
  pageTemplates: CreateUpdatePageTemplateDto[] = [];
  tamplates: ReadTemplateDto[] = [];
  image: any;
  imagePath = '';
  @Output() onSave = new EventEmitter<any>();
  @ViewChild("imageCategoryNews") imageCategoryNews: ElementRef;
  constructor(
    injector: Injector,
    public _pageTemplateService: PageTemplateService,
    public _templateService: TemplateService,
    public bsModalRef: BsModalRef,
    // public _sizeService:ProductSizeServiceProxy,
  ) {
    super(injector);
  }


  ngOnInit(): void {
    this.pageTemplates = []
    this.data.pageTemplates = [];
    this.initTamplats();
  }

  addTemplate() {
    let pageTemplate = new CreateUpdatePageTemplateDto();

    pageTemplate.pageId = this.id;

    this.pageTemplates.push(pageTemplate);



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


