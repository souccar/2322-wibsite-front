import { Component, ElementRef, EventEmitter, Injector, OnInit, Output, ViewChild } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { finalize } from 'rxjs';
import { AppComponentBase } from 'src/shared/app-component-base';
import { BrandForDropdownDto, CategoryForDropdownDto, CreateUpdateProductDto, SkinTypeForDropdownDto } from 'src/shared/service-proxies/service-proxies';
import { BrandService } from 'src/shared/services/brand-service/brand.service';
import { CategoryService } from 'src/shared/services/category-service/category.service';
import { ProductService } from 'src/shared/services/product-service/product.service';
import { SkinTypeService } from 'src/shared/services/skinType-service/skinType.service';
const MAX_SIZE: number = 1048576;
@Component({
  selector: 'app-create-product-dialog',
  templateUrl: './create-product-dialog.component.html',

})
export class CreateProductDialogComponent extends AppComponentBase

implements OnInit {
   saving = false;
   files: File[] = [];
   product = new CreateUpdateProductDto();
   categories : CategoryForDropdownDto[] = [];
   brands:BrandForDropdownDto[]=[];
   skinType:SkinTypeForDropdownDto[]=[];
   images:any;
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


  ngOnInit(): void {

    this.product.images = [];
    this.initCategory();
    this.initBrand();
    this.initSkinType()


  }
  initCategory()
  {
    this._categoryService.getAll().subscribe((response:any) => {
       this.categories = response.result;

    });

  }
  initBrand()
  {
    this._brandService.getAll().subscribe((response:any)=>{

        this.brands=response.result.data

    })
  }
  initSkinType()
  {
    this._skinTypeServices.getAll().subscribe((response:any)=>{

        this.skinType=response.result.data

    })
  }
  save(): void {
    this.saving = true;
    this.product.images=this.files;
    // const myFormData=new FormData();
    // myFormData.append("name",this.product.name);
    // myFormData.append("point",this.product.point.toString());
    // myFormData.append("categoryId",this.product.categoryId.toString());
    // myFormData.append("brandId",this.product.brandId.toString());
    // myFormData.append("skinTypeId",this.product.skinTypeId.toString());
    // myFormData.append("images", this.product.images.toString())
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

  onSelect(event:any) {
    // this.images=event.addedFiles;
    for(var i=0;i<event.addedFiles.length;i++)
    {
      this.images.push(event.addedFiles[i]);
    }
    this.files=this.images;

	}

	onRemove(event:any) {
		this.files.splice(this.files.indexOf(event), 1);
	}


}

