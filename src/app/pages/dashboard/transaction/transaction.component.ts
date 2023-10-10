import { Component, inject } from '@angular/core';
import { AppFacade } from 'src/app/core/facades/app.facade';
import { UtilsFacades } from 'src/app/core/facades/utils.facade';

@Component({
  selector: 'app-transaction',
  templateUrl: './transaction.component.html',
  styleUrls: ['./transaction.component.scss']
})
export class TransactionComponent {

  public readonly appFacade = inject(AppFacade);
  public readonly utilisFacades = inject(UtilsFacades);
  transactions: any[] = [];
  p = 1;
  isLoaded : boolean = true;
  constructor(){
   this.getRequest();
  }
  getRequest(){
   this.appFacade.getRequest().subscribe({
    next : (response)=>{
      console.log(response)
      const body = response.body as any;
      this.transactions = body.returnObject;
      this.isLoaded = false;
    },
    error : (err)=>{
      console.log(err)
      this.isLoaded = false;
    }
   })
  }

  confirmRequest(id: string,amount : string , userId : string) {
   this.isLoaded = true;
   this.appFacade.confirmRequest({id , amount , userId }).subscribe({
    next : (response)=>{
      console.log(response)
      const body = response.body as any;
      //this.transactions = body.returnObject;
      this.utilisFacades.successToastMessage(body.message);
      this.getRequest();

    },
    error : (err)=>{
      this.utilisFacades.errorToastMessage(!!err.error.message ? err.error.message : err.message);
      this.isLoaded = false;
    }
   })
  }
}
