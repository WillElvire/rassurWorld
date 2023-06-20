import { AppFacade } from 'src/app/core/facades/app.facade';
import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent {

  private readonly activatedRoute = inject(ActivatedRoute);
  private readonly appFacade      = inject(AppFacade);
  id ?: string ;
  insuranceDto : any;

  constructor(){
    this.activatedRoute.params.subscribe((params : any)=>{
      this.loadRequestDetail(params.id);
    })
  }


  loadRequestDetail(id : string) {
     this.appFacade.getInsurance(id as string).subscribe({
      next : (response :any)=>{
       console.log(response)
       this.insuranceDto = response.body.returnObject;
      },
      error : (err)=> {
         console.log(err)
      }
     })
  }

}
