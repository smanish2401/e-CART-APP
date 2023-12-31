import { Component } from '@angular/core';
import { signup } from '../data-types';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-user-auth',
  templateUrl: './user-auth.component.html',
  styleUrls: ['./user-auth.component.css']
})
export class UserAuthComponent {
  showLogIn=false
  constructor(private user:UserService) {}

  signUp(data:signup){
    this.user.userSignUp(data)
   
  }
  openLogin(){
    this.showLogIn = true
  }
  openSignup(){
    this.showLogIn = false
  }
}
