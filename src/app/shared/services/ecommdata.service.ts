import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EcommdataService {

  constructor(private _HttpClient:HttpClient) { }
baseUrl:string=`https://ecommerce.routemisr.com`;

  getAllProducts():Observable<any>{
    return this._HttpClient.get(`https://ecommerce.routemisr.com/api/v1/products`)
  }

  getProductDetails(id:string):Observable<any>{
    return this._HttpClient.get(`https://ecommerce.routemisr.com/api/v1/products/${id}`)
  }

  getCategries():Observable<any>{
    return this._HttpClient.get(this.baseUrl+`/api/v1/categories`)
  }

  getCategrydetails(id:string|null):Observable<any>{
    return this._HttpClient.get(this.baseUrl+`/api/v1/categories/${id}`)
  }

  getbrands():Observable<any>{
    return this._HttpClient.get(this.baseUrl+`/api/v1/brands`)
  }


  getmodal(id:any):Observable<any>{
    return this._HttpClient.get(this.baseUrl+`/api/v1/brands/${id}`)
  }
}
