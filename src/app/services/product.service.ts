import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { product } from '../data-types';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private http:HttpClient) { }

  addProduct(data:product){
    return this.http.post('http://localhost:3000/new-products',data)
  }
  productList(){
    return this.http.get<product[]>('http://localhost:3000/new-products')
  }
  deleteProduct(id:number){
    return this.http.delete(`http://localhost:3000/new-products/${id}`)
  }
}