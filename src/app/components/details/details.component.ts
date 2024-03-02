import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from 'src/app/shared/interfaces/product';
import { EcommdataService } from 'src/app/shared/services/ecommdata.service';
import { OwlOptions } from 'ngx-owl-carousel-o';


@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit{
constructor(private _ActivatedRoute:ActivatedRoute, private _EcommdataService:EcommdataService){}
//////product slider
productSlider: OwlOptions = {
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

productDetails:Product={}as Product;
ngOnInit():void{
  this._ActivatedRoute.paramMap.subscribe({
    next:(params)=>{
      let idProduct:any=params.get('id');
      console.log(idProduct)

      //call api and get idproduct
      this._EcommdataService.getProductDetails(idProduct).subscribe({
        next:(Response)=>{
          this.productDetails=Response.data;
          console.log(Response.data);
          
        }
      });
      
    },
  })
}

}
