import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { Router } from '@angular/router';
import { ProductsService } from '../services/product.service';
@Component({
  selector: 'app-seller-add-product',
 
  templateUrl: './seller-add-product.component.html',
  styleUrls: ['./seller-add-product.component.css']
})
export class SellerAddProductComponent {
  addProductMessage: string | undefined;
  constructor(private product: ProductsService,private route:Router) { }

  submit(data: any) {
    this.product.addProduct(data).subscribe((result) => {
      if (result) {
        console.warn(result)
        this.addProductMessage = 'Product is successfully added'
        
        setTimeout(() => {
          this.route.navigate(['seller-home'])
          }, 3000);
        
      }
      setTimeout(() => {
        this.addProductMessage = undefined;
        }, 2000);
      
    })
  }

}

