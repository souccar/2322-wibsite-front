import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { CreateUpdateBrandDto } from 'src/shared/service-proxies/service-proxies';
@Injectable({
  providedIn: 'root'
})
export class BrandService {
  baseUrl=environment.baseUrl;
 
  constructor(private http:HttpClient) { }

  getAll(itemsPerPage:number,currentPage:number)
  {
    let apiUrl = this.baseUrl +'api/brands' + '?page=' +currentPage+'&count='+itemsPerPage;
    return this.http.get(apiUrl);
  }
  getWithoutPagination()
  {
    return this.http.get(this.baseUrl+'api/brands');
  }
  getById(id:number):any{
    return this.http.get(this.baseUrl+'api/brands'+'/'+id);
  }
  insert(brand:CreateUpdateBrandDto)
  {
    return this.http.post(this.baseUrl+'api/brands',brand);
  }
  edit(id:number,brand:CreateUpdateBrandDto)
  {
     return this.http.post(this.baseUrl+'api/brands'+'/'+id,brand);
  }
  delete(id:number)
  {
    return this.http.delete(this.baseUrl+'api/brands'+'/'+id);
  }

}
