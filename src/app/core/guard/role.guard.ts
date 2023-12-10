
import { UserQuery } from 'src/app/store/user$/user.query';
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { RoleDto } from '../interfaces/dto';
import { RoleTypes } from '../enums/roles.enum';

@Injectable({
  providedIn: 'root'
})
export class RoleGuard implements CanActivate {


  userRole !: any;

  constructor(private state : UserQuery,private router : Router) {
    this.loadUserRole();
  }


  loadUserRole() {
    this.userRole = this.state.fullUser?.role;
  }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

      console.log(this.userRole)
    if( this.userRole.libelle == RoleTypes.ADMIN ) {
      this.router.navigate(["/admin/index"]);
      return true;
    }
    if( this.userRole.libelle == RoleTypes.APPORTEUR )
    {
      this.router.navigate(["/admin/commission"]);
      return true;
    }

    this.router.navigate(["/auth/login"]);
    return false;

  }



}
