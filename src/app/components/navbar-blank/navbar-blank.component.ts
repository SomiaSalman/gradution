import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CartService } from 'src/app/shared/services/cart.service';
import {  Product } from 'src/app/shared/interfaces/product';
import { WishListService } from 'src/app/services/wish-list.service';


@Component({
  selector: 'app-navbar-blank',
  templateUrl: './navbar-blank.component.html',
  styleUrls: ['./navbar-blank.component.scss']
})
export class NavbarBlankComponent {
  constructor(private _Router:Router,private _CartService:CartService,private _WishListService:WishListService){}
  cartDetails:any={};
  products:Product[]=[];
  favCount:any={};


  ngOnInit(): void {
    this._CartService.getUserCart().subscribe({
      next:(response)=>{
        // console.log('nav',response);
        this.cartDetails=response.numOfCartItems;
        // console.log(this.cartDetails.numOfCartItems);
        
      },
      error:(err)=>{
        console.log(err);
        
      }
    }) 

    this._WishListService.getWishlist().subscribe({
      next:(response)=>{
        // console.log('nav',response);
        this.favCount=response.count;
        // console.log(this.cartDetails.);
        
      },
      error:(err)=>{
        console.log(err);
        
      }
    }) 
  }

  logoutUser():void{
    //retuen nav to login
    //remove token
    localStorage.removeItem('eToken');
    this._Router.navigate(['/login'])

  }

}
