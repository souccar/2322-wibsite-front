import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { CreateUpdateProductDto } from 'src/shared/service-proxies/service-proxies';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http:HttpClient) { }
  baseUrl=environment.baseUrl;
  getAll()
  {
    return this.http.get(this.baseUrl+'api/products');
  }
  insert(product:any)
  {
    console.log(product);
    return this.http.post(this.baseUrl+'api/products',product);
  }
  getById(id:number):any{
    return this.http.get(this.baseUrl+'api/products'+'/'+id);
  }
  edit(id:number,product:CreateUpdateProductDto)
  {
     return this.http.post(this.baseUrl+'api/products'+'/'+id,product);
  }

  getByCategory(params:HttpParams)
  {
     return this.http.get(this.baseUrl+'api/productsByCategoryId',{params});
  }

  getByBrand(params:HttpParams)
  {
     return this.http.get(this.baseUrl+'api/productsByBrandId',{params});
  }

  getBySkinType(params:HttpParams)
  {
     return this.http.get(this.baseUrl+'api/productsBySkinTypeId',{params});
  }

}
