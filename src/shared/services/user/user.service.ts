import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { CreateUpdateUserDto } from 'src/shared/service-proxies/service-proxies';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  baseUrl=environment.baseUrl;
 
  constructor(private http:HttpClient) { }

  getAll(itemsPerPage:number,currentPage:number)
  {
    let apiUrl = this.baseUrl +'api/users/'+itemsPerPage+ '?page='+currentPage;
    return this.http.get(apiUrl);
  }
  getWithoutPagination(params?:HttpParams)
  {
    return this.http.get(this.baseUrl+'api/user',{params});
  }
  getById(id:number):any{
    return this.http.get(this.baseUrl+'api/user'+'/'+id);
  }
  insert(user:CreateUpdateUserDto)
  {
    return this.http.post(this.baseUrl+'api/register',user);
  }
  edit(id:number,user:CreateUpdateUserDto)
  {
     return this.http.put(this.baseUrl+'api/editUser'+'/'+id,user);
  }
  delete(id:number)
  {
    return this.http.delete(this.baseUrl+'api/deleteUser'+'/'+id);
  }
}
