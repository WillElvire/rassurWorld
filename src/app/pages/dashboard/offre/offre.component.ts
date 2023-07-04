import { Component, inject } from '@angular/core';
import { AppFacade } from 'src/app/core/facades/app.facade';
import { UtilsFacades } from 'src/app/core/facades/utils.facade';

@Component({
  selector: 'app-offre',
  templateUrl: './offre.component.html',
  styleUrls: ['./offre.component.scss']
})
export class OffreComponent {

  p: number = 1;
  private readonly appFacades   = inject(AppFacade);
  private readonly utilsFacades = inject(UtilsFacades);

  offers : any[] = [];
  isVisible: boolean = false;
  constructor(){
   this.loadOffers();
  }

  loadOffers(){
    this.appFacades.getOffer().subscribe({
      next : (response : any)=> {
        this.offers = response.body.returnObject;
        console.log(response);
      },
      error : (err)=> {
        this.utilsFacades.errorToastMessage(!!err.error.message ? err.error.message : err.message);
        console.log(err)
      }
    })
  }


  addOffer(event : any) {
    this.appFacades.addOffer(event).subscribe({
      next : (response : any)=> {
        this.utilsFacades.successToastMessage(response.body.message);
        this.loadOffers();
      },
      error : (err)=> {
        this.utilsFacades.errorToastMessage(!!err.error.message ? err.error.message : err.message);
        console.log(err)
      }
    })
  }


  deleteOffer(id : string){
    this.appFacades.deleteOffer(id).subscribe({
      next : (response : any)=> {
        this.utilsFacades.successToastMessage(response.body.message);
        this.loadOffers();
      },
      error : (err)=> {
        this.utilsFacades.errorToastMessage(!!err.error.message ? err.error.message : err.message);
        console.log(err)
      }
    })
  }


  handleOk(): void {
    this.isVisible = false;

  }

  handleCancel(): void {
    this.isVisible = false;
  }

}
