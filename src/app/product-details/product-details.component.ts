import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductsService } from '../services/product.service';
import { cart, product } from '../data-types';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent {

  productQuantity:number=1;
  productData : undefined | product;
  quantity:number=1;
  removeCart= false;
  constructor(private activeRoute:ActivatedRoute,private product:ProductsService) {}

  ngOnInit():void{
    let productId = this.activeRoute.snapshot.paramMap.get('productId')
    //console.warn(productId);
    
    productId && this.product.getProduct(productId).subscribe((data)=>{
     console.warn(data);
    this.productData  = data;
     
    })
  }
  handleQuantity(val:string){
    if(this.productQuantity<20 && val==='plus'){
      this.productQuantity += 1
    }
    else if(this.productQuantity>1 && val==='minus'){
      this.productQuantity -= 1
    }
  }
  AddToCart(){
    if(this.productData){
      this.productData.quantity = this.productQuantity
   
    if(!localStorage.getItem('users')){
      this.product.localAddToCart(this.productData);
      this.removeCart = true;
    }else{
      let user = localStorage.getItem('users');
      let userId = user && JSON.parse(user).id;
      let cartData:cart = {
        ...this.productData,
        userId,
        productId:this.productData.id
      }
      delete cartData.id;
      this.product.addToCart(cartData).subscribe((result)=>{
        console.log(result)
        if(result){
          this.removeCart = true
        }
      })
    }
  }
}
removeToCart(productId:number){
  this.product.removeToLocalCart(productId);
  this.removeCart = false;
}
}
