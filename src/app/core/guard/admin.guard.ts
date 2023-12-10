import { UserQuery } from 'src/app/store/user$/user.query';
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AdminGuard implements CanActivate {

  isLoggedIn : boolean = false;

  constructor(private state : UserQuery,private router : Router) {
    this.state.isLoggedIn$.subscribe((response)=>{

      if(response){
        this.isLoggedIn = true;
        return;
      }
      this.isLoggedIn = false;
      return;

    })
  }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

    if(this.isLoggedIn) {
      return true;
    }
    this.router.navigate(["/auth/login"]);
    return false;


  }



}
