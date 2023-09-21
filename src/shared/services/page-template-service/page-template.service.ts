import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PageTemplateService {

  baseUrl=environment.baseUrl;

  constructor(private http:HttpClient) { }

  getAll(params?:HttpParams)
  {
    // return this.http.get(this.baseUrl+'api/getPages',{params});
  }
  insert(pages:any)
  {
    console.log( "insert api");
    console.log(pages);
    return this.http.post(this.baseUrl+'api/pageTemplates',pages);

  }
  edit(id:number,pages:any)
  {
    //  return this.http.post(this.baseUrl+'api/pages'+'/'+id,pages);
  }
  delete(id:number)
  {
    // return this.http.delete(this.baseUrl+'api/pages'+'/'+id);
  }
  uploadImage(file:any)
  {

    // return  this.http.post(this.baseUrl+'api/uploadPageImage',file,{responseType: 'text'});

  }
}
