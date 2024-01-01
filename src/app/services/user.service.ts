import { Injectable } from '@angular/core';
import { login, signup } from '../data-types';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
isUserLoggedIn= new BehaviorSubject<boolean>(false)
  constructor(private http:HttpClient , private route:Router) { }

  userSignUp(data:signup){
    this.http.post('http://localhost:3000/users',data , {observe:'response'}).subscribe((result:any)=>{
      if(result){
        console.log(result);
        localStorage.setItem('users',JSON.stringify(result.body))
        this.route.navigate(['/'])
      }
    })
  }

  userLogIn(data:login){
    this.http.get<login[]>(`http://localhost:3000/users?email=${data.email}&password=${data.password}`,{observe:'response'}).subscribe((result:any)=>{
      if(result &&  result.body?.length){

       // console.log(result)
       localStorage.setItem('users',JSON.stringify(result.body[0]));
       this.route.navigate(['/'])
      }else{
        console.warn('logIn failed')
      }
    })
  }
  reloadUser(){
    if(localStorage.getItem('users')){
      this.isUserLoggedIn.next(true);
      this.route.navigate(['/'])
    }
  }
}
