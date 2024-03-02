import { Component, OnInit } from '@angular/core';
import { Brands } from 'src/app/brands';
import { Brand, Product } from 'src/app/shared/interfaces/product';
import { EcommdataService } from 'src/app/shared/services/ecommdata.service';
// import { ModalComponent } from '../modal/modal.component';

@Component({
  selector: 'app-brands',
  templateUrl: './brands.component.html',
  styleUrls: ['./brands.component.scss']
})
export class BrandsComponent implements OnInit{
  constructor(private _EcommdataService:EcommdataService){}
  brands:Brands[]=[];

  ngOnInit(): void {
    this._EcommdataService.getbrands().subscribe({
      next:(response)=>{
        this.brands=response.data;
        console.log('brand', response);
        
      }
    })
  }

}
