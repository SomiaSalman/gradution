import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/shared/services/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit{
constructor(private _CartService:CartService){}

cartDetails:any={};

  ngOnInit(): void {
    this._CartService.getUserCart().subscribe({
      next:(response)=>{
        console.log(response);
        this.cartDetails=response.data;
        
      },
      error:(err)=>{
        console.log(err);
        
      }
    }) 
  }

removeCartItem(id:string):void{
  this._CartService.removeItem(id).subscribe({
    next:(response)=>{
      // console.log(response);  
      this.cartDetails=response.data;
  },

  error:(err)=>{
    console.log(err);
    
  },
  });
}
changeCount(id:string,countProduct:number):void{
  if(countProduct>=1){
    this._CartService.updateCart(id,countProduct).subscribe({
      next:(response)=>{
        // console.log(response);
        this.cartDetails=response.data;
        
      },
  })
  
    // error:(err)=>{
    //   console.log(err);
      
    // }
   }

  

}
}


