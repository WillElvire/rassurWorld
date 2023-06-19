import { Component, inject } from '@angular/core';
import { AppFacade } from 'src/app/core/facades/app.facade';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss']
})
export class IndexComponent {


  private readonly appFacades = inject(AppFacade);
  insuranceRequest : any[] = [];

  constructor(){
    this.loadInsuranceRequest()
  }

  loadInsuranceRequest() {
    this.appFacades.getInsuranceRequest({
      active : "active",
      payed : "unpaid",
      limit : 1
    }).subscribe((response : any)=>{
      console.log(response);
      this.insuranceRequest = response.body.returnObject;

    })
  }
}
