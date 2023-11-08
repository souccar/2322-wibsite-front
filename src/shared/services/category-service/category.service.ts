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

  getAll(itemsPerPage:number,currentPage:number)
  {
    let apiUrl = this.baseUrl +'api/categories' + '?page=' +currentPage+'&count='+itemsPerPage;
    return this.http.get(apiUrl);
  }
  getWithoutPagination()
  {
    return this.http.get(this.baseUrl+'api/categories');
  }
  getById(id:number):any{
    return this.http.get(this.baseUrl+'api/categories'+'/'+id);
  }

  insert(category:any)
  {
    return this.http.post(this.baseUrl+'api/categories',category);
  }
  edit(id:number,category:any)
  {
     return this.http.post(this.baseUrl+'api/categories'+'/'+id,category);
  }
  delete(id:number)
  {
    return this.http.delete(this.baseUrl+'api/categories'+'/'+id);
  }

}
