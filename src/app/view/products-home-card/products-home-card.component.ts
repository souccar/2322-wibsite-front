import { HttpParams } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
import { ReadProductDto } from 'src/shared/service-proxies/service-proxies';
import { ProductService } from 'src/shared/services/product-service/product.service';

@Component({
  selector: 'app-products-home-card',
  templateUrl: './products-home-card.component.html',
  styleUrls: ['./products-home-card.component.scss']
})
export class ProductsHomeCardComponent  implements OnInit {
  baseUrl = environment.baseUrl;
  glideDataLoad = false;
  products: ReadProductDto[] = [];
  constructor( private _productService: ProductService){}
  ngOnInit(): void {
    this.getProduct();
  }
  
  getProduct() {
    let params = new HttpParams().set('count', 10);
    this._productService.getWithoutPagination(params).subscribe((responce: any) => {
      this.products = responce.result.data;
      this.glideDataLoad = true;
    });
  }

}
