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
    return this.http.get(this.baseUrl+'api/getTemplates',{params});
  }
  getAllTemplates(params?:HttpParams)
  {
    return this.http.get(this.baseUrl+'api/getAllTemplates',{params});
  }
  getById(id:number):any{
    return this.http.get(this.baseUrl+'api/templates'+'/'+id);
  }
  insert(templates:any)
  {
    return this.http.post(this.baseUrl+'api/templates',templates,{headers:{
      "Content-Type": "application/json"
  }});
  }
  edit(id:number,templates:any)
  {
     return this.http.post(this.baseUrl+'api/templates'+'/'+id,templates);
  }
  delete(id:number)
  {
    return this.http.delete(this.baseUrl+'api/templates'+'/'+id);
  }
  uploadImage(file:any)
  {

    console.log(file)
    return  this.http.post(this.baseUrl+'api/uploadTemplateImage',file,{responseType: 'text'});

  }
}