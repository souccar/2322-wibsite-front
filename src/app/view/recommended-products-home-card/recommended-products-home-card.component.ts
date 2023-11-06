import { HttpParams } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
import { ReadProductDto } from 'src/shared/service-proxies/service-proxies';
import { ProductService } from 'src/shared/services/product-service/product.service';

@Component({
  selector: 'app-recommended-products-home-card',
  templateUrl: './recommended-products-home-card.component.html',
  styleUrls: ['./recommended-products-home-card.component.scss']
})
export class RecommendedProductsHomeCardComponent  implements OnInit {
  baseUrl = environment.baseUrl;
  slideSettings = {
    type: 'carousel',
    gap: 30,
    perView: 3,
    hideNav: true,
    peek: { before: 10, after: 10 },
    breakpoints: {
      600: { perView: 1 },
      992: { perView: 2 },
      1200: { perView: 3 }
    }
  }
  glideDataLoad = false;
  products: ReadProductDto[] = [];

  constructor(private _productService: ProductService){}
  ngOnInit(): void {
    this.getProduct();
  }
  getProduct() {
    let params = new HttpParams().set('count', 10);
    this._productService.getAll(params).subscribe((responce: any) => {
      this.products = responce.result.data;
      this.glideDataLoad = true;
    });
  }

}
