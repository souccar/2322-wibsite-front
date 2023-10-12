import { ProductService } from 'src/shared/services/product-service/product.service';

import { BrandService } from 'src/shared/services/brand-service/brand.service';
import { CategoryService } from 'src/shared/services/category-service/category.service';
import { SkinTypeService } from 'src/shared/services/skinType-service/skinType.service';
import { Component, OnInit } from '@angular/core';
import { HttpParams } from '@angular/common/http';
import { ReadBrandDto, ReadCategoryDto, ReadProductDto, ReadSkinTypeDto } from 'src/shared/service-proxies/service-proxies';
import { AccordionService } from 'src/shared/services/accordion-service/accordion.service';
@Component({
  selector: 'app-accordion-of-product',
  templateUrl: './accordion-of-product.component.html',
  styleUrls: ['./accordion-of-product.component.scss']
})

export class AccordionOfProductComponent implements OnInit {


  constructor(private _productService:ProductService,
    private _skinTypeService:SkinTypeService,
    private _categoryService:CategoryService,
    private _brandService:BrandService,
    public _accordionService:AccordionService)
    {}
  ngOnInit(): void {
    this.getCategory();
    this.getBrand();
    this.getSkinType();
  }

  getProductsByCategory(categoryId){
    let params = new HttpParams().set('categoryId', categoryId);
    this._accordionService.products=[];
    this._productService.getByCategory(params).subscribe((responce:any)=>{
      responce.result.data?.forEach(element => {
        this._accordionService.product = new ReadProductDto();
        this._accordionService.product.product_images=[];
        this._accordionService.product.id = element.id;
        this._accordionService.product.name = element.name;
        this._accordionService.product.description = element.description;
        this._accordionService.product.point = element.point;
        this._accordionService.product.brand=element.brand;
        this._accordionService.product.skin_type=element.skin_type;
        this._accordionService.product.category=element.category;
        element.product_images.forEach(image => {
          this._accordionService.product.product_images.push(image.imagePath);
        });
        this._accordionService.products.push(this._accordionService.product);
      });
      this._accordionService.isloading=true;
    });
  }

  getProductsByBrand(brandId){
    let params = new HttpParams().set('brandId', brandId);
    this._accordionService.products=[];
    this._productService.getByBrand(params).subscribe((responce:any)=>{
      console.log(responce)
      responce.result.data?.forEach(element => {
        this._accordionService.product = new ReadProductDto();
        this._accordionService.product.product_images=[];
        this._accordionService.product.id = element.id;
        this._accordionService.product.name = element.name;
        this._accordionService.product.description = element.description;
        this._accordionService.product.point = element.point;
        this._accordionService.product.brand=element.brand;
        this._accordionService.product.skin_type=element.skin_type;
        this._accordionService.product.category=element.category;
        element.product_images.forEach(image => {
          this._accordionService.product.product_images.push(image.imagePath);
        });
        this._accordionService.products.push(this._accordionService.product);
      });
      this._accordionService.isloading=true;
    });

  }

  getProductsBySkinType(skinTypeId){
    let params = new HttpParams().set('skinTypeId', skinTypeId);
    this._accordionService.products=[];
    this._productService.getBySkinType(params).subscribe((responce:any)=>{
      responce.result.data?.forEach(element => {
        this._accordionService.product = new ReadProductDto();
        this._accordionService.product.product_images=[];
        this._accordionService.product.id = element.id;
        this._accordionService.product.name = element.name;
        this._accordionService.product.description = element.description;
        this._accordionService.product.point = element.point;
        this._accordionService.product.brand=element.brand;
        this._accordionService.product.skin_type=element.skin_type;
        this._accordionService.product.category=element.category;
        element.product_images.forEach(image => {
          this._accordionService.product.product_images.push(image.imagePath);
        });
        this._accordionService.products.push(this._accordionService.product);
      });
      this._accordionService.isloading=true;
    });
  }
  getSkinType()
  {
    this._skinTypeService.getAll().subscribe((response:any)=>{
      this._accordionService.skinTypes=response.result.data;
    })
  }
  getBrand()
  {
    this._brandService.getAll().subscribe((response:any)=>{
      this._accordionService.brands=response.result.data;
    })
  }
  getCategory()
  {
    this._categoryService.getAll().subscribe((response:any)=>{
      this._accordionService.categories=response.result;


    })


  }
}
