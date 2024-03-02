import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { CartService } from 'src/app/shared/services/cart.service';
import { EcommdataService } from 'src/app/shared/services/ecommdata.service';
import {  Product } from 'src/app/shared/interfaces/product';
import { Category } from 'src/app/shared/interfaces/category';


@Component({
  selector: 'app-productes',
  templateUrl: './productes.component.html',
  styleUrls: ['./productes.component.scss']
})
export class ProductesComponent implements OnInit{
  constructor(private _EcommdataService:EcommdataService , private _CartService:CartService,private _ToastrService:ToastrService){}
  products:Product[]=[];
  categories:Category[]=[];
  searchTerm: string = '';

  ngOnInit():void{
    //get All products
    this._EcommdataService.getAllProducts().subscribe({
    next:(response)=>{
    console.log(response);
    this.products=response.data;
    }
      });
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
