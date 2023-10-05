import { map } from 'rxjs';
import { Component, EventEmitter, Injector, OnInit, Output } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { environment } from 'src/environments/environment';
import { AppComponentBase } from 'src/shared/app-component-base';
import { BrandForDropdownDto, CategoryForDropdownDto, CreateUpdateProductDto, SkinTypeForDropdownDto } from 'src/shared/service-proxies/service-proxies';
import { BrandService } from 'src/shared/services/brand-service/brand.service';
import { CategoryService } from 'src/shared/services/category-service/category.service';
import { ProductService } from 'src/shared/services/product-service/product.service';
import { SkinTypeService } from 'src/shared/services/skinType-service/skinType.service';

@Component({
  selector: 'app-edit-product-dialog',
  templateUrl: './edit-product-dialog.component.html',
  styleUrls: ['./edit-product-dialog.component.scss']
})
export class EditProductDialogComponent extends AppComponentBase implements OnInit {
  saving = false;
  IsUploaded: boolean = false;
  product = new CreateUpdateProductDto();
  id: number;
  imagePaths: string[] = []
  allImages: AllImage[] = [];
  removeIds: number[] = []
  baseUrl = environment.baseUrl;
  categories: CategoryForDropdownDto[] = [];
  brands: BrandForDropdownDto[] = [];
  skinType: SkinTypeForDropdownDto[] = [];
  @Output() onSave = new EventEmitter<any>();
  constructor(
    injector: Injector,
    public bsModalRef: BsModalRef,
    public _productService: ProductService,
    public _categoryService: CategoryService,
    public _brandService: BrandService,
    public _skinTypeServices: SkinTypeService,) {

    super(injector);
  }

  ngOnInit(): void {
    this.IsUploaded = false;
    this.initCategory();
    this.initBrand();
    this.initSkinType();
    this.initialProduct();
  }



  initialProduct() {
    this._productService.getById(this.id)
      .subscribe((result: any) => {
        this.product = result.result;
        this.product.categoryId = result.result.category?.id;
        this.product.brandId = result.result.brand?.id;
        this.product.skinTypeId = result.result.skinType?.id;
        result.result.images.forEach(element => {
          const Image = new AllImage();
          Image.id = element.id;
          Image.imagePath = element.imagePath;
          this.allImages.push(Image);

        });
        this.product.images = result.result.images;

      });



  }

  initCategory() {
    this._categoryService.getAll().subscribe((response: any) => {
      this.categories = response.result;

    });

  }
  initBrand() {
    this._brandService.getAll().subscribe((response: any) => {

      this.brands = response.result.data

    })
  }
  initSkinType() {
    this._skinTypeServices.getAll().subscribe((response: any) => {

      this.skinType = response.result.data

    })
  }

  save(): void {
    this.saving = true;
    this.removeIds.forEach((element) => {
      this._productService.removeImage(element).subscribe((result) => {

      })
    })
    this.product.images = this.imagePaths;
    this._productService.edit(this.id, this.product).subscribe((response) => {
      this.bsModalRef.hide();
    })

  }

  onRemove(id: number, index: any) {
    this.allImages.splice(index, 1);
    if (id != null) {
      this.removeIds.push(id);
    }
  }
  onFileSelect(event: any) {
    const file = new FormData();
    for (var i = 0; i < event.target.files.length; i++) {
      file.append("image" + [i], event.target.files[i]);
      this._productService.uploadImage(file).subscribe((result: any) => {
        this.imagePaths.push(result[0]);
        const Image = new AllImage();
        Image.id = null;
        Image.imagePath = result[0];
        this.allImages.push(Image);
        this.IsUploaded = true;
      })


    }
  }
}

export class AllImage {
  id: number;
  imagePath: string;
}
