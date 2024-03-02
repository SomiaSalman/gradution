import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ProductesComponent } from './components/productes/productes.component';
import { CartComponent } from './components/cart/cart.component';
import { CategoriesComponent } from './components/categories/categories.component';
import { BrandsComponent } from './components/brands/brands.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { NotfoundComponent } from './components/notfound/notfound.component';
import { AuthLayoutComponent } from './layouts/auth-layout/auth-layout.component';
import { BlankLayoutComponent } from './layouts/blank-layout/blank-layout.component';
import { authGuard } from './shared/guards/auth.guard';
import { DetailsComponent } from './components/details/details.component';
import { CheckoutComponent } from './components/checkout/checkout.component';
import { AllOrdersComponent } from './components/all-orders/all-orders.component';
import { ForgetPasswordComponent } from './forget-password/forget-password.component';
import { WishListComponent } from './components/wish-list/wish-list.component';
import { CategoryDetailsComponent } from './category-details/category-details.component';
import { ModalComponent } from './components/modal/modal.component';

const routes: Routes = [

//blank layout
{path:'',
canActivate:[authGuard],
component:BlankLayoutComponent,children:[
  {path:'',redirectTo:'home',pathMatch:'full'},
  {path:'home',component:HomeComponent,title:'Home'},
  {path:'cart',component:CartComponent,title:'Cart'},
  {path:'products',component:ProductesComponent,title:'Products'},
  {path:'categories',component:CategoriesComponent,title:'categories'},
  {path:'categorydetails/:id',component:CategoryDetailsComponent,title:'categorydetails'},
  {path:'wishlist',component:WishListComponent,title:'WishList'},
  {path:'modal/:id',component:ModalComponent},
  {path:'details/:id',component:DetailsComponent,title:'Details'},
  {path:'brands',component:BrandsComponent,title:'Brands'},
  {path:'checkout/:id',component:CheckoutComponent},
  {path:'allorders',component:AllOrdersComponent ,title:'AllOrders'},
  {path:'forgetpassword',component:ForgetPasswordComponent, title:'ForgotPassword'},

]},
 
//auth layout
{path:'',
component:AuthLayoutComponent,children:[
  {path:'login',component:LoginComponent},
  {path:'register',component:RegisterComponent},
  {path:'forgetpass',component:ForgetPasswordComponent, title:'ForgotPassword'},

]},


  {path:'**',component:NotfoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
