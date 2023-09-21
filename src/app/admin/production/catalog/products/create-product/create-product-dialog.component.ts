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
  files: File[] = [];
  product = new CreateUpdateProductDto();
   categories : CategoryForDropdownDto[] = [];
  // sizes :CreateProductSizeDto[]=[];
  // size:CreateProductSizeDto= new CreateProductSizeDto();
  images:any;
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
       this.categories = response.result;

    });

  }
  save(): void {
    this.saving = true;
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
    this.images=event.addedFiles;
    for(var i=0;i<event.addedFiles.length;i++)
    {
      this.images=event.addedFiles[i];

    }
    this.files.push(this.images);
	}

	onRemove(event:any) {
		this.files.splice(this.files.indexOf(event), 1);
	}


}
