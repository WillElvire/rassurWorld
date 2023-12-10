import { UtilsFacades } from './../../../core/facades/utils.facade';
import { Component, EventEmitter, Input, Output, inject } from '@angular/core';

@Component({
  selector: 'app-withdrall',
  templateUrl: './withdrall.component.html',
  styleUrls: ['./withdrall.component.scss']
})
export class WithdrallComponent {
  @Output() amount = new EventEmitter<number>();
  @Input() balance : number = 0;
  price = 0;
  private readonly utils = inject(UtilsFacades);
  ConfirmRequest() {
    if(!this.price){
      return this.utils.errorToastMessage("Veuillez renseigner les champs");
    }
    this.amount.emit(this.price);
  }
}
