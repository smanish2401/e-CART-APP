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
trendyProducts: undefined | product[]
isLoading:boolean=false;
  constructor(private product:ProductsService) {}

  ngOnInit():void{
    this.isLoading=true
    this.product.popularProducts().subscribe((data)=>{
      if(data){
        console.log(`popular products ${data}`)
        this.popularProducts=data
       
      }
    })
    this.product.trendyProducts().subscribe((data)=>{
      if(data){
        this.trendyProducts= data;
        setTimeout(() => {
          this.isLoading=false
        },1000);
      }
    })
  }

}
