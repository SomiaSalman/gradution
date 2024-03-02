import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Component } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
    constructor(private _AuthService:AuthService,private _Router:Router){}
    errMsg:string=''
    isLoding:boolean=false;
    loginForm:FormGroup=new FormGroup({
      email:new FormControl('',[Validators.required,Validators.email]),
      password:new FormControl('',[Validators.required,Validators.pattern(/^\w{6,}$/)])
    })

    handleForm():void{
      this.isLoding=true;
      if(this.loginForm.valid==true){
        this._AuthService.login(this.loginForm.value).subscribe({
          next:(Response)=>{
            if(Response.message=='success'){
              this.isLoding=false;

              localStorage.setItem('eToken',Response.token);
              // console.log(Response);
              this._AuthService.saveUserData();
              

              this._Router.navigate(['/home'])
            }
          },
          error:(err)=>{
            this.errMsg=err.error.message;
            this.isLoding=false;

          }
        })
      }
    }

}
