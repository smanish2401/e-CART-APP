import { query } from '@angular/animations';
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductsService } from '../services/product.service';
import { product } from '../data-types';

@Component({
  selector: 'app-search-product',
  templateUrl: './search-product.component.html',
  styleUrls: ['./search-product.component.css']
})
export class SearchProductComponent {
searchResult:undefined | product[]
  constructor(private activateRoute:ActivatedRoute, private product:ProductsService) {}

  ngOnInit():void{
    let query = this.activateRoute.snapshot.paramMap.get('query');
    //console.log(query);
    query && this.product.searchProducts(query).subscribe((result)=>{
      console.warn(result)
      this.searchResult = result;
    })
  }
}
