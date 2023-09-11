import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { CreateBrandDto } from 'src/shared/service-proxies/service-proxies';
@Injectable({
  providedIn: 'root'
})
export class BrandService {
  baseUrl=environment.baseUrl;
 
  constructor(private http:HttpClient) { }

  getAll(params?:HttpParams)
  {
    return this.http.get(this.baseUrl+'api/brands',{params});
  }
  insert(brand:CreateBrandDto)
  {
  
    return this.http.post(this.baseUrl+'api/brands',brand);
  }
}
