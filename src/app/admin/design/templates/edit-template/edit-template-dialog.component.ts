import { HttpParams } from '@angular/common/http';
import { Component, EventEmitter, Injector, OnInit, Output } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { finalize } from 'rxjs';
import { environment } from 'src/environments/environment';
import { AppComponentBase } from 'src/shared/app-component-base';
import { CreateUpdateChildTemplateDto, CreateUpdateTemplateDto } from 'src/shared/service-proxies/service-proxies';
import { PageService } from 'src/shared/services/page-service/page.service';
import { TemplateService } from 'src/shared/services/template/template.service';

  @Component({
  selector: 'app-edit-teamplate-dialog',
  templateUrl: './edit-template-dialog.component.html', 
  styleUrls: ['./edit-template-dialog.component.scss']


})
export class EditTemplateDialogComponent extends AppComponentBase implements OnInit {
  baseUrl=environment.baseUrl;
  id: number;
  saving = false;
  template = new CreateUpdateTemplateDto();
  childTemplate = new CreateUpdateChildTemplateDto();
  parentFiles: File[] = [];
  childeFiles: File[] = [];
  slugs: any = []
  tempChild: CreateUpdateChildTemplateDto[] = [];
  imageParent: any;
  imageChild: any;
  videoId = "";
  videoPath = "";
  url: any;
  files: File[] = [];
  tempImage: string[];
  image: any;
  base64: any;
  imageRemoved=false;
  @Output() onSave = new EventEmitter<any>();

  constructor(
    injector: Injector,
    public _templateService: TemplateService,
    public bsModalRef: BsModalRef,
    private _pageService: PageService,
    private sanitizer:DomSanitizer
  ) {
    super(injector);
  }
  ngOnInit(): void {

    this.initSlug()
    this.initTemplate();
  }

  initTemplate() {
    let params = new HttpParams().set('id', this.id);
   
    this._templateService.getById(params).subscribe((result: any) => {
      this.template = result.result;
      

    
  

    })
  }
  initSlug() {

    this._pageService.getSlugs().subscribe((res: any) => {
      this.slugs = res.result;
    })
  }
  initImage() {
    const imageName = this.tempImage[1];
    const imageBlob = this.dataURItoBlob_new(this.base64);
    const imageFile = new File([imageBlob], imageName, { type: "image/jpg" });
    this.parentFiles.push(imageFile);
  }
  dataURItoBlob_new(dataURI) {
    var byteString;
    byteString = atob(dataURI);
    var mimeString = dataURI;
    var ia = new Uint8Array(byteString.length);
    for (var i = 0; i < byteString.length; i++) {
      ia[i] = byteString.charCodeAt(i);
    }

    return new Blob([ia], { type: mimeString });
  }
  onSelectParent(event: any) {
    this.imageParent = event.addedFiles[0];
    this.parentFiles.push(this.imageParent);
    const file = new FormData();
    file.append("image", this.imageParent);
    this._templateService.uploadImage(file).subscribe((response: any) => {

      this.template.imagePath = response
  
    })
  }
  onSelectChild(event: any) {
    this.imageChild = event.addedFiles[0];
    this.childeFiles.push(this.imageChild);
    const file = new FormData();
    file.append("image", this.imageChild);
    this._templateService.uploadImage(file).subscribe((response: any) => {
      this.childTemplate.imagePath = response
    })

  }

  onRemoveParent(event: any) {
    this.parentFiles.splice(this.parentFiles.indexOf(event), 1);
  }
  onRemoveChild(event: any) {
    this.childeFiles.splice(this.childeFiles.indexOf(event), 1);
  }

  saveChild(childTemplate:CreateUpdateChildTemplateDto) {
    this.tempChild.push(childTemplate);
    this.childTemplate = new CreateUpdateChildTemplateDto();

  
  }
  onRemove() {
    this.imageRemoved=true;
  }
  onFileSelect(event: any,i:any) {
    const file=new FormData();
    file.append("image",event.target.files[0]);
   this._templateService.uploadImage(file).subscribe((response:any)=>{
    this.template.child_templates[i].imagePath=response 
  })

  }
  save(): void {
    this.saving = true;
    this.template.child_templates = this.tempChild;

    this._templateService
      .edit(this.id,
        this.template
      )
      .pipe(
        finalize(() => {
          this.saving = false;
        })
      )
      .subscribe((result) => {
     
        // this.notify.info(this.l('SavedSuccessfully'));
        this.bsModalRef.hide();
        this.onSave.emit();

      });
  }
}
