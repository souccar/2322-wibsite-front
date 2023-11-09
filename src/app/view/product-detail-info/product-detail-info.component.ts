import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ReadProductDto } from 'src/shared/service-proxies/service-proxies';
import { ProductService } from 'src/shared/services/product-service/product.service';

@Component({
  selector: 'app-product-detail-info',
  templateUrl: './product-detail-info.component.html',
  styleUrls: ['./product-detail-info.component.scss']
})
export class ProductDetailInfoComponent implements OnInit {
  id:number;
  constructor(private route:ActivatedRoute,private _productService:ProductService) { }
  product:ReadProductDto=new ReadProductDto();
  ngOnInit(): void {

    this.route.params.subscribe(params => {
       this.id = params['id'];

    });
    this.getProductById();
  }
  getProductById()
  {
       this._productService.getById(this.id).subscribe((result:any)=>{
        this.product=result.result;
        // this.product=result.category.nam
       })
  }





}
