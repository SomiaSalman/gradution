import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { WishListService } from 'src/app/services/wish-list.service';
import {  Product } from 'src/app/shared/interfaces/product';
import { CartService } from 'src/app/shared/services/cart.service';


@Component({
  selector: 'app-wish-list',
  templateUrl: './wish-list.component.html',
  styleUrls: ['./wish-list.component.scss']
})
export class WishListComponent implements OnInit {
  constructor(private _WishListService:WishListService,private _ToastrService:ToastrService,private _CartService:CartService){}
  products:Product[]=[];
  wishListData:string[]=[];



  ngOnInit():void{
    //get All wishlist
    this._WishListService.getWishlist().subscribe({
    next:(response)=>{
    console.log('wish', response);
    this.products=response.data;

    const newData=response.data.map((item:any)=>item._id);    
    this.wishListData=newData;
    }
      });
    }
  
      // addToFavoruit(id:string):void{
      //   this._WishListService.addTOWishlist(id).subscribe({
      //     next:(response)=>{
      //       console.log(response);
      //       this._ToastrService.success(response.message);
      
            
      //     }
      //   })
      // }

      addToFavoruit(id:string):void{
        this._WishListService.addTOWishlist(id).subscribe({
          next:(response)=>{
            console.log(response);
            this._ToastrService.success(response.message);
            this.wishListData=response.data;
            
          }
        })
      }
      
      removeFromFavoruit(id:string):void{
        this._WishListService.removeItemWishlist(id).subscribe({
          next:(response)=>{
            console.log(response);
            this._ToastrService.success(response.message);
            this.wishListData=response.data;
            this._WishListService.getWishlist().subscribe({
              next:(response)=>{
            this.products=response.data;
              }
              },)
          }
        })
      }

      addCart(id:string):void{
        this._CartService.addToCart(id).subscribe({
          next:(response)=>{
            console.log(response);
            this._ToastrService.success(response.message,'Fresh Cart');
            
          },
          error:(err)=>{
            console.log(err);
            
          }
        })
      
      }
  }


