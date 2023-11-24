import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
menuType:string='default';
  constructor( private route:Router) {}

  ngOnInit():void{
this.route.events.subscribe((val:any)=>{
  if(val.url){
    //console.warn(val.url)
    if(localStorage.getItem('seller') && val.url.includes('seller')){
     // console.warn('In seller area');
      this.menuType='seller'
    }
    else{
      this.menuType='default'
    }

  }

})
  }
  logout(){
   localStorage.removeItem('seller')
    
    this.route.navigate(["/"])
    }
  }



