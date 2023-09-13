import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http:HttpClient) { }
  baseUrl=environment.baseUrl;
  getAll()
  {
    return this.http.get(this.baseUrl+'api/products');
  }
  insert(product:any)
  {
    console.log(product);
    return this.http.post(this.baseUrl+'api/products',product);
  }
}
