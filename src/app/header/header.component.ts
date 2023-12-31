import { query } from '@angular/animations';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { ProductsService } from '../services/product.service';
import { product } from '../data-types';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  menuType: string = 'default';
  sellerName: string = '';
  userName: string = ''
  icon = faUser;
  searchResult:undefined | product[];
  constructor(private route: Router, private product:ProductsService) { }

  ngOnInit(): void {
    this.route.events.subscribe((val: any) => {
      if (val.url) {
        //console.warn(val.url)
        if (localStorage.getItem('seller') && val.url.includes('seller')) {
          // console.warn('In seller area');
          let sellerStore = localStorage.getItem('seller');
          let sellerData = sellerStore && JSON.parse(sellerStore)[0]
          this.menuType = 'seller';
          this.sellerName = sellerData.name



        }
         else if(localStorage.getItem('users') && val.url.includes('users')){
          let userStore = localStorage.getItem('users');
          let userData = userStore && JSON.parse(userStore)[0];
          this.menuType = 'users';
          this.userName = userData.name
         }
        else {
          this.menuType = 'default'
        }

      }

    })
  }
  logout() {
    localStorage.removeItem('seller')

    this.route.navigate(["/"])
  }
  searchProduct(query:KeyboardEvent){
   if(query){
    const element = query.target as HTMLInputElement;
    this.product.searchProducts(element.value).subscribe((result)=>{
      //console.log(result);
      if(result.length > 5){
        result.length = 5
      }
      this.searchResult = result;
    })
   }
  }
  submitSearch(val:string){
    this.route.navigate([`search/${val}`])
  }
  hideResult(){
    this.searchResult = undefined
  }
  redirectDetails(id:number){
    this.route.navigate(['product-details/' +id])
  }
}


