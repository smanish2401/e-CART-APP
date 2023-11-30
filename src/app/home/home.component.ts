import { Component } from '@angular/core';
import { ProductsService } from '../services/product.service';
import { product } from '../data-types';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
popularProducts: undefined | product[]
  constructor(private product:ProductsService) {}

  ngOnInit():void{

    this.product.popularProducts().subscribe((data)=>{
      if(data){
        console.log(`popular products ${data}`)
        this.popularProducts=data
      }
    })
  }

}
