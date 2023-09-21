import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PageService {

  baseUrl=environment.baseUrl;

  constructor(private http:HttpClient) { }

  getAllPages(params?:HttpParams)
  {
    return this.http.get(this.baseUrl+'api/getAllPages',{params});
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

    console.log(file)
    return  this.http.post(this.baseUrl+'api/uploadPageImage',file,{responseType: 'text'});

  }
}
