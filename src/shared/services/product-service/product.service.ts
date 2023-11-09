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
  
  getAll(itemsPerPage:number,currentPage:number)
  {
    let apiUrl = this.baseUrl +'api/products' + '?page=' +currentPage+'&count='+itemsPerPage;
    return this.http.get(apiUrl);
  }
  getWithoutPagination(params?:HttpParams)
  {
    return this.http.get(this.baseUrl+'api/products',{params});
  }
  insert(product:any)
  {
    return this.http.post(this.baseUrl+'api/products',product);
  }
  getById(id:number):any{

    return this.http.get(this.baseUrl+'api/products'+'/'+id);
  }
  edit(id:number,product:any)
  {
     return this.http.post(this.baseUrl+'api/products'+'/'+id,product);
  }
  delete(id:number)
  {
    return this.http.delete(this.baseUrl+'api/products'+'/'+id);
  }
  uploadImage(file:any)
  {
    return  this.http.post(this.baseUrl+'api/uploadProductImages',file);

  }
  removeImage(id:number)
  {
    return  this.http.delete(this.baseUrl+'api/removeProductImages'+'/'+id);

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
