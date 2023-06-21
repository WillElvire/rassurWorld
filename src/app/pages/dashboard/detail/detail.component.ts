import { AppFacade } from 'src/app/core/facades/app.facade';
import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { UtilsFacades } from 'src/app/core/facades/utils.facade';
import { CotationComponent } from 'src/app/components/modal/cotation/cotation.component';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent {

  private readonly activatedRoute = inject(ActivatedRoute);
  private readonly appFacade      = inject(AppFacade);
  private readonly utilsFacade    = inject(UtilsFacades);
  private readonly location       = inject(Location);
  id ?: string ;
  insuranceDto : any;

  constructor(){
    this.activatedRoute.params.subscribe((params : any)=>{
      this.loadRequestDetail(params.id);
    })
  }

  goBack() {
   this.location.back();
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

  addCotation(){
   this.utilsFacade.modal.defineComponent(CotationComponent)
   .defineTitle("Ajouter une cotation")
   .display();
  }

}
