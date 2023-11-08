import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { CreateUpdateSliderDto } from 'src/shared/service-proxies/service-proxies';

@Injectable({
  providedIn: 'root'
})
export class SliderService {
  baseUrl=environment.baseUrl;
  constructor(private http:HttpClient) { }

  getAll(itemsPerPage:number,currentPage:number)
  {
    let apiUrl = this.baseUrl +'api/getAllSliders' + '?page=' +currentPage+'&count='+itemsPerPage;
    return this.http.get(apiUrl);
  }
  getWithoutPagination(params?:HttpParams)
  {
    return this.http.get(this.baseUrl+'api/getAllSliders',{params});
  }
  insert(slider:any)
  {
    console.log(slider);
    return this.http.post(this.baseUrl+'api/Sliders',slider);
  }
  edit(id:number,slider:CreateUpdateSliderDto)
  {
     return this.http.post(this.baseUrl+'api/Sliders'+'/'+id,slider);
  }
  getById(id:number):any{
    return this.http.get(this.baseUrl+'api/Sliders'+'/'+id);
  }
  delete(id:number)
  {
    return this.http.delete(this.baseUrl+'api/Sliders'+'/'+id);
  }
  uploadImage(file:any)
  {
    return  this.http.post(this.baseUrl+'api/uploadPageImage',file,{responseType: 'text'});

  }
}
