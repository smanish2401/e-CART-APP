import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { SellerAuthComponent } from './seller-auth/seller-auth.component';
import { SellerHomeComponent } from './seller-home/seller-home.component';
import { authGuard } from './auth.guard';
import { SellerAddProductComponent } from './seller-add-product/seller-add-product.component';

import { SellerUpdateProductComponent } from './seller-update-product/seller-update-product.component';

const routes: Routes = [
  {
    component:HomeComponent,
    path:''
  },
 {
  component:SellerAuthComponent,
  path:'seller'
 },
 {
  component:SellerHomeComponent,
  path:'seller-home',
  canActivate:[authGuard]
 },
 {
 component:SellerAddProductComponent,
  path:'seller-add-product',
  canActivate:[authGuard]
 },
 {
  component:SellerUpdateProductComponent,
  path:'seller-update-product/:id',
  canActivate:[authGuard]
 }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
