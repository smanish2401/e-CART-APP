import { HttpClient } from '@angular/common/http';
import { EventEmitter, Injectable } from '@angular/core';
import { product } from '../data-types';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  cartData= new EventEmitter<product[] | []>()
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
  getProduct(id:string){
    return this.http.get<product>(`http://localhost:3000/new-products/${id}`)
  }
  updateProduct(product:product){
    return this.http.put<product>(`http://localhost:3000/new-products/${product.id}`,product)
  }
  popularProducts(){
    return this.http.get<product[]>('http://localhost:3000/new-products?_limit=3')
  }
  trendyProducts(){
    return this.http.get<product[]>('http://localhost:3000/new-products')
  }
  searchProducts(query:string){
    return this.http.get<product[]>(`http://localhost:3000/new-products?q=${query}`)
  }
  localAddToCart(data:product){
    let cartData = [];
    let localCart = localStorage.getItem('localCart');
    if(!localCart){
      localStorage.setItem('locaCart',JSON.stringify([data]))
      this.cartData.emit([data]);
      console.log(data)
    }
    else{
      cartData = JSON.parse(localCart);
      cartData.push(data);
      localStorage.setItem('localCart',JSON.stringify(cartData));
      this.cartData.emit(cartData)
    }
  }
}
