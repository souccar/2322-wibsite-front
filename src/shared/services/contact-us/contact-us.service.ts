import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ContactUsService {

  baseUrl=environment.baseUrl;
 
  constructor(private http:HttpClient) { }
  getAll(params?:HttpParams)
  {
    
    return this.http.get(this.baseUrl+'api/allContacts',{params});
  }
  getById(id:number):any{ 

    return this.http.get(this.baseUrl+'api/contacts'+'/'+id);
  }
  insert(contact:any)
  {
    
    return this.http.post(this.baseUrl+'api/contactUs',contact);
  }
}
