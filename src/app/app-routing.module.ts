import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { SellerAuthComponent } from './seller-auth/seller-auth.component';

const routes: Routes = [
  {
    path:'',component:HomeComponent
  },
  
  {
    path:'seller-auth',component:SellerAuthComponent
  },
  
  // {
  //   path:'addproduct',component:AddproductComponent
  // },
  
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
