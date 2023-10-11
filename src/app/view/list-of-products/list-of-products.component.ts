import { HttpParams } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { environment } from 'src/environments/environment';
import { ReadBrandDto, ReadCategoryDto, ReadProductDto, ReadSkinTypeDto } from 'src/shared/service-proxies/service-proxies';
import { BrandService } from 'src/shared/services/brand-service/brand.service';
import { CategoryService } from 'src/shared/services/category-service/category.service';
import { ProductService } from 'src/shared/services/product-service/product.service';
import { SkinTypeService } from 'src/shared/services/skinType-service/skinType.service';

@Component({
  selector: 'app-list-of-products',
  templateUrl: './list-of-products.component.html',
  styleUrls: ['./list-of-products.component.scss']
})
export class ListOfProductsComponent implements OnInit {
  skinTypes:ReadSkinTypeDto[]=[];
  brands:ReadBrandDto[]=[];
  categories:ReadCategoryDto[]=[];
  baseUrl=environment.baseUrl;
  products: ReadProductDto[] = [];
  product: ReadProductDto = new ReadProductDto();
  badges:any[] = ["dd","ww","qq"];
  type:string;
  id:number;
  isloading:boolean=false;


  constructor(private _productService:ProductService,
     private route:ActivatedRoute,
     private _skinTypeService:SkinTypeService,
     private _categoryService:CategoryService,
     private _brandService:BrandService)
  {
  }

  ngOnInit(): void
  {
    this.getSkinType();
    this.getBrand();
    this.getCategory();
    // this.route.params.subscribe((value:any)=>{
    //   this.id = value.id;
    //   this.type = value.type;
    // });

    // if (this.type == 'category') {
    //   this.getProductsByCategory(this.id);
    // }
    // else if(this.type == 'brand'){
    //   this.getProductsByBrand(this.id);
    // }
    // else if(this.type == 'skinType'){
    //   this.getProductsBySkinType(this.id);
    // }
  }

  getProductsByCategory(categoryId){
    let params = new HttpParams().set('categoryId', categoryId);
    this.products=[];
    this._productService.getByCategory(params).subscribe((responce:any)=>{
      responce.result.data?.forEach(element => {
        this.product = new ReadProductDto();
        this.product.product_images=[];
        this.product.id = element.id;
        this.product.name = element.name;
        this.product.description = element.description;
        this.product.point = element.point;
        this.product.brand=element.brand;
        this.product.skin_type=element.skin_type;
        this.product.category=element.category;
        element.product_images.forEach(image => {
          this.product.product_images.push(image.imagePath);
        });
        this.products.push(this.product);
      });
      this.isloading=true;
    });
  }

  getProductsByBrand(brandId){
    let params = new HttpParams().set('brandId', brandId);
    this.products=[];
    this._productService.getByBrand(params).subscribe((responce:any)=>{
      console.log(responce)
      responce.result.data?.forEach(element => {
        this.product = new ReadProductDto();
        this.product.product_images=[];
        this.product.id = element.id;
        this.product.name = element.name;
        this.product.description = element.description;
        this.product.point = element.point;
        this.product.brand=element.brand;
        this.product.skin_type=element.skin_type;
        this.product.category=element.category;
        element.product_images.forEach(image => {
          this.product.product_images.push(image.imagePath);
        });
        this.products.push(this.product);
      });
      this.isloading=true;
    });

  }

  getProductsBySkinType(skinTypeId){
    let params = new HttpParams().set('skinTypeId', skinTypeId);
    this.products=[];
    this._productService.getBySkinType(params).subscribe((responce:any)=>{
      responce.result.data?.forEach(element => {
        this.product = new ReadProductDto();
        this.product.product_images=[];
        this.product.id = element.id;
        this.product.name = element.name;
        this.product.description = element.description;
        this.product.point = element.point;
        this.product.brand=element.brand;
        this.product.skin_type=element.skin_type;
        this.product.category=element.category;
        element.product_images.forEach(image => {
          this.product.product_images.push(image.imagePath);
        });
        this.products.push(this.product);
      });
      this.isloading=true;
    });
  }
  getSkinType()
  {
    this._skinTypeService.getAll().subscribe((response:any)=>{
      this.skinTypes=response.result.data;
    })
  }
  getBrand()
  {
    this._brandService.getAll().subscribe((response:any)=>{
      this.brands=response.result.data;
    })
  }
  getCategory()
  {
    this._categoryService.getAll().subscribe((response:any)=>{
      this.categories=response.result;

    })


  }
}
