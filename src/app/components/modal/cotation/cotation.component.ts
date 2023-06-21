import {NzModalService } from 'ng-zorro-antd/modal';
import { Component,inject } from '@angular/core';
import { UtilsFacades } from 'src/app/core/facades/utils.facade';

@Component({
  selector: 'app-cotation',
  templateUrl: './cotation.component.html',
  styleUrls: ['./cotation.component.scss'],
  providers  : [NzModalService]
})
export class CotationComponent {

  amount : number = 0;
  private utils = inject(UtilsFacades);

  constructor(){

  }

  addCotation(){

    if(!this.amount){
      return this.utils.errorToastMessage("Veuillez renseigner la cotation");
    }

  }

}
