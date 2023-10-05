import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { AppFacade } from 'src/app/core/facades/app.facade';
import { UtilsFacades } from 'src/app/core/facades/utils.facade';

@Component({
  selector: 'app-role',
  templateUrl: './role.component.html',
  styleUrls: ['./role.component.scss']
})
export class RoleComponent {
  p: number = 1;
  private readonly appFacades = inject(AppFacade);
  private readonly router      = inject(Router);
  private readonly utilsFacade = inject(UtilsFacades);

  roles : any[] = [];
  isSpinning : boolean = true;
  constructor(){
   this.loadRoles();
  }

  loadRoles(){
    this.appFacades.getRoles().subscribe({
      next : (response : any)=> {
        this.roles = response.body.returnObject;
        this.isSpinning = false;
        console.log(response);
      },
      error : (err)=> {
        this.isSpinning = false;
        if(err.status === 401) {
          this.utilsFacade.errorToastMessage("Veuillez vous reconnecter");
          this.router.navigate(["/auth/login"])
        }
      }
    })
  }
}
