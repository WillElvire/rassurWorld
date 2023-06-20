import { Component, inject } from '@angular/core';
import { AppFacade } from 'src/app/core/facades/app.facade';

@Component({
  selector: 'app-offre',
  templateUrl: './offre.component.html',
  styleUrls: ['./offre.component.scss']
})
export class OffreComponent {

  p: number = 1;
  private readonly appFacades = inject(AppFacade);
  offers : any[] = [];
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
        console.log(err)
      }
    })
  }
}
