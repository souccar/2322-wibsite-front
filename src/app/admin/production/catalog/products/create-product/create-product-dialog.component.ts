import { Component, ElementRef, EventEmitter, Injector, OnInit, Output, ViewChild } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { finalize } from 'rxjs';
import { AppComponentBase } from 'src/shared/app-component-base';
import { CategoryForDropdownDto, CreateUpdateProductDto } from 'src/shared/service-proxies/service-proxies';
import { CategoryService } from 'src/shared/services/category-service/category.service';
import { ProductService } from 'src/shared/services/product-service/product.service';
const MAX_SIZE: number = 1048576;
@Component({
  selector: 'app-create-product-dialog',
  templateUrl: './create-product-dialog.component.html',

})
export class CreateProductDialogComponent extends AppComponentBase

implements OnInit {
  saving = false;
  config = {
    url: 'https://httpbin.org/post',
    thumbnailWidth: 160,
    // tslint:disable-next-line: max-line-length
    previewTemplate: '<div class="dz-preview dz-file-preview mb-3"><div class="d-flex flex-row "><div class="p-0 w-30 position-relative"><div class="dz-error-mark"><span><i></i></span></div><div class="dz-success-mark"><span><i></i></span></div><div class="preview-container"><img data-dz-thumbnail class="img-thumbnail border-0" /><i class="simple-icon-doc preview-icon" ></i></div></div><div class="pl-3 pt-2 pr-2 pb-1 w-70 dz-details position-relative"><div><span data-dz-name></span></div><div class="text-primary text-extra-small" data-dz-size /><div class="dz-progress"><span class="dz-upload" data-dz-uploadprogress></span></div><div class="dz-error-message"><span data-dz-errormessage></span></div></div></div><a href="#/" class="remove" data-dz-remove><i class="glyph-icon simple-icon-trash"></i></a></div>'
  };
  imageSrc: any='assets/img/upload.png';
  emptySrc = 'assets/img/upload.png';
  product = new CreateUpdateProductDto();
   categories : CategoryForDropdownDto[] = [];
  // sizes :CreateProductSizeDto[]=[];
  // size:CreateProductSizeDto= new CreateProductSizeDto();
  images: File[] = [];
  @Output() onSave = new EventEmitter<any>();
  @ViewChild("imageCategoryNews") imageCategoryNews : ElementRef;
  constructor(
    injector: Injector,
    public _productService: ProductService,
    public _categoryService :CategoryService,
    public bsModalRef: BsModalRef,
    // public _sizeService:ProductSizeServiceProxy,


  ) {
    super(injector);
  }


  ngOnInit(): void {

    this.product.images = [];
    this.product.sizes = [];
    this.initCategory();


  }
  initCategory()
  {
    this._categoryService.getAll().subscribe((response:any) => {

       this.categories = response.result.data;
       console.log( this.categories);
    });

  }
  save(): void {
    this.saving = true;
    console.log("rrrrrrrr");
    console.log(this.product);
    this._productService
    .insert(
        this.product
        )
    .pipe(
        finalize(() => {
        this.saving = false;
        })
    )
    .subscribe(() => {
      // this.notify.info(this.l('SavedSuccessfully'));
      this.bsModalRef.hide();
      this.onSave.emit();

    });
  }



  addSize(){
    // let size = new CreateProductSizeDto();
     let size;
     this.product.sizes.push(size);
  }

  removeSize(i:number){
    this.product.sizes.splice(i,1);
  }




	onSelect(event:any) {
    console.log(event);
		this.images =  event.addedFiles;
    for(var i=0;i<event.addedFiles.length;i++)
    {
      const file=event.addedFiles[i];

    }

	}

	onRemove(event:any) {
		this.images .splice(this.images .indexOf(event), 1);
    const index = this.product.images.findIndex(x=>x.image.fileName == event.name && x.image.fileType == event.type);
    if(index > -1)
    {
      this.product.images.splice(index, 1);
    }
	}


}
