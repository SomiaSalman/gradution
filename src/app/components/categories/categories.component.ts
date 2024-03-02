import { Component, OnInit } from '@angular/core';
import { Category } from 'src/app/shared/interfaces/category';
import { EcommdataService } from 'src/app/shared/services/ecommdata.service';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss']
})
export class CategoriesComponent implements OnInit {
constructor(private _EcommdataService:EcommdataService){}
categories:Category[]=[];

ngOnInit(): void {
  this._EcommdataService.getCategries().subscribe({
    next:(response)=>{
      this.categories=response.data;
    }
  })
}

  // const newLocal = this;
  // this._EcommdataService.getCategries().subscribe({
  //   next:(response)=>{
  //     // console.log('Categries',response);
  //     this.categories=response.data;
      
  //   }
  // })

}
