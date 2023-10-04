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
  isSpinning = true;
  offers : any[] = [];
  isVisible: boolean = false;
  constructor(){
   this.loadOffers();
  }

  loadOffers(){
    this.appFacades.getOffer().subscribe({
      next : (response : any)=> {
        this.offers = response.body.returnObject;
        this.isSpinning = false;
        console.log(response);
      },
      error : (err)=> {
        this.utilsFacades.errorToastMessage(!!err.error.message ? err.error.message : err.message);
        console.log(err)
        this.isSpinning = false;
      }
    })
  }


  addOffer(event : any) {
    this.isSpinning = true;
    this.appFacades.addOffer(event).subscribe({
      next : (response : any)=> {
        this.utilsFacades.successToastMessage(response.body.message);
        this.loadOffers();
        this.isVisible = false;
        this.isSpinning = false;
      },
      error : (err)=> {
        this.utilsFacades.errorToastMessage(!!err.error.message ? err.error.message : err.message);
        console.log(err)
        this.isVisible = false;
        this.isSpinning = false;
      }
    })
  }


  deleteOffer(id : string){
    this.isSpinning = true;
    this.appFacades.deleteOffer(id).subscribe({
      next : (response : any)=> {
        this.utilsFacades.successToastMessage(response.body.message);
        this.loadOffers();
        this.isSpinning = false;
      },
      error : (err)=> {
        this.utilsFacades.errorToastMessage(!!err.error.message ? err.error.message : err.message);
        console.log(err)
        this.isSpinning = false;
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
