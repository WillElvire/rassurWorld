import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { AppFacade } from 'src/app/core/facades/app.facade';
import { UtilsFacades } from 'src/app/core/facades/utils.facade';

@Component({
  selector: 'app-assurance',
  templateUrl: './assurance.component.html',
  styleUrls: ['./assurance.component.scss']
})
export class AssuranceComponent {

  private readonly appFacades  = inject(AppFacade);
  private readonly router      = inject(Router);
  private readonly utilsFacade = inject(UtilsFacades);
  insuranceRequest : any[] = [];
  p: number = 1;
  constructor(){
    this.loadInsuranceRequest()
  }

  loadInsuranceRequest() {
    this.appFacades.getInsuranceRequest({
      //active : "active",
      //payed : "unpaid",
      //limit : 2
    }).subscribe((response : any)=>{
      console.log(response);
      this.insuranceRequest = response.body.returnObject;
    },(error)=> {
      if(error.status === 401) {
        this.utilsFacade.errorToastMessage("Veuillez vous reconnecter");
        this.router.navigate(["/auth/login"])
      }
    })
  }
}
