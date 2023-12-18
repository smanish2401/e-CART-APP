import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductsService } from '../services/product.service';
import { product } from '../data-types';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent {

  productData : undefined | product
  constructor(private activeRoute:ActivatedRoute,private product:ProductsService) {}

  ngOnInit():void{
    let productId = this.activeRoute.snapshot.paramMap.get('productId')
    //console.warn(productId);
    
    productId && this.product.getProduct(productId).subscribe((data)=>{
     console.warn(data);
    this.productData  = data;
     
    })
  }
}
