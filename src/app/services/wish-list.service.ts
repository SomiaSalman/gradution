import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WishListService {
basUrl:string=`https://ecommerce.routemisr.com`;
headers:any={token:localStorage.getItem('eToken')};


  constructor(private _HttpClient:HttpClient) { }

addTOWishlist(prodId:string):Observable<any>{
  return this._HttpClient.post(this.basUrl+`/api/v1/wishlist`,
  {productId:prodId},
  {headers:this.headers},

  )
}

getWishlist():Observable<any>{
  return this._HttpClient.get(this.basUrl+`/api/v1/wishlist`,
  
  {headers:this.headers},

  )
}

removeItemWishlist(prodId:string):Observable<any>{
  return this._HttpClient.delete(this.basUrl+`/api/v1/wishlist/${prodId}`,
  
  {headers:this.headers},

  )
}

}
