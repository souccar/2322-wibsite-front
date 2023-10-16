import { HttpParams } from '@angular/common/http';
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
  totalItems =0;
  itemsPerPage = 5;
  apiUrl ='';
  currentPage = 1;
  isLoading:boolean=false;
  currentPageEvent = 1;
  page: number;
  limitsMaxSize = 5;
  limitsTotalItems = 175;
  limitsCurrentPage = 1;
  setPage(pageNo: number): void {
    this.currentPage = pageNo;
  }

  pageChanged(event: any): void {
    console.log(event);
    console.log("raneem");
    this.apiUrl = this.baseUrl +'api/products' + '?page=' +event.page;
    this.getAllProduct( this.apiUrl );
  }

 products:ReadProductDto[]=[];
 baseUrl=environment.baseUrl;
  constructor(public _accordionService:AccordionService,
    private _productService:ProductService,)
  {

  }
  ngOnInit(): void {
   this.getAllProduct(this.baseUrl+'api/products');

  }
  getAllProduct(url:string)
  {
    console.log("Mohammad1");
     let params = new HttpParams().set('count', 4) ;
    this.products=[];
      this.isLoading=true;
      this._productService.getAll(params).subscribe((response:any)=>{
        this.totalItems=response.result.total
        console.log(response)
        this.products=response.result.data;
        this.isLoading=false;
      })
    ;

    console.log( this.isLoading);
    console.log("Mohammad2");
  }



}
