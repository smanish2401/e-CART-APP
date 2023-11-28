import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductsService } from '../services/product.service';
import { product } from '../data-types';


@Component({
  selector: 'app-seller-update-product',
  templateUrl: './seller-update-product.component.html',
  styleUrls: ['./seller-update-product.component.css']
})
export class SellerUpdateProductComponent {
  productData: undefined | product

  constructor(private route: ActivatedRoute, private product: ProductsService, private router: Router) { }

  ngOnInit(): void {
    let ProductId = this.route.snapshot.paramMap.get('id');
    console.warn(ProductId);
    ProductId &&
      this.product.getProduct(ProductId).subscribe((data) => {
        console.warn("result", data)
        this.productData = data

      })

  }
  update(data: product) {
    if (this.productData) {
      data.id = this.productData.id
    }
    this.product.updateProduct(data).subscribe((result) => {
      if (result) {
        alert('Product Updated')
        this.router.navigate(['seller-home'])



      }

    })
  }


}
