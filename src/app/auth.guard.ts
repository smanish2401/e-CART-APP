import { CanActivateFn } from '@angular/router';

export const authGuard: CanActivateFn = (route, state) => {
  const seller=localStorage.getItem('seller');
  if(seller){
    return true
  }
  else{
    return false
  }

 
};