import { CreateUpdateCategoryDto } from './../../service-proxies/service-proxies';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(private http:HttpClient) { }
  baseUrl=environment.baseUrl;
  getAll()
  {
    return this.http.get(this.baseUrl+'api/categories');
  }
  insert(category:any)
  {
    console.log(category);
    return this.http.post(this.baseUrl+'api/categories',category);
  }
}
