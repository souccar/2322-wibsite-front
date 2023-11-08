import { Component, ElementRef, EventEmitter, Injector, OnInit, Output, ViewChild, OnDestroy } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { finalize } from 'rxjs';
import { AppComponentBase } from 'src/shared/app-component-base';
import { BrandForDropdownDto, CategoryForDropdownDto, CreateUpdateProductDto, SkinTypeForDropdownDto } from 'src/shared/service-proxies/service-proxies';
import { BrandService } from 'src/shared/services/brand-service/brand.service';
import { CategoryService } from 'src/shared/services/category-service/category.service';
import { ProductService } from 'src/shared/services/product-service/product.service';
import { SkinTypeService } from 'src/shared/services/skinType-service/skinType.service';
@Component({
  selector: 'app-create-product-dialog',
  templateUrl: './create-product-dialog.component.html',

})
export class CreateProductDialogComponent extends AppComponentBase implements OnInit,OnDestroy {
  html: '';
  IsUploaded:boolean=false;
   saving = false;
   files: File[] = [];
   product = new CreateUpdateProductDto();
   categories : CategoryForDropdownDto[] = [];
   brands:BrandForDropdownDto[]=[];
   skinType:SkinTypeForDropdownDto[]=[];
   images:any[]=[];
  @Output() onSave = new EventEmitter<any>();
  @ViewChild("imageCategoryNews") imageCategoryNews : ElementRef;
  constructor(
    injector: Injector,
    public _productService: ProductService,
    public _categoryService :CategoryService,
    public _brandService:BrandService,
    public _skinTypeServices:SkinTypeService,
    public bsModalRef: BsModalRef,

  ) {
    super(injector);
  }
  ngOnDestroy(): void {
    // this.editor.destroy();
  }


  ngOnInit(): void {

    this.product.images = [];
    this.initCategory();
    this.initBrand();
    this.initSkinType()
  }
  initCategory()
  {
    this._categoryService.getWithoutPagination().subscribe((response:any) => {
       this.categories = response.result;

    });

  }
  initBrand()
  {
    this._brandService.getWithoutPagination().subscribe((response:any)=>{

        this.brands=response.result.data

    })
  }
  initSkinType()
  {
    this._skinTypeServices.getWithoutPagination().subscribe((response:any)=>{

        this.skinType=response.result.data

    })
  }
  save(): void {

    this.saving = true;
    if(this.IsUploaded && this.saving){
      console.log(this.product)
      this._productService
      .insert(
        this.product
          )
      .pipe(
          finalize(() => {
          this.saving = false;
          })
      )
      .subscribe((response) => {
        // this.notify.info(this.l('SavedSuccessfully'));
        this.bsModalRef.hide();
        this.onSave.emit();

      });
    }
    else{
      this.saving = false;

    }
  }

   onSelect(event:any) {
     this.images=event.addedFiles;
     const file=new FormData();
     for(var i=0;i<event.addedFiles.length;i++)
    {
      file.append("image"+[i],event.addedFiles[i]);
    }
     setTimeout(() => {
      this._productService.uploadImage(file).subscribe((response:any)=>{
        this.product.images=response;
        this.IsUploaded = true;
      })
     });


	}
	onRemove(event:any) {
		this.images.splice(this.files.indexOf(event), 1);
	}


}

