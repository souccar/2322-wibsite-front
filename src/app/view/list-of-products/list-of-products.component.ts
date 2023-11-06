import { HttpParams } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
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
  type:string;
  id:number;
  product: ReadProductDto = new ReadProductDto();
  page: number;
  limitsMaxSize = 5;
  limitsTotalItems = 175;
  isFiltering:boolean=false;
  limitsCurrentPage = 1;
  setPage(pageNo: number): void {
    this.currentPage = pageNo;
  }

  pageChanged(event: any): void {


    this.getAllProduct(  );
  }

 products:ReadProductDto[]=[];
 baseUrl=environment.baseUrl;
  constructor(public _accordionService:AccordionService,
    private _productService:ProductService,private route:ActivatedRoute)
  {

  }
  ngOnInit(): void {
  //


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
  else{
    this.getAllProduct();
  }

  }


  getProductsByCategory(categoryId){
    let params = new HttpParams().set('categoryId', categoryId);
    this.products=[];
    this._productService.getByCategory(params).subscribe((responce:any)=>{
      this.products=responce.result.data
      this.isFiltering=true;
    });
  }

  getProductsByBrand(brandId){
    let params = new HttpParams().set('brandId', brandId);
    this.products=[];
    this._productService.getByBrand(params).subscribe((responce:any)=>{

      this.products=responce.result.data
      this.isFiltering=true;
    });

  }

  getProductsBySkinType(skinTypeId){
    let params = new HttpParams().set('skinTypeId', skinTypeId);
    this.products=[];
    this._productService.getBySkinType(params).subscribe((responce:any)=>{
      this.products=responce.result.data
      this.isFiltering=true;
    });
  }
  getAllProduct()
  {

    let params = new HttpParams().set('count', 4) ;
    this.products=[];
      this.isLoading=true;
      this._productService.getAll(params).subscribe((response:any)=>{
        this.totalItems=response.result.total
        this.products=response.result.data;
        console.log(response)
        this.isLoading=false;
      })
    ;


  }



}
