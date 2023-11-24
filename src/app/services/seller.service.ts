import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { login, signup } from '../data-types';

@Injectable({
  providedIn: 'root'
})
export class SellerService {
  isSellerLoggedIn=new BehaviorSubject<boolean>(false)

  constructor(private http: HttpClient, private route: Router) { }
  userSignUp(data:signup) {

    this.http.post("http://localhost:3000/seller",data, { observe: 'response' }).subscribe((result: any) => {
      if (result) {
        console.log('result');
        localStorage.setItem('seller', JSON.stringify(result.body));
        this.route.navigate(['seller-home'])

      }

    })

  }
  userLogIn(data:login) {
    this.http.get(`http://localhost:3000/seller?email=${data.email}&password=${data.password}`, { observe: 'response' }).subscribe((result: any) => {
      console.log(result);
      if (result && result.body && result.body.length) {

        console.log('user loggedIn')
        localStorage.setItem('seller', JSON.stringify(result.body))
        this.route.navigate(['seller-home'])
      }
      else {
        console.warn("user login failed");
        
      }
    })


  }
  reloadSeller(){
    if(localStorage.getItem('seller')){
      this.isSellerLoggedIn.next(true);
      this.route.navigate(['seller-home'])
    }

  }
}
