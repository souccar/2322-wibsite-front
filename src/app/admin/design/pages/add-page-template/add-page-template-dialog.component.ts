import { TemplateService } from './../../../../../shared/services/template/template.service';
import { PageTemplateService } from './../../../../../shared/services/page-template-service/page-template.service';
import { Component, ElementRef, EventEmitter, Injector, OnInit, Output, ViewChild } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { finalize } from 'rxjs';
import { AppComponentBase } from 'src/shared/app-component-base';
import { CreateUpdatePageTemplateDto, CreateUpdateTemplateDto, PreviousTamplatesDto, ReadTemplateDto } from 'src/shared/service-proxies/service-proxies';
import { PageService } from 'src/shared/services/page-service/page.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-add-page-template-dialog',
  templateUrl: './add-page-template-dialog.component.html',

})
export class AddPageTemplateDialogComponent extends AppComponentBase implements OnInit {
  id: number;
  saving = false;
  defultTemplate = new CreateUpdatePageTemplateDto();
  defultTemplateRemove = false;
  pageTemplates: CreateUpdatePageTemplateDto[] = [];
  previousTamplates: PreviousTamplatesDto[] = []
  tamplates: ReadTemplateDto[] = [];
  image: any;
  editable: true;
  dataLoaded = false;
  @Output() onSave = new EventEmitter<any>();
  @ViewChild("imageCategoryNews") imageCategoryNews: ElementRef;
  @ViewChild('defultTemplateView') private defultTemplateView: ElementRef;
  constructor(
    injector: Injector,
    public _pageTemplateService: PageTemplateService,
    public _templateService: TemplateService,
    public _pageService: PageService,
    public bsModalRef: BsModalRef,
    private toastr: ToastrService
  ) {
    super(injector);
  }


  ngOnInit(): void {
    this.pageTemplates = []
    this.data.pageTemplates = [];
    this.defultTemplate.pageId = this.id
    this.initTamplats();
    this.getTemplateForPage(this.id);

  }

  addTemplate() {

    let pageTemplate = new CreateUpdatePageTemplateDto();

    pageTemplate.pageId = this.id;

    this.pageTemplates.push(pageTemplate);
  }
  getTemplateForPage(id: number) {

    this._pageService.getTemplateForPage(id).subscribe((res: any) => {
      this.previousTamplates = res.result;
      this.dataLoaded = true

    })
  }
  removeTemplate(i: number) {
    this.pageTemplates.splice(i, 1);
  }
  removedefultTemplate() {
    this.defultTemplateRemove = true;
    this.defultTemplate = new CreateUpdatePageTemplateDto();
    this.defultTemplateView.nativeElement.remove();
  }

  initTamplats() {
    this._templateService.getTemplates().subscribe((response: any) => {
      this.tamplates = response.result;

    });
  }

  data: Data = new Data();

  save(): void {
    this.saving = true;

    if (this.defultTemplate.pageId != 0)
      this.data.pageTemplates.push(this.defultTemplate)
    if (this.pageTemplates.length > 0)
      this.data.pageTemplates.concat(this.pageTemplates)
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
        if(response.success){  
          this.toastr.success('Add Successfully');
          this.bsModalRef.hide();
          this.onSave.emit();}
    

      });
  }






}

export class Data {
  pageTemplates: CreateUpdatePageTemplateDto[];
}


