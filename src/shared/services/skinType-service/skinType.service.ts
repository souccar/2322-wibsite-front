import { CreateSkinTypeDto } from './../../service-proxies/service-proxies';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root'
})
export class SkinTypeService {

  constructor(private http:HttpClient) { }
  baseUrl=environment.baseUrl;
  getAll()
  {
    return this.http.get(this.baseUrl+'api/skinTypes');
  }
  insert(skinType:CreateSkinTypeDto)
  {
  
    return this.http.post(this.baseUrl+'api/skinTypes',skinType);
  }
}
