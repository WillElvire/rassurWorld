import { Injectable, inject } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, Router, RouterStateSnapshot } from '@angular/router';

@Injectable({
  providedIn  : 'root'
})
export class OnBoardResolver implements Resolve<any> {

  private  readonly router = inject(Router);

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot){
    const routerExtrasData : any = this.router.getCurrentNavigation()?.extras.state;
    if(!!routerExtrasData?.type && ["agent","customer"].includes(routerExtrasData?.type)) {
      return routerExtrasData;
    }
    return this.router.navigate(["/login-onboard"]);
  }

}
