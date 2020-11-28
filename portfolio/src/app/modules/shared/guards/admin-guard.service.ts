import { AuthService } from './../services/auth.service';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';
import { Injectable } from '@angular/core';
import { state } from '@angular/animations';
@Injectable({
  providedIn: 'root'
})
export class AdminGuardService implements CanActivate {

  constructor(private authService:AuthService, private router:Router ) {


  }
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot){

    if(this.authService.isAdmin()!==true){
      this.router.navigate(['/login'], {queryParams:{returnUrl:state.url}});
      return false;
    }
    return true;
  }
}
