import { Component } from '@angular/core';
import { ProductsService } from '../services/product.service';
import { product } from '../data-types';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
popularProducts: undefined | product[]
trendyProducts: undefined | product[]
  constructor(private product:ProductsService,
    private spinner: NgxSpinnerService,


  ) {}

  ngOnInit():void{
    this.spinner.show()
    this.product.popularProducts().subscribe((data)=>{
      if(data){
        console.log(`popular products ${data}`)
        this.popularProducts=data
       
      }
    })
    this.product.trendyProducts().subscribe((data)=>{
      if(data){
        this.trendyProducts= data;
        console.log( this.trendyProducts);
        
        setTimeout(() => {
          this.spinner.hide()
        },1000);
      }
    })
  }

}
