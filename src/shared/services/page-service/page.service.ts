import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PageService {

  baseUrl=environment.baseUrl;

  constructor(private http:HttpClient) { }
  getAll(itemsPerPage:number,currentPage:number)
  {
    let apiUrl = this.baseUrl +'api/getAllPages' + '?page=' +currentPage+'&count='+itemsPerPage;
    return this.http.get(apiUrl);
  }
  getWithoutPagination(params?:HttpParams)
  {
    return this.http.get(this.baseUrl+'api/getAllPages',{params});
  }

 
  getSlugs(){
    return this.http.get(this.baseUrl+'api/getPagesForDrobdown');
  }
  getById(id:number)
  {
    return this.http.get(this.baseUrl+'api/getForEdit'+'/'+id);
  }
  insert(pages:any)
  {
    return this.http.post(this.baseUrl+'api/pages',pages);
  }
  edit(id:number,pages:any)
  {
     return this.http.post(this.baseUrl+'api/pages'+'/'+id,pages);
  }
  delete(id:number)
  {
    return this.http.delete(this.baseUrl+'api/pages'+'/'+id);
  }
  uploadImage(file:any)
  {
    return  this.http.post(this.baseUrl+'api/uploadPageImage',file,{responseType: 'text'});

  }

  getTemplateForPage(pageId:number){
    return this.http.get(this.baseUrl+'api/getAssociatedTemplates'+'/'+pageId);
  }
}
