import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

import { product } from '../data-types';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { ProductsService } from '../services/product.service';
import { faEdit, faTrash } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-seller-home',
 
  templateUrl: './seller-home.component.html',
  styleUrls: ['./seller-home.component.css']
 
})
export class SellerHomeComponent {

  productList:undefined | product[]
  deleteMessage:string | undefined
  icon=faTrash
  editIcon=faEdit
constructor( private product:ProductsService) {}

ngOnInit():void{
this.list()
}
list(){
  this.product.productList().subscribe((result)=>{
    this.productList=result;
    console.log(this.productList)
  })
}
deleteProduct(id:number){
  this.product.deleteProduct(id).subscribe((result)=>{
    if(result){
      this.deleteMessage="Product deleted";
      this.list()
    }
    setTimeout(() => {
      this.deleteMessage=undefined
    },2000);
  })
}
}

