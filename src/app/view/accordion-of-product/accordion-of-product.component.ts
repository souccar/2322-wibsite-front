import { ListOfProductsComponent } from './../list-of-products/list-of-products.component';
import { ProductService } from 'src/shared/services/product-service/product.service';

import { BrandService } from 'src/shared/services/brand-service/brand.service';
import { CategoryService } from 'src/shared/services/category-service/category.service';
import { SkinTypeService } from 'src/shared/services/skinType-service/skinType.service';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { HttpParams } from '@angular/common/http';
import { ReadBrandDto, ReadCategoryDto, ReadProductDto, ReadSkinTypeDto } from 'src/shared/service-proxies/service-proxies';
import { AccordionService } from 'src/shared/services/accordion-service/accordion.service';
@Component({
  selector: 'app-accordion-of-product',
  templateUrl: './accordion-of-product.component.html',
  styleUrls: ['./accordion-of-product.component.scss']
})

export class AccordionOfProductComponent implements OnInit {
  constructor(
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
