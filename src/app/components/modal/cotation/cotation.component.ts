import {NzModalService } from 'ng-zorro-antd/modal';
import { Component,EventEmitter,Input,Output,inject } from '@angular/core';
import { UtilsFacades } from 'src/app/core/facades/utils.facade';

@Component({
  selector: 'app-cotation',
  templateUrl: './cotation.component.html',
  styleUrls: ['./cotation.component.scss'],
  providers  : [NzModalService]
})
export class CotationComponent {

  @Output() cotation  = new EventEmitter();


  fees  = {
    total_net : 0,
    total : 0,
    fees : 0,
    primeApporteur : 0
  }
  private utils = inject(UtilsFacades);

  constructor(){

  }

  addCotation(){
    if(!this.fees.total || !this.fees.total_net){
      return this.utils.errorToastMessage("Veuillez renseigner la cotation");
    }
    this.cotation.emit(this.fees);
    return;
  }

}
