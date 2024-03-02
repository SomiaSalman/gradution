import { Product } from './../../shared/interfaces/product';
import { Component, OnInit } from '@angular/core';
import { AllordersService } from 'src/app/services/allorders.service';

@Component({
  selector: 'app-all-orders',
  templateUrl: './all-orders.component.html',
  styleUrls: ['./all-orders.component.scss']
})
export class AllOrdersComponent implements OnInit{
  private _CartService: any;
  constructor(private _AllordersService:AllordersService){}

  allorders:any={};

  ngOnInit(): void {
    this._CartService.getUserCart().subscribe({
      next:(response: { data: any; })=>{
        console.log(response);
        this.allorders=response.data;
        
      },
    }) 
  }}


