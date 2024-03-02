import { Component, OnInit } from '@angular/core';
import {  Product } from 'src/app/shared/interfaces/product';
import { EcommdataService } from 'src/app/shared/services/ecommdata.service';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { CartService } from 'src/app/shared/services/cart.service';
import { ToastrService } from 'ngx-toastr';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { Category } from 'src/app/shared/interfaces/category';
import { WishListService } from 'src/app/services/wish-list.service';
// import { CommonModule } from '@angular/common';


@Component({
  // standalone:true,
  // imports:[CommonModule , CarouselModule],
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit{
  constructor(private _EcommdataService:EcommdataService , private _CartService:CartService,private _ToastrService:ToastrService ,private _WishListService:WishListService){}
products:Product[]=[];
categories:Category[]=[];
searchTerm: string = '';
wishListData:string[]=[];


////category option
categoryOptions: OwlOptions = {
    loop: true,
    mouseDrag: false,
    touchDrag: false,
    pullDrag: false,
    dots: false,
    navSpeed: 700,
    navText: ['', ''],
    responsive: {
      0: {
        items: 2
      },
      400: {
        items: 4
      },
      740: {
        items: 4
      },
      940: {
        items: 6
      }
    },
    nav: true
  }
 
//main slider
mainSlider: OwlOptions = {
  loop: true,
  mouseDrag: false,
  touchDrag: false,
  pullDrag: false,
  dots: false,
  navSpeed: 700,
  navText: ['', ''],
  items:1,
  nav: true
}

ngOnInit():void{
  //get All products
  this._EcommdataService.getAllProducts().subscribe({
  next:(response)=>{
  console.log(response);
  this.products=response.data;
  }
    });
//get categeries
// this._EcommdataService.getCategory().subscribe({
//   next:(response)=>{
//     // this.categories=response;
//   }
// })
this._EcommdataService.getCategries().subscribe({
  next:(response)=>{
    // console.log('Categries',response);
    this.categories=response.data;
    
  }
})

this._WishListService.getWishlist().subscribe({
  next:(response)=>{
    let newData=response.data.map((item:any)=>item._id);
    // console.log(newData);
    
    this.wishListData=newData;
  }
})
}
///////add to cart
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


      
    }
  })
}
}
