import { Component } from '@angular/core';
import { SellerService } from '../services/seller.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-seller-auth',
  templateUrl: './seller-auth.component.html',
  styleUrls: ['./seller-auth.component.css']
})
export class SellerAuthComponent {

  showLogIn = false
  constructor(private seller: SellerService, private route: Router) { }

  ngOnInit(): void {
    this.seller.reloadSeller()
  }

  signUp(data: any) {
    this.seller.userSignUp(data)
    //console.log("data",data)

  }
  logIn(data: any) {
    this.seller.userLogIn(data)
  }
  openLogin() {
    this.showLogIn = true
  }
  openSignup() {
    this.showLogIn = false
  }
}

