import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class TemplateService {

  baseUrl=environment.baseUrl;

  constructor(private http:HttpClient) { }

  getTemplates(params?:HttpParams)
  {
    return this.http.get(this.baseUrl+'api/getTemplatesForDrobdown',{params});
  }
 
  getAll(itemsPerPage:number,currentPage:number)
  {
    let apiUrl = this.baseUrl +'api/getAllTemplates' + '?page=' +currentPage+'&count='+itemsPerPage;
    return this.http.get(apiUrl);
  }
  getWithoutPagination(params?:HttpParams)
  {
    return this.http.get(this.baseUrl+'api/getAllTemplates',{params});
  }

  getById(params:HttpParams){
   
    return this.http.get(this.baseUrl+'api/getWithChildren',{params});
  }
  insert(template:any)
  {
    return this.http.post(this.baseUrl+'api/templates',template,{headers:{
      "Content-Type": "application/json",

  }});
  }
  edit(id:number,template:any)
  {  
     return this.http.post(this.baseUrl+'api/templates'+'/'+id,template);
  }
  delete(id:number)
  {
    return this.http.delete(this.baseUrl+'api/templates'+'/'+id);
  }
  uploadImage(file:any)
  {
    return  this.http.post(this.baseUrl+'api/uploadTemplateImage',file,{responseType: 'text'});

  }
}
