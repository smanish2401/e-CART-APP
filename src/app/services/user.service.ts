import { Injectable } from '@angular/core';
import { signup } from '../data-types';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class UserService {

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
}
