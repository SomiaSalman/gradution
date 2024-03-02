import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EcommdataService } from '../shared/services/ecommdata.service';
import { Category } from '../shared/interfaces/category';

@Component({
  selector: 'app-category-details',
  templateUrl: './category-details.component.html',
  styleUrls: ['./category-details.component.scss']
})
export class CategoryDetailsComponent implements OnInit {
  constructor(private _ActivatedRoute:ActivatedRoute,private _EcommdataService:EcommdataService){}
  categoryId:string|null='';
  categorydetails:Category={
    name: '',
    image: ''
  }

  ngOnInit(): void {
    this._ActivatedRoute.paramMap.subscribe({
      next:(params)=>{
        this.categoryId=params.get('id')
      }
    })

    this._EcommdataService.getCategrydetails(this.categoryId).subscribe({
      next:(response)=>{
        console.log(response);
        this.categorydetails=response.data;
        
      }
    })
    
  }

}
