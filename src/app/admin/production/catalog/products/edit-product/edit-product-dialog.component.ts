import { Component, EventEmitter, Injector, OnInit, Output } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { AppComponentBase } from 'src/shared/app-component-base';
import { BrandForDropdownDto, CategoryForDropdownDto, CreateUpdateProductDto, SkinTypeForDropdownDto } from 'src/shared/service-proxies/service-proxies';
import { BrandService } from 'src/shared/services/brand-service/brand.service';
import { CategoryService } from 'src/shared/services/category-service/category.service';
import { ProductService } from 'src/shared/services/product-service/product.service';
import { SkinTypeService } from 'src/shared/services/skinType-service/skinType.service';

@Component({
  selector: 'app-edit-product-dialog',
  templateUrl: './edit-product-dialog.component.html',
})
export class EditProductDialogComponent extends AppComponentBase implements OnInit {
  saving = false;
  product = new CreateUpdateProductDto();
  id: number;
  files: File[] = [];
  categories : CategoryForDropdownDto[] = [];
  brands:BrandForDropdownDto[]=[];
  skinType:SkinTypeForDropdownDto[]=[];
  image:any[]=[];
  @Output() onSave = new EventEmitter<any>();
  constructor(
    injector: Injector,
    public bsModalRef: BsModalRef,
    public _productService: ProductService,
    public _categoryService :CategoryService,
    public _brandService:BrandService,
    public _skinTypeServices:SkinTypeService,) {

    super(injector);
  }

  ngOnInit(): void {

    this.initialProduct();
  }



  initialProduct(){
    this._productService.getById(this.id)
    .subscribe((result: any) => {
      console.log(result)
      this.product = result.result;
      this.image=result.result.imagePath;
    });
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
    this._productService.edit(this.id,this.product).subscribe(
      () => {
        // this.notify.info(this.l('SavedSuccessfully'));
        this.bsModalRef.hide();
        this.onSave.emit();

      },
      () => {
        this.saving = false;
      }
    );
  }
	onSelect(event:any) {
    this.image=event.addedFiles;
    this.files.push(this.image[0]);
	}

	onRemove(event:any) {
		this.files.splice(this.files.indexOf(event), 1);
	}
}
