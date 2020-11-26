import { ActivatedRouteSnapshot, CanActivate, Router, RouterState, RouterStateSnapshot } from '@angular/router';
import { AuthService } from './../services/auth.service';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate {

  constructor(private auth:AuthService, private router:Router) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot){
    if(this.auth.isLoggedIn()!==true){
      this.router.navigate(['/login'], {queryParams:{returnUrl:state.url}});
      return false;
    }
    return true;

  }
}
