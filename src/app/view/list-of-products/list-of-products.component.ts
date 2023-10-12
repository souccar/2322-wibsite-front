import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
import { ReadProductDto } from 'src/shared/service-proxies/service-proxies';
import { AccordionService } from 'src/shared/services/accordion-service/accordion.service';
import { ProductService } from 'src/shared/services/product-service/product.service';


@Component({
  selector: 'app-list-of-products',
  templateUrl: './list-of-products.component.html',
  styleUrls: ['./list-of-products.component.scss']
})
export class ListOfProductsComponent implements OnInit{
 products:ReadProductDto[]=[];
 baseUrl=environment.baseUrl;
  constructor(public _accordionService:AccordionService,
    private _productService:ProductService,)
  {

  }
  ngOnInit(): void {
   this.getAllProduct()

  }
  getAllProduct()
  {
    this.products=[]
    this._productService.getAll().subscribe((response:any)=>{
      console.log(response.result.data);
      this.products=response.result.data;
    })
  }


}
