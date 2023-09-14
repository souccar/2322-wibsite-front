import { CreateUpdateCategoryDto } from './../../service-proxies/service-proxies';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  constructor(private http:HttpClient) { }
  baseUrl=environment.baseUrl;
  getAll(params?:HttpParams)
  {
    return this.http.get(this.baseUrl+'api/categories',{params});
  }
  getById(id:number):any{
    return this.http.get(this.baseUrl+'api/categories'+'/'+id);
  }

  insert(category:any)
  {
    return this.http.post(this.baseUrl+'api/categories',category);
  }
  edit(id:number,skinType:CreateUpdateCategoryDto)
  {
     return this.http.post(this.baseUrl+'api/categories'+'/'+id,skinType);
  }
  delete(id:number)
  {
    return this.http.delete(this.baseUrl+'api/categories'+'/'+id);
  }
}
