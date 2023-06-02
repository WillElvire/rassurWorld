import { CommonModule } from '@angular/common';
import { OnInit, inject } from '@angular/core';
import { Component } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { AppFacade } from 'src/app/core/facades/app.facade';
import { defaultModule } from 'src/app/core/helpers/api.loader';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.scss'],
  standalone : true,
  imports : [CommonModule, RouterModule,defaultModule]
})
export class PaymentComponent implements OnInit {

  private readonly appFacade = inject(AppFacade);
  private readonly activated = inject(ActivatedRoute);

  insuranceId !: string ;
  insurance : any;
  enable : boolean = false;

  ngOnInit(): void {
    this.activated.params.subscribe((params)=> this.insuranceId = params["id"]);
    this.getInsurance();
  }
  getInsurance(){
    this.enable = true;
    this.appFacade.getInsurance(this.insuranceId).subscribe({
      next : (response : any)=>{
        this.enable = false;
        console.log(response.body)
        this.insurance = response.body.returnObject;
      },
      error : (error)=>{
        console.log(error)
        this.enable = false;
      }
    });
  }

}
