import { HttpParams } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { environment } from 'src/environments/environment';
import { ReadProductDto } from 'src/shared/service-proxies/service-proxies';
import { ProductService } from 'src/shared/services/product-service/product.service';

@Component({
  selector: 'app-view-product-by',
  templateUrl: './view-product-by.component.html',
  styleUrls: ['./view-product-by.component.scss']
})
export class ViewProductByComponent implements OnInit {
  
  baseUrl=environment.baseUrl;
  products: ReadProductDto[] = [];
  product: ReadProductDto = new ReadProductDto();
  badges:any[] = ["dd","ww","qq"];
  type:string;
  id:number;


  constructor(private _productService:ProductService, private route:ActivatedRoute) 
  {
  }

  ngOnInit(): void 
  {
    this.route.params.subscribe((value:any)=>{
      this.id = value.id;
      this.type = value.type;
    });

    if (this.type == 'category') {
      this.getProductsByCategory(this.id);
    }
    else if(this.type == 'brand'){
      this.getProductsByBrand(this.id);
    }
    else if(this.type == 'skinType'){
      this.getProductsBySkinType(this.id);
    }    
  }

  getProductsByCategory(categoryId){
    let params = new HttpParams().set('categoryId', categoryId);
    this._productService.getByCategory(params).subscribe((responce:any)=>{
      responce.result.data?.forEach(element => {
        this.product = new ReadProductDto();
        this.product.id = element.id;
        this.product.name = element.name;
        this.product.description = element.description;
        this.product.point = element.point;
        element.product_images.forEach(image => {          
          this.product.images.push(image.imagePath);
        });
        this.products.push(this.product);
      });
    });
  }

  getProductsByBrand(brandId){
    let params = new HttpParams().set('brandId', brandId);
    this._productService.getByBrand(params).subscribe((responce:any)=>{
      responce.result.data?.forEach(element => {
        this.product = new ReadProductDto();
        this.product.id = element.id;
        this.product.name = element.name;
        this.product.description = element.description;
        this.product.point = element.point;
        element.product_images.forEach(image => {          
          this.product.images.push(image.imagePath);
        });
        this.products.push(this.product);
      });
    });
  }

  getProductsBySkinType(skinTypeId){
    let params = new HttpParams().set('skinTypeId', skinTypeId);
    this._productService.getBySkinType(params).subscribe((responce:any)=>{
      responce.result.data?.forEach(element => {
        this.product = new ReadProductDto();
        this.product.id = element.id;
        this.product.name = element.name;
        this.product.description = element.description;
        this.product.point = element.point;
        element.product_images.forEach(image => {          
          this.product.images.push(image.imagePath);
        });
        this.products.push(this.product);
      });
    });
  }
}
