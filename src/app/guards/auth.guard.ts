import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private router: Router) {}
  
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    
      const auth =JSON.parse(localStorage.getItem('auth'));
      if(auth == "master"){
        return true
      }
      else {
        this.router.navigate(['/auth'])
        console.log(auth);
        
        return false
      }
  }
  
}