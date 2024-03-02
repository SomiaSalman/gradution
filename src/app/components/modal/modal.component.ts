import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Brands } from 'src/app/brands';
import { Brand, Product } from 'src/app/shared/interfaces/product';
import { EcommdataService } from 'src/app/shared/services/ecommdata.service';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent  implements OnInit{
  constructor(private _ActivatedRoute:ActivatedRoute,private _EcommdataService:EcommdataService){}
  // modals:Brands[]=[];
  // prodId:string='';
  modals:Brands={
    name: '',
    image: '',
    _id: '',
    slug: ''
  }
  prodId:any='';


  ngOnInit(): void {
    this._EcommdataService.getmodal(this.modals._id).subscribe({
      next:(response)=>{
        this.modals=response.data;
        // this.prodId=this.modals._id;
        console.log('modal', response);
        console.log(this.prodId);
        
        
      }
    })
  }

}
