import { group } from '@angular/animations';
import { HttpErrorResponse } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormGroup,FormControl,Validators, FormControlOptions} from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {
  
constructor(private _AuthService:AuthService , private _Router:Router){}
errMsg:string=''
isLoding:boolean=false;

  registerForm:FormGroup=new FormGroup({
    name:new FormControl('somia',[Validators.required,Validators.minLength(3),Validators.maxLength(20)]),
    email:new FormControl('',[Validators.required,Validators.email]),
    password:new FormControl('',[Validators.required,Validators.pattern(/^\w{6,}$/)]),
    rePassword:new FormControl(''),
    phone:new FormControl('',[Validators.required,Validators.pattern(/^01[0125][0-9]{8}$/)]),
  },{validators:[this.confirmPassword]} as FormControlOptions)

confirmPassword(group:FormGroup):void{
  let password=group.get('password');
  let repassword=group.get('rePassword');

  if(repassword?.value==''){
    repassword?.setErrors({required:true})
  }
  else if(password?.value!=repassword?.value){
    repassword?.setErrors({mismatch:true})
  }
}

  handleForm():void{
    this.isLoding=true;
    // console.log(this.registerForm.value)
    if(this.registerForm.valid==true){
      // console.log(this.registerForm.value);
      this._AuthService.register(this.registerForm.value).subscribe({
        next:(Response)=>{
          // console.log(Response);
          if(Response.message==='success'){
            //login page
            this._Router.navigate(['/login'])
            this.isLoding=false;

          }
          
        },
        error:(err:HttpErrorResponse)=>{
          // console.log(err);
          this.errMsg=err.error.message;
          this.isLoding=false;

          
        }
      })
      
    }
  }
  }




