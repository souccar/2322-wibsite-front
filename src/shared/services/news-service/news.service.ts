import {  CreateUpdateNewsDto } from '../../service-proxies/service-proxies';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root'
})
export class NewsService {

  baseUrl=environment.baseUrl;
 
  constructor(private http:HttpClient) { }

  getAll(params?:HttpParams)
  {
    return this.http.get(this.baseUrl+'api/news',{params});
  }
  getById(id:number):any{
    return this.http.get(this.baseUrl+'api/news'+'/'+id);
  }
  insert(news:any)
  {
    return this.http.post(this.baseUrl+'api/news',news);
  }
  edit(id:number,news:any)
  {
     return this.http.post(this.baseUrl+'api/news'+'/'+id,news);
  }
  delete(id:number)
  {
    return this.http.delete(this.baseUrl+'api/news'+'/'+id);
  }

}
