import { CommonModule } from '@angular/common';
import { OnInit, inject } from '@angular/core';
import { Component } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { AppFacade } from 'src/app/core/facades/app.facade';
import { UtilsFacades } from 'src/app/core/facades/utils.facade';
import { defaultModule } from 'src/app/core/helpers/api.loader';
import { NgZoroModule } from 'src/app/modules/ngzoro.module';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.scss'],
  standalone : true,
  imports : [CommonModule, RouterModule,defaultModule,NgZoroModule]
})
export class PaymentComponent implements OnInit {

  private readonly appFacade   = inject(AppFacade);
  private readonly activated   = inject(ActivatedRoute);
  private readonly utilsFacade = inject(UtilsFacades);
  insuranceId !: string ;
  insurance : any;
  enable : boolean = false;
  isAccepted : boolean = false;

  ngOnInit(): void {
    this.activated.params.subscribe((params)=> this.insuranceId = params["id"]);
    this.getInsurance();
  }

  parseInt(number : string) {
    return Number.parseInt(number);
  }

  constructor(){

  }
  getInsurance(){
    this.enable = true;
    this.appFacade.getInsurance(this.insuranceId).subscribe({
      next : (response : any)=>{

        this.enable = false;
        console.log(response.body)
        this.insurance = response.body.returnObject;

        if(!this.insurance){
          this.utilsFacade.errorToastMessage("Ce bon de paiement est invalide");
          return;
        }

        if(!this.insurance.isAcepted) {
          this.isAccepted = false;
        }else{
          this.isAccepted = true;
        }

      },
      error : (error)=>{
        console.log(error)
        this.enable = false;
      }
    });
  }


  close() {
    this.enable = false;
  }

  updateCotation() {
    this.enable = true;
   this.appFacade.validateCotation(this.insuranceId).subscribe({
    next : (response : any)=>{
      this.enable = false;
      console.log(response)
      this.utilsFacade.successToastMessage("Cotation validé");
      this.insurance = response.body.returnObject;
      this.getInsurance();
    },
    error : (error)=>{
      console.log(error)
      this.utilsFacade.errorToastMessage(error);
      this.enable = false;
    }
   })
  }

}
