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
  IsUploaded:boolean=false;
  product = new CreateUpdateProductDto();
  id: number;
  baseUrl = environment.baseUrl;
  categories : CategoryForDropdownDto[] = [];
  brands:BrandForDropdownDto[]=[];
  skinType:SkinTypeForDropdownDto[]=[];
  imageModel:ImageFile=new ImageFile();
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
   this.IsUploaded=false;
    this. initCategory();
    this.initBrand();
    this.initSkinType();
    this.initialProduct();
  }



  initialProduct(){
  var images = [] ;
    this._productService.getById(this.id)
    .subscribe((result: any) => {
      console.log(result);
      this.product = result.result;
      this.product.categoryId=result.result.category.id;
      this.product.brandId=result.result.brand.id;
      this.product.skinTypeId=result.result.skinType.id;
      this.product.images=result.result.images;
      console.log(this.product.images);
      //  images=result.result.images;


      //  for(var i =0 ;i<images.length ; i++)
      //  {
      //    this.imageModel.images.push(images[i].imagePath);
      //  }

      // this.getImage(images)
      // this.initImage();

    });



  }
  getImage(images:any)
  {
    images.forEach(element => {

      this.imageModel.base64.push(element.base64);

      this.imageModel.imagePath.push(element.imagePath)


    });
    this.imageModel.imagePath.forEach((item)=>{
      this.imageModel.tempImage.push(item.split("/"))
    })

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
  initImage() {
    this.imageModel.tempImage.forEach((item)=>{
    this.imageModel.imageName.push(item[1]);
    })
    this.imageModel.base64.forEach((item)=>{
      this.imageModel.base64Name.push(item);
    })

    this.imageModel.base64Name.forEach((item)=>{
      this.imageModel.imageBlob.push(this.dataURItoBlob_new(item));

    })
    for(var i =0;i<this.imageModel.imageName.length;i++){
      var imageName = this.imageModel.imageName[i];
      var imageBlob = this.imageModel.imageBlob[i];
      this.imageModel.imageFile.push(new File([imageBlob],imageName, { type: "image/jpg" }));

      this.imageModel.images.push(new File([imageBlob],imageName, { type: "image/jpg" }))

    }


    this.imageModel.imageFile.forEach((item)=>{
       this.imageModel.files.push(item);
    })
    console.log(this.imageModel.images);
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

  save(): void {

    for(var i =0;i<this.imageModel.images.length;i++){

      var image = this.imageModel.images[i];

      this.product.images.push(image);
    }


    console.log(this.product)
    this.saving = true;
    if(this.IsUploaded && this.saving){

      this._productService.edit(this.id,this.product).subscribe((response)=>{
        console.log(response);
      })

    // this._productService.edit(this.id,this.product).subscribe(
    //   () => {

    //     this.bsModalRef.hide();
    //     this.onSave.emit();

    //   },
    //   () => {
    //     this.saving = false;
    //   }
    // );
    }
    else{
      this.saving = false;

    console.log("error");
    }
}
  onSelect(event:any) {

    for(var i = 0; i < event.addedFiles.length; i++){
      var image = event.addedFiles[i];
      this.imageModel.images.push(image);

    }

    const file=new FormData();
    for(var i=0;i<event.addedFiles.length;i++)
   {
     file.append("image"+[i],event.addedFiles[i]);
      this.imageModel.files.push(event.addedFiles[i]);
   }
   this._productService.uploadImage(file).subscribe((response:any)=>{
     this.product.images=response;
   })
   this.IsUploaded=true;

 }
 onRemove(event:any) {
   this.imageModel.files.splice(this.imageModel.files.indexOf(event), 1);
 }
 onFileSelect(event:any)
 {
     console.log(event.target);
 }
}

export class ImageFile{
  files: File[] = [];
  imagePath: any[]=[];
  tempImage: string[]=[];
  pathImage: any;
  base64: any[]=[];
  base64Name: any[]=[];
  imageName:any[]=[];
  images:any[]=[];
  imageBlob:any[]=[];
  imageFile:any[]=[];


}
