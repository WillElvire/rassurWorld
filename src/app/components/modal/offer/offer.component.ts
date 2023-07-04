import { Component, EventEmitter, Output, inject } from '@angular/core';
import { UtilsFacades } from 'src/app/core/facades/utils.facade';

@Component({
  selector: 'app-offer',
  templateUrl: './offer.component.html',
  styleUrls: ['./offer.component.scss']
})
export class OfferComponent {
  @Output() offer  = new EventEmitter();
  private utils = inject(UtilsFacades);

  offerDetail : any = {
    libelle : "",
    description : ""
  }

  addRole() {
    if(!this.offerDetail.libelle || !this.offerDetail.description){
      return this.utils.errorToastMessage("Veuillez renseigner les champs");
    }
    this.offer.emit(this.offerDetail);
    return;
  }
}
