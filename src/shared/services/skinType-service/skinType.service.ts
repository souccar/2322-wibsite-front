import { CreateUpdateBrandDto, CreateUpdateSkinTypeDto, ReadSkinTypeDto } from './../../service-proxies/service-proxies';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root'
})
export class SkinTypeService {

  constructor(private http:HttpClient) { }
  baseUrl=environment.baseUrl;
  getAll(params?:HttpParams)
  {
    return this.http.get(this.baseUrl+'api/skinTypes',{params});
  }
  getById(id:number):any{
    return this.http.get(this.baseUrl+'api/skinTypes'+'/'+id);
  }
  insert(skinType:CreateUpdateBrandDto)
  {
    return this.http.post(this.baseUrl+'api/skinTypes',skinType);
  }
  edit(id:number,skinType:CreateUpdateBrandDto)
  {
     return this.http.post(this.baseUrl+'api/skinTypes'+'/'+id,skinType);
  }
  delete(id:number)
  {
    return this.http.delete(this.baseUrl+'api/skinTypes'+'/'+id);
  }


}
