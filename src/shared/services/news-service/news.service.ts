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

  getAll(itemsPerPage:number,currentPage:number)
  {
    let apiUrl = this.baseUrl +'api/news' + '?page=' +currentPage+'&count='+itemsPerPage;
    return this.http.get(apiUrl);
  }
  getlastNews(){

    return this.http.get(this.baseUrl+'api/getOnlyForHome');
  }
  getById(id:number):any{
    console.log(id);
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
