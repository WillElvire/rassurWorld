import { RoleDto } from './../../../../../backend/src/app/modules/roles/dto/role.dto';


import { UserQuery } from 'src/app/store/user$/user.query';
import { StatesFacades } from './../facades/state.facade';
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RoleGuard implements CanActivate {


  userRole !: RoleDto;

  constructor(private state : UserQuery,private router : Router) {
    this.loadUserRole();
  }


  loadUserRole() {
    this.userRole = this.state.fullUser?.role;
  }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

    if(this.userRole.libelle.includes("admin")) {
      this.router.navigate(["/admin/index"]);
      return true;
    }else{
      this.router.navigate(["/admin/detail"]);
      return true;
    }

  }



}
