import { Injectable } from '@angular/core';
import { BrandService } from 'src/shared/services/brand-service/brand.service';
import { CategoryService } from 'src/shared/services/category-service/category.service';
import { ProductService } from 'src/shared/services/product-service/product.service';
import { SkinTypeService } from 'src/shared/services/skinType-service/skinType.service';
import { Component, OnInit } from '@angular/core';
import { HttpParams } from '@angular/common/http';
import { ReadBrandDto, ReadCategoryDto, ReadProductDto, ReadSkinTypeDto } from 'src/shared/service-proxies/service-proxies';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root'
})
export class AccordionService implements OnInit{
  skinTypes:ReadSkinTypeDto[]=[];
  brands:ReadBrandDto[]=[];
  categories:ReadCategoryDto[]=[];
  baseUrl=environment.baseUrl;
  products: ReadProductDto[] = [];
  product: ReadProductDto = new ReadProductDto();
  type:string;
  id:number;
  isloading:boolean=false;
  constructor(private _productService:ProductService,
    private _skinTypeService:SkinTypeService,
    private _categoryService:CategoryService,
    private _brandService:BrandService) { }
  ngOnInit(): void {
    this.getBrand();
    this.getCategory();
    this.getSkinType();
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
      console.log(this.skinTypes)
    })
  }
  getBrand()
  {
    this._brandService.getAll().subscribe((response:any)=>{
      this.brands=response.result.data;
      console.log(this.brands)
    })
  }
  getCategory()
  {
    this._categoryService.getAll().subscribe((response:any)=>{
      this.categories=response.result;
      console.log(this.categories)
    })


  }
}
