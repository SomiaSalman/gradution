import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ForgotPassService } from '../services/forgot-pass.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-forget-password',
  templateUrl: './forget-password.component.html',
  styleUrls: ['./forget-password.component.scss']
})
export class ForgetPasswordComponent {
  constructor(private _ForgotPassService:ForgotPassService,private _Router:Router){}

step1:boolean=true;
step2:boolean=false;
step3:boolean=false;
email:string='';
userMsg:string='';
//////
forgetForm:FormGroup=new FormGroup({
  email:new FormControl('',[Validators.required,Validators.email])
});
////////
resetCodeForm:FormGroup=new FormGroup({
  resetcode:new FormControl('',[Validators.required])
})
///////////
resetPasswordForm:FormGroup=new FormGroup({
  newPassword:new FormControl('',[Validators.required,Validators.pattern(/^\w{6,}$/)])
})


forgotPassword():void{
  let userEmail=this.forgetForm.value;
  this.email=userEmail.email;
  this._ForgotPassService.forgotPassword(userEmail).subscribe({
    next:(respnse)=>{
      // console.log(respnse);
      this.userMsg=respnse.message;
      this.step1=false;
      this.step2=true;
      
    },
    error:(err)=>{
      this.userMsg=err.error.message
    }
  })
}
//////////////////////////////
resetCode():void{
  let resetcode=this.resetCodeForm.value
  this._ForgotPassService.resetCode(resetcode).subscribe({
    next:(response)=>{
      // console.log(response);
      this.userMsg=response.message;
      this.step2=false;
      this.step3=true;
      
    },
    error:(err)=>{
      this.userMsg=err.error.message
    }
  })
}
////////////////////////////////////////////
newPassword():void{
  let newpass=this.resetPasswordForm.value;
  
  this._ForgotPassService.newPassword(newpass).subscribe({

    next:(response)=>{
      if(response.token){
        localStorage.setItem('eToken',response.token);
        this._Router.navigate(['/home'])
      }
      // console.log(response);
      // this.userMsg=response.message;
      // this.step1=false;
      // this.step2= ;
      
    },
    error:(err)=>{
      this.userMsg=err.error.message
    }
  })
}

}
