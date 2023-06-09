import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { AppFacade } from 'src/app/core/facades/app.facade';
import { UtilsFacades } from 'src/app/core/facades/utils.facade';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss']
})
export class IndexComponent {


  private readonly appFacades  = inject(AppFacade);
  private readonly router      = inject(Router);
  private readonly utilsFacade = inject(UtilsFacades);
  insuranceRequest : any[] = [];
  stats :any;

  constructor(){
    this.loadStatistics();

  }

  loadInsuranceRequest() {
    const params = {active : "active",payed : "unpaid",limit : 2}
    this.appFacades.getInsuranceRequest(params).subscribe((response : any)=>{
      console.log(response);
      this.insuranceRequest = response.body.returnObject;
    },(error)=> {
      if(error.status === 401) {
        this.utilsFacade.errorToastMessage("Veuillez vous reconnecter");
        this.router.navigate(["/auth/login"])
      }
    })
  }

  loadStatistics() {
    this.appFacades.getStatistics().subscribe({
      next : (response : any)=>{
        this.stats = response.body.returnObject;
        console.log(this.stats);
        this.loadInsuranceRequest();
      },
      error : (err)=>{
        if(err.status === 401) {
          this.utilsFacade.errorToastMessage("Veuillez vous reconnecter");
          this.router.navigate(["/auth/login"])
        }
      }
    })
  }
}
