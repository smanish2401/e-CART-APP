import { query } from '@angular/animations';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { faUser, faUserCircle, faUsersRectangle } from '@fortawesome/free-solid-svg-icons';
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
  icon2 = faUserCircle;
  cartItems = 0;


  searchResult: undefined | product[];
  constructor(private route: Router, private product: ProductsService) { }

  ngOnInit(): void {
    this.route.events.subscribe((val: any) => {
      if (val.url) {
        //console.warn(val.url)
        if (localStorage.getItem('seller') && val.url.includes('seller')) {
          // console.warn('In seller area');
          if (localStorage.getItem('seller')) {
            let sellerStore = localStorage.getItem('seller');
            let sellerData = sellerStore && JSON.parse(sellerStore)[0];
            this.menuType = 'seller';
            this.sellerName = sellerData.name

          }

        }
        else if (localStorage.getItem('users')) {
          let userStore = localStorage.getItem('users');
          let userData = userStore && JSON.parse(userStore);

          this.menuType = 'users';
          this.userName = userData.name
        }
        else {
          this.menuType = 'default'
        }

      }

    })
    let cartData = localStorage.getItem('localCart');
    if (cartData) {
      this.cartItems = JSON.parse(cartData).length
    }
    this.product.cartData.subscribe((items) => {
      //console.log("item",items)
      this.cartItems = items.length
    })
  }
  logout() {
    localStorage.removeItem('seller')

    this.route.navigate(["/"])
  }
  userlogout() {
    localStorage.removeItem('users');
    this.route.navigate(['/user'])
  }
  searchProduct(query: KeyboardEvent) {
    if (query) {
      const element = query.target as HTMLInputElement;
      this.product.searchProducts(element.value).subscribe((result) => {
        //console.log(result);
        if (result.length > 5) {
          result.length = 5
        }
        this.searchResult = result;
      })
    }
  }
  submitSearch(val: string) {
    this.route.navigate([`search/${val}`])
  }
  hideResult() {
    this.searchResult = undefined
  }
  redirectDetails(id: number) {
    this.route.navigate(['product-details/' + id])
  }
}


