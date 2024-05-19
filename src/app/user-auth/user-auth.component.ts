import { Component } from '@angular/core';
import { login, signup } from '../data-types';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-user-auth',
  templateUrl: './user-auth.component.html',
  styleUrls: ['./user-auth.component.css']
})
export class UserAuthComponent {
  showLogIn=false
  constructor(private user:UserService) {}
  ngOnInit():void{
    this.user.reloadUser();
  }

  signUp(data:signup){
    this.user.userSignUp(data)
   // console.log("hello manish",data)
   
  }
  logIn(data:login){
    this.user.userLogIn(data)
  }
  openLogin(){
    this.showLogIn = true
  }
  openSignup(){
    this.showLogIn = false
  }
}
