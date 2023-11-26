import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { faUser } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
menuType:string='default';
sellerName:string=''
icon=faUser
  constructor( private route:Router) {}

  ngOnInit():void{
this.route.events.subscribe((val:any)=>{
  if(val.url){
    //console.warn(val.url)
    if(localStorage.getItem('seller') && val.url.includes('seller')){
     // console.warn('In seller area');
     let sellerStore=localStorage.getItem('seller');
     let sellerData=sellerStore && JSON.parse(sellerStore)[0]
     this.menuType='seller';
     this.sellerName=sellerData.name
      
      
      
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



